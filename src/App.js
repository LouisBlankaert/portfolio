import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='bg-primary min-h-screen'>
      <Header />
      <Banner />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
