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
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 py-3 shadow-md shadow-slate-200/50' 
          : 'bg-white/90 backdrop-blur-md py-4 border-b border-slate-100'
      }`}
    >
      {/* Top Gradient Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#05335c] via-[#05477d] via-[#00b0e5] to-[#21ceff]" />
      {/* Bottom Gradient Subtle Border Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#05335c]/30 via-[#00b0e5]/30 to-[#21ceff]/30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <Link href="/" className="flex items-center group py-1">
            <img 
              src="/hiway-logo-color.png" 
              alt="HIWAY Networks & Security" 
              className="h-10 sm:h-12 w-auto object-contain group-hover:scale-[1.03] transition-transform" 
            />
          </Link>

          {/* Desktop Navigation Links (Páginas Independientes) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <Link 
              href="/quienes-somos" 
              className="hover:text-[#00b0e5] transition-colors"
            >
              Quiénes Somos
            </Link>
            <Link 
              href="/soluciones-y-servicios" 
              className="hover:text-[#00b0e5] transition-colors"
            >
              Soluciones & Servicios
            </Link>
            <Link 
              href="/sectores-economicos" 
              className="hover:text-[#00b0e5] transition-colors"
            >
              Sectores Económicos
            </Link>
            <Link 
              href="/metodologias" 
              className="hover:text-[#00b0e5] transition-colors"
            >
              Metodologías
            </Link>
            <Link 
              href="/contacto" 
              className="hover:text-[#00b0e5] transition-colors"
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
                className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 rounded-xl transition-colors"
              >
                <Globe2 className="w-3.5 h-3.5 text-[#00b0e5]" />
                <span>{selectedOffice.city} ({selectedOffice.country})</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {officeDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl p-2 border border-slate-200 space-y-1 z-50">
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
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
                          ? 'bg-sky-50 text-[#05477d] font-bold border border-sky-200' 
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div>
                        <div className="font-semibold text-slate-900">{office.city}, {office.country}</div>
                        <div className="text-[10px] text-slate-500">{office.phone}</div>
                      </div>
                      {office.isHQ && (
                        <span className="text-[9px] bg-sky-100 text-[#05477d] px-1.5 py-0.5 rounded font-semibold border border-sky-200">
                          Matriz
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Contact CTA in Gradient */}
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
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-xl bg-slate-100 border border-slate-200"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 font-semibold text-slate-700">
            <Link 
              href="/quienes-somos" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-slate-100 hover:text-sky-600 transition-colors"
            >
              Quiénes Somos
            </Link>
            <Link 
              href="/soluciones-y-servicios" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-sky-600 transition-colors"
            >
              Soluciones & Servicios
            </Link>
            <Link 
              href="/sectores-economicos" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-sky-600 transition-colors"
            >
              Sectores Económicos
            </Link>
            <Link 
              href="/metodologias" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-sky-600 transition-colors"
            >
              Metodologías
            </Link>
            <Link 
              href="/contacto" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-sky-600 transition-colors"
            >
              Contacto
            </Link>
          </nav>

          <div className="pt-4 border-t border-slate-100 space-y-3">
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
