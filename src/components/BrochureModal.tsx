'use client';

import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (initialBrochureSlug) {
      setSelectedSlug(initialBrochureSlug);
    }
  }, [initialBrochureSlug]);

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      
      <div 
        className="bg-white w-full max-w-2xl rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl relative overflow-hidden animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={resetForm}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 border border-slate-200 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            
            {/* Modal Header */}
            <div className="space-y-2 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 border border-sky-200 text-[10px] font-bold text-sky-700 uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                Descarga de Documentación Técnica
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Danos tus datos y recibirás este contenido en tu correo
              </h3>
            </div>

            {/* Select Brochure Pills */}
            <div className="space-y-2 mb-6">
              <label className="text-xs font-bold text-slate-700 block">Brochure Seleccionado:</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {BROCHURES.map((b: BrochureItem) => (
                  <button
                    key={b.slug}
                    type="button"
                    onClick={() => setSelectedSlug(b.slug)}
                    className={`p-3 rounded-2xl text-left border transition-all flex items-start gap-2.5 ${
                      selectedSlug === b.slug
                        ? 'bg-sky-50 border-sky-300 text-slate-900 shadow-sm font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <FileText className={`w-4 h-4 shrink-0 mt-0.5 ${
                      selectedSlug === b.slug ? 'text-sky-600' : 'text-slate-400'
                    }`} />
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold truncate">{b.title}</div>
                      <div className="text-[10px] text-slate-500 font-normal">{b.fileSize} · {b.pages} págs</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {errorMessage && (
                <div className="p-3 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-xl font-medium">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Nombre *</label>
                  <input
                    type="text"
                    required
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Correo electrónico *</label>
                  <input
                    type="email"
                    required
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00b0e5]" />
                  <span>Envío directo por API Server-Side</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="py-3 px-6 text-xs font-bold text-white btn-gradient rounded-xl shadow-md transition-all flex items-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Enviar</span>
                    </>
                  )}
                </button>
              </div>

            </form>

          </div>
        ) : (
          <div className="text-center py-8 space-y-6 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-sky-100 border border-sky-300 text-[#00b0e5] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900">¡Contenido Enviado!</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Hemos procesado el envío del brochure <strong className="text-[#05477d]">{currentBrochure.title}</strong> a la casilla <span className="text-[#05477d] font-mono font-bold">{email}</span>.
              </p>
            </div>

            <button
              onClick={resetForm}
              className="px-6 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl"
            >
              Cerrar Ventana
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
