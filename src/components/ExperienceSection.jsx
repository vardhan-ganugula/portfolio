import React from 'react'
import { TbSlashes } from "react-icons/tb";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiPython } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { DiReact } from 'react-icons/di';

function ExperienceSection() {
  return (
    <>
        <div className='py-5 px-5 border-b-2 border-zinc-800/50 items-center'>
            <div>
                <h4 className='section-title'>Technologies</h4>
                <p className='section-para'><TbSlashes/> These are the technologies I'm familier with</p>
            </div>
            <div className='py-5 '>
                <div className='flex px-5 flex-wrap py-5 mx-auto md:w-3/4 sm:w-full gap-5'>
                    <div className='showcase-icon '>
                        <IoLogoHtml5 size={50}/>
                        <p className='text-center pt-1'>HTML</p>
                    </div>
        
                    <div className='showcase-icon'>
                        <FaCss3Alt size={50}/>
                        <p className='text-center pt-1'>CSS</p>
                    </div>
                    <div className='showcase-icon'>
                        <FaJs size={50}/>
                        <p className='text-center pt-1'>JS</p>
                    </div>
                    <div className='showcase-icon'>
                        <SiPython size={50}/>
                        <p className='text-center pt-1'>Python</p>
                    </div>
                    <div className='showcase-icon'>
                        <SiFlask size={50}/>
                        <p className='text-center pt-1'>Flask</p>
                    </div>
                    <div className='showcase-icon'>
                        <RiTailwindCssFill size={50}/>
                        <p className='text-center pt-1'>Tailwind</p>
                    </div>
                    <div className='showcase-icon'>
                        <DiReact size={50}/>
                        <p className='text-center pt-1'>ReactJs</p>
                    </div>
                    
                </div>
            </div>
        </div>
    
    </>
  )
}

export default ExperienceSection