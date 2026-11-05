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
    <section className="relative pt-36 pb-24 bg-[#05335C]">
      
      {/* Ambient Glow Effects (#05477D & #591CC9) */}
      <div className="cyber-glow-cyan top-10 left-1/4 opacity-80" />
      <div className="cyber-glow-green top-1/3 right-1/4 opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Top Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#05477D] border border-[#591CC9]/80 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#591CC9] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#591CC9]" />
            </span>
            <span className="text-xs font-bold text-white tracking-wide uppercase">
              {HIWAY_COMPANY_INFO.hashtag} · Soluciones Digitales Innovadoras
            </span>
            <Sparkles className="w-4 h-4 text-white ml-1" />
          </div>

          {/* Main Headline (White on Navy #05335C with Purple #591CC9 Highlight) */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            {HIWAY_COMPANY_INFO.heroHeadline} <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Soluciones Digitales Tecnológicas</span>
          </h1>

          {/* Subheadline & Description */}
          <p className="text-base sm:text-lg text-white/85 max-w-3xl mx-auto font-medium leading-relaxed">
            {HIWAY_COMPANY_INFO.heroSubheadline}
          </p>

          {/* Action Buttons in Purple Accent (#591CC9) */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="/contacto"
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
