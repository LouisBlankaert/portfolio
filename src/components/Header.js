import React from 'react';
import Logo from "../assets/logo.svg"

const Header = () => {

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='#'>
            <img src={Logo} alt="Logo" />
          </a>
          {/* button */}
            <button onClick={scrollToContact} className='btn btn-sm'>Work with me</button>
        </div>
      </div>
    </header>
  )
};

export default Header;
