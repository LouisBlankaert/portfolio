import React from 'react';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
//img
import Img1 from '../assets/myMoviz2.png'
import Img2 from '../assets/siteOngles.png'
import Img3 from '../assets/devexpress.png'
import Img4 from '../assets/yoga.png'
import Img5 from '../assets/dulce_laces.png'
import Img6 from '../assets/moviz2.0.png'

const Work = () => {
  return (
    <section className='section mb-24' id='work'>
      <div className='container mx-auto pb-2'>
        {/* text section */}
        <div className='w-full mb-10'>
          <h2 className='h2 leading-tight text-accent w-full'>
            My latest <br />
            Work.
          </h2>
        </div>

        {/* images section */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <a href="https://yoga-three-cyan.vercel.app//" target="_blank" rel="noopener noreferrer" className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-150'></div>
              {/* img */}
              <img 
                src={Img4} 
                alt='Project 1' 
                className='w-full h-full group-hover:scale-125 transition-all duration-200' 
              />
              {/* pretitle */}
              <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-200 z-50'>
                <span className='text-gradient'>Web Development</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-200 z-50'>
                <span className='text-2xl text-white'>Mon yoga</span>
              </div>
          </a>

          {/* image 3 */}
          <a href="https://dev-express.vercel.app/" target="_blank" rel="noopener noreferrer" className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-150'></div>
            {/* img */}
            <img 
              src={Img3} 
              alt='Project 3' 
              className='w-full h-full group-hover:scale-125 transition-all duration-200' 
            />
            {/* pretitle */}
            <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-200 z-50'>
              <span className='text-gradient'>Web Development</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-200 z-50'>
              <span className='text-2xl text-white'>Dev_express</span>
            </div>
          </a>
          
          {/* image 2 */}
          <a href="https://anais-commerce.vercel.app/" target="_blank" rel="noopener noreferrer" className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-150'></div>
            {/* img */}
            <img 
              src={Img2} 
              alt='Project 2' 
              className='w-full h-full group-hover:scale-125 transition-all duration-200' 
            />
            {/* pretitle */}
            <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-200 z-50'>
              <span className='text-gradient'>Web Development</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-200 z-50'>
              <span className='text-2xl text-white'>Anais Commerce</span>
            </div>
          </a>

          {/* image 2 */}
          <a href="https://mymoviz-frontend-ten-iota.vercel.app/" target="_blank" rel="noopener noreferrer" className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-150'></div>
            {/* img */}
            <img 
              src={Img1} 
              alt='Project 1' 
              className='w-full h-full group-hover:scale-125 transition-all duration-200' 
            />
            {/* pretitle */}
            <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-200 z-50'>
              <span className='text-gradient'>Web Development</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-200 z-50'>
              <span className='text-2xl text-white'>My moviz</span>
            </div>
          </a>
          
          <a href="https://dulce-laces.com/" target="_blank" rel="noopener noreferrer" className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-150'></div>
            {/* img */}
            <img 
              src={Img5} 
              alt='Project 1' 
              className='w-full h-full group-hover:scale-125 transition-all duration-200' 
            />
            {/* pretitle */}
            <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-200 z-50'>
              <span className='text-gradient'>E-Commerce</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-200 z-50'>
              <span className='text-2xl text-white'>dulces-laces</span>
            </div>
          </a>
          
          <a href="https://movie-tau-mocha.vercel.app/" target="_blank" rel="noopener noreferrer" className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-150'></div>
            {/* img */}
            <img 
              src={Img6} 
              alt='Project 1' 
              className='w-full h-full group-hover:scale-125 transition-all duration-200' 
            />
            {/* pretitle */}
            <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-200 z-50'>
              <span className='text-gradient'>Web Development</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-200 z-50'>
              <span className='text-2xl text-white'>my moviz 2.0</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
