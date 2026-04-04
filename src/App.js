import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import VisionMission from './components/VisionMission';
import WhyUs from './components/WhyUs';
import Products from './components/Products';
import Export from './components/Export';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutUs />
      <VisionMission />
      <WhyUs />
      <Products />
      <Export />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;

