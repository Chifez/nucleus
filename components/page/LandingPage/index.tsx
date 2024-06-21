import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import Feature from './Feature';
import Footer from './Footer';
import Pricing from './Pricing';
import FAQ from './FAQ';

const Landingpage = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Feature />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Landingpage;
