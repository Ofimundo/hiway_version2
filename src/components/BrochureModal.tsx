'use client';

import React, { useState } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Loader2 
} from 'lucide-react';
import { BROCHURES, BrochureItem } from '@/data/hiwayData';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialBrochureSlug?: string;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ 
  isOpen, 
  onClose, 
  initialBrochureSlug 
}) => {
  const [selectedSlug, setSelectedSlug] = useState<string>(
    initialBrochureSlug || BROCHURES[0].slug
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [prevInitial, setPrevInitial] = useState(initialBrochureSlug);
  if (initialBrochureSlug && initialBrochureSlug !== prevInitial) {
    setPrevInitial(initialBrochureSlug);
    setSelectedSlug(initialBrochureSlug);
  }

  if (!isOpen) return null;

  const currentBrochure = BROCHURES.find(b => b.slug === selectedSlug) || BROCHURES[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setErrorMessage('Por favor ingresa tu nombre y correo electrónico.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/brochure', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company,
          brochureSlug: selectedSlug
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage(data.message || 'Error al procesar la solicitud.');
      }
    } catch (err) {
      setErrorMessage('Error de conexión con el servidor.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    setName('');
    setEmail('');
    setCompany('');
    setErrorMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#021C33]/80 backdrop-blur-sm">
      
      <div 
        className="bg-[#05477D] text-white w-full max-w-2xl rounded-3xl p-6 sm:p-8 border border-[#591CC9] shadow-2xl relative overflow-hidden animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFD303] to-[#591CC9]" />
        
        {/* Close Button */}
        <button
          onClick={resetForm}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#021C33] text-white/70 hover:text-[#FFD303] border border-[#591CC9]/60 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            
            {/* Modal Header */}
            <div className="space-y-2 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#021C33] border border-[#FFD303]/40 text-[10px] font-bold text-[#FFD303] uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-[#FFD303]" />
                Descarga de Documentación Técnica
              </div>
              <h3 className="text-2xl font-bold text-white">
                Danos tus datos y recibirás este contenido en tu correo
              </h3>
            </div>

            {/* Select Brochure Pills */}
            <div className="space-y-2 mb-6">
              <label className="text-xs font-bold text-white/90 block">Brochure Seleccionado:</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {BROCHURES.map((b: BrochureItem) => (
                  <button
                    key={b.slug}
                    type="button"
                    onClick={() => setSelectedSlug(b.slug)}
                    className={`p-3 rounded-2xl text-left border transition-all flex items-start gap-2.5 ${
                      selectedSlug === b.slug
                        ? 'bg-[#021C33] border-[#FFD303] text-white shadow-sm font-bold'
                        : 'bg-[#05335C] border-[#591CC9]/50 text-white/80 hover:text-white hover:bg-[#021C33]/60'
                    }`}
                  >
                    <FileText className={`w-4 h-4 shrink-0 mt-0.5 ${
                      selectedSlug === b.slug ? 'text-[#FFD303]' : 'text-white/60'
                    }`} />
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold truncate">{b.title}</div>
                      <div className="text-[10px] text-white/70 font-normal">{b.fileSize} · {b.pages} págs</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Form (Temporarily Disabled) */}
            <div className="mb-4 p-3 rounded-xl bg-[#021C33] border border-[#FFD303]/50 text-xs text-white/90">
              <strong className="text-[#FFD303] block mb-0.5">Formulario temporalmente inhabilitado</strong>
              Solicita este brochure escribiendo a <a href="mailto:consultas@cxhiway.com" className="text-[#FFD303] underline font-bold">consultas@cxhiway.com</a>.
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 opacity-60 pointer-events-none select-none" aria-disabled="true">
              <fieldset disabled className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-white block mb-1">Nombre *</label>
                    <input
                      type="text"
                      disabled
                      placeholder="Nombre"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#021C33] border border-[#591CC9]/60 rounded-xl text-xs text-white placeholder-white/40 cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-white block mb-1">Correo electrónico *</label>
                    <input
                      type="email"
                      disabled
                      placeholder="Correo electrónico"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#021C33] border border-[#591CC9]/60 rounded-xl text-xs text-white placeholder-white/40 cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-white/75">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#FFD303]" />
                    <span>Formulario temporalmente deshabilitado</span>
                  </div>

                  <button
                    type="button"
                    disabled
                    className="py-3 px-6 text-xs font-bold btn-gradient rounded-xl shadow-md flex items-center gap-2 opacity-50 cursor-not-allowed"
                  >
                    <Download className="w-4 h-4" />
                    <span>Enviar</span>
                  </button>
                </div>
              </fieldset>
            </form>

          </div>
        ) : (
          <div className="text-center py-8 space-y-6 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-[#021C33] border border-[#FFD303] text-[#FFD303] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">¡Contenido Enviado!</h3>
              <p className="text-xs text-white/85 max-w-md mx-auto">
                Hemos procesado el envío del brochure <strong className="text-[#FFD303]">{currentBrochure.title}</strong> a la casilla <span className="text-[#FFD303] font-mono font-bold">{email}</span>.
              </p>
            </div>

            <button
              onClick={resetForm}
              className="px-6 py-2.5 text-xs font-semibold text-white bg-[#021C33] hover:bg-[#05335C] border border-[#591CC9] rounded-xl"
            >
              Cerrar Ventana
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
