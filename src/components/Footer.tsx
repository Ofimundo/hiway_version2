'use client';

import React from 'react';
import { 
  ShieldCheck, 
  ArrowUp,
  Share2
} from 'lucide-react';
import { HIWAY_COMPANY_INFO } from '@/data/hiwayData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 relative border-t border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <img 
                src="/hiway-logo-white.png" 
                alt="HIWAY Networks & Security" 
                className="h-10 sm:h-12 w-auto object-contain" 
              />
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {HIWAY_COMPANY_INFO.tagline}. Soluciones digitales e infraestructura tecnológica de alta disponibilidad para empresas en Chile y Latinoamérica.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={HIWAY_COMPANY_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 flex items-center gap-2 text-xs text-slate-200 hover:text-[#21ceff] hover:border-[#00b0e5]/40 transition-colors font-semibold"
                aria-label="LinkedIn HIWAY"
              >
                <Share2 className="w-3.5 h-3.5 text-[#00b0e5]" />
                <span>LinkedIn Oficial</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-xs">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              Navegación
            </div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="/" className="hover:text-[#21ceff] transition-colors">Portada</a></li>
              <li><a href="/quienes-somos" className="hover:text-[#21ceff] transition-colors">Quiénes Somos</a></li>
              <li><a href="/soluciones-y-servicios" className="hover:text-[#21ceff] transition-colors">Soluciones y Servicios</a></li>
              <li><a href="/sectores-economicos" className="hover:text-[#21ceff] transition-colors">Sectores Económicos</a></li>
              <li><a href="/contacto" className="hover:text-[#21ceff] transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Soluciones Destacadas */}
          <div className="space-y-3 text-xs">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              Soluciones & Servicios
            </div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="/soluciones-y-servicios" className="hover:text-[#21ceff] transition-colors">Consultoría de Negocio</a></li>
              <li><a href="/soluciones-y-servicios" className="hover:text-[#21ceff] transition-colors">Servicios Gestionados NOC</a></li>
              <li><a href="/soluciones-y-servicios" className="hover:text-[#21ceff] transition-colors">Ciberseguridad OT/IT</a></li>
              <li><a href="/soluciones-y-servicios" className="hover:text-[#21ceff] transition-colors">Teletrabajo Hi-Office</a></li>
              <li><a href="/soluciones-y-servicios" className="hover:text-[#21ceff] transition-colors">Site Connectivity & IoT</a></li>
            </ul>
          </div>

          {/* Sedes */}
          <div className="space-y-3 text-xs">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              Sedes
            </div>
            <div className="space-y-2 text-slate-400">
              <div><strong>Casa Matriz:</strong> Isidora Goyenechea 3621 Of. 201, Las Condes, Santiago, Chile</div>
              <div><strong>Filial México:</strong> Av. Revolución 1267 – piso 19, CDMX</div>
              <div><strong>Mesa de Servicios:</strong> +56 2 2940 7502</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          
          <div className="text-slate-400">
            &copy; 2026 Hiway · Todos los derechos reservados
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-[#00b0e5]/40 transition-colors"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4 text-[#00b0e5]" />
            </button>
          </div>

        </div>

      </div>

    </footer>
  );
};
