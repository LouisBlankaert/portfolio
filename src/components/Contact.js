import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from '../variants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const key = process.env.REACT_APP_FORMSPREE_ID


const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await fetch(`https://formspree.io/f/${key}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        toast.success("Your message has been sent successfully!");
        event.target.reset(); // Réinitialiser le formulaire
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("There was an error sending your message. Please try again.");
    }
  };

  return (
    <section className='section py-16 mb-12 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div 
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount: 0.3}}
            className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br/>Together</h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form 
            onSubmit={handleSubmit} 
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount: 0.3}}
            className='flex-1 border rounded-2xl flex flex-col pb-12 p-6 items-start'>
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
              type='email' 
              name='email' 
              placeholder='Your email' 
              required 
            />
            <textarea 
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              name='message'
              placeholder='Your message'
              required
            ></textarea>
            <button className='btn btn-lg'>Send message</button>
          </motion.form>
        </div>

        {/* React Toastify Container */}
        <ToastContainer />
      </div>
    </section>
  )
};

export default Contact;
