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
            <h2 className='h2 text-accent'>About me : </h2>
            <h3 className='h3 mb-2 lg:mb-8'>I'm a freelance developer</h3>
            <p className='mb-2 lg:mb-8'>
              With over 2 years of experience in the world of development, I am passionate about technology and coding. My enthusiasm for IT often feels like an obsession, driving me to constantly learn and grow in this ever-evolving field. I thrive on tackling new challenges and am always eager to explore innovative solutions. If you're looking for a dedicated and driven developer ready to contribute and assist, I'm here to help bring your ideas to life.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  { inView ? <CountUp start={0} end={2} duration={1.5} /> : null }
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  { inView ? <CountUp start={0} end={100} duration={1.5} suffix='+' /> : null }
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
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
