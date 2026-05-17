'use client';

import Image from 'next/image'
import { assets, workData } from '@/assets/assets'
import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'

const WorkCard = ({ project, index }) => {
    return (
        <Link href={`/work/${project.slug}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                style={{ backgroundImage: `url(${project.bgImage})` }}>
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 '>
                    <div>
                        <h2 className='font-semibold'>{project.title}</h2>
                        <p className='text-sm text-gray-700'>{project.description}</p>
                    </div>
                    <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                        <Image src={assets.send_icon} alt='send icon' className='w-5' />
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}

const WorkPage = () => {
    return (
        <div className='w-full px-[12%] py-10 pt-28'>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='text-center text-5xl font-Ovo mb-12'>
                All My Work
            </motion.h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-5 dark:text-black'>
                {workData.map((project, index) => (
                    <WorkCard key={index} project={project} index={index} />
                ))}
            </div>

            <div className='text-center my-20'>
                <Link href="/#work">
                    <span className='flex w-max items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
                        Back to Home
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default WorkPage;
