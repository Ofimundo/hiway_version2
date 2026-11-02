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
      badge: 'Misión, Visión & Valores',
      description: 'Somos una compañía de servicios digitales empresariales enfocada en la construcción conjunta de valor y diferenciación para sus clientes, utilizando la tecnología como motor de transformación.',
      href: '/quienes-somos',
      icon: Users,
      actionText: 'Conocer Quiénes Somos'
    },
    {
      title: 'Soluciones & Servicios',
      badge: 'Portafolio Hiway',
      description: 'Servicios de Consultoría de Negocio, Servicios Gestionados (Hi-SOC y NOC), Servicios Profesionales y Soluciones Tecnológicas Digitales (Hi-Cloud, Hi-Automation, Hi-Data & Analytics, Hi-Connect y Hi-Office).',
      href: '/soluciones-y-servicios',
      icon: Cpu,
      actionText: 'Ver Soluciones y Servicios'
    },
    {
      title: 'Sectores Económicos',
      badge: 'Experiencia Multisectorial',
      description: 'Acompañamos la transformación digital y continuidad operacional en los sectores Financiero, Retail, Minería, Digitalización en Salud, Educación e Industria X.',
      href: '/sectores-economicos',
      icon: Building2,
      actionText: 'Ver Sectores Económicos'
    },
    {
      title: 'Metodologías de Trabajo',
      badge: 'Tradicional, Agile & Híbrida',
      description: 'Analizamos las necesidades de cada cliente para establecer la metodología adecuada (Tradicional, Agile o Híbrida), respaldados por certificaciones PMI, PMP, PMI-CAPM e ITIL.',
      href: '/metodologias',
      icon: GitBranch,
      actionText: 'Conocer Metodologías'
    },
    {
      title: 'Financiamiento & Hi-SOC',
      badge: 'Financiamiento hasta 100%',
      description: 'Financiamiento de hasta el 100% de los costos de equipamiento, mantenimiento de software y servicios con pagos mensuales, trimestrales o diferidos, junto a nuestro centro Hi-SOC.',
      href: '/seguridad',
      icon: ShieldCheck,
      actionText: 'Ver Financiamiento y Hi-SOC'
    },
    {
      title: 'Contacto & Mesa de Servicios',
      badge: 'Chile & México',
      description: 'Completa el formulario y aclararemos todas tus dudas desde nuestra Casa Matriz en Las Condes (Santiago de Chile), nuestra Filial en Ciudad de México o nuestra Mesa de Servicios.',
      href: '/contacto',
      icon: Headphones,
      actionText: 'Conversemos con un Consultor'
    }
  ];

  return (
    <main className="min-h-screen bg-[#05335C] text-white flex flex-col selection:bg-[#FFD303] selection:text-[#021C33]">
      
      {/* Fixed Top Navbar */}
      <Navbar onOpenBrochureModal={handleOpenBrochureModal} />

      {/* Main Hero Banner */}
      <HeroSection onOpenBrochureModal={handleOpenBrochureModal} />

      {/* Overview Cards Grid: Azul Medio Cards (#05477D) on Navy Principal (#05335C) */}
      <section className="py-24 relative bg-[#05335C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#05477D] border border-[#FFD303]/40 text-xs font-bold text-[#FFD303] uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-[#FFD303]" />
              Navegación por Áreas
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Explora Nuestras <span className="text-gradient-cyan">Especialidades</span>
            </h2>
            <p className="text-white/85 text-base sm:text-lg leading-relaxed font-medium">
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
                      <div className="w-14 h-14 rounded-2xl bg-[#021C33] border border-[#591CC9] flex items-center justify-center text-[#FFD303] group-hover:scale-110 transition-transform shadow-sm">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <span className="px-3 py-1 text-[11px] font-bold text-[#FFD303] bg-[#021C33] border border-[#591CC9]/80 rounded-full uppercase tracking-wider">
                        {card.badge}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-2xl font-black text-white group-hover:text-[#FFD303] transition-colors pt-1">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-white/85 leading-relaxed font-medium">
                      {card.description}
                    </p>

                  </div>

                  {/* CTA Action Button */}
                  <div className="pt-6 border-t border-white/15">
                    <Link
                      href={card.href}
                      className="w-full py-3.5 px-6 text-xs sm:text-sm font-bold btn-gradient rounded-xl transition-all flex items-center justify-center gap-2"
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

      {/* Strategic Alliances Banner */}
      <section className="py-20 bg-[#05335C] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-border-box p-8 sm:p-12 text-center space-y-10">
            <div className="space-y-3 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#021C33] border border-[#FFD303]/40 text-xs font-bold text-[#FFD303] uppercase tracking-wider">
                <Handshake className="w-4 h-4 text-[#FFD303]" />
                Ecosistema Global de Partners
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                En Hiway contamos con las <span className="text-gradient-cyan">mejores alianzas</span>
              </h3>
              <p className="text-sm text-white/85 font-medium leading-relaxed">
                Colaboramos con los líderes tecnológicos mundiales en ciberseguridad, redes y nube para entregar soluciones de grado empresarial.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 pt-2">
              {HIWAY_COMPANY_INFO.alliances.map((partner, aIdx) => (
                <div 
                  key={aIdx} 
                  className="p-5 rounded-2xl bg-[#021C33] border border-[#591CC9]/60 hover:border-[#FFD303] hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center space-y-2 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#05477D] border border-[#591CC9]/60 group-hover:border-[#FFD303] flex items-center justify-center shadow-sm">
                    <ShieldCheck className="w-6 h-6 text-[#FFD303] group-hover:scale-110 transition-transform" />
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
