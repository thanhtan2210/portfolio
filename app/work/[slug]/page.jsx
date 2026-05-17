import { workData } from '@/assets/assets'
import ProjectDetailsClient from './ProjectDetailsClient'
import Link from 'next/link'

export async function generateStaticParams() {
    return workData.map((project) => ({
        slug: project.slug,
    }))
}

const ProjectPage = async ({ params }) => {
    const { slug } = await params;
    const project = workData.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className='px-[12%] py-20 pt-32 text-center'>
                <h1 className='text-3xl font-Ovo'>Project not found</h1>
                <Link href="/work" className='mt-5 inline-block text-blue-500 underline'>Back to all projects</Link>
            </div>
        )
    }

    return <ProjectDetailsClient project={project} />
}

export default ProjectPage
