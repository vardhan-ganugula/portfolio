import React from 'react';
import model from '../assets/model.jpeg';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { Link } from 'react-scroll';

function HeroPage() {
  const [text] = useTypewriter({
    words: ['Web Developer', 'Frontend Dev', 'Web Designer'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='flex md:flex-row flex-col items-center justify-center gap-5 p-5 h-4/5 border-b-2 border-zinc-800/50 '>
      <div className='md:h-[400px] md:w-[400px] h-[300px] w-[300px]'>
        <img src={model} alt='A professional model image' className='rounded w-full h-full object-cover' />
      </div>
      <div className='flex-grow '>
        <div>
          <h1 className='lg:text-8xl md:5xl font-bold flex flex-col text-4xl'>
            <span className='gradinet-text'>I'm a</span>
            <span className='text-white'>
              {text} <Cursor />
            </span>
          </h1>
          <h6 className='mt-5 px-2 text-white font-mono'>Hi, I'm Vardhan, a Frontend Web Developer who turns innovative ideas into engaging, interactive realities.</h6>
          <div className='mt-5 px-2 flex gap-5'>
            <Link to='work' smooth={true} duration={500} className='px-8 py-2 font-small rounded text-white bg-sky-400 border border-teal-600 hover:bg-white hover:text-sky-500 hover:shadow-xl hover:shadow-cyan-400/20 cursor-pointer'>Projects</Link>
            <a href="/resume" className='px-8 py-2 font-small rounded bg-white text-sky-400 border border-teal-600 hover:bg-sky-100 hover:shadow-xl hover:shadow-cyan-400/20'>Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
