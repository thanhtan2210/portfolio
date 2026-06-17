'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'

const ProjectDetailsClient = ({ project }) => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='px-[12%] py-10 pt-28'
        >
            {/* Back Button */}
            <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <Link href="/work" className='flex items-center gap-2 text-gray-700 dark:text-white/80 hover:text-black dark:hover:text-white transition duration-300 mb-8 w-fit'>
                    <Image src={assets.right_arrow} alt='' className='w-4 rotate-180 dark:invert' />
                    Back to all projects
                </Link>
            </motion.div>

            <div className='flex flex-col md:flex-row gap-12'>
                {/* Left Side: Info */}
                <div className='flex-1'>
                    <motion.h1 
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className='text-4xl md:text-5xl font-Ovo dark:text-white mb-6'
                    >
                        {project.title}
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className='text-gray-700 dark:text-white/80 mb-8 leading-relaxed'
                    >
                        {project.longDescription}
                    </motion.p>

                    {/* Technologies */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className='mb-8'
                    >
                        <h3 className='text-xl font-Ovo dark:text-white mb-4'>Technologies</h3>
                        <div className='flex flex-wrap gap-2'>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className='px-3 py-1 border border-gray-400 dark:border-white/50 rounded-full text-sm dark:text-white/90'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Features */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.1 }}
                        className='mb-8'
                    >
                        <h3 className='text-xl font-Ovo dark:text-white mb-4'>Key Features</h3>
                        <ul className='list-disc list-inside space-y-2 text-gray-700 dark:text-white/80'>
                            {project.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Results / Impact */}
                    {project.impact && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                            className='mb-8'
                        >
                            <h3 className='text-xl font-Ovo dark:text-white mb-4'>Results / Impact</h3>
                            <p className='text-gray-700 dark:text-white/80 leading-relaxed'>
                                {project.impact}
                            </p>
                        </motion.div>
                    )}

                    {/* Challenges & Learnings */}
                    {project.challenges && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.3 }}
                            className='mb-10'
                        >
                            <h3 className='text-xl font-Ovo dark:text-white mb-4'>Challenges & Learnings</h3>
                            <p className='text-gray-700 dark:text-white/80 leading-relaxed'>
                                {project.challenges}
                            </p>
                        </motion.div>
                    )}

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                        className='flex flex-wrap gap-4'
                    >
                        <a 
                            href={project.link} 
                            target='_blank' 
                            rel='noopener noreferrer'
                            className='inline-flex items-center gap-2 px-8 py-3 border border-black dark:border-white rounded-full hover:bg-black hover:text-white dark:hover:bg-darkHover transition duration-300 dark:text-white font-Ovo'
                        >
                            View on GitHub
                            <Image src={assets.right_arrow_bold} alt='' className='w-4 dark:invert' />
                        </a>

                        {project.demoLink && (
                            <a 
                                href={project.demoLink} 
                                target='_blank' 
                                rel='noopener noreferrer'
                                className='inline-flex items-center gap-2 px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300 font-Ovo'
                            >
                                Live Demo
                                <Image src={assets.right_arrow_bold} alt='' className='w-4 invert dark:invert-0' />
                            </a>
                        )}
                    </motion.div>
                </div>

                {/* Right Side: Image */}
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className='flex-1 relative min-h-[300px] md:min-h-[400px] rounded-2xl overflow-hidden shadow-2xl'
                >
                    <Image 
                        src={project.bgImage} 
                        alt={project.title} 
                        fill
                        className='object-cover'
                    />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default ProjectDetailsClient
