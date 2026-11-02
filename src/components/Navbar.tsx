'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Globe2, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles
} from 'lucide-react';
import { OFFICES } from '@/data/hiwayData';

interface NavbarProps {
  onOpenBrochureModal?: (slug?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState(OFFICES[0]);
  const [officeDropdownOpen, setOfficeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#021C33]/95 backdrop-blur-xl py-3 shadow-lg shadow-[#021C33]/60' 
          : 'bg-[#021C33]/90 backdrop-blur-md py-4'
      }`}
    >
      {/* Top Gradient Accent Line (#FFD303 -> #591CC9) */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFD303] to-[#591CC9]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <Link href="/" className="flex items-center group py-1">
            <img 
              src="/hiway-logo-white.png" 
              alt="HIWAY Networks & Security" 
              className="h-10 sm:h-12 w-auto object-contain group-hover:scale-[1.03] transition-transform" 
            />
          </Link>

          {/* Desktop Navigation Links (Páginas Independientes) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-white/90">
            <Link 
              href="/quienes-somos" 
              className="hover:text-[#FFD303] transition-colors"
            >
              Quiénes Somos
            </Link>
            <Link 
              href="/soluciones-y-servicios" 
              className="hover:text-[#FFD303] transition-colors"
            >
              Soluciones & Servicios
            </Link>
            <Link 
              href="/sectores-economicos" 
              className="hover:text-[#FFD303] transition-colors"
            >
              Sectores Económicos
            </Link>
            <Link 
              href="/metodologias" 
              className="hover:text-[#FFD303] transition-colors"
            >
              Metodologías
            </Link>
            <Link 
              href="/contacto" 
              className="hover:text-[#FFD303] transition-colors"
            >
              Contacto
            </Link>
          </nav>

          {/* Right Action Bar */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Regional Selector */}
            <div className="relative">
              <button 
                onClick={() => setOfficeDropdownOpen(!officeDropdownOpen)}
                className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-[#05477D] hover:bg-[#05477D]/80 border border-[#591CC9]/50 rounded-xl transition-colors"
              >
                <Globe2 className="w-3.5 h-3.5 text-[#FFD303]" />
                <span>{selectedOffice.city} ({selectedOffice.country})</span>
                <ChevronDown className="w-3 h-3 text-white/70" />
              </button>

              {officeDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-[#021C33] rounded-2xl shadow-2xl p-2 border border-[#05477D] space-y-1 z-50">
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-[#FFD303] uppercase tracking-wider">
                    Sedes Internacionales
                  </div>
                  {OFFICES.map((office) => (
                    <button
                      key={office.city}
                      onClick={() => {
                        setSelectedOffice(office);
                        setOfficeDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs rounded-xl flex items-center justify-between transition-colors ${
                        selectedOffice.city === office.city 
                          ? 'bg-[#05477D] text-white font-bold border border-[#FFD303]/40' 
                          : 'text-white/80 hover:bg-[#05335C]'
                      }`}
                    >
                      <div>
                        <div className="font-semibold text-white">{office.city}, {office.country}</div>
                        <div className="text-[10px] text-white/70">{office.phone}</div>
                      </div>
                      {office.isHQ && (
                        <span className="text-[9px] bg-[#591CC9]/30 text-[#FFD303] px-1.5 py-0.5 rounded font-semibold border border-[#591CC9]">
                          Matriz
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Contact CTA in Yellow Accent */}
            <Link 
              href="/contacto"
              className="px-5 py-2.5 text-xs font-bold btn-gradient rounded-xl flex items-center gap-1.5 transform hover:scale-[1.02] transition-transform"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Conversemos</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#FFD303] rounded-xl bg-[#05477D] border border-white/15"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#021C33] border-b border-[#05477D] px-4 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 font-semibold text-white">
            <Link 
              href="/quienes-somos" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-[#05477D] hover:text-[#FFD303] transition-colors"
            >
              Quiénes Somos
            </Link>
            <Link 
              href="/soluciones-y-servicios" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#05477D] hover:text-[#FFD303] transition-colors"
            >
              Soluciones & Servicios
            </Link>
            <Link 
              href="/sectores-economicos" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#05477D] hover:text-[#FFD303] transition-colors"
            >
              Sectores Económicos
            </Link>
            <Link 
              href="/metodologias" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#05477D] hover:text-[#FFD303] transition-colors"
            >
              Metodologías
            </Link>
            <Link 
              href="/contacto" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#05477D] hover:text-[#FFD303] transition-colors"
            >
              Contacto
            </Link>
          </nav>

          <div className="pt-4 border-t border-[#05477D] space-y-3">
            <Link 
              href="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block text-center py-3 text-xs font-bold btn-gradient rounded-xl"
            >
              Conversemos con un Consultor
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
