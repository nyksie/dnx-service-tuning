import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Pricing() {
  const categoriiPreturi = [
    {
      titlu: "Evacuări & Sudură",
      iteme: [
        { nume: "Reparație Tobă (Sudură standard)", pret: "de la 100 RON" },
        { nume: "Înlocuire Racord Flexibil", pret: "de la 150 RON" },
        { nume: "Sudură TIG Argon / segment inox", pret: "de la 200 RON" },
        { nume: "Traseu Evacuare Custom Inox", pret: "Preț la proiect" }
      ]
    },
    {
      titlu: "Audio & Detailing",
      iteme: [
        { nume: "Polish Faruri Polimer (Set)", pret: "150 RON" },
        { nume: "Montaj Player / Navigație Auto", pret: "de la 100 RON" },
        { nume: "Montaj Subwoofer + Amplificator", pret: "de la 200 RON" },
        { nume: "Fețe de uși / Incinte Custom", pret: "Preț la proiect" }
      ]
    }
  ];

  return (
    <section id="preturi" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white">Listă <span className="text-orange-500">Prețuri Manopere</span></h2>
          <p className="text-gray-400 mt-4">Transparență totală. Prețurile pot varia în funcție de complexitatea lucrării și de materialele alese.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categoriiPreturi.map((cat, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 blur-2xl pointer-events-none"></div>
              <h3 className="text-2xl font-bold text-orange-500 mb-6 border-b border-slate-800 pb-3">{cat.titlu}</h3>
              <ul className="space-y-4">
                {cat.iteme.map((item, i) => (
                  <li key={i} className="flex justify-between items-center gap-4 bg-slate-950/40 p-3 rounded-lg border border-slate-800/30">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span className="text-gray-200 font-medium text-sm md:text-base">{item.nume}</span>
                    </div>
                    <span className="text-white font-mono font-bold whitespace-nowrap bg-slate-800 px-3 py-1 rounded text-sm border border-slate-700">
                      {item.pret}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 mt-8 text-sm italic">
          *Pentru configurări complexe și cotații exacte de preț pe evacuări custom, vă rugăm să ne vizitați la atelier!
        </p>
      </div>
    </section>
  );
}