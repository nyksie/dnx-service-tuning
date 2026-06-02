import React from 'react';
import { Wrench } from 'lucide-react';

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <Wrench className="text-orange-500 h-6 w-6 animate-pulse" />
        <span className="text-2xl font-black tracking-wider text-white">DNX<span className="text-orange-500">TUNING</span></span>
      </div>
      <div className="hidden md:flex gap-8 text-gray-300 font-medium">
        <button onClick={() => scrollTo('servicii')} className="hover:text-orange-500 transition">Servicii</button>
        <button onClick={() => scrollTo('preturi')} className="hover:text-orange-500 transition">Prețuri Manopere</button>
        <button onClick={() => scrollTo('recenzii')} className="hover:text-orange-500 transition">Recenzii</button>
        <button onClick={() => scrollTo('contact')} className="hover:text-orange-500 transition">Contact</button>
      </div>
      <a href="tel:0753480111" className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-4 py-2 rounded-lg transition text-sm shadow-lg shadow-orange-600/20">
        Sună Acum
      </a>
    </nav>
  );
}