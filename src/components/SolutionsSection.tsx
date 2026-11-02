'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Radio, 
  Laptop, 
  BarChart3, 
  Headphones, 
  CheckCircle, 
  ArrowUpRight,
  Sparkles,
  Briefcase,
  UserCheck,
  Cpu
} from 'lucide-react';
import { SERVICES, ServiceItem } from '@/data/hiwayData';

interface SolutionsSectionProps {
  onOpenBrochureModal?: (slug?: string) => void;
}

const CATEGORIES = [
  { id: 'all', label: 'Todas las Soluciones' },
  { id: 'consulting', label: 'Consultoría & Servicios' },
  { id: 'cybersecurity', label: 'Ciberseguridad OT/IT' },
  { id: 'infrastructure', label: 'Site Connectivity & IoT' },
  { id: 'workplace', label: 'Hi-Office Teletrabajo' },
  { id: 'analytics', label: 'Analytics & Geoanalytics' },
  { id: 'managed', label: 'Servicios Gestionados NOC' },
];

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenBrochureModal }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#FFD303]" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-[#FFD303]" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#FFD303]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#FFD303]" />;
      case 'Radio': return <Radio className="w-6 h-6 text-[#FFD303]" />;
      case 'Laptop': return <Laptop className="w-6 h-6 text-[#FFD303]" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-[#FFD303]" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-[#FFD303]" />;
      default: return <ShieldCheck className="w-6 h-6 text-[#FFD303]" />;
    }
  };

  return (
    <section id="soluciones" className="py-20 relative bg-[#05335C]">
      
      {/* Background Glow */}
      <div className="cyber-glow-cyan top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#05477D] border border-[#FFD303]/40 text-xs font-bold text-[#FFD303] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD303]" />
            Catálogo Tecnológico Corporativo
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Soluciones & Servicios <span className="text-gradient-cyan">Especializados</span>
          </h2>
          <p className="text-white/85 text-base leading-relaxed font-medium">
            Diseñamos e implementamos arquitecturas digitales robustas con soporte post-venta de nivel empresarial y respuesta inmediata 24/7.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'btn-gradient scale-105'
                  : 'bg-[#021C33] text-white/85 hover:text-[#FFD303] hover:bg-[#05477D] border border-[#591CC9]/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid: Azul Medio Cards (#05477D) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service: ServiceItem) => (
            <div 
              key={service.id}
              className="gradient-border-box flex flex-col justify-between group"
            >
              <div>
                
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#021C33] border border-[#591CC9] flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    {getServiceIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="px-2.5 py-1 text-[10px] font-bold text-[#FFD303] bg-[#021C33] border border-[#591CC9]/80 rounded-full uppercase tracking-wider">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-black text-white mb-2 group-hover:text-[#FFD303] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-bold text-[#FFD303] mb-4">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs text-white/85 leading-relaxed mb-6 font-medium">
                  {service.description}
                </p>

                {/* Key Features List */}
                <div className="space-y-2.5 mb-6 border-t border-white/15 pt-4">
                  <span className="text-[11px] font-bold text-[#FFD303] uppercase tracking-wider block">
                    Capacidades Clave:
                  </span>
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-white/90 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-[#FFD303] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technical Specs Pills */}
                <div className="grid grid-cols-2 gap-2 mb-6 bg-[#021C33] p-3 rounded-2xl border border-[#591CC9]/50">
                  {service.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="space-y-0.5">
                      <div className="text-[9px] text-white/60 font-semibold uppercase">{spec.label}</div>
                      <div className="text-[11px] text-white font-bold truncate">{spec.value}</div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/15">
                <a
                  href="/contacto"
                  className="w-full py-3 px-4 text-xs font-bold btn-gradient rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Consultar Servicio</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
