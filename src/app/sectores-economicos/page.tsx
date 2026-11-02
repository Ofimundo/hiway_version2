'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { SubpageHero } from '@/components/SubpageHero';
import { SectorsSection } from '@/components/SectorsSection';
import { Footer } from '@/components/Footer';

export default function SectoresEconomicosPage() {
  return (
    <main className="min-h-screen bg-[#05335C] text-white flex flex-col selection:bg-[#FFD303] selection:text-[#021C33]">
      
      {/* Top Header Navigation */}
      <Navbar />

      {/* Subpage Banner */}
      <SubpageHero 
        category="Sectores Económicos"
        badge="Cobertura Industrial Especializada"
        title="Arquitecturas Adaptadas a Cada Industria"
        subtitle="Soluciones tecnológicas a la medida para Minería, Telecomunicaciones, Servicios Financieros, Gobierno, Energía & Utilities y Retail."
      />

      {/* Detailed Section */}
      <SectorsSection />

      {/* Footer */}
      <Footer />

    </main>
  );
}
