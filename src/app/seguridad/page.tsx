'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { SubpageHero } from '@/components/SubpageHero';
import { SecurityComparisonSection } from '@/components/SecurityComparisonSection';
import { Footer } from '@/components/Footer';

export default function SeguridadPage() {
  return (
    <main className="min-h-screen bg-[#05335C] text-white flex flex-col selection:bg-[#591CC9] selection:text-white">
      
      {/* Top Header Navigation */}
      <Navbar />

      {/* Subpage Banner */}
      <SubpageHero 
        category="Financiamiento & Ciberseguridad Hi-SOC"
        badge="Financiamiento Total & Centro Hi-SOC"
        title="Financiamiento Tecnológico & Operaciones de Seguridad Hi-SOC"
        subtitle="Financiamiento de hasta el 100% de los costos de equipamiento, software y servicios con flexibilidad de pagos, respaldado por nuestro Hi-Security Operations Center (Hi-SOC)."
      />

      {/* Detailed Section */}
      <SecurityComparisonSection />

      {/* Footer */}
      <Footer />

    </main>
  );
}
