import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {

    const [isScrolled, setIsScrolled] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.classList.remove('translate-x-full');
    }

    const closeMenu = () => {
        sideMenuRef.current.classList.add('translate-x-full');
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        })
    }, [])

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt='' className='w-full' />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScrolled ? "bg-white bg-opacity-50 backdrop-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="logo" className="w-32" />

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScrolled ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
                    <li><a href="#top" className="font-Ovo">Home</a></li>
                    <li><a href="#about" className="font-Ovo">About me</a></li>
                    <li><a href="#service" className="font-Ovo">Services</a></li>
                    <li><a href="#work" className="font-Ovo">My Work</a></li>
                    <li><a href="#contact" className="font-Ovo">Contact me</a></li>
                </ul>


                <div className='flex items-center gap-4'>

                    <button onClick={() => { setIsDarkMode(prev => !prev) }}>
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
                    </button>

                    <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50">
                        Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className="w-3" />
                    </a>

                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
                    </button>
                </div>

                {/* Mobile menu*/}

                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>

                    <div className='absolute top-6 right-6' onClick={closeMenu}>
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
                    </div>

                    <li><a onClick={closeMenu} href="#top" className="font-Ovo">Home</a></li>
                    <li><a onClick={closeMenu} href="#about" className="font-Ovo">About me</a></li>
                    <li><a onClick={closeMenu} href="#service" className="font-Ovo">Services</a></li>
                    <li><a onClick={closeMenu} href="#work" className="font-Ovo">My Work</a></li>
                    <li><a onClick={closeMenu} href="#contact" className="font-Ovo">Contact me</a></li>
                </ul>


            </nav>
        </>
    )
}

export default Navbar
