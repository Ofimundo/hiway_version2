'use client';

import React from 'react';
import { 
  Target, 
  Eye, 
  Sparkles, 
  Users, 
  TrendingUp,
  Video,
  Handshake,
  ShieldCheck
} from 'lucide-react';
import { HIWAY_COMPANY_INFO } from '@/data/hiwayData';

export const AboutUsSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 relative bg-[#05335C]">
      
      {/* Background Glow */}
      <div className="cyber-glow-cyan top-1/4 -right-40 opacity-60" />
      <div className="cyber-glow-green bottom-10 -left-40 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#05477D] border border-[#FFD303]/40 text-xs font-bold text-[#FFD303] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD303]" />
            Quiénes Somos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Construcción Conjunta de <span className="text-gradient-cyan">Valor & Diferenciación</span>
          </h2>
          <p className="text-white/85 text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Utilizamos la tecnología como motor de transformación para generar operaciones de alto rendimiento en toda la región.
          </p>
        </div>

        {/* Mission & Vision Cards: Azul Medio (#05477D) with Gradient Border Line */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Misión */}
          <div className="gradient-border-box p-8 sm:p-10 relative group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#021C33] border border-[#591CC9] flex items-center justify-center text-[#FFD303] shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                <Target className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">Nuestra Misión</h3>
                <p className="text-xs text-[#FFD303] font-bold uppercase tracking-wider">Transformación Digital</p>
              </div>
            </div>
            <p className="text-white/85 text-sm leading-relaxed font-medium">
              {HIWAY_COMPANY_INFO.mission}
            </p>
          </div>

          {/* Visión */}
          <div className="gradient-border-box p-8 sm:p-10 relative group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#021C33] border border-[#591CC9] flex items-center justify-center text-[#FFD303] shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                <Eye className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">Nuestra Visión</h3>
                <p className="text-xs text-[#FFD303] font-bold uppercase tracking-wider">Liderazgo Regional Latam</p>
              </div>
            </div>
            <p className="text-white/85 text-sm leading-relaxed font-medium">
              {HIWAY_COMPANY_INFO.vision}
            </p>
          </div>

        </div>

        {/* Core Values: Azul Medio Cards (#05477D) */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-black text-white">Nuestros Valores Fundamentales</h3>
            <p className="text-xs text-white/75 font-medium">Principios que guían la relación con nuestros clientes y colaboradores</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIWAY_COMPANY_INFO.values.map((val, idx) => (
              <div 
                key={idx} 
                className="gradient-border-box p-6 space-y-3"
              >
                <div className="w-9 h-9 rounded-xl bg-[#021C33] border border-[#591CC9] text-[#FFD303] flex items-center justify-center text-xs font-black font-mono shadow-sm">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-bold text-white">{val.title}</h4>
                <p className="text-xs text-white/85 leading-relaxed font-medium">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HIWAY_COMPANY_INFO.strategicPillars.map((pillar, pIdx) => (
            <div 
              key={pIdx} 
              className="gradient-border-box p-8 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#021C33] border border-[#591CC9] text-[#FFD303]">
                  {pIdx === 0 ? <Users className="w-6 h-6" /> : <TrendingUp className="w-6 h-6 text-[#FFD303]" />}
                </div>
                <h4 className="text-xl font-bold text-white">{pillar.title}</h4>
              </div>
              <p className="text-xs text-white/85 leading-relaxed font-medium">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>

        {/* Strategic Alliances Showcase */}
        <div className="gradient-border-box p-8 sm:p-10 space-y-8 text-center">
          <div className="space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#021C33] border border-[#FFD303]/40 text-xs font-bold text-[#FFD303] uppercase tracking-wider">
              <Handshake className="w-3.5 h-3.5 text-[#FFD303]" />
              Ecosistema Global de Partners
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              En Hiway contamos con las <span className="text-gradient-cyan">mejores alianzas</span>
            </h3>
            <p className="text-xs text-white/80 font-medium">
              Colaboramos con los líderes tecnológicos mundiales en ciberseguridad, redes y nube para entregar soluciones de grado empresarial.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 pt-2">
            {HIWAY_COMPANY_INFO.alliances.map((partner, aIdx) => (
              <div 
                key={aIdx} 
                className="p-5 rounded-2xl bg-[#021C33] border border-[#591CC9]/60 hover:border-[#FFD303] hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center space-y-2 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#05477D] border border-[#591CC9]/60 group-hover:border-[#FFD303] flex items-center justify-center shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-[#FFD303] group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-sm font-black text-white tracking-wide font-mono group-hover:text-[#FFD303] transition-colors">
                  {partner.name}
                </div>
                {partner.tier && (
                  <span className="text-[9px] font-bold text-[#FFD303] bg-[#591CC9]/30 px-2 py-0.5 rounded border border-[#591CC9]">
                    {partner.tier}
                  </span>
                )}
                <span className="text-[9px] text-white/70 font-medium truncate max-w-full">
                  {partner.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Feature: Mutual de Seguros */}
        <div className="gradient-border-box p-8 sm:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#021C33] border border-[#591CC9] text-[#FFD303]">
                <Video className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#FFD303] uppercase tracking-widest font-bold">Caso de Éxito Destacado</span>
                <h4 className="text-2xl font-black text-white">{HIWAY_COMPANY_INFO.caseStudy.client}</h4>
              </div>
            </div>
            <span className="px-3.5 py-1 text-[11px] font-bold text-[#FFD303] bg-[#021C33] border border-[#591CC9] rounded-full">
              Cisco + HIWAY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="p-5 rounded-2xl bg-[#021C33] border border-[#591CC9]/50 space-y-2">
              <div className="font-bold text-white text-sm">{HIWAY_COMPANY_INFO.caseStudy.title}</div>
              <p className="text-white/85 leading-relaxed font-medium">{HIWAY_COMPANY_INFO.caseStudy.summary}</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#021C33] border border-[#591CC9]/50 space-y-2">
              <div className="font-bold text-[#FFD303] text-sm">Impacto en la Operación</div>
              <p className="text-white/85 leading-relaxed font-medium">{HIWAY_COMPANY_INFO.caseStudy.impact}</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
