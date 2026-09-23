'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { SubpageHero } from '@/components/SubpageHero';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-sky-500 selection:text-white">
      
      {/* Top Header Navigation */}
      <Navbar />

      {/* Subpage Banner */}
      <SubpageHero 
        category="Contacto"
        badge="Atención Corporativa Inmediata"
        title="Conversemos con un Consultor Especialista"
        subtitle="Estamos listos para asesorarte en tus proyectos tecnológicos desde nuestra Casa Matriz en Santiago de Chile o Filial en Ciudad de México."
      />

      {/* Detailed Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

    </main>
  );
}
