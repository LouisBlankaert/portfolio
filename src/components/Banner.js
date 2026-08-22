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

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='relative min-h-[85vh] flex items-center' id='home'>
      {/* fixed social rail */}
      <div className='hidden lg:flex flex-col gap-4 fixed right-6 top-1/2 -translate-y-1/2 z-40'>
        <a
          href='https://github.com/LouisBlankaert'
          target="_blank" rel="noopener noreferrer"
          className='w-11 h-11 rounded-full border border-white/10 bg-card flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/50 transition-colors'
        >
          <FaGithub className='text-lg' />
        </a>
        <a
          href='https://linkedin.com/in/louis-blankaert-969595177'
          target="_blank" rel="noopener noreferrer"
          className='w-11 h-11 rounded-full border border-white/10 bg-card flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/50 transition-colors'
        >
          <FaLinkedin className='text-lg' />
        </a>
      </div>

      <div className='container mx-auto'>
        <div className='max-w-3xl mx-auto text-center font-secondary'>
          <motion.p
            variants={fadeIn('up', 0.1)}
            initial="hidden" whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='text-gray-400 text-lg mb-3'>
            Hello 👋, I'm
          </motion.p>
          <motion.h1
            variants={fadeIn('up', 0.2)}
            initial="hidden" whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='font-display text-[44px] sm:text-[56px] lg:text-[72px] leading-[1.1] font-semibold mb-6'>
            <span className='text-white'>Louis</span> <span className='text-accent'>Blankaert</span>
          </motion.h1>
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden" whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='mb-6 text-[22px] lg:text-[28px] font-primary font-semibold leading-[1.3]'>
            <span className='text-gray-300 mr-2'>Software Engineering Student</span>
            <TypeAnimation sequence={[
              "@ 42 Belgium",
              2000,
              "& Freelance Web Developer",
              2000,
            ]}
              speed={50}
              className='text-accent'
              wrapper="span"
              repeat={Infinity}
            />
          </motion.div>
          <motion.p
            variants={fadeIn('up', 0.4)}
            initial="hidden" whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='mb-10 max-w-xl mx-auto text-[16px] lg:text-[18px] text-gray-400 leading-relaxed'>
            Software engineering student at 42 Belgium, building a solid foundation in C, algorithms and systems through a 100% project-based curriculum. Alongside my studies, I design and ship web applications as a freelance developer.
          </motion.p>
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial="hidden" whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex gap-4 items-center justify-center mb-4'>
            <button onClick={scrollToContact} className='btn btn-md'>Hire me</button>
            <button onClick={scrollToWork} className='btn-outline btn-md'>View Projects</button>
          </motion.div>
        </div>
      </div>

      {/* scroll indicator */}
      <div className='hidden sm:flex flex-col items-center gap-2 absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500'>
        <span className='text-xs uppercase tracking-widest'>Scroll Down</span>
        <span className='w-5 h-8 rounded-full border border-gray-600 flex justify-center pt-1.5'>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className='w-1 h-1.5 rounded-full bg-accent'
          />
        </span>
      </div>
    </section>
  )
}

export default Banner;
