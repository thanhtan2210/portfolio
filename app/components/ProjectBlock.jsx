import React from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import StatTiles from './StatTiles'

const buttonClass = 'inline-flex items-center gap-2 px-6 py-2 border border-black rounded-full text-sm bg-white text-black shadow-[2px_2px_0_#000] hover:bg-lime-300 transition duration-300 dark:border-white dark:shadow-[2px_2px_0_#fff]'

export const ProjectButton = ({ href, children, external = true }) => (
    external
        ? <a href={href} target='_blank' rel='noopener noreferrer' className={buttonClass}>{children}</a>
        : <Link href={href} className={buttonClass}>{children}</Link>
)

export const TechChips = ({ technologies, className = '' }) => (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
        {technologies.map((tech) => (
            <li key={tech} className='px-3 py-1 border border-gray-400 rounded-full text-sm leading-6 dark:border-white/50 dark:text-white/90'>
                {tech}
            </li>
        ))}
    </ul>
)

const ProjectBlock = ({ project }) => {
    return (
        <motion.article
            id={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='scroll-mt-24 border border-gray-400 rounded-xl p-4 sm:p-8 lg:p-10 dark:border-white/50'>
            <h3 className='text-2xl sm:text-3xl font-semibold leading-tight'>{project.title}</h3>
            <p className='mt-2 text-gray-700 dark:text-white/80'>{project.description}</p>

            <StatTiles stats={project.stats} className='mt-6' />

            <TechChips technologies={project.technologies} className='mt-6' />

            <div className='flex flex-wrap gap-4 mt-8'>
                <ProjectButton href={project.link}>GitHub</ProjectButton>
                {project.demoLink && <ProjectButton href={project.demoLink}>Live demo</ProjectButton>}
                <ProjectButton href={`/work/${project.slug}`} external={false}>Details →</ProjectButton>
            </div>
        </motion.article>
    )
}

export default ProjectBlock
