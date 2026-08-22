import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { fadeIn } from '../utils/variants';
import { projects } from '../data/projects';

const ProjectCard = ({ img, title, category, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className='card overflow-hidden group hover:border-accent/40 transition-colors flex flex-col'
  >
    <div className='overflow-hidden h-48'>
      <img
        src={img}
        alt={title}
        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
      />
    </div>
    <div className='p-5 flex items-center justify-between gap-3'>
      <div>
        <span className='inline-block text-[11px] uppercase tracking-wider text-accent font-semibold mb-1.5'>{category}</span>
        <h3 className='text-white font-semibold text-lg'>{title}</h3>
      </div>
      <FiArrowUpRight className='text-gray-500 group-hover:text-accent transition-colors text-xl shrink-0' />
    </div>
  </a>
);

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className='flex justify-center mb-6'>
          <span className='badge-pill'><span className='dot' />Projects</span>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className='text-center mb-12'>
          <h2 className='h2'>Featured Projects</h2>
          <p className='text-gray-400'>A selection of my recent work</p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
