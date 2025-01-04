import React from 'react'
import Hero from './Hero'
import Header from './Header'
import Vision from './Vision';
import Mission from './Mission';
import Testimonials from './Testimonials';
import Team from './Team';
import Footer from './Footer';
import Services from './Services';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Vision />
      <Mission />
      <Services />
      <Testimonials />
      <Team />
      <Footer />
    </div>
  );
}

export default App