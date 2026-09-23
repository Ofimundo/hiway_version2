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
    <section id="nosotros" className="py-20 relative overflow-hidden bg-white">
      
      {/* Background Glow */}
      <div className="cyber-glow-cyan top-1/4 -right-40 opacity-40" />
      <div className="cyber-glow-green bottom-10 -left-40 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-700 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            Quiénes Somos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Construcción Conjunta de <span className="text-gradient-cyan">Valor & Diferenciación</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Utilizamos la tecnología como motor de transformación para generar operaciones de alto rendimiento en toda la región.
          </p>
        </div>

        {/* Mission & Vision Cards: White Background with Gradient Border Line */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Misión */}
          <div className="gradient-border-box p-8 sm:p-10 relative group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                <Target className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900">Nuestra Misión</h3>
                <p className="text-xs text-sky-600 font-bold uppercase tracking-wider">Transformación Digital</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              {HIWAY_COMPANY_INFO.mission}
            </p>
          </div>

          {/* Visión */}
          <div className="gradient-border-box p-8 sm:p-10 relative group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#00b0e5] shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                <Eye className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900">Nuestra Visión</h3>
                <p className="text-xs text-[#05477d] font-bold uppercase tracking-wider">Liderazgo Regional Latam</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              {HIWAY_COMPANY_INFO.vision}
            </p>
          </div>

        </div>

        {/* Core Values: White Cards with Gradient Border Line */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-black text-slate-900">Nuestros Valores Fundamentales</h3>
            <p className="text-xs text-slate-500 font-medium">Principios que guían la relación con nuestros clientes y colaboradores</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIWAY_COMPANY_INFO.values.map((val, idx) => (
              <div 
                key={idx} 
                className="gradient-border-box p-6 space-y-3"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#05335c] via-[#05477d] via-[#00b0e5] to-[#21ceff] text-white flex items-center justify-center text-xs font-black font-mono shadow-sm">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-bold text-slate-900">{val.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Pillars: White Cards with Gradient Border Line */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HIWAY_COMPANY_INFO.strategicPillars.map((pillar, pIdx) => (
            <div 
              key={pIdx} 
              className="gradient-border-box p-8 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600">
                  {pIdx === 0 ? <Users className="w-6 h-6" /> : <TrendingUp className="w-6 h-6 text-[#00b0e5]" />}
                </div>
                <h4 className="text-xl font-bold text-slate-900">{pillar.title}</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>

        {/* Strategic Alliances Showcase: White Card with Gradient Border Line */}
        <div className="gradient-border-box p-8 sm:p-10 space-y-8 text-center">
          <div className="space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-[#05477d] uppercase tracking-wider">
              <Handshake className="w-3.5 h-3.5 text-[#00b0e5]" />
              Ecosistema Global de Partners
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              En Hiway contamos con las <span className="text-gradient-cyan">mejores alianzas</span>
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Colaboramos con los líderes tecnológicos mundiales en ciberseguridad, redes y nube para entregar soluciones de grado empresarial.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 pt-2">
            {HIWAY_COMPANY_INFO.alliances.map((partner, aIdx) => (
              <div 
                key={aIdx} 
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-sky-400 hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center space-y-2 group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-sky-50 border border-slate-200 group-hover:border-sky-300 flex items-center justify-center shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-[#00b0e5] group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-sm font-black text-slate-900 tracking-wide font-mono group-hover:text-[#00b0e5] transition-colors">
                  {partner.name}
                </div>
                {partner.tier && (
                  <span className="text-[9px] font-bold text-[#05477d] bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                    {partner.tier}
                  </span>
                )}
                <span className="text-[9px] text-slate-400 font-medium truncate max-w-full">
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
              <div className="p-3 rounded-2xl bg-sky-50 border border-sky-200 text-[#00b0e5]">
                <Video className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#05477d] uppercase tracking-widest font-bold">Caso de Éxito Destacado</span>
                <h4 className="text-2xl font-black text-slate-900">{HIWAY_COMPANY_INFO.caseStudy.client}</h4>
              </div>
            </div>
            <span className="px-3.5 py-1 text-[11px] font-bold text-[#05477d] bg-sky-50 border border-sky-200 rounded-full">
              Cisco + HIWAY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 text-sm">{HIWAY_COMPANY_INFO.caseStudy.title}</div>
              <p className="text-slate-600 leading-relaxed font-medium">{HIWAY_COMPANY_INFO.caseStudy.summary}</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="font-bold text-[#05477d] text-sm">Impacto en la Operación</div>
              <p className="text-slate-600 leading-relaxed font-medium">{HIWAY_COMPANY_INFO.caseStudy.impact}</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
