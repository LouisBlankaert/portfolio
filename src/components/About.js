import React from 'react';
//countup
import CountUp from 'react-countup';
//intersection observer hook
import { useInView } from 'react-intersection-observer';
//motion
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants';


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  return (
    <section className='section mb-24' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img
          <motion.div 
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount: 0.3}}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[440px] mix-blend-lighten bg-top'>
          </motion.div> */}
          {/* text */}
          <motion.div 
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount: 0.2}}
          className='flex-1 flex items-center flex-col'>
            <h2 className='h2 text-accent mb-2'>About me</h2>
            <h3 className='h3 mb-6 lg:mb-8 neon-text-cyan'>Full Stack Developer & Problem Solver</h3>
            <p className='mb-6 lg:mb-8 text-gray-300 text-center lg:text-left'>
              With over 2 years of professional experience, I'm passionate about creating elegant solutions to complex problems. I specialize in building high-performance web applications using modern technologies like React, Next.js, and Node.js. When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects.
            </p>
            {/* stats */}
            <div className='flex gap-x-8 lg:gap-x-12 mb-12'>
              <div className='flex flex-col items-center'>
                <div className='text-[48px] font-tertiary font-bold neon-text mb-2'>
                  { inView ? <CountUp start={0} end={2} duration={1.5} suffix='+' /> : null }
                </div>
                <div className='font-primary text-sm text-gray-400 text-center'>
                  Years of <br />
                  Experience
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <div className='text-[48px] font-tertiary font-bold neon-text mb-2'>
                  { inView ? <CountUp start={0} end={20} duration={1.5} suffix='+' /> : null }
                </div>
                <div className='font-primary text-sm text-gray-400 text-center'>
                  Projects <br />
                  Completed
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default About;
