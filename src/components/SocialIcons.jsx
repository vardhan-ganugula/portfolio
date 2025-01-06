import React from 'react'
import {socials} from '../utils/socials'

const SocialBox = ({ icon, text,color }) => {
  return (
    <div className='flex h-10 hover:-translate-x-[7rem] translate-x-0 transition-all ease-in duration-500'>
      <div className={`w-10 h-10 ${color} grid place-content-center text-white flex-shrink-0`}>
        {
          React.createElement(icon, { size: 20 })
        }
      </div>
      <div className='bg-black text-center flex-grow flex-shrink-0 w-[7rem] text-white py-2'>
        {text}
      </div>
    </div>
  )  
}

function SocialIcons() {
  return (
    <div className='flex fixed bottom-1/2 right-0 -translate-y-1/2 bg-white w-10 min-h-24 flex-col'>
      {
        socials.map((social, index) => (
          <a href={social.link} target='_blank' rel='noopener noreferrer' key={index}>
            <SocialBox icon={social.icon} text={social.text} color={social.color} />
          </a>
        ))
      }
    </div>
  )
}

export default SocialIcons;