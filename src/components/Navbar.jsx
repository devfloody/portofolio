import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

const Navbar = () => {
    return <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <h1 className='text-4xl font-medium text-neutral-100'>D<span className='text-2xl'>f</span></h1>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl '>
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
            <FaTwitterSquare />
        </div>
    </nav>
}

export default Navbar