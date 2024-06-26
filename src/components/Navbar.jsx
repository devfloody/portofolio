import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Navbar = () => {
    return <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <h1 className='text-4xl font-medium text-neutral-100'>D<span className='text-2xl'>f</span></h1>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl '>
            <FaLinkedin onClick={() => {
                window.open("https://linkedin.com/in/fahmiismaila")
            }} />
            <FaGithub onClick={() => {
                window.open("https://github.com/devfloody")
            }} />
            <FaYoutube onClick={() => {
                window.open("https://www.youtube.com/@devfloody")
            }} />
            <FaInstagram onClick={() => {
                window.open("https://instagram.com/fahmi.ia")
            }} />
            <FaSquareXTwitter onClick={() => {
                window.open("https://twitter.com/fahmiismail_a")
            }} />
        </div>
    </nav>
}

export default Navbar