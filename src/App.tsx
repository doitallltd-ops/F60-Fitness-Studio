import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Schedule from './components/Schedule';
import Trainers from './components/Trainers';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black selection:bg-brand-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Schedule />
        <Trainers />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
