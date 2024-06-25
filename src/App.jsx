import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Experiences from './components/Experiences'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Technologies from './components/Technologies'

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 selection:bg-blue-300 selection:text-blue-700'>
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experiences />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App