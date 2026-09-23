'use client';

import React from 'react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  Lock, 
  Zap, 
  CheckCircle, 
  XCircle, 
  Server,
  Code2
} from 'lucide-react';
import { SECURITY_COMPARISON } from '@/data/hiwayData';

export const SecurityComparisonSection: React.FC = () => {
  return (
    <section id="seguridad" className="py-20 relative overflow-hidden bg-white">
      
      {/* Glow */}
      <div className="cyber-glow-cyan top-1/2 -left-40 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-[#05477d] uppercase tracking-widest">
            <Lock className="w-3.5 h-3.5 text-[#00b0e5]" />
            Auditoría & Protección de Código
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Arquitectura de <span className="text-gradient-cyan">Alta Seguridad</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed font-medium">
            Eliminamos las vulnerabilidades de sitios monolíticos legados en WordPress. La nueva plataforma garantiza cero fugas de datos y máxima velocidad de procesamiento.
          </p>
        </div>

        {/* Comparison Table Grid: White Card with Gradient Border Line */}
        <div className="gradient-border-box p-6 sm:p-10 overflow-x-auto">
          
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                <th className="pb-4 w-1/3 font-bold">Criterio de Seguridad y Desempeño</th>
                <th className="pb-4 w-1/3 text-rose-600 font-bold">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-rose-500" />
                    <span>Sitio Legado WordPress</span>
                  </div>
                </th>
                <th className="pb-4 w-1/3 text-sky-700 font-bold">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-sky-600" />
                    <span>Nueva Plataforma Next.js</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {SECURITY_COMPARISON.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 font-bold text-slate-800 pr-4">
                    {row.feature}
                  </td>
                  <td className="py-4 text-slate-600 pr-4 bg-rose-50/50 rounded-xl">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{row.legacyWP}</span>
                    </div>
                  </td>
                  <td className="py-4 text-sky-900 bg-sky-50/50 rounded-xl font-medium">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{row.hiwayNextJS}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

        {/* Highlight Architecture Cards: White Cards with Gradient Border Lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          
          <div className="gradient-border-box p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
              <Server className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900">Procesamiento SSR en Servidor</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Las credenciales de base de datos y endpoints sensibles residen en Server Components y API Routes, haciéndolas inalcanzables para atacantes externos.
            </p>
          </div>

          <div className="gradient-border-box p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
              <Code2 className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900">Sanitización de Inputs & TypeScript</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Validación en tiempo de compilación y ejecución para prevenir inyecciones SQL, Cross-Site Scripting (XSS) y ataques de desbordamiento de buffer.
            </p>
          </div>

          <div className="gradient-border-box p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#00b0e5]">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900">Desempeño Ultra Rápido</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Respuesta en sub-segundos con optimización automática de assets e imágenes web, logrando un puntaje de 99/100 en Google Lighthouse.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};
