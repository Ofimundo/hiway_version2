'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Users, 
  Cpu, 
  Building2, 
  GitBranch, 
  ShieldCheck, 
  Headphones,
  ArrowRight,
  Sparkles,
  Handshake
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { Footer } from '@/components/Footer';
import { BrochureModal } from '@/components/BrochureModal';
import { HIWAY_COMPANY_INFO } from '@/data/hiwayData';

export default function Home() {
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [selectedBrochureSlug, setSelectedBrochureSlug] = useState<string | undefined>(undefined);

  const handleOpenBrochureModal = (slug?: string) => {
    setSelectedBrochureSlug(slug);
    setBrochureModalOpen(true);
  };

  const handleCloseBrochureModal = () => {
    setBrochureModalOpen(false);
    setSelectedBrochureSlug(undefined);
  };

  const HOME_QUICK_CARDS = [
    {
      title: 'Quiénes Somos',
      badge: 'Trayectoria & Misión',
      description: 'Conoce nuestra visión de liderazgo regional en Latam, misión corporativa y los valores fundamentales que impulsan la transformación digital.',
      href: '/quienes-somos',
      icon: Users,
      actionText: 'Explorar Historia'
    },
    {
      title: 'Soluciones & Servicios',
      badge: 'Catálogo Tecnológico',
      description: 'Descubre nuestros servicios integrales de Ciberseguridad OT/IT, Conectividad IoT, Teletrabajo Hi-Office y Operación NOC 24/7.',
      href: '/soluciones-y-servicios',
      icon: Cpu,
      actionText: 'Ver Soluciones'
    },
    {
      title: 'Sectores Económicos',
      badge: 'Cobertura Multisectorial',
      description: 'Arquitecturas de red altamente especializadas y adaptadas a Minería, Telcos, Servicios Financieros, Gobierno, Energía y Retail.',
      href: '/sectores-economicos',
      icon: Building2,
      actionText: 'Ver Industrias'
    },
    {
      title: 'Metodologías de Trabajo',
      badge: 'PMP & Agile Compliant',
      description: 'Marcos de implementación con metodologías Agile, Waterfall Tradicional o modelos Híbridos para asegurar el éxito presupuestario.',
      href: '/metodologias',
      icon: GitBranch,
      actionText: 'Conocer Metodologías'
    },
    {
      title: 'Seguridad & Protección',
      badge: 'Auditoría Server-Side',
      description: 'Protección de nivel bancario en Next.js sin código expuesto, eliminando las vulnerabilidades de sitios monolíticos legados.',
      href: '/seguridad',
      icon: ShieldCheck,
      actionText: 'Ver Diagnóstico'
    },
    {
      title: 'Contacto & Atención 24/7',
      badge: 'Consultoría Especializada',
      description: 'Ponte en contacto con nuestro equipo de consultores desde nuestra Casa Matriz en Santiago de Chile o Filial en Ciudad de México.',
      href: '/contacto',
      icon: Headphones,
      actionText: 'Contactar Consultor'
    }
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-sky-500 selection:text-white">
      
      {/* Fixed Top Navbar */}
      <Navbar onOpenBrochureModal={handleOpenBrochureModal} />

      {/* Main Hero Banner */}
      <HeroSection onOpenBrochureModal={handleOpenBrochureModal} />

      {/* Overview Cards Grid: White Cards with Gradient Border Lines */}
      <section className="py-24 relative bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-[#05477d] uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-[#00b0e5]" />
              Navegación por Áreas
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Explora Nuestras <span className="text-gradient-cyan">Especialidades</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              Accede a información detallada en páginas dedicadas para cada uno de nuestros pilares de servicio corporativo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {HOME_QUICK_CARDS.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <div 
                  key={idx} 
                  className="gradient-border-box flex flex-col justify-between group min-h-[340px] space-y-8"
                >
                  <div className="space-y-5">
                    
                    {/* Header Icon & Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#00b0e5] group-hover:scale-110 transition-transform shadow-sm">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <span className="px-3 py-1 text-[11px] font-bold text-[#05477d] bg-sky-50 border border-sky-200 rounded-full uppercase tracking-wider">
                        {card.badge}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-[#00b0e5] transition-colors pt-1">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      {card.description}
                    </p>

                  </div>

                  {/* CTA Action Button */}
                  <div className="pt-6 border-t border-slate-100">
                    <Link
                      href={card.href}
                      className="w-full py-3.5 px-6 text-xs sm:text-sm font-bold text-white btn-gradient rounded-xl transition-all flex items-center justify-center gap-2 group-hover:shadow-lg shadow-sky-500/20"
                    >
                      <span>{card.actionText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Strategic Alliances Banner: White Card with Gradient Border Line */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-border-box p-8 sm:p-12 text-center space-y-10">
            <div className="space-y-3 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-[#05477d] uppercase tracking-wider">
                <Handshake className="w-4 h-4 text-[#00b0e5]" />
                Ecosistema Global de Partners
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                En Hiway contamos con las <span className="text-gradient-cyan">mejores alianzas</span>
              </h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Colaboramos con los líderes tecnológicos mundiales en ciberseguridad, redes y nube para entregar soluciones de grado empresarial.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 pt-2">
              {HIWAY_COMPANY_INFO.alliances.map((partner, aIdx) => (
                <div 
                  key={aIdx} 
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center space-y-2 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-50 group-hover:bg-sky-50 border border-slate-200 group-hover:border-sky-300 flex items-center justify-center shadow-sm">
                    <ShieldCheck className="w-6 h-6 text-[#00b0e5] group-hover:scale-110 transition-transform" />
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
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Download Brochure Modal */}
      <BrochureModal 
        isOpen={brochureModalOpen} 
        onClose={handleCloseBrochureModal} 
        initialBrochureSlug={selectedBrochureSlug}
      />

    </main>
  );
}
