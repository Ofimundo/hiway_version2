'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { SubpageHero } from '@/components/SubpageHero';
import { SolutionsSection } from '@/components/SolutionsSection';
import { Footer } from '@/components/Footer';
import { BrochureModal } from '@/components/BrochureModal';

export default function SolucionesServiciosPage() {
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

  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-sky-500 selection:text-white">
      
      {/* Top Header Navigation */}
      <Navbar onOpenBrochureModal={handleOpenBrochureModal} />

      {/* Subpage Banner */}
      <SubpageHero 
        category="Soluciones & Servicios"
        badge="Catálogo Tecnológico Empresarial"
        title="Soluciones Digitales & Servicios Gestionados OT/IT"
        subtitle="Diseñamos e implementamos arquitecturas de ciberseguridad, conectividad IoT, teletrabajo Hi-Office y monitoreo NOC con respuesta inmediata 24/7."
      />

      {/* Detailed Section */}
      <SolutionsSection onOpenBrochureModal={handleOpenBrochureModal} />

      {/* Footer */}
      <Footer />

      {/* Brochure Modal */}
      <BrochureModal 
        isOpen={brochureModalOpen} 
        onClose={handleCloseBrochureModal} 
        initialBrochureSlug={selectedBrochureSlug}
      />

    </main>
  );
}
