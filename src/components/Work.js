import React from 'react';
//img
import Img1 from '../assets/autogate.png'
import Img2 from '../assets/siteOngles.png'
import Img3 from '../assets/devexpress.png'
import Img4 from '../assets/yoga.png'
import Img5 from '../assets/phonix.png'
import Img6 from '../assets/moviz2.0.png'

const Work = () => {
  return (
    <section className='section mb-24' id='work'>
      <div className='container mx-auto pb-2'>
        {/* text section */}
        <div className='w-full mb-12'>
          <h2 className='h2 leading-tight text-white w-full'>
            Featured <span className='neon-text'>Projects</span>
          </h2>
          <p className='text-gray-400 text-lg mt-4'>A selection of my recent work</p>
        </div>

        {/* images section */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <a href="https://yoga-three-cyan.vercel.app//" target="_blank" rel="noopener noreferrer" className='group relative overflow-hidden border border-neon-cyan/50 hover:border-neon-cyan rounded-xl hover:shadow-neonCyan transition-all duration-300' style={{boxShadow: '0 0 6px rgba(0, 245, 255, 0.08)'}}>
              {/* overlay */}
              <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-200 bg-black/40'></div>
              {/* img */}
              <img 
                src={Img4} 
                alt='Project 1' 
                className='w-full h-full group-hover:scale-110 transition-all duration-300 group-hover:brightness-110 group-hover:contrast-110' 
                style={{filter: 'brightness(0.9) contrast(0.9)', transition: 'all 0.3s ease'}}
              />
              {/* pretitle */}
              <div className='absolute bottom-full left-8 group-hover:bottom-32 transition-all duration-200 z-50'>
                <span className='neon-text-cyan text-sm font-semibold'>Web Development</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-8 group-hover:bottom-20 transition-all duration-200 z-50'>
                <span className='text-2xl font-semibold text-white duration-200'>Yoga App</span>
              </div>
          </a>

          {/* image 3 */}
          <a href="https://dev-express.vercel.app/" target="_blank" rel="noopener noreferrer" className='group relative overflow-hidden border border-neon-cyan/50 hover:border-neon-cyan rounded-xl hover:shadow-neonCyan transition-all duration-300' style={{boxShadow: '0 0 6px rgba(0, 245, 255, 0.08)'}}>
            {/* overlay */}
            <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-200 bg-black/40'></div>
            {/* img */}
            <img 
              src={Img3} 
              alt='Project 3' 
              className='w-full h-full group-hover:scale-110 transition-all duration-300 group-hover:brightness-110 group-hover:contrast-110' 
              style={{filter: 'brightness(0.9) contrast(0.9)', transition: 'all 0.3s ease'}}
            />
            {/* pretitle */}
            <div className='absolute bottom-full left-8 group-hover:bottom-32 transition-all duration-200 z-50'>
              <span className='neon-text-cyan text-sm font-semibold'>Web Development</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-8 group-hover:bottom-20 transition-all duration-200 z-50'>
              <span className='text-2xl font-semibold text-white'>Dev Express</span>
            </div>
          </a>
          
          {/* image 2 */}
          <a href="https://anais-commerce.vercel.app/" target="_blank" rel="noopener noreferrer" className='group relative overflow-hidden border border-neon-cyan/50 hover:border-neon-cyan rounded-xl hover:shadow-neonCyan transition-all duration-300' style={{boxShadow: '0 0 6px rgba(0, 245, 255, 0.08)'}}>
            {/* overlay */}
            <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-200 bg-black/40'></div>
            {/* img */}
            <img 
              src={Img2} 
              alt='Project 2' 
              className='w-full h-full group-hover:scale-110 transition-all duration-300 group-hover:brightness-110 group-hover:contrast-110' 
              style={{filter: 'brightness(0.9) contrast(0.9)', transition: 'all 0.3s ease'}}
            />
            {/* pretitle */}
            <div className='absolute bottom-full left-8 group-hover:bottom-32 transition-all duration-200 z-50'>
              <span className='neon-text-cyan text-sm font-semibold'>E-Commerce</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-8 group-hover:bottom-20 transition-all duration-200 z-50'>
              <span className='text-2xl font-semibold text-white'>Anais Commerce</span>
            </div>
          </a>

          {/* image 4 */}
          <a href="https://site-voiture-drab.vercel.app/" target="_blank" rel="noopener noreferrer" className='group relative overflow-hidden border border-neon-cyan/50 hover:border-neon-cyan rounded-xl hover:shadow-neonCyan transition-all duration-300' style={{boxShadow: '0 0 6px rgba(0, 245, 255, 0.08)'}}>
            {/* overlay */}
            <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-200 bg-black/40'></div>
            {/* img */}
            <img 
              src={Img1} 
              alt='Project 1' 
              className='w-full h-full group-hover:scale-110 transition-all duration-300 group-hover:brightness-110 group-hover:contrast-110' 
              style={{filter: 'brightness(0.9) contrast(0.9)', transition: 'all 0.3s ease'}}
            />
            {/* pretitle */}
            <div className='absolute bottom-full left-8 group-hover:bottom-32 transition-all duration-200 z-50'>
              <span className='neon-text-cyan text-sm font-semibold'>Web Development</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-8 group-hover:bottom-20 transition-all duration-200 z-50'>
              <span className='text-2xl font-semibold text-white'>Autogate</span>
            </div>
          </a>
          
          <a href="https://phonix-repair.be" target="_blank" rel="noopener noreferrer" className='group relative overflow-hidden border border-neon-cyan/50 hover:border-neon-cyan rounded-xl hover:shadow-neonCyan transition-all duration-300' style={{boxShadow: '0 0 6px rgba(0, 245, 255, 0.08)'}}>
            {/* overlay */}
            <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-200 bg-black/40'></div>
            {/* img */}
            <img 
              src={Img5} 
              alt='Project 1' 
              className='w-full h-full group-hover:scale-110 transition-all duration-300 group-hover:brightness-110 group-hover:contrast-110' 
              style={{filter: 'brightness(0.9) contrast(0.9)', transition: 'all 0.3s ease'}}
            />
            {/* pretitle */}
            <div className='absolute bottom-full left-8 group-hover:bottom-32 transition-all duration-200 z-50'>
              <span className='neon-text-cyan text-sm font-semibold'>E-Commerce</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-8 group-hover:bottom-20 transition-all duration-200 z-50'>
              <span className='text-2xl font-semibold text-white'>Phonix Repair</span>
            </div>
          </a>
          
          <a href="https://movie-tau-mocha.vercel.app/" target="_blank" rel="noopener noreferrer" className='group relative overflow-hidden border border-neon-cyan/50 hover:border-neon-cyan rounded-xl hover:shadow-neonCyan transition-all duration-300' style={{boxShadow: '0 0 6px rgba(0, 245, 255, 0.08)'}}>
            {/* overlay */}
            <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-200 bg-black/40'></div>
            {/* img */}
            <img 
              src={Img6} 
              alt='Project 1' 
              className='w-full h-full group-hover:scale-110 transition-all duration-300 group-hover:brightness-110 group-hover:contrast-110' 
              style={{filter: 'brightness(0.9) contrast(0.9)', transition: 'all 0.3s ease'}}
            />
            {/* pretitle */}
            <div className='absolute bottom-full left-8 group-hover:bottom-32 transition-all duration-200 z-50'>
              <span className='neon-text-cyan text-sm font-semibold'>Web Development</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-8 group-hover:bottom-20 transition-all duration-200 z-50'>
              <span className='text-2xl font-semibold text-white'>My Moviz 2.0</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
