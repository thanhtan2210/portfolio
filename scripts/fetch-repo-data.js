const fs = require('fs');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Optional: Add to .env to avoid rate limits
const REPOS = [
    'thanhtan2210/Scalable-Customer-Data-Platform-CDP',
    'thanhtan2210/Semtiment_Analysis',
    'thanhtan2210/Sales_Dashboard',
    'thanhtan2210/PowerHub',
    'thanhtan2210/ai-agent-chess',
    'thanhtan2210/hotel-management-system'
];

const IMPORTANT_FILES = [
    'package.json',
    'requirements.txt',
    'pyproject.toml',
    'pom.xml',
    'build.gradle',
    'Gemfile',
    'composer.json',
    'go.mod',
    'Cargo.toml'
];

async function fetchGitHub(url) {
    const headers = {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Node.js-Script'
    };
    if (GITHUB_TOKEN) {
        headers['Authorization'] = `token ${GITHUB_TOKEN}`;
    }

    const response = await fetch(url, { headers });
    if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error(`GitHub API error: ${response.status} ${response.statusText} for ${url}`);
    }
    return response.json();
}

async function fetchRawFile(owner, repo, path, branch = 'main') {
    const url = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${path}`;
    const response = await fetch(url);
    if (!response.ok) return null;
    return response.text();
}

async function getRepoData(fullRepoName) {
    console.log(`Fetching data for ${fullRepoName}...`);
    const [owner, repo] = fullRepoName.split('/');
    
    // 1. Repo Info
    const repoInfo = await fetchGitHub(`https://api.github.com/repos/${owner}/${repo}`);
    if (!repoInfo) return null;

    const defaultBranch = repoInfo.default_branch || 'main';

    // 2. README
    const readmeInfo = await fetchGitHub(`https://api.github.com/repos/${owner}/${repo}/readme`);
    let readmeContent = '';
    if (readmeInfo && readmeInfo.download_url) {
        const readmeRes = await fetch(readmeInfo.download_url);
        readmeContent = await readmeRes.text();
    }

    // 3. Languages
    const languages = await fetchGitHub(`https://api.github.com/repos/${owner}/${repo}/languages`);

    // 4. Topics
    const topics = repoInfo.topics || [];

    // 5. File Structure (Tree)
    const treeData = await fetchGitHub(`https://api.github.com/repos/${owner}/${repo}/git/trees/${defaultBranch}?recursive=1`);
    const fileStructure = treeData ? treeData.tree.map(item => item.path) : [];

    // 6. Important Files
    const importantFilesData = {};
    for (const fileName of IMPORTANT_FILES) {
        // Find if file exists in any directory if needed, but requirements says "find and read"
        // Let's check root first, then look in fileStructure
        const filePath = fileStructure.find(f => f.toLowerCase().endsWith(fileName.toLowerCase()));
        if (filePath) {
            const content = await fetchRawFile(owner, repo, filePath, defaultBranch);
            if (content) {
                importantFilesData[fileName] = content;
            }
        }
    }

    return {
        name: repoInfo.name,
        fullName: repoInfo.full_name,
        description: repoInfo.description,
        url: repoInfo.html_url,
        stars: repoInfo.stargazers_count,
        forks: repoInfo.forks_count,
        languages,
        topics,
        readme: readmeContent,
        fileStructure,
        importantFiles: importantFilesData
    };
}

async function main() {
    const allRepoData = [];
    for (const repo of REPOS) {
        try {
            const data = await getRepoData(repo);
            if (data) allRepoData.push(data);
        } catch (error) {
            console.error(`Error fetching ${repo}:`, error.message);
        }
    }

    fs.writeFileSync('repo-data.json', JSON.stringify(allRepoData, null, 2));
    console.log('Successfully saved data to repo-data.json');
}

main();
