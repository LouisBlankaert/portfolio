import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';
import { services } from '../data/services';

const SkillCard = ({ title, imgSrc }) => (
  <div className='card flex flex-col items-center justify-center gap-3 py-6 px-4 hover:border-accent/40 transition-colors'>
    <img src={imgSrc} alt={title} className='w-10 h-10 object-contain' />
    <p className='text-sm text-gray-300 font-medium'>{title}</p>
  </div>
);

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className='flex justify-center mb-6'>
          <span className='badge-pill'><span className='dot' />Tech Stack</span>
        </motion.div>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className='h2 text-center mb-12'>
          Skills & Tools
        </motion.h2>

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className='grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto'>
          {services.map((service, index) => (
            <SkillCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
