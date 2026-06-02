import React from 'react';
import { ShieldCheck, Star } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-950 pt-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 text-center z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12">
        <div className="text-left space-y-6">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full text-orange-400 text-sm font-semibold">
            <Star className="w-4 h-4 fill-orange-400" /> 5.0 Rating pe Google Recenzii
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Performanță și <br />
            <span className="gradient-text">Evacuări Custom</span> <br />
            la Galați
          </h1>
          <p className="text-gray-400 text-lg max-w-lg">
            Atelier specializat în sisteme de evacuare din inox, sudură profesională TIG Argon, reparații tobe și upgrade-uri auto/audio în Smârdan, Galați.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button onClick={() => document.getElementById('preturi').scrollIntoView({ behavior: 'smooth' })} className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-xl transition text-lg shadow-lg shadow-orange-600/30">
              Vezi Listă Prețuri
            </button>
            <a href="tel:0753480111" className="bg-slate-900 border border-slate-700 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl transition text-lg">
              Contactează-ne
            </a>
          </div>
        </div>
        
        {/* Poză sau Element Vizual care face referire la lucrare */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r inline-block from-orange-600 to-amber-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-slate-900 border border-slate-800 p-4 rounded-2xl overflow-hidden shadow-2xl">
            {/* Aici utilizăm imaginea atașată image_8dd124.jpg ca inspirație / mockup */}
            <div className="h-72 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800/50 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(to bottom, rgba(15,23,42,0.4), rgba(15,23,42,0.95)), url('image_8dd124.jpg')" }}>
              <div className="text-center p-6">
                <p className="text-orange-500 font-mono text-sm tracking-widest uppercase">Calitate Sudură TIG</p>
                <h3 className="text-xl font-bold mt-2 text-white">Sisteme custom din inox sudate milimetric</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}