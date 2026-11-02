'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { SubpageHero } from '@/components/SubpageHero';
import { AboutUsSection } from '@/components/AboutUsSection';
import { Footer } from '@/components/Footer';

export default function QuienesSomosPage() {
  return (
    <main className="min-h-screen bg-[#05335C] text-white flex flex-col selection:bg-[#FFD303] selection:text-[#021C33]">
      
      {/* Top Header Navigation */}
      <Navbar />

      {/* Subpage Banner */}
      <SubpageHero 
        category="Quiénes Somos"
        badge="Trayectoria & Misión Latam"
        title="Construcción Conjunta de Valor & Diferenciación Tecnológica"
        subtitle="Impulsamos la transformación digital de grandes corporaciones en Latinoamérica con ciberseguridad, redes de alta disponibilidad y consultoría de valor."
      />

      {/* Detailed Section */}
      <AboutUsSection />

      {/* Footer */}
      <Footer />

    </main>
  );
}
