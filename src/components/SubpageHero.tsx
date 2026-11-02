'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Sparkles } from 'lucide-react';

interface SubpageHeroProps {
  title: string;
  subtitle: string;
  badge: string;
  category: string;
}

export const SubpageHero: React.FC<SubpageHeroProps> = ({
  title,
  subtitle,
  badge,
  category,
}) => {
  return (
    <div className="relative pt-32 pb-16 bg-[#05335C]">
      
      {/* Decorative Gradient Glows */}
      <div className="cyber-glow-cyan -top-24 -left-24 opacity-70" />
      <div className="cyber-glow-green -bottom-24 -right-24 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold text-white/70">
          <Link href="/" className="hover:text-[#FFD303] transition-colors">
            Inicio
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/50" />
          <span className="text-[#FFD303] font-bold">{category}</span>
        </div>

        {/* Header Content */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#05477D] border border-[#FFD303]/40 text-[#FFD303] text-xs font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD303]" />
            {badge}
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {title}
          </h1>

          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-medium">
            {subtitle}
          </p>
        </div>

      </div>
    </div>
  );
};
