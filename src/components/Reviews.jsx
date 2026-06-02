import React from 'react';

export default function Reviews() {
  // Adăugăm Flexbox în interiorul iframe-ului ca să aliniem widgetul perfect pe centru
  const iframeSrcDoc = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            background: transparent;
            overflow: hidden;
            display: flex;
            align-items: center; /* Centrare pe verticală */
            justify-content: center; /* Centrare pe orizontală */
          }
          .ti-widget { 
            width: 100% !important; 
          }
        </style>
      </head>
      <body>
        <script defer async src="https://cdn.trustindex.io/loader.js?23770467310327466736fdd0afb"></script>
        <div class="ti-widget" data-layout-id="23770467310327466736fdd0afb"></div>
      </body>
    </html>
  `;

  return (
    <section id="recenzii" className="py-24 bg-slate-900/20 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Antet */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-black text-white tracking-tight">
              Ce spun <span className="text-orange-500">clienții noștri</span>
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              Recenzii preluate în timp real de pe profilul nostru oficial Google Maps.
            </p>
          </div>
          
          <a 
            href="https://share.google/AZQgjiOemdl2K4zxQ" 
            target="_blank" 
            rel="noreferrer" 
            className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-xl transition text-sm shadow-lg shadow-orange-600/20 text-center cursor-pointer shrink-0 w-full sm:w-auto"
          >
            Lasă-ne o recenzie pe Google
          </a>
        </div>

        {/* Zona containerului - acum folosește flex pentru centrare absolută */}
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl overflow-hidden p-2 flex items-center justify-center">
          {/* Am coborât înălțimea la 240px ca să îmbrace perfect caruselul fără spații moarte */}
          <iframe
            title="DNX Google Reviews"
            srcDoc={iframeSrcDoc}
            className="w-full h-[240px] border-0 bg-transparent block"
            scrolling="no"
          />
        </div>

      </div>
    </section>
  );
}