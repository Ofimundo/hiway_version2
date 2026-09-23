'use client';

import React, { useState } from 'react';
import { 
  Pickaxe, 
  Signal, 
  Landmark, 
  Building2, 
  Zap, 
  ShoppingBag, 
  CheckCircle2, 
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import { ECONOMIC_SECTORS, EconomicSector } from '@/data/hiwayData';

export const SectorsSection: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<EconomicSector>(ECONOMIC_SECTORS[0]);

  const getSectorIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pickaxe': return <Pickaxe className="w-5 h-5 text-amber-600" />;
      case 'Signal': return <Signal className="w-5 h-5 text-sky-600" />;
      case 'Landmark': return <Landmark className="w-5 h-5 text-blue-600" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-emerald-600" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-500" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-rose-500" />;
      default: return <Building2 className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section id="sectores" className="py-20 relative overflow-hidden bg-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-[#05477d] uppercase tracking-widest">
            Cobertura Multisectorial
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Especialización por <span className="text-gradient-cyan">Sector Económico</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed font-medium">
            Adaptamos la arquitectura de red y ciberseguridad a la realidad operativa y exigencias regulatorias de cada industria.
          </p>
        </div>

        {/* Sector Navigation Grid: White Cards with Gradient Border Lines */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {ECONOMIC_SECTORS.map((sector) => {
            const isSelected = selectedSector.id === sector.id;

            return (
              <button
                key={sector.id}
                onClick={() => setSelectedSector(sector)}
                className={`p-4 rounded-2xl flex flex-col items-center gap-3 transition-all duration-200 text-center ${
                  isSelected
                    ? 'gradient-border-box scale-105 shadow-md font-bold'
                    : 'bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${
                  isSelected ? 'bg-sky-50 border border-sky-200' : 'bg-slate-200/60'
                }`}>
                  {getSectorIcon(sector.iconName)}
                </div>
                <span className="text-xs font-bold text-slate-900">
                  {sector.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Sector Details Box: White Card with Gradient Border Line */}
        <div className="gradient-border-box p-8 sm:p-10 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Sector Info */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600">
                  {getSectorIcon(selectedSector.iconName)}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">
                    {selectedSector.name}
                  </h3>
                  <p className="text-xs text-sky-600 font-bold uppercase tracking-wider">
                    Soluciones de Misión Crítica
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {selectedSector.description}
              </p>

              {/* Challenges vs Solutions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                
                {/* Challenges */}
                <div className="space-y-3 bg-amber-50/60 p-5 rounded-2xl border border-amber-200/70">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Desafíos del Sector</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {selectedSector.challenges.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className="space-y-3 bg-sky-50/60 p-5 rounded-2xl border border-sky-200/70">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#05477d] uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-[#00b0e5]" />
                    <span>Respuesta HIWAY</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {selectedSector.solutionsProvided.map((s, i) => (
                      <li key={i} className="flex items-start gap-2 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00b0e5] mt-1.5 shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>

            {/* Right Metrics Box & Action */}
            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-6">
              
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Impacto Comprobado en {selectedSector.name}:
              </h4>

              <div className="grid grid-cols-2 gap-4">
                {selectedSector.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center">
                    <div className="text-3xl font-black text-sky-600">{metric.value}</div>
                    <div className="text-[11px] text-slate-500 mt-1 font-semibold">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="/contacto"
                  className="w-full py-3.5 px-4 text-xs font-bold text-white btn-gradient rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <span>Solicitar Caso de Éxito en {selectedSector.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
