import React from 'react';
import { Phone, MapPin, Clock, Mail, AlertCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Notificare atenționare */}
        <div className="bg-orange-500/10 border border-orange-500/20 p-6 rounded-2xl text-center mb-12">
          <AlertCircle className="w-6 h-6 text-orange-500 mx-auto mb-2" />
          <p className="text-white font-medium">
            Pentru orice informație nu ezitați să ne contactați la Nr. afișat mai jos!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Informații Directe */}
          <div className="space-y-4">
            <h2 className="text-3xl font-black text-white">Contact rapid</h2>
            
            <a href="tel:0753480111" className="flex items-center gap-4 bg-slate-900 p-4 rounded-xl border border-slate-800 hover:border-orange-500/30 transition block">
              <Phone className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-gray-500 text-xs uppercase font-bold">Telefon</p>
                <p className="text-white font-mono font-bold">0753 480 111</p>
              </div>
            </a>

            {/* Clic pe adresă deschide de asemenea navigarea directă */}
            <a href="https://maps.app.goo.gl/YiuQ2CTdwsX5qr159" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-slate-900 p-4 rounded-xl border border-slate-800 hover:border-orange-500/30 transition block">
              <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
              <div>
                <p className="text-gray-500 text-xs uppercase font-bold">Adresă</p>
                <p className="text-white text-sm">Galați, Smârdan, Strada Matei Corvin nr. 40</p>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-xl border border-slate-800">
              <Clock className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-gray-500 text-xs uppercase font-bold">Program</p>
                <p className="text-white text-sm">Luni - Vineri: 10:00 - 17:00</p>
              </div>
            </div>

            <a href="mailto:allnewtops@gmail.com" className="flex items-center gap-4 bg-slate-900 p-4 rounded-xl border border-slate-800 hover:border-orange-500/30 transition block">
              <Mail className="w-5 h-5 text-orange-500" />
              <div className="overflow-hidden">
                <p className="text-gray-500 text-xs uppercase font-bold">Email</p>
                <p className="text-white text-sm truncate">allnewtops@gmail.com</p>
              </div>
            </a>
          </div>

          {/* Caseta de Ghidaj Hartă cu link-ul tău scurt oficial */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between text-center min-h-[280px]">
            <div className="my-auto">
              <MapPin className="w-10 h-10 text-orange-500 mx-auto mb-2 animate-pulse" />
              <h4 className="text-white font-bold text-lg">Atelier DNX TUNING</h4>
              <p className="text-gray-400 text-sm mt-1">Smârdan, Str. Matei Corvin nr. 40</p>
              <p className="text-gray-500 text-xs mt-2">Apasă mai jos pentru a porni GPS-ul direct către noi.</p>
            </div>
            
            {/* LINK-UL TĂU EXACT CĂTRE GOOGLE MAPS */}
            <a 
              href="https://maps.app.goo.gl/YiuQ2CTdwsX5qr159" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded-xl transition text-sm block mt-4 shadow-lg shadow-orange-600/10 cursor-pointer"
            >
              Pornește Navigarea (Google Maps)
            </a>
          </div>
        </div>
        
        <div className="mt-20 border-t border-slate-900 pt-8 text-center text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} DNX Tuning Galați. Toate drepturile rezervate.
        </div>
      </div>
    </section>
  );
}