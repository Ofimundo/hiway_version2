'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { SubpageHero } from '@/components/SubpageHero';
import { SecurityComparisonSection } from '@/components/SecurityComparisonSection';
import { Footer } from '@/components/Footer';

export default function SeguridadPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-sky-500 selection:text-white">
      
      {/* Top Header Navigation */}
      <Navbar />

      {/* Subpage Banner */}
      <SubpageHero 
        category="Seguridad"
        badge="Auditoría & Protección Server-Side"
        title="Arquitectura de Alta Seguridad Next.js"
        subtitle="Eliminamos completamente las vulnerabilidades del código expuesto en WordPress, garantizando cero fugas de datos y tiempo de respuesta inmediato."
      />

      {/* Detailed Section */}
      <SecurityComparisonSection />

      {/* Footer */}
      <Footer />

    </main>
  );
}
