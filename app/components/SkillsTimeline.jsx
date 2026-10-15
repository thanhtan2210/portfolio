import React from 'react'
import { motion } from 'motion/react'
import { TechChips } from './ProjectBlock'

// Same groups as the Skills section of the CV; every item is used in one of the projects above.
const skills = [
    { group: 'Languages', items: ['Python', 'SQL', 'TypeScript'] },
    { group: 'Data', items: ['DuckDB', 'pandas', 'Star-schema modelling', 'Parquet', 'SQLite', 'Cloudflare R2'] },
    { group: 'Machine learning', items: ['scikit-learn', 'XGBoost', 'LightGBM', 'Optuna', 'MLflow', 'Bootstrap confidence intervals', 'Conformalized quantile regression'] },
    { group: 'Delivery', items: ['FastAPI', 'Next.js', 'Docker', 'Streamlit', 'GitHub Actions', 'Git'] },
]

const projectLinks = [
    { name: 'NYC taxi demand', slug: 'nyc-taxi-demand-forecasting' },
    { name: 'churn leakage audit', slug: 'automl-churn-prediction' },
    { name: 'movie recommender MLOps', slug: 'movie-recommender-mlops' },
    { name: 'flight prices', slug: 'flight-price-prediction' },
]

const linkClass = 'underline underline-offset-2 hover:text-black dark:hover:text-white'

const timeline = [
    {
        date: '2026',
        title: 'Portfolio projects',
        body: (
            <p>
                {projectLinks.map(({ name, slug }, i) => (
                    <React.Fragment key={slug}>
                        {i > 0 && ', '}
                        <a href={`#${slug}`} className={linkClass}>{name}</a>
                    </React.Fragment>
                ))}
            </p>
        ),
    },
    {
        date: 'May – Jul 2025',
        title: 'Backend Developer Intern, MyTegami.win (remote)',
        body: (
            <ul className='list-disc pl-5 space-y-1'>
                <li>Built the backend AI generation workflow for a bilingual cover-letter platform with Genkit and Gemini 2.0 Flash (TypeScript).</li>
                <li>Defined Zod schemas so that model outputs arrived in a fixed structure the product could use directly.</li>
                <li>Helped ship support for 14 languages and 5 writing tones.</li>
            </ul>
        ),
    },
    {
        date: 'Oct 2022 – Jun 2027 (expected)',
        title: 'HCMUT',
        body: <p>B.Sc. Computer Science, major in Data Engineering and Big Data</p>,
    },
]

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
}

const SkillsTimeline = () => {
    return (
        <div id='skills' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4 {...fadeIn} transition={{ duration: 0.5, delay: 0.3 }} className='text-center mb-2 text-lg font-Ovo'>
                Skills & experience
            </motion.h4>
            <motion.h2 {...fadeIn} transition={{ duration: 0.5, delay: 0.5 }} className='text-center text-5xl font-Ovo'>
                What I work with
            </motion.h2>

            <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 mt-16 mb-10'>
                <motion.section {...fadeIn} transition={{ duration: 0.6 }}>
                    <h3 className='text-2xl font-semibold mb-6'>Skills</h3>
                    <dl className='space-y-6'>
                        {skills.map(({ group, items }) => (
                            <div key={group}>
                                <dt className='font-semibold mb-2 text-gray-700 dark:text-white/90'>{group}</dt>
                                <dd><TechChips technologies={items} /></dd>
                            </div>
                        ))}
                    </dl>
                </motion.section>

                <motion.section {...fadeIn} transition={{ duration: 0.6, delay: 0.2 }}>
                    <h3 className='text-2xl font-semibold mb-6'>Timeline</h3>
                    <ol className='border-l border-gray-400 ml-1.5 dark:border-white/50'>
                        {timeline.map(({ date, title, body }) => (
                            <li key={date} className='relative pl-7 pb-8 last:pb-0'>
                                <span aria-hidden='true' className='absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-black ring-4 ring-white dark:bg-white dark:ring-darkTheme' />
                                <p className='text-sm text-gray-600 dark:text-white/70'>{date}</p>
                                <h4 className='font-semibold mt-1'>{title}</h4>
                                <div className='mt-2 text-gray-700 leading-relaxed dark:text-white/80'>{body}</div>
                            </li>
                        ))}
                    </ol>
                </motion.section>
            </div>
        </div>
    )
}

export default SkillsTimeline
