import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from '../utils/variants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
    <section className='section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-8'>
          {/* text + socials */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className='flex-1 flex flex-col justify-center gap-8'>
            <div>
              <span className='badge-pill mb-4'><span className='dot' />Get in touch</span>
              <h2 className='h2 mt-4'>Let's work<br />together</h2>
              <p className='text-gray-400 leading-relaxed max-w-md'>Have a project in mind? I'd love to discuss how we can work together. Send me a message and I'll get back to you as soon as possible.</p>
            </div>

            <div className='card p-5 flex items-center gap-4 max-w-md'>
              <span className='w-2 h-2 rounded-full bg-accent shrink-0' />
              <p className='text-sm text-gray-300'>Currently <span className='text-accent font-semibold'>available for new projects</span>.</p>
            </div>

            <div className='flex gap-3'>
              <a
                href='https://github.com/LouisBlankaert'
                target="_blank" rel="noopener noreferrer"
                className='w-11 h-11 rounded-full border border-white/10 bg-card flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/50 transition-colors'
              >
                <FaGithub className='text-lg' />
              </a>
              <a
                href='https://linkedin.com/in/louis-blankaert-969595177'
                target="_blank" rel="noopener noreferrer"
                className='w-11 h-11 rounded-full border border-white/10 bg-card flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/50 transition-colors'
              >
                <FaLinkedin className='text-lg' />
              </a>
            </div>
          </motion.div>

          {/* form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className='flex-1 card flex flex-col gap-y-5 p-8'>
            <div>
              <label className='block text-xs uppercase tracking-wider text-gray-500 mb-2'>Email address</label>
              <input
                className='bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 outline-none w-full placeholder:text-gray-600 text-white focus:border-accent/60 transition-colors'
                type='email'
                name='email'
                placeholder='your.email@example.com'
                required
              />
            </div>
            <div>
              <label className='block text-xs uppercase tracking-wider text-gray-500 mb-2'>Message</label>
              <textarea
                className='bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 outline-none w-full placeholder:text-gray-600 text-white focus:border-accent/60 transition-colors resize-none'
                name='message'
                placeholder='Tell me about your project...'
                rows='6'
                required
              ></textarea>
            </div>
            <button className='btn btn-lg mt-2 w-full'>Send message</button>
          </motion.form>
        </div>

        <ToastContainer theme='dark' />
      </div>
    </section>
  )
};

export default Contact;
