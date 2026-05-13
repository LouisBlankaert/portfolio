import React from 'react';
import { services } from '../data/services';

const ServiceItem = ({ title, description, imgSrc }) => (
  <div className='rounded-xl p-8 border border-neon-lime/50 hover:border-neon-cyan/80 bg-black/30 hover:bg-black/50 flex flex-col items-center space-y-6 w-full max-w-[350px] transition-all duration-300 group' style={{boxShadow: '0 0 8px rgba(0, 255, 136, 0.1)'}}>
    <div className='flex justify-center w-full group-hover:scale-110 transition-transform duration-300'>
      <img src={imgSrc} alt={title} className='w-24 h-24 object-contain' />
    </div>
    <div className='flex flex-col items-center text-center gap-3 w-full'>
      <p className='text-lg font-semibold text-white font-primary'>{title}</p>
      <p className='text-base text-gray-400 font-primary'>{description}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <section className='section mb-24' id='services'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto mb-16 max-w-7xl'>
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
