import React from 'react';
//countup
import CountUp from 'react-countup';
//intersection observer hook
import { useInView } from 'react-intersection-observer';
//motion
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../utils/variants';

const highlights = [
  'C, Algorithms & Data Structures',
  'Linux (Debian) & Systems Administration',
  'React, Next.js & Node.js',
  'Python, Flask & SQL',
  'Git, GitHub & Shell/Bash',
  'Vercel, Railway & Render deployment',
];

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className='flex justify-center mb-6'>
          <span className='badge-pill'><span className='dot' />About</span>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className='max-w-2xl mx-auto text-center'>
          <h2 className='h2'>Software Engineering Student & Freelance Developer</h2>
          <p className='text-gray-400 leading-relaxed mb-10'>
            Since April 2026 I've been studying Software Engineering at 42 Belgium, a 100% project-based, peer-reviewed curriculum built on C, algorithms, data structures and systems administration. Self-taught in web development since 2022 and trained at La Capsule bootcamp, I've been designing and shipping web applications as a freelance developer since May 2025.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto mb-14'>
          {highlights.map((item, index) => (
            <div key={index} className='card flex items-center gap-3 px-5 py-4'>
              <span className='w-1.5 h-1.5 rounded-full bg-accent shrink-0' />
              <span className='text-gray-300 text-sm'>{item}</span>
            </div>
          ))}
        </motion.div>

        <div className='flex justify-center gap-12 lg:gap-20'>
          <div className='flex flex-col items-center'>
            <div className='text-[44px] font-display font-semibold text-accent mb-1'>
              {inView ? <CountUp start={0} end={1} duration={1.5} suffix='+' /> : null}
            </div>
            <div className='font-primary text-sm text-gray-400 text-center'>
              Years<br />Freelancing
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='text-[44px] font-display font-semibold text-accent mb-1'>
              {inView ? <CountUp start={0} end={5} duration={1.5} /> : null}
            </div>
            <div className='font-primary text-sm text-gray-400 text-center'>
              42 Projects<br />Validated
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;
