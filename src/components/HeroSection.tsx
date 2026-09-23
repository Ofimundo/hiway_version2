'use client';

import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Download, 
  Sparkles
} from 'lucide-react';
import { HIWAY_COMPANY_INFO } from '@/data/hiwayData';

interface HeroSectionProps {
  onOpenBrochureModal: (slug?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBrochureModal }) => {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden bg-white">
      
      {/* Ambient Glow Effects */}
      <div className="cyber-glow-cyan top-10 left-1/4 opacity-60" />
      <div className="cyber-glow-green top-1/3 right-1/4 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Top Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00b0e5] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#05477d]" />
            </span>
            <span className="text-xs font-bold text-[#05477d] tracking-wide uppercase">
              {HIWAY_COMPANY_INFO.hashtag} · Soluciones Digitales Innovadoras
            </span>
            <Sparkles className="w-4 h-4 text-[#00b0e5] ml-1" />
          </div>

          {/* Main Headline (High Contrast Slate 900 on White) */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
            {HIWAY_COMPANY_INFO.heroHeadline} & <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Ciberseguridad Tecnológica</span>
          </h1>

          {/* Subheadline & Description */}
          <p className="text-base sm:text-lg text-slate-700 max-w-3xl mx-auto font-medium leading-relaxed">
            {HIWAY_COMPANY_INFO.heroSubheadline} Protegemos y conectamos la infraestructura crítica de industrias exigentes en Chile y Latinoamérica.
          </p>

          {/* Action Buttons in Matching Degradé Gradients */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#contacto"
              className="px-8 py-4 text-sm font-bold btn-gradient rounded-2xl flex items-center gap-2 group transform hover:scale-[1.02] transition-transform"
            >
              <span>Solicitar Consultoría Técnica</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>


          </div>

        </div>

      </div>

    </section>
  );
};
