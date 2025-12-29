import React, { useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import emailjs from '@emailjs/browser'
import Reveal from './Reveal'
const Contact = () => {

const form = useRef();
const [isSent, setIsSent] = useState(false);

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
  .sendForm(
    "service_sifrl6x",
    "template_ceezpy4",
    form.current,
    "VKM_0lIvAnSPaSP3G"
  )
  .then(
    () => {
       setIsSent(true)
       form.current.reset()
       toast.success("Message sent Successfully! ✅" ,{
        position:"top-right",
        autoClose: 3000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:false,
        draggable: true,
        theme: "dark",
       })
    },
    (error) => {
      console.error("Error sending message:", error)
      toast.error("failed to send message. Please try again.",{
        position:"top-right",
        autoClose:3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme:"colored",
      })
    }
  )
}
  
  return (
    <Reveal>
      <section
    id='contact'
    className='flex flex-col items-center justify-center py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-skills-gradient '>
<ToastContainer/>
    
      <div className='text-center mb-16 '>
        <h2 className='text-4xl font-bold text-white border-b-4 border-b-purple-700  pb-3 '>Contact</h2>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>
          If you like my intro , projects and my working experience and want to hire me then contact me
        </p>
      </div>

      <div className='mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700'>
        <h3 className='text-xl font-semibold text-white text-center'>
          Hire ME <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} 
        autoComplete='off'
        className='mt-4 flex flex-col space-y-4'>
          <input
          type='email'
          name='user_email'
          placeholder='Your Email' 
          required
          className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 '/>
        
          <input
          type='text'
          name='username'
          placeholder='Your Name'
          minLength={3}
          autoComplete='off'
          required
          className='w-full p-3 rounded-md border border-gray-600 bg-[#131025] text-white focus:outline-none focus:border-purple-500'/>

          <input
          type='text'
          name='subject'
          placeholder='Subject'
          required
          className='w-full text-white p-3 rounded-md border border-gray-600 bg-[#131025] focus:outline-none focus:border-purple-500'/>

          <textarea
          name='message'
          placeholder='Message'
          rows={4}
          className='w-full p-3 bg-[#131025] border-gray-600 text-white rounded-md focus:outline-none focus:border-purple-500'>
          </textarea>

          <button type='submit'
          className='w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition'>
            send
          </button>
        </form>
        
      </div>
      
    </section>
    </Reveal>
    
  )
}

export default Contact
