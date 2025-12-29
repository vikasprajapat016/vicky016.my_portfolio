import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import cv from '../assets/tech_logo/CV.jpeg'
import profile from '../assets/tech_logo/img2.png'
const About = () => {
  return (
    <>
    <section className=' py-4 px-[7vw] md:px-[7vw] lg:px-[10vw] mt-16 md:mt-24 lg:mt-32 font-sans' id="about">

      <div className='flex flex-col-reverse md:flex-row justify-center items-center'>
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
        <h1 className='text-3xl sm:text-5xl md:text-6xl text-white mb-2 font-bold leading-tight'>
          Hi , I am
        </h1>
        <h1 className='text-4xl sm:text-5xl md:text-6xl  mb-3 font-bold bg-gradient-to-r
 from-cyan-600 to-purple-500 text-transparent bg-clip-text leading-tight'>
          Vikas Prajapat
        </h1>
        <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-200 leading-tight'>
          <span className=''>
            I am a
          </span>
        <span className='text-cyan-400'>
       <Typewriter 
        words={[
          ' Mern Stack Developer',
          ' Web Developer',
          ' Fullstack Developer'
        ]}
        loop
        cursor
        cursorStyle="|"
        typeSpeed={100}
        deleteSpeed={80}
        delaySpeed={2000}
        />
        
          </span>  
        </h3>
        <p className='text-lg text-gray-400 sm:text-lg md:text-xl leading-relaxed mb-10 mt-6'>
          I am a fresher Mern fullstack Developer. I have a personal 2 months experience in building scalable web application , skilled in both frontend and backend , I specializes in Mern-stack and other modern technologies to create seamless user experience .
        </p>

        <a
        target='_blank'
        href="https://drive.google.com/file/d/1zMa2LzgZzbs1Ah_c0dXw8ifVxy4raKyY/view?usp=drivesdk"
        rel='noopener noreferrer'
        className='text-white inline-block py-3 px-8 font-bold text-lg mt-5 rounded-full transform duration-300 transition scale-105'
        style={
          {background: 'linear-gradient(90deg, #8245ec, #a855f7)',
          boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec'}
        }
        >
          Download CV
        </a>
        </div>

        <div className='md:w-1/2 flex justify-center md:justify-end items-center'>
        <img 
        src={profile}
        alt='Vikas'
        loading='lazy'
        className='md:w-3/5 w-3/4 h-full object-cover rounded-full drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'/>
        
        </div>
      </div>
    </section>
      
    </>
  )
}

export default About
