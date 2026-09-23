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
    <section id="metodologias" className="py-20 relative overflow-hidden bg-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-700 uppercase tracking-widest">
            <GitBranch className="w-3.5 h-3.5 text-sky-600" />
            Excelencia Operativa
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Metodologías de <span className="text-gradient-cyan">Implementación</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed font-medium">
            Analizamos las necesidades de cada cliente para establecer la metodología adecuada: Agile, Tradicional o un enfoque Híbrido adaptable.
          </p>
        </div>

        {/* Method Selector Tabs: White Cards with Gradient Border Lines */}
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
                    : 'bg-slate-50 border border-slate-200 hover:border-sky-300 hover:bg-slate-100 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-wider ${
                    isSelected 
                      ? 'bg-sky-600 text-white' 
                      : 'bg-slate-200 text-slate-600'
                  }`}>
                    {method.badge}
                  </span>
                  <span className="font-mono text-xs font-black text-slate-400">0{mIdx + 1}</span>
                </div>
                <h3 className="text-xl font-black text-slate-900">
                  {method.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Selected Method Details Container: White Card with Gradient Border Line */}
        <div className="gradient-border-box p-8 sm:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-100 pb-4 gap-2">
            <h4 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-[#00b0e5]" />
              Detalles de la {methodDetails[selectedMethod].title}
            </h4>
            <span className="text-xs text-[#05477d] font-bold font-mono bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
              Certificación PMP / Agile Compliant
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            {methodDetails[selectedMethod].points.map((point, pIdx) => (
              <div key={pIdx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 text-[#05477d] font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#00b0e5]" />
                  <span>Beneficio Clave {pIdx + 1}</span>
                </div>
                <p className="text-slate-600 leading-relaxed font-medium">
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
