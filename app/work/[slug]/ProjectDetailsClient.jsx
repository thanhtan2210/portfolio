'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'
import PipelineDiagram from '@/app/components/PipelineDiagram'
import ResultChart from '@/app/components/ResultChart'
import StatTiles from '@/app/components/StatTiles'
import { ProjectButton, TechChips } from '@/app/components/ProjectBlock'

const Section = ({ title, children, className = '' }) => (
    <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`mt-12 ${className}`}
    >
        {title && <h2 className='text-xl font-Ovo dark:text-white mb-4'>{title}</h2>}
        {children}
    </motion.section>
)

const ProjectDetailsClient = ({ project }) => {
    return (
        <div className='px-[12%] py-10 pt-28'>
            <div className='flex flex-wrap items-center gap-x-8 gap-y-2 mb-8'>
                <Link href="/#work" className='flex items-center gap-2 text-gray-700 dark:text-white/80 hover:text-black dark:hover:text-white transition duration-300 w-fit'>
                    <Image src={assets.right_arrow} alt='' className='w-4 rotate-180 dark:invert' />
                    All projects
                </Link>
                <Link href="/" className='text-gray-700 dark:text-white/80 hover:text-black dark:hover:text-white transition duration-300 w-fit'>
                    Home
                </Link>
            </div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='max-w-3xl'
            >
                <h1 className='text-3xl md:text-4xl font-Ovo dark:text-white mb-6'>{project.title}</h1>
                <p className='text-gray-700 dark:text-white/80 leading-relaxed'>{project.longDescription}</p>
            </motion.div>

            <Section title='Pipeline'>
                <PipelineDiagram steps={project.pipeline} />
            </Section>

            <Section>
                <StatTiles stats={project.stats} />
            </Section>

            <Section title='Results'>
                <div className='grid lg:grid-cols-5 gap-8 items-start'>
                    <div className='lg:col-span-3 min-w-0'>
                        <ResultChart chart={project.chart} />
                    </div>
                    <p className='lg:col-span-2 text-gray-700 dark:text-white/80 leading-relaxed'>{project.impact}</p>
                </div>
            </Section>

            <div className='grid md:grid-cols-2 gap-x-12'>
                <Section title='Key Features'>
                    <ul className='list-disc pl-5 space-y-2 text-gray-700 dark:text-white/80 leading-relaxed'>
                        {project.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                        ))}
                    </ul>
                </Section>

                <Section title='Challenges & Learnings'>
                    <p className='text-gray-700 dark:text-white/80 leading-relaxed'>{project.challenges}</p>
                </Section>
            </div>

            <Section title='Technologies'>
                <TechChips technologies={project.technologies} />
            </Section>

            <Section>
                <div className='flex flex-wrap gap-4'>
                    <ProjectButton href={project.link}>GitHub</ProjectButton>
                    {project.demoLink && <ProjectButton href={project.demoLink}>Live demo</ProjectButton>}
                </div>
            </Section>

            <Section>
                <figure>
                    <div className='rounded-xl overflow-hidden border border-gray-400 bg-gray-100 dark:border-white/50 dark:bg-darkHover'>
                        <Image
                            src={project.bgImage}
                            alt={`Screenshot of ${project.title}`}
                            width={0}
                            height={0}
                            sizes='(min-width: 1024px) 76vw, 100vw'
                            className='w-full h-auto max-h-[720px] object-contain'
                        />
                    </div>
                    <figcaption className='mt-2 text-xs text-gray-600 dark:text-white/70'>Screenshot</figcaption>
                </figure>
            </Section>
        </div>
    )
}

export default ProjectDetailsClient
