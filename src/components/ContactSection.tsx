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
    <section id="contacto" className="py-20 relative overflow-hidden bg-white">
      
      {/* Glow */}
      <div className="cyber-glow-green bottom-0 right-0 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-700 uppercase tracking-widest">
            Atención Especializada
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Conversemos con un <span className="text-gradient-cyan">Consultor</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed font-medium">
            Completa el formulario y aclararemos todas tus dudas desde nuestra Casa Matriz en Chile o filial México.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Form Container: White Card with Gradient Border Line */}
          <div className="lg:col-span-7 gradient-border-box p-6 sm:p-10 relative">
            
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {errorMessage && (
                  <div className="p-4 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-xl font-medium">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">Nombre *</label>
                    <input
                      type="text"
                      required
                      placeholder="Constanza"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">Apellido *</label>
                    <input
                      type="text"
                      required
                      placeholder="Silva"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">Correo *</label>
                    <input
                      type="email"
                      required
                      placeholder="constanza@empresa.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">Empresa *</label>
                    <input
                      type="text"
                      placeholder="Nombre de tu empresa"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">Consulta Servicio/Soluciones *</label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-sky-500 transition-colors"
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
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">Mensaje *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Escribe tu mensaje o consulta..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#00b0e5]" />
                    <span>Envío seguro Server-Side</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="py-3.5 px-8 text-xs font-bold text-white btn-gradient rounded-xl shadow-md transition-all flex items-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>ENVIAR MENSAJE</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            ) : (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 rounded-full bg-sky-100 border border-sky-300 text-[#00b0e5] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900">¡Formulario Enviado!</h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto font-medium">
                    Gracias <strong className="text-[#05477d]">{name} {lastname}</strong>. Aclararemos todas tus dudas a la brevedad respondiendo a <span className="text-[#05477d] font-mono font-bold">{email}</span>.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setName('');
                    setLastname('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="px-6 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl"
                >
                  Enviar otro mensaje
                </button>
              </div>
            )}

          </div>

          {/* Right Regional HQ Details: White Cards with Gradient Border Lines */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Cards */}
            {OFFICES.map((office) => (
              <div key={office.city} className="gradient-border-box p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                    <Building className="w-4 h-4 text-[#00b0e5]" />
                    <span>{office.isHQ ? 'Casa Matriz' : 'Filial México'}</span>
                  </div>
                  {office.isHQ && (
                    <span className="px-2 py-0.5 text-[9px] font-bold text-[#05477d] bg-sky-50 border border-sky-200 rounded uppercase">
                      Santiago, Chile
                    </span>
                  )}
                </div>

                <div className="space-y-2 text-xs text-slate-600 pt-1 font-medium">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#00b0e5] shrink-0 mt-0.5" />
                    <span>Ubicación: {office.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#00b0e5] shrink-0" />
                    <span>Teléfono: <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="text-[#05477d] hover:underline font-bold font-mono">{office.phone}</a></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#00b0e5] shrink-0" />
                    <span>Correo: <a href={`mailto:${office.email}`} className="text-[#05477d] hover:underline font-bold font-mono">{office.email}</a></span>
                  </div>
                </div>
              </div>
            ))}

            {/* Service Desk 24/7 Box: White Card with Gradient Border Line */}
            <div className="gradient-border-box p-6 space-y-3">
              <div className="flex items-center gap-2 text-[#05477d] font-bold text-base">
                <Headphones className="w-5 h-5 text-[#00b0e5]" />
                <span>Mesa de Servicios 24/7</span>
              </div>
              <div className="space-y-1.5 text-xs text-slate-700 font-medium">
                <div>Teléfono: <a href="tel:+56229407502" className="text-sky-700 hover:underline font-bold font-mono">{HIWAY_COMPANY_INFO.phoneSupport}</a></div>
                <div>Celular: <a href="tel:+56942551631" className="text-sky-700 hover:underline font-bold font-mono">{HIWAY_COMPANY_INFO.mobileSupport}</a></div>
                <div>Correo: <a href={`mailto:${HIWAY_COMPANY_INFO.emailSupport}`} className="text-sky-700 hover:underline font-bold font-mono">{HIWAY_COMPANY_INFO.emailSupport}</a></div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
