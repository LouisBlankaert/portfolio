import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

const links = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'services', label: 'Skills' },
  { to: 'work', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 bg-primary/80 backdrop-blur-md border-b border-white/5'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center h-[76px]'>
          {/* logo */}
          <Link to='home' smooth={true} className='cursor-pointer flex items-center gap-2'>
            <span className='w-9 h-9 rounded-lg bg-accent text-primary font-display font-semibold text-lg flex items-center justify-center'>
              LB
            </span>
          </Link>

          {/* desktop nav */}
          <nav className='hidden lg:flex items-center gap-8'>
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                spy={true}
                offset={-76}
                activeClass='text-accent'
                className='cursor-pointer text-sm font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors'
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className='hidden lg:block'>
            <Link to='contact' smooth={true} offset={-76} className='cursor-pointer'>
              <button className='btn btn-sm'>Have a project</button>
            </Link>
          </div>

          {/* mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className='lg:hidden text-2xl text-gray-300'
            aria-label='Toggle menu'
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* mobile nav */}
        {open && (
          <nav className='lg:hidden flex flex-col gap-1 pb-6'>
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                spy={true}
                offset={-76}
                activeClass='text-accent'
                onClick={() => setOpen(false)}
                className='cursor-pointer text-sm font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors py-3'
              >
                {link.label}
              </Link>
            ))}
            <Link to='contact' smooth={true} offset={-76} onClick={() => setOpen(false)} className='cursor-pointer mt-2'>
              <button className='btn btn-sm w-full'>Have a project</button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
