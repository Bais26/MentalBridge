import React from 'react'
import HeroPng from '../assets/hero.png'
import { motion } from 'framer-motion'
import { FadeRight } from '../utility/animation'
import { FaHeart } from 'react-icons/fa'

function Hero() {
    return (
        <section className='bg-primary/25'>
            <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[600px] relative">
                <div className='flex flex-col justify-center py-14 md:py-0 relative z-10'>
                    <div className='text-center md:text-left space-y-4 lg:max-w-[450px]'>
                        <motion.h1
                            variants={FadeRight(0.6)}
                            initial="hidden"
                            animate="visible"
                            className='text-5xl lg:text-6xl font-medium xl:leading-loose font-itim'>
                            Mentally Healthy                            
                        </motion.h1>
                        <motion.p
                            variants={FadeRight(0.9)}
                            initial="hidden"
                            animate="visible"
                            className='text-2xl tracking-wide'>Mulai Langkah Kecil Menuju Hidup yang Lebih Sehat dan Bahagia</motion.p>
                        <motion.p
                            variants={FadeRight(1.1)}
                            initial="hidden"
                            animate="visible"
                            className='text-gray-800'>Kami menyediakan platform yang aman dan mendukung untuk membantu kamu menghadapi stres dan kecemasan. Bersama, kita dapat menemukan solusi terbaik untuk kesehatan mentalmu dan membangun kehidupan yang lebih positif dan penuh makna.</motion.p>
                        <motion.div 
                          variants={FadeRight(1.3)}
                          initial="hidden"
                          animate="visible"
                        className='flex justify-center md:justify-start'>
                            <button className='primary-button flex items-center gap-2 text-second'>
                                Tes Kesehatan Mental
                                <span className='text-red-500'>
                                <FaHeart />
                                </span>
                                </button>
                        </motion.div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <motion.img src={HeroPng} alt="Jeruk"
                    initial={{opacity:0, x: 200, rotate: 2}}
                    animate={{opacity:1, x: 0, rotate: 0}}
                    transition={{duration: 1, delay:0.2}}
                    className='w-[550px] md:w[350px] drop-shadow' />
                </div>
            </div>
        </section>
    )
}

export default Hero