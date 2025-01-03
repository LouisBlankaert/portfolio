import React from 'react';
//icon
import { BsArrowUpRight } from 'react-icons/bs';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

const ServiceItem = ({ icon, title, description, imgSrc }) => (
  <div className='row-span-1 rounded-xl p-6 pb-14 border flex flex-col items-center space-y-6 w-full max-w-[350px]'>
    <div className='flex justify-center w-full'>
      {icon ? (
        <div className='w-28 h-28'>{icon}</div>
      ) : (
        <img src={imgSrc} alt={title} className='w-28 h-28 object-contain' />
      )}
    </div>
    <div className='flex flex-col items-center text-center gap-3 w-full'>
      <p className='text-xl font-semibold'>{title}</p>
      <p className='text-base text-muted-foreground'>
        <span className='text-base'>{description}</span>
      </p>
    </div>
  </div>
);

const Services = () => {
  return (
    <section className='section mb-24' id='services'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto mb-16 max-w-7xl'>
        <ServiceItem 
          icon={
            <svg
              width="100%"
              height="100%"
              viewBox="-10.5 -9.45 21 18.9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-500"
              style={{ transform: "rotate(209.804deg)" }}
            >
              <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
              <g stroke="currentColor" strokeWidth="1" fill="none">
                <ellipse rx="10" ry="4.5"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
              </g>
            </svg>
          }
          title="React"
          description="I am an 'expert' in React library, and I can create whatever you want with this."
        />
        <ServiceItem 
          icon={
            <svg
              fill="#38BDF8"
              viewBox="0 0 24 24" 
              height="100%" 
              width="100%" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
            </svg>
          }
          title="Tailwind"
          description="I am an 'expert' in Tailwind library, and I can create whatever you want with this."
        />
        <ServiceItem 
          imgSrc="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
          title="JavaScript"
          description="I am an 'expert' in JavaScript library, and I can create whatever you want with this."
        />
        <ServiceItem 
          imgSrc="https://www.vectorlogo.zone/logos/palletsprojects_flask/palletsprojects_flask-official~v2.svg"
          title="Flask"
          description="I am an 'expert' in Flask library, and I can create whatever you want with this."
        />
        <ServiceItem 
          imgSrc="https://www.vectorlogo.zone/logos/python/python-icon.svg"
          title="Python"
          description="I am an 'expert' in Python library, and I can create whatever you want with this."
        />
        <ServiceItem 
          imgSrc="https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg"
          title="Next JS"
          description="I am an 'expert' in Next JS library, and I can create whatever you want with this."
        />

        <ServiceItem 
          imgSrc="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
          title="PostgreSQL"
          description="I am an 'expert' in PostgreSQL library, and I can create whatever you want with this."
        />

        <ServiceItem 
          imgSrc="https://cdn.worldvectorlogo.com/logos/prisma-2.svg"
          title="Prisma"
          description="I am an 'expert' in Prisma library, and I can create whatever you want with this."
        />
      </div>
    </section>
  );
};

export default Services;
