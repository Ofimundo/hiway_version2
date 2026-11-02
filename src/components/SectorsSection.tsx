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
      case 'Pickaxe': return <Pickaxe className="w-5 h-5 text-[#FFD303]" />;
      case 'Signal': return <Signal className="w-5 h-5 text-[#FFD303]" />;
      case 'Landmark': return <Landmark className="w-5 h-5 text-[#FFD303]" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-[#FFD303]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#FFD303]" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-[#FFD303]" />;
      default: return <Building2 className="w-5 h-5 text-[#FFD303]" />;
    }
  };

  return (
    <section id="sectores" className="py-20 relative bg-[#05335C]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#05477D] border border-[#FFD303]/40 text-xs font-bold text-[#FFD303] uppercase tracking-widest">
            Cobertura Multisectorial
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Especialización por <span className="text-gradient-cyan">Sector Económico</span>
          </h2>
          <p className="text-white/85 text-base leading-relaxed font-medium">
            Adaptamos la arquitectura de red y ciberseguridad a la realidad operativa y exigencias regulatorias de cada industria.
          </p>
        </div>

        {/* Sector Navigation Grid */}
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
                    : 'bg-[#021C33] border border-[#591CC9]/50 text-white/80 hover:bg-[#05477D] hover:text-white'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${
                  isSelected ? 'bg-[#021C33] border border-[#FFD303]/50' : 'bg-[#05477D]/60 border border-[#591CC9]/40'
                }`}>
                  {getSectorIcon(sector.iconName)}
                </div>
                <span className={`text-xs font-bold ${isSelected ? 'text-[#FFD303]' : 'text-white'}`}>
                  {sector.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Sector Details Box: Azul Medio Card (#05477D) */}
        <div className="gradient-border-box p-8 sm:p-10 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Sector Info */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#021C33] border border-[#591CC9] text-[#FFD303]">
                  {getSectorIcon(selectedSector.iconName)}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">
                    {selectedSector.name}
                  </h3>
                  <p className="text-xs text-[#FFD303] font-bold uppercase tracking-wider">
                    Soluciones de Misión Crítica
                  </p>
                </div>
              </div>

              <p className="text-sm text-white/85 leading-relaxed font-medium">
                {selectedSector.description}
              </p>

              {/* Challenges vs Solutions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                
                {/* Challenges */}
                <div className="space-y-3 bg-[#021C33] p-5 rounded-2xl border border-[#591CC9]/70">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FFD303] uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4 text-[#FFD303]" />
                    <span>Desafíos del Sector</span>
                  </div>
                  <ul className="space-y-2 text-xs text-white/85">
                    {selectedSector.challenges.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#591CC9] mt-1.5 shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className="space-y-3 bg-[#021C33] p-5 rounded-2xl border border-[#FFD303]/40">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FFD303] uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-[#FFD303]" />
                    <span>Respuesta HIWAY</span>
                  </div>
                  <ul className="space-y-2 text-xs text-white/85">
                    {selectedSector.solutionsProvided.map((s, i) => (
                      <li key={i} className="flex items-start gap-2 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFD303] mt-1.5 shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>

            {/* Right Metrics Box & Action */}
            <div className="lg:col-span-5 bg-[#021C33] p-6 rounded-2xl border border-[#591CC9]/60 space-y-6">
              
              <h4 className="text-xs font-bold text-white/80 uppercase tracking-wider">
                Impacto Comprobado en {selectedSector.name}:
              </h4>

              <div className="grid grid-cols-2 gap-4">
                {selectedSector.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="p-4 rounded-xl bg-[#05477D] border border-[#591CC9]/60 shadow-sm text-center">
                    <div className="text-3xl font-black text-[#FFD303]">{metric.value}</div>
                    <div className="text-[11px] text-white/80 mt-1 font-semibold">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="/contacto"
                  className="w-full py-3.5 px-4 text-xs font-bold btn-gradient rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
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
