'use client';

import React, { useState } from 'react';
import { 
  GitBranch, 
  CheckCircle2, 
  SlidersHorizontal
} from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState(0);

  const methodDetails = [
    {
      title: "Metodología Tradicional (Waterfall)",
      badge: "Estructura & Control",
      points: [
        "Coordinación de actividades: La ejecución por fases ofrece una estructura de trabajo clara y organizada.",
        "Promoción de la disciplina: Definición de actividades de inicio a fin en cada fase que aporta estabilidad y control riguroso.",
        "Ideal para proyectos con alcance fijo y requerimientos regulatorios normados."
      ]
    },
    {
      title: "Metodología Agile (Scrum / Kanban)",
      badge: "Velocidad & Flexibilidad",
      points: [
        "Promoción del trabajo en equipo: Trabajo multidisciplinario y flexible que genera confianza, motivación y reduce tiempos de entrega.",
        "Facilidad de adaptación a los cambios: Incorporación constante de cambios solicitados por el cliente durante la ejecución.",
        "Mayor satisfacción del cliente: Interacciones frecuentes para alcanzar un control total sobre el producto final."
      ]
    },
    {
      title: "Metodología Híbrida HIWAY",
      badge: "Recomendado Empresarial",
      points: [
        "Fácil adaptación a las necesidades del proyecto: Flexibilidad en ambientes altamente dinámicos o exigentes.",
        "Reducción de incertidumbre: Planificación como base para organizar recursos y coordinar actividades con sprints continuos.",
        "Combina predictibilidad presupuestaria con entregables ágiles por fases."
      ]
    }
  ];

  return (
    <section id="metodologias" className="py-20 relative bg-[#05335C]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#05477D] border border-[#591CC9]/80 text-xs font-bold text-white uppercase tracking-widest">
            <GitBranch className="w-3.5 h-3.5 text-white" />
            Excelencia Operativa
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Metodologías de <span className="text-[#591CC9]">Implementación</span>
          </h2>
          <p className="text-white/85 text-base leading-relaxed font-medium">
            Analizamos las necesidades de cada cliente para establecer la metodología adecuada: Agile, Tradicional o un enfoque Híbrido adaptable.
          </p>
        </div>

        {/* Method Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {methodDetails.map((method, mIdx) => {
            const isSelected = selectedMethod === mIdx;

            return (
              <button
                key={mIdx}
                onClick={() => setSelectedMethod(mIdx)}
                className={`p-6 sm:p-8 rounded-3xl text-left transition-all duration-300 flex flex-col justify-between space-y-4 ${
                  isSelected
                    ? 'gradient-border-box scale-[1.02] shadow-xl'
                    : 'bg-[#021C33] border border-[#591CC9]/60 hover:border-[#591CC9] hover:bg-[#05477D]/70 text-white/80'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-wider ${
                    isSelected 
                      ? 'bg-[#591CC9] text-white' 
                      : 'bg-[#591CC9]/40 text-white border border-[#591CC9]'
                  }`}>
                    {method.badge}
                  </span>
                  <span className="font-mono text-xs font-black text-[#591CC9]">0{mIdx + 1}</span>
                </div>
                <h3 className="text-xl font-black text-white">
                  {method.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Selected Method Details Container: Azul Medio Card (#05477D) */}
        <div className="gradient-border-box p-8 sm:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-white/15 pb-4 gap-2">
            <h4 className="text-xl font-black text-white flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white border border-white flex items-center justify-center text-[#591CC9] shadow-sm">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
              <span>Detalles de la {methodDetails[selectedMethod].title}</span>
            </h4>
            <span className="text-xs text-white font-bold font-mono bg-[#591CC9] px-3 py-1 rounded-full border border-[#591CC9]">
              Certificación PMP / Agile Compliant
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            {methodDetails[selectedMethod].points.map((point, pIdx) => (
              <div key={pIdx} className="p-6 rounded-2xl bg-[#021C33] border border-[#591CC9]/60 space-y-3">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#591CC9]" />
                  <span>Beneficio Clave {pIdx + 1}</span>
                </div>
                <p className="text-white/85 leading-relaxed font-medium">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};
