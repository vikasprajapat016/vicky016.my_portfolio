import React from 'react'
import { SkillsInfo } from "../../constant";
import Reveal from './Reveal';
const Skills = () => {


  return (
   <Reveal>
     <section id='skills' className='py-24 pb-24 px-[12vw] md:px-[16vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom' >
      <div className='text-center mt-8'>
        <h2 className='text-white text-3xl sm:text-4xl border-b-4 border-b-purple-700  pb-3 font-bold '>Skills </h2>
         <p className='text-gray-400 text-lg font-semibold mt-4'> Here is my skills listed below, These are skills which i used in projects. </p>
         </div>

         <div className='flex flex-wrap py-10 justify-evenly lg:gap-5 '>
          {SkillsInfo.map((category) =>(
            <div 
            key={category.title}
            className='text-gray-400 bg-gray-900 00 px-6 py-6 sm:px-10 sm:py-6 border hover:scale-105 transform transition-transform duration-300 border-white rounded-2xl w-full sm:w-[48%] mb-10 shadow-[0_0_20px_1px_rgba(130,69,236,0.5)] '>
              <h2 className='text-2xl sm:text-3xl text-center text-gray-500 font-bold mb-4'>{category.title}</h2>

              <div className='grid grid-cols-2  gap-3 w-full'>
                {category.skills.map((skills) =>(
                 
                  <div  key = {skills.name} className='flex justify-center  items-center gap-2 sapce-x-2 bg-transparent border-2 border-gray-700 rounded-3xl px-4 py-4'>
                    <img
                    src={skills.logo}
                    alt={`${skills.name} logo`}
                    className='w-6 h-6 sm:w-8 sm:h-8'/>
                    <span className='text-xs sm:text-sm text-gray-300 font-bold'>{skills.name}</span>
                    </div>
                ))}
                </div>
          </div>
          ))}
         </div>
      
    </section>
   </Reveal>
  )
}

export default Skills
