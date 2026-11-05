'use client';

import React, { useState } from 'react';
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Headphones, 
  CheckCircle2, 
  Loader2, 
  ShieldCheck,
  Building
} from 'lucide-react';
import { OFFICES, HIWAY_COMPANY_INFO } from '@/data/hiwayData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [interest, setInterest] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !lastname || !email || !message) {
      setErrorMessage('Por favor completa todos los campos requeridos (*).');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          lastname,
          email,
          company,
          interest: interest || 'Consultoría General',
          message
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage(data.message || 'Error al procesar la solicitud.');
      }
    } catch (err) {
      setErrorMessage('Error de conexión con el servidor de contacto.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 relative bg-[#05335C]">
      
      {/* Glow */}
      <div className="cyber-glow-green bottom-0 right-0 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#05477D] border border-[#591CC9]/80 text-xs font-bold text-white uppercase tracking-widest">
            Atención Especializada
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Conversemos con un <span className="text-[#591CC9]">Consultor</span>
          </h2>
          <p className="text-white/85 text-base leading-relaxed font-medium">
            Completa el formulario y aclararemos todas tus dudas desde nuestra Casa Matriz en Chile o filial México.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Form Container: Azul Medio Card (#05477D) - Temporarily Disabled */}
          <div className="lg:col-span-7 gradient-border-box p-6 sm:p-10 relative">
            
            <div className="mb-6 p-4 rounded-xl bg-[#021C33] border border-[#591CC9]/80 flex items-center justify-between gap-3">
              <div className="text-xs text-white/90 font-medium">
                <strong className="text-[#591CC9] block mb-0.5">Formulario temporalmente inhabilitado</strong>
                Por el momento, puedes contactarnos directamente a <a href={`mailto:${HIWAY_COMPANY_INFO.emailHQ}`} className="text-[#591CC9] underline font-bold">{HIWAY_COMPANY_INFO.emailHQ}</a> o al teléfono <a href="tel:+56229407500" className="text-[#591CC9] underline font-bold">{HIWAY_COMPANY_INFO.phoneHQ}</a>.
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6 opacity-60 pointer-events-none select-none" aria-disabled="true">
              <fieldset disabled className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-white block mb-1.5">Nombre *</label>
                    <input
                      type="text"
                      disabled
                      placeholder="Constanza"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-[#021C33] border border-[#591CC9]/60 rounded-xl text-xs text-white placeholder-white/40 cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-white block mb-1.5">Apellido *</label>
                    <input
                      type="text"
                      disabled
                      placeholder="Silva"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      className="w-full px-4 py-3 bg-[#021C33] border border-[#591CC9]/60 rounded-xl text-xs text-white placeholder-white/40 cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-white block mb-1.5">Correo *</label>
                    <input
                      type="email"
                      disabled
                      placeholder="constanza@empresa.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-[#021C33] border border-[#591CC9]/60 rounded-xl text-xs text-white placeholder-white/40 cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-white block mb-1.5">Empresa *</label>
                    <input
                      type="text"
                      disabled
                      placeholder="Nombre de tu empresa"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-3 bg-[#021C33] border border-[#591CC9]/60 rounded-xl text-xs text-white placeholder-white/40 cursor-not-allowed"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-white block mb-1.5">Consulta Servicio/Soluciones *</label>
                  <select
                    disabled
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-4 py-3 bg-[#021C33] border border-[#591CC9]/60 rounded-xl text-xs text-white cursor-not-allowed"
                  >
                    <option value="">-- Por favor, elige una opción --</option>
                    <option value="Servicios de Consultoría de Negocio">Servicios de Consultoría de Negocio</option>
                    <option value="Servicios Gestionados">Servicios Gestionados</option>
                    <option value="Servicios Profesionales">Servicios Profesionales</option>
                    <option value="Soluciones Tecnológicas Digitales">Soluciones Tecnológicas Digitales</option>
                    <option value="Ciberseguridad">Ciberseguridad</option>
                    <option value="Teletrabajo">Teletrabajo</option>
                    <option value="Infraestructura">Infraestructura</option>
                    <option value="Financiamiento">Financiamiento</option>
                    <option value="Administración y Finanzas">Administración y Finanzas</option>
                    <option value="Mesa de Servicios">Mesa de Servicios</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-white block mb-1.5">Mensaje *</label>
                  <textarea
                    rows={4}
                    disabled
                    placeholder="Escribe tu mensaje o consulta..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-[#021C33] border border-[#591CC9]/60 rounded-xl text-xs text-white placeholder-white/40 cursor-not-allowed"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-white/75 font-medium">
                    <ShieldCheck className="w-4 h-4 text-white" />
                    <span>Formulario temporalmente deshabilitado</span>
                  </div>

                  <button
                    type="button"
                    disabled
                    className="py-3.5 px-8 text-xs font-bold btn-gradient rounded-xl shadow-md flex items-center gap-2 opacity-50 cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    <span>ENVIAR MENSAJE</span>
                  </button>
                </div>
              </fieldset>
            </form>

          </div>

          {/* Right Regional HQ Details: Azul Medio Cards (#05477D) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Cards */}
            {OFFICES.map((office) => (
              <div key={office.city} className="gradient-border-box p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-white font-bold text-base">
                    <div className="w-8 h-8 rounded-lg bg-white border border-white flex items-center justify-center text-[#591CC9] shadow-sm">
                      <Building className="w-4 h-4" />
                    </div>
                    <span>{office.isHQ ? 'Casa Matriz' : 'Filial México'}</span>
                  </div>
                  {office.isHQ && (
                    <span className="px-2 py-0.5 text-[9px] font-bold text-white bg-[#591CC9] border border-[#591CC9] rounded uppercase">
                      Santiago, Chile
                    </span>
                  )}
                </div>

                <div className="space-y-2 text-xs text-white/85 pt-1 font-medium">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-white/70 shrink-0 mt-0.5" />
                    <span>Ubicación: {office.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-white/70 shrink-0" />
                    <span>Teléfono: <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="text-white hover:underline font-bold font-mono">{office.phone}</a></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-white/70 shrink-0" />
                    <span>Correo: <a href={`mailto:${office.email}`} className="text-white hover:underline font-bold font-mono">{office.email}</a></span>
                  </div>
                </div>
              </div>
            ))}

            {/* Service Desk 24/7 Box */}
            <div className="gradient-border-box p-6 space-y-3">
              <div className="flex items-center gap-2.5 text-white font-bold text-base">
                <div className="w-8 h-8 rounded-lg bg-white border border-white flex items-center justify-center text-[#591CC9] shadow-sm">
                  <Headphones className="w-4 h-4" />
                </div>
                <span>Mesa de Servicios 24/7</span>
              </div>
              <div className="space-y-1.5 text-xs text-white/85 font-medium">
                <div>Teléfono: <a href="tel:+56229407502" className="text-white hover:underline font-bold font-mono">{HIWAY_COMPANY_INFO.phoneSupport}</a></div>
                <div>Celular: <a href="tel:+56942551631" className="text-white hover:underline font-bold font-mono">{HIWAY_COMPANY_INFO.mobileSupport}</a></div>
                <div>Correo: <a href={`mailto:${HIWAY_COMPANY_INFO.emailSupport}`} className="text-white hover:underline font-bold font-mono">{HIWAY_COMPANY_INFO.emailSupport}</a></div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
