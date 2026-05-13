import React from 'react';
//icons
import { FaGithub, FaLinkedin } from "react-icons/fa"
//type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from "../utils/variants"

const Banner = () => {

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='min-h-[75vh] lg:min-h-[70vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-6 lg:flex-row lg:items-center lg:gap-x-10'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
              variants={fadeIn('up', 0.2)} 
              initial="hidden" whileInView={"show"} 
              viewport={{ once: false, amount: 0.3 }} 
              className='text-[48px] font-bold font-tertiary leading-[1.1] lg:text-[64px] text-white'>
              Louis <span className='neon-text'>Blankaert</span>
            </motion.h1>
            <motion.div 
              variants={fadeIn('up', 0.3)} 
              initial="hidden" whileInView={"show"} 
              viewport={{ once: false, amount: 0.3 }} 
              className='mb-6 text-[24px] lg:text-[36px] font-primary font-semibold leading-[1.3]'>
              <span className='text-gray-300 mr-2'>Full Stack Developer</span>
              <TypeAnimation sequence={[
                "& Problem Solver",
                2000,
                "& Creative Thinker",
                2000,
              ]} 
              speed={50}
              className='neon-text-cyan'
              wrapper="span"
              repeat={Infinity}
              />
            </motion.div>
            <motion.p 
              variants={fadeIn('up', 0.4)} 
              initial="hidden" whileInView={"show"} 
              viewport={{ once: false, amount: 0.3 }} 
              className='mb-8 max-w-lg mx-auto lg:mx-0 text-[16px] lg:text-[18px] text-gray-300 leading-relaxed'>
              Passionate full-stack developer from Belgium with 2+ years of experience. I build fast, responsive, and user-friendly web applications. Available for freelance projects worldwide.
            </motion.p>
            <motion.div 
              variants={fadeIn('up', 0.5)} 
              initial="hidden" whileInView={"show"} 
              viewport={{ once: false, amount: 0.3 }} 
              className='flex max-w-max gap-x-4 items-center mb-8 mx-auto lg:mx-0'>
                <button onClick={scrollToContact} className='btn btn-sm lg:btn-md'>Contact me</button>
            </motion.div>
            {/* socials */}
            <motion.div 
              variants={fadeIn('up', 0.6)} 
              initial="hidden" whileInView={"show"} 
              viewport={{ once: false, amount: 0.3 }} 
              className='flex text-[16px] gap-x-4 max-w-max mx-auto lg:mx-0'>
              <a href='https://github.com/LouisBlankaert' target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl lg:text-2xl" />
              </a>
              <a href='https://linkedin.com/in/louis-blankaert-969595177' target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl lg:text-2xl" />
              </a>
            </motion.div>
          </div>
          {/* image */}
          {/* <motion.div 
            variants={fadeIn('down', 0.5)} 
            initial="hidden" whileInView={"show"}
            className='hidden lg:flex flex-1 max-w-[240px] lg:max-w-[360px]'>
            <img src={Image} alt='' />
          </motion.div> */}
        </div>
      </div>
    </section>
  )
}

export default Banner;
