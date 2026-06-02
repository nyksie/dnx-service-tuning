import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-orange-500 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Reviews />
      <Contact />
    </div>
  );
}