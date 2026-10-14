import Image from 'next/image'
import { assets } from '@/assets/assets'
import React from 'react'

const Footer = ({ isDarkMode }) => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <p className='font-ovo text-2xl mb-2'>Phan Thanh Tan</p>

                <a href="mailto:thanhtanphan011022@gmail.com" className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
                    thanhtanphan011022@gmail.com
                </a>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>© {new Date().getFullYear()} Phan Thanh Tan. All rights reserved</p>
                <ul className='flex flex-wrap items-center gap-x-6 gap-y-2 sm:gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' rel='noopener noreferrer' href="https://github.com/thanhtan2210">Github</a></li>
                    <li><a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/t%E1%BA%A5n-thanh-8906a6261/">LinkedIn</a></li>
                    <li><a target='_blank' rel='noopener noreferrer' href="https://www.facebook.com/thanh.tan.12141">Facebook</a></li>
                    <li><a target='_blank' rel='noopener noreferrer' href="https://www.leetcode.com/thanhtanphan-shaw">LeetCode</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
