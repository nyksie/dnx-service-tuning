import React from 'react';
import { Flame, Disc, Shield, Settings, Volume2, Sparkles, Activity } from 'lucide-react';

export default function Services() {
  const servicii = [
    { title: "Evacuări Custom", desc: "Proiectare și execuție trasee complete de evacuare.", icon: Flame },
    { title: "Evacuare Inox", desc: "Materiale premium rezistente la temperaturi și coroziune.", icon: Activity },
    { title: "Sudură Tobe / TIG Argon", desc: "Sudură profesională în mediu protejat pentru finisaje de top.", icon: Shield },
    { title: "Reparații Tobe Eșapament", desc: "Înlocuire racorduri flexibile, site și recondiționări.", icon: Settings },
    { title: "Car Audio Montaje", desc: "Sisteme audio dedicate pentru o acustică impecabilă în mașină.", icon: Volume2 },
    { title: "Incinte Subwoofer & Fețe Uși", desc: "Construcții custom din fibră/MDF adaptate mașinii tale.", icon: Disc },
    { title: "Polish Faruri Polimer", desc: "Restaurare claritate faruri prin polimerizare durabilă.", icon: Sparkles },
  ];

  return (
    <section id="servicii" className="py-24 bg-slate-900/50 border-y border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white">Ce Facem la <span className="text-orange-500">DNX</span></h2>
          <p className="text-gray-400 mt-4">Servicii de tuning, mecanică de evacuări și estetică auto executate la cele mai înalte standarde din Galați.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicii.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-slate-950 border border-slate-800 p-6 rounded-xl hover:border-orange-500/50 transition-all group duration-300">
                <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition">{item.title}</h3>
                <p className="text-gray-400 mt-2 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}