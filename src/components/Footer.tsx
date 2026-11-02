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
    <footer className="bg-[#021C33] text-white/80 py-16 relative">
      {/* Filo superior del pie: degradado horizontal de amarillo a morado (#FFD303 -> #591CC9) */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFD303] to-[#591CC9]" />
      
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
            
            <p className="text-xs text-white/75 leading-relaxed max-w-sm">
              {HIWAY_COMPANY_INFO.tagline}. Soluciones digitales e infraestructura tecnológica de alta disponibilidad para empresas en Chile y Latinoamérica.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={HIWAY_COMPANY_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-[#05477D] border border-[#591CC9]/60 flex items-center gap-2 text-xs text-white hover:text-[#FFD303] hover:border-[#FFD303] transition-colors font-semibold"
                aria-label="LinkedIn HIWAY"
              >
                <Share2 className="w-3.5 h-3.5 text-[#FFD303]" />
                <span>LinkedIn Oficial</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-xs">
            <div className="font-bold text-[#FFD303] uppercase tracking-wider text-[11px]">
              Navegación
            </div>
            <ul className="space-y-2 text-white/80">
              <li><a href="/" className="hover:text-[#FFD303] transition-colors">Portada</a></li>
              <li><a href="/quienes-somos" className="hover:text-[#FFD303] transition-colors">Quiénes Somos</a></li>
              <li><a href="/soluciones-y-servicios" className="hover:text-[#FFD303] transition-colors">Soluciones y Servicios</a></li>
              <li><a href="/sectores-economicos" className="hover:text-[#FFD303] transition-colors">Sectores Económicos</a></li>
              <li><a href="/contacto" className="hover:text-[#FFD303] transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Soluciones Destacadas */}
          <div className="space-y-3 text-xs">
            <div className="font-bold text-[#FFD303] uppercase tracking-wider text-[11px]">
              Soluciones & Servicios
            </div>
            <ul className="space-y-2 text-white/80">
              <li><a href="/soluciones-y-servicios" className="hover:text-[#FFD303] transition-colors">Consultoría de Negocio</a></li>
              <li><a href="/soluciones-y-servicios" className="hover:text-[#FFD303] transition-colors">Servicios Gestionados NOC</a></li>
              <li><a href="/soluciones-y-servicios" className="hover:text-[#FFD303] transition-colors">Ciberseguridad OT/IT</a></li>
              <li><a href="/soluciones-y-servicios" className="hover:text-[#FFD303] transition-colors">Teletrabajo Hi-Office</a></li>
              <li><a href="/soluciones-y-servicios" className="hover:text-[#FFD303] transition-colors">Site Connectivity & IoT</a></li>
            </ul>
          </div>

          {/* Sedes */}
          <div className="space-y-3 text-xs">
            <div className="font-bold text-[#FFD303] uppercase tracking-wider text-[11px]">
              Sedes
            </div>
            <div className="space-y-2 text-white/80">
              <div><strong className="text-white">Casa Matriz:</strong> Isidora Goyenechea 3621 Of. 201, Las Condes, Santiago, Chile</div>
              <div><strong className="text-white">Filial México:</strong> Av. Revolución 1267 – piso 19, CDMX</div>
              <div><strong className="text-white">Mesa de Servicios:</strong> +56 2 2940 7502</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#05477D]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          
          <div className="text-white/70">
            &copy; 2026 Hiway · Todos los derechos reservados
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#05477D] border border-[#591CC9]/60 text-white hover:text-[#FFD303] hover:border-[#FFD303] transition-colors"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4 text-[#FFD303]" />
            </button>
          </div>

        </div>

      </div>

    </footer>
  );
};
