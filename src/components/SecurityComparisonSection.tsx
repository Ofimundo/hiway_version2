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
    <section id="seguridad" className="py-20 relative bg-[#05335C]">
      
      {/* Glow */}
      <div className="cyber-glow-cyan top-1/2 -left-40 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#05477D] border border-[#591CC9]/80 text-xs font-bold text-white uppercase tracking-widest">
            <Lock className="w-3.5 h-3.5 text-white" />
            Financiamiento & Ciberseguridad Hi-SOC
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Financiamiento Total & <span className="text-[#591CC9]">Centro Hi-SOC</span>
          </h2>
          <p className="text-white/85 text-base leading-relaxed font-medium">
            Financiamos hasta el 100% de los costos de equipamiento, mantenimiento de software y servicios con pagos mensuales, trimestrales o diferidos, protegiendo tu operación mediante nuestro Hi-Security Operations Center (Hi-SOC).
          </p>
        </div>

        {/* Comparison Table Grid: Azul Medio Card (#05477D) */}
        <div className="gradient-border-box p-6 sm:p-10 overflow-x-auto">
          
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-white/15 text-xs uppercase tracking-wider text-white/75">
                <th className="pb-4 w-1/3 font-bold">Pilar de Servicio / Financiamiento</th>
                <th className="pb-4 w-1/3 text-white/80 font-bold">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-[#591CC9]" />
                    <span>Desafío Empresarial Tradicional</span>
                  </div>
                </th>
                <th className="pb-4 w-1/3 text-[#591CC9] font-bold">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#591CC9]" />
                    <span>Propuesta de Valor HIWAY</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
              {SECURITY_COMPARISON.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#021C33]/40 transition-colors">
                  <td className="py-4 font-bold text-white pr-4">
                    {row.feature}
                  </td>
                  <td className="py-4 text-white/75 px-3 bg-[#021C33]/60 rounded-l-xl">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-[#591CC9] shrink-0 mt-0.5" />
                      <span>{row.legacyWP}</span>
                    </div>
                  </td>
                  <td className="py-4 text-white px-3 bg-[#021C33] rounded-r-xl font-medium">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#591CC9] shrink-0 mt-0.5" />
                      <span>{row.hiwayNextJS}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

        {/* Highlight Architecture Cards: Azul Medio Cards (#05477D) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          
          <div className="gradient-border-box p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-white flex items-center justify-center text-[#591CC9] shadow-md">
              <Server className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Financiamiento Total de la Solución</h4>
            <p className="text-xs text-white/85 leading-relaxed font-medium">
              Financiamiento de hasta el 100% de los costos de equipamiento, además de los costos indirectos como mantenimiento de software y servicios profesionales.
            </p>
          </div>

          <div className="gradient-border-box p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-white flex items-center justify-center text-[#591CC9] shadow-md">
              <Code2 className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Flexibilidad de los Pagos</h4>
            <p className="text-xs text-white/85 leading-relaxed font-medium">
              Estructuración de pagos en modalidad mensual, trimestral o diferida según el flujo de ingresos de la empresa, manteniendo siempre el control del presupuesto.
            </p>
          </div>

          <div className="gradient-border-box p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-white flex items-center justify-center text-[#591CC9] shadow-md">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Hi-Security Operations Center (Hi-SOC)</h4>
            <p className="text-xs text-white/85 leading-relaxed font-medium">
              Centro de Operaciones de Seguridad enfocado en proteger a nuestros clientes frente a amenazas cibernéticas mediante la detección, análisis y respuesta rápida ante incidentes.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};
