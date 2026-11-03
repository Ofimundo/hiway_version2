'use client';

import React from 'react';
import Link from 'next/link';
import { 
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
      {/* Filo superior del pie */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          
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
                className="px-3 py-1.5 rounded-xl bg-[#05477D] border border-white/20 flex items-center gap-2 text-xs text-white hover:border-white transition-colors font-semibold"
                aria-label="LinkedIn HIWAY"
              >
                <Share2 className="w-3.5 h-3.5 text-white" />
                <span>LinkedIn Oficial</span>
              </a>
            </div>
          </div>

          {/* Grupo Ofimundo */}
          <div className="space-y-3 text-xs">
            <div className="font-bold uppercase tracking-wider text-[11px] flex items-center gap-2 text-white">
              <span className="w-1.5 h-3.5 bg-white rounded-full inline-block" />
              <span>Grupo Ofimundo</span>
            </div>
            <ul className="space-y-2 text-white/80">
              <li>
                <a 
                  href="https://ofimundo.cl" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors font-medium flex items-center gap-1.5"
                >
                  Ofimundo
                </a>
              </li>
              <li>
                <a 
                  href="https://dreamtec.cl/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors font-medium flex items-center gap-1.5"
                >
                  Dreamtec
                </a>
              </li>
              <li>
                <a 
                  href="https://globalhorizonlatam.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors font-medium flex items-center gap-1.5"
                >
                  Global Horizon Latam
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-xs">
            <div className="font-bold uppercase tracking-wider text-[11px] text-white">
              Navegación
            </div>
            <ul className="space-y-2 text-white/80">
              <li><Link href="/" className="hover:text-white transition-colors">Portada</Link></li>
              <li><Link href="/quienes-somos" className="hover:text-white transition-colors">Quiénes Somos</Link></li>
              <li><Link href="/soluciones-y-servicios" className="hover:text-white transition-colors">Soluciones y Servicios</Link></li>
              <li><Link href="/sectores-economicos" className="hover:text-white transition-colors">Sectores Económicos</Link></li>
              <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Soluciones Destacadas */}
          <div className="space-y-3 text-xs">
            <div className="font-bold uppercase tracking-wider text-[11px] text-white">
              Soluciones & Servicios
            </div>
            <ul className="space-y-2 text-white/80">
              <li><Link href="/soluciones-y-servicios" className="hover:text-white transition-colors">Consultoría de Negocio</Link></li>
              <li><Link href="/soluciones-y-servicios" className="hover:text-white transition-colors">Servicios Gestionados NOC</Link></li>
              <li><Link href="/soluciones-y-servicios" className="hover:text-white transition-colors">Ciberseguridad OT/IT</Link></li>
              <li><Link href="/soluciones-y-servicios" className="hover:text-white transition-colors">Teletrabajo Hi-Office</Link></li>
              <li><Link href="/soluciones-y-servicios" className="hover:text-white transition-colors">Site Connectivity & IoT</Link></li>
            </ul>
          </div>

          {/* Sedes */}
          <div className="space-y-3 text-xs">
            <div className="font-bold uppercase tracking-wider text-[11px] text-white">
              Sedes
            </div>
            <div className="space-y-2 text-white/80">
              <div><strong className="text-white">Casa Matriz:</strong> Lota 2305, Providencia, Santiago</div>
              <div><strong className="text-white">Filial México:</strong> Av. Revolución 1267 – piso 19, CDMX</div>
              <div><strong className="text-white">Mesa de Servicios:</strong> +56 2 2940 7502</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Grupo Empresarial Ofimundo */}
        <div className="pt-8 border-t border-[#05477D]/60 flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
          
          <div className="text-white/70 order-2 md:order-1 text-center md:text-left">
            &copy; 2026 Hiway · Todos los derechos reservados
          </div>

          {/* Banner Grupo Empresarial Ofimundo */}
          <div className="order-1 md:order-2 flex flex-col items-center md:items-end gap-1.5">
            <span className="text-[12px] text-white/70 font-normal">
              Un ecosistema de soluciones para cada desafío
            </span>
            <div className="flex items-center gap-4">
              <a 
                href="https://ofimundo.cl" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[14px] font-bold tracking-wide text-white hover:text-white/80 transition-colors"
              >
                GRUPO EMPRESARIAL OFIMUNDO
              </a>

              <div className="flex items-center gap-3">
                {/* Logo Ofimundo */}
                <a href="https://ofimundo.cl" target="_blank" rel="noopener noreferrer" title="Ofimundo" className="hover:opacity-80 transition-opacity flex items-center">
                  <img src="/logos/ofimundo-icon.png?v=7" alt="Ofimundo" className="h-6 w-auto object-contain" />
                </a>

                <span className="text-white/40 text-sm font-light">|</span>

                {/* Logo Dreamtec */}
                <a href="https://dreamtec.cl/" target="_blank" rel="noopener noreferrer" title="Dreamtec" className="hover:opacity-80 transition-opacity flex items-center">
                  <img src="/logos/dreamtec-icon.png?v=7" alt="Dreamtec" className="h-6 w-auto object-contain" />
                </a>

                <span className="text-white/40 text-sm font-light">|</span>

                {/* Logo Global Horizon */}
                <a href="https://globalhorizonlatam.com/" target="_blank" rel="noopener noreferrer" title="Global Horizon Latam" className="hover:opacity-80 transition-opacity flex items-center">
                  <img src="/logos/global-icon.png?v=7" alt="Global Horizon Latam" className="h-6 w-auto object-contain" />
                </a>

                <span className="text-white/40 text-sm font-light">|</span>

                {/* Logo Hiway */}
                <Link 
                  href="/" 
                  onClick={scrollToTop} 
                  title="Hiway - Inicio" 
                  className="hover:opacity-80 transition-opacity flex items-center cursor-pointer"
                >
                  <img src="/logos/hiway-icon.png?v=8" alt="Hiway" className="h-6 w-auto object-contain" />
                </Link>
              </div>
            </div>
          </div>

          <div className="order-3 flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#05477D] border border-white/20 text-white hover:border-white transition-colors"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4 text-white" />
            </button>
          </div>

        </div>

      </div>

    </footer>
  );
};
