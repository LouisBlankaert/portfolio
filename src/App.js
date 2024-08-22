import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <div className='pl-3'> 
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      </div>
      {/* <div className='h-screen'></div> */}
    </div>
  );
};

export default App;
