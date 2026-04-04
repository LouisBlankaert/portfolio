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
        <div className='flex flex-col lg:flex-row gap-12 items-stretch'>
          {/* text */}
          <motion.div 
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount: 0.2}}
            className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-sm uppercase neon-text-cyan font-semibold mb-4 tracking-wider'>Get in touch</h4>
              <h2 className='h2 text-white mb-6'>Let's work<br/>together</h2>
              <p className='text-gray-400 text-lg mb-8 max-w-md'>Have a project in mind? I'd love to discuss how we can work together. Send me a message and I'll get back to you as soon as possible.</p>
            </div>
          </motion.div>
          {/* form */}
          <motion.form 
            onSubmit={handleSubmit} 
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount: 0.2}}
            className='flex-1 border border-neon-lime/40 rounded-xl flex flex-col gap-y-6 p-8 items-start bg-black/40' style={{boxShadow: '0 0 10px rgba(0, 255, 136, 0.08)'}}>
            <input 
              className='bg-transparent border-b border-neon-lime/50 py-3 outline-none w-full placeholder:text-gray-600 text-white focus:border-neon-cyan transition-all' 
              type='email' 
              name='email' 
              placeholder='your.email@example.com' 
              required 
            />
            <textarea 
              className='bg-transparent border-b border-neon-lime/50 py-4 outline-none w-full placeholder:text-gray-600 text-white focus:border-neon-cyan transition-all resize-none'
              name='message'
              placeholder='Tell me about your project...'
              rows='6'
              required
            ></textarea>
            <button className='btn btn-lg mt-6'>Send message</button>
          </motion.form>
        </div>

        {/* React Toastify Container */}
        <ToastContainer />
      </div>
    </section>
  )
};

export default Contact;
