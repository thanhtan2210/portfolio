import Image from 'next/image'
import { assets } from '@/assets/assets'
import React from 'react'

const Footer = ({ isDarkMode }) => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2' />

                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
                    thanhtanphan011022@gmail.com
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>© 2025 Thanh Tan Phan. All rights reserved</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' href="https://github.com/thanhtan2210">Github</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/t%E1%BA%A5n-thanh-8906a6261/">LinkedIn</a></li>
                    <li><a target='_blank' href="https://www.facebook.com/thanh.tan.12141">Facebook</a></li>
                    <li><a href="https://www.leetcode.com/thanhtanphan-shaw" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" alt="thanhtanphan-shaw" height="20" width="20" /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
