import React from 'react';
import { projects } from '../data/projects';

const ProjectCard = ({ img, title, category, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className='group relative overflow-hidden border border-neon-cyan/50 hover:border-neon-cyan rounded-xl hover:shadow-neonCyan transition-all duration-300'
    style={{boxShadow: '0 0 6px rgba(0, 245, 255, 0.08)'}}
  >
    <div className='group-hover:bg-black/30 w-full h-full absolute z-40 transition-all duration-200 bg-black/10'></div>
    <img
      src={img}
      alt={title}
      className='w-full h-56 object-cover group-hover:scale-110 transition-all duration-300'
    />
    <div className='absolute bottom-full left-8 group-hover:bottom-32 transition-all duration-200 z-50'>
      <span className='neon-text-cyan text-sm font-semibold'>{category}</span>
    </div>
    <div className='absolute -bottom-full left-8 group-hover:bottom-20 transition-all duration-200 z-50'>
      <span className='text-2xl font-semibold text-white'>{title}</span>
    </div>
  </a>
);

const Work = () => {
  return (
    <section className='section mb-24' id='work'>
      <div className='container mx-auto pb-2'>
        <div className='w-full mb-12'>
          <h2 className='h2 leading-tight text-white w-full'>
            Featured <span className='neon-text'>Projects</span>
          </h2>
          <p className='text-gray-400 text-lg mt-4'>A selection of my recent work</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
