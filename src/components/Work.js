import React from 'react';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
//img
import Img1 from '../assets/myMoviz2.png'
import Img2 from '../assets/anais.png'
import Img3 from '../assets/felibrosse.png'

const Work = () => {
  return (
    <section className='section' id='work'>
      <motion.div 
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className='container mx-auto pb-2'
      >
        {/* text section */}
        <div className='w-full mb-10'>
          <h2 className='h2 leading-tight text-accent w-full'>
            My latest <br />
            Work.
          </h2>
        </div>

        {/* images section */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* image 1 */}
          <a href="https://mymoviz-frontend-ten-iota.vercel.app/" target="_blank" rel="noopener noreferrer" className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img 
              src={Img1} 
              alt='Project 1' 
              className='w-full h-full group-hover:scale-125 transition-all duration-500' 
            />
            {/* pretitle */}
            <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Web Development</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-2xl text-white'>My moviz</span>
            </div>
          </a>

          {/* image 2 */}
          <a href="https://anais-commerce.vercel.app/" target="_blank" rel="noopener noreferrer" className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img 
              src={Img2} 
              alt='Project 2' 
              className='w-full h-full group-hover:scale-125 transition-all duration-500' 
            />
            {/* pretitle */}
            <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Web Development</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-2xl text-white'>Anais Commerce</span>
            </div>
          </a>

          {/* image 3 */}
          <a href="https://felibrosse.com/" target="_blank" rel="noopener noreferrer" className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img 
              src={Img3} 
              alt='Project 3' 
              className='w-full h-full group-hover:scale-125 transition-all duration-500' 
            />
            {/* pretitle */}
            <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>E-commerce</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-2xl text-white'>Felibrosse</span>
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Work;
