import React from 'react'
import BannerImg from '../assets/Yoga.png'
import { motion } from 'framer-motion'
import { FadeUp } from '../utility/animation'

function About() {
    return (
        <section className='py-14'>
            <div className='container grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>
                <div className='flex flex-col justify-center md:items-start'>
                    <div className='text-center md:text-left space-y-4 lg:max-w-[550px]'>
                        <motion.h1 
                            variants={FadeUp(0.3)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                            className='text-3xl lg:text-5xl font-semibold mb-2'>
                            Tentang Kami
                        </motion.h1>
                        <motion.p 
                            variants={FadeUp(0.6)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                            className='text-lg font-poppins'>
                            Selamat datang di Mental Health Matters, platform yang didedikasikan untuk membantu remaja dan dewasa mengelola kesehatan mental mereka. Kami percaya bahwa setiap orang berhak mendapatkan akses ke sumber daya dan dukungan yang dapat meningkatkan kesejahteraan mereka. Di sini, Anda dapat melakukan tes kesehatan mental, membaca artikel yang bermanfaat, dan menemukan program dukungan yang sesuai dengan kebutuhan Anda.
                        </motion.p>
                        <motion.div
                            variants={FadeUp(0.9)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                            className='flex justify-center md:justify-start'>
                            <button className='primary-button flex items-center gap-2'>
                                Selengkapnya
                            </button>
                        </motion.div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <motion.img 
                        src={BannerImg} 
                        alt="Banner Image"
                        initial={{ opacity:0, scale: 0.5 }}
                        whileInView={{ opacity:1, scale:1}}
                        transition={{ type:"spring", stiffness:100, delay:0.2}}
                        viewport={{once: true}}
                        className='w-full max-w-[500px] h-auto object-cover'
                    />
                </div>
            </div>
        </section>
    )
}

export default About
