'use client';

import Image from 'next/image';
import { assets } from '@/assets/assets'
import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [result, setResult] = useState("");

    useEffect(() => {
        emailjs.init("s5O64YEgOYt_XEJH-");
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");

        try {
            const formData = {
                to_email: "thanhtanphan011022@gmail.com",
                from_name: event.target.name.value,
                from_email: event.target.email.value,
                message: event.target.message.value,
                source: "Portfolio"
            };

            const response = await emailjs.send(
                "service_fmx67j2",
                "template_cr9b1xl",
                formData
            );

            if (response.status === 200) {
                setResult("✓ Message sent successfully!");
                event.target.reset();
                setTimeout(() => setResult(""), 5000);
            }
        } catch (error) {
            console.error("Error:", error);
            setResult("❌ Failed to send message. Please try again.");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-np-repeat bg-center bg-[length:90%_auto] dark:bg-none '>
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'>
                Connect with me
            </motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'>
                Get in touch
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                I'd love to hear from you! If you have any question, comments, or feedback, please use the form below.
            </motion.p>
            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>

                    <motion.input
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        name='name' type="text" placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' />

                    <motion.input
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        name='email' type="text" placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' />
                </div>
                <motion.textarea
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    name='message' row='6' placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90' >

                </motion.textarea>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'>
                    Submit now <Image src={assets.right_arrow_white} alt='' className='w-4' />
                </motion.button>

                <p className='text-center mt-4 text-sm'>
                    {result}
                </p>
            </motion.form>
        </motion.div>
    )
}

export default Contact
