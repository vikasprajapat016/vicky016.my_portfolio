import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
    


    <footer className='text-white py-10  px-[12vw] md:px-[7vw] lg:px-[20vw] '>
      <div className="flex justify-center mb-5 text-purple-400 text-3xl">
  ✦
</div>
      
      <div className='container mx-auto text-center'>
        
        

        <h2 className='text-xl font-semibold text-purple-500'>Vikas Prajapat</h2>
        <h2 className='text-sm font-semibold text-gray-300 mt-3'>Email : vikasprajapat016@gmail.com</h2>

        <div className='flex justify-center space-x-4 mt-6'>
          <a 
          href='https://github.com/vikasprajapat016/'
          rel='noopener noreferrer'
          target='_blank'
          className='text-xl hover:text-purple-500 transition-transform transform hover:scale-110'>
            <FaGithub />
          </a>

          <a
          href='https://www.linkedin.com/in/vikas-prajapat-a052b1370'
          rel='noopener noreferrer'
          target='_blank'
          className='text-xl hover:text-purple-500 transition-transform transform hover:scale-110'>
            <FaLinkedin />
          </a>

          <a 
          href="https://www.instagram.com/marwal_vikas/"
          rel='noopener noreferrer'
          target='_blank'
          className='text-xl hover:text-purple-500 transition-transform transform hover:scale-110'>
            <FaInstagram />
          </a>

          <a
          href='https://www.youtube.com/'
          rel='noopener noreferrer'
          target='_blank'
          className='text-xl hover:text-purple-500 transition-transform transform hover:scale-110'>
            <FaYoutube />
          </a>
        </div>

        <p className='text-sm text-gray-400 mt-6'>
          © 2025 Vikas Prajapat. All rights reserved.
        </p>
      </div>
       <div className="flex justify-center mt-5 text-purple-400 text-3xl">
  ✦
</div>
      
    </footer>
    </>
  )
}

export default Footer
