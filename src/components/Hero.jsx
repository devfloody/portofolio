import { motion } from 'framer-motion'
import React from 'react'
import profilePic from '../assets/profile.png'
import { HERO_CONTENT } from '../constants'

const container = (delay, xBefore, duration) => ({
    hidden: { x: xBefore, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: duration, delay: delay } }
})

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 ">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 initial="hidden" animate="visible" variants={container(0, -100, 0.5)} className='pb-12 text-6xl tracking-tight font-thin lg:mt-16 lg:text-8xl'>Fahmi Ismail A.</motion.h1>
                        <motion.span initial="hidden" animate="visible" variants={container(0.5, -100, 0.5)} className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                            Mobile Developer
                        </motion.span>
                        <motion.p initial="hidden" animate="visible" variants={container(1, -100, 0.5)} className='my-2 py-6 font-light max-w-xl tracking-tighter'>{HERO_CONTENT}</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center ">
                        <motion.img initial="hidden" animate="visible" variants={container(1.2, 100, 1)} className='rounded-xl' src={profilePic} alt="Profile Picture" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero