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
    <div className="relative pt-32 pb-16 bg-white border-b border-slate-200 overflow-hidden">
      
      {/* Decorative Gradient Glows */}
      <div className="cyber-glow-cyan -top-24 -left-24 opacity-60" />
      <div className="cyber-glow-green -bottom-24 -right-24 opacity-60" />

      {/* Visible Gradient Bar Top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#05335c] via-[#05477d] via-[#00b0e5] to-[#21ceff]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-[#00b0e5] transition-colors">
            Inicio
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#05477d] font-bold">{category}</span>
        </div>

        {/* Header Content */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#05335c] via-[#05477d] to-[#00b0e5] text-white text-xs font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#21ceff]" />
            {badge}
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {title}
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            {subtitle}
          </p>
        </div>

      </div>
    </div>
  );
};
