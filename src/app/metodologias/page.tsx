'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { SubpageHero } from '@/components/SubpageHero';
import { MethodologySection } from '@/components/MethodologySection';
import { Footer } from '@/components/Footer';

export default function MetodologiasPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-sky-500 selection:text-white">
      
      {/* Top Header Navigation */}
      <Navbar />

      {/* Subpage Banner */}
      <SubpageHero 
        category="Metodologías"
        badge="Excelencia en Gestión PMP & Agile"
        title="Metodologías de Implementación Adaptables"
        subtitle="Analizamos la realidad de cada proyecto para aplicar esquemas Agile, Waterfall Tradicional o nuestro modelo Híbrido de alta eficiencia."
      />

      {/* Detailed Section */}
      <MethodologySection />

      {/* Footer */}
      <Footer />

    </main>
  );
}
