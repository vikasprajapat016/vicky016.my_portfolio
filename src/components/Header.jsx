import React, { useEffect, useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import { MdOutlineCancel } from "react-icons/md";
import { motion } from 'framer-motion';
import Logo from './Logo';

const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  const [open, setOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  useEffect(
    () => {
      const handleScroll = ()=>{
        setScrolled(window.scrollY > 50);
      }

      window.addEventListener("scroll",handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    },[])


const menuItems = [
    {id: "about" ,label: "About"},
    {id: "skills", label: "Skills"},
    {id: "experience" ,label: "Experience"},
    {id: "work" , label: "Project"},
    {id: "education", label: "Education"},
    {id: "contact", label: "Hire Me!"}
]

  const handleMenuClick = (sectionId) => {
    setActiveSection(sectionId);
    setOpen(false);
    
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth"});
  };

  
  return (

    <>
      <header className={`  fixed top-0 w-full z-50 transition duration-300 py-2 px-[7vw] md:px-[2vw]  ${
        isScrolled? "bg-[#050414]/50  backdrop-blur-md shadow-md" : " bg-transparent"
      }`}>
        <div className='text-xl text-white flex justify-between  items-center '>
          <div className='lg:ml-8'>
          <Logo/>
       </div>       
        <nav className={` text-xl text-white `}>
          <ul className='hidden md:flex  lg:gap-6 space-x-8 items-center'>
            {menuItems.map((items)=>(
              <li key={items.id} className={`cursor-pointer active:text-blue-500 hover:text-blue-500 ${
                activeSection === items.id? "text-blue-500 border-b-2 border-b-fuchsia-500 transition-all duration-300 pb-0.5"  : ""
              }`} >
                {items.id === "contact" ? 
                 <motion.button 
                 whileHover={{scale: 1.08}}
                 whileTap={{scale: 0.90}}
                 className="cursor-pointer bg-green-500 py-1 text-white px-3 rounded-xl mb-1 "
                  onClick={() => handleMenuClick(items.id)}
                  >{items.label}</motion.button>
                 :
                 <motion.button className='cursor-pointer'
                  whileHover={{scale: 1.28}}
                 whileTap={{scale: 0.90}}
                  onClick={() => handleMenuClick(items.id)}>{items.label}</motion.button>
                }
              </li>
            ))}
          </ul>
          <div className='md:hidden '>
            {
              open? (
                  <MdOutlineCancel className='text-3xl text-blue-400 cursor-pointer' onClick={() => setOpen(false)}/>
                ) :
                (
                  <TiThMenu className='text-3xl text-blue-500 cursor-pointer' onClick={() => setOpen(true)} />

                )
            }
          </div>   
          
        </nav>
      </div>  
      { open && (
            < div className=' absolute top-16 left-1/2 flex justify-center transform -translate-x-1/2 w-3/5 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg z-50'>
              <ul className='text-gray-100 flex flex-col  justify-center items-center  py-6 gap-y-1.5 '>
                {menuItems.map((items) => (
                  <li key={items.id} className={`hover:text-blue-400 ${activeSection === items.id? "text-blue-500 pb-0.5 border-b-2 border-b-cyan-400" : ""}`}>
                   {items.id === "contact" ? 
                 <button className='cursor-pointer bg-green-500 py-1 px-3 text-white rounded-xl mb-1 ' onClick={() => handleMenuClick(items.id)}>{items.label}</button>
                  :
                 <button className='cursor-pointer' onClick={() => handleMenuClick(items.id)}>{items.label}</button>
                }
                  </li>
                ))}
              </ul>
            </div>
          )}
      </header>
    </>
  )
}

export default Header
