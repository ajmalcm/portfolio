import React from 'react'
import Herotext from '../Components/Herotext'
import ParallaxBg from '../Components/ParallaxBg'

const Hero = () => {
  return (
    <section className='flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space'>
    <Herotext/>
    <ParallaxBg/>
    <figure className='absolute inset-0' style={{width:"100vw",height:"100vh"}}></figure>
    </section>
  )
}

export default Hero