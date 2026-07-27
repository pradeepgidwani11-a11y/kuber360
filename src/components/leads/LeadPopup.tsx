'use client';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useLeadPopup } from './LeadContext';
import { hasDuplicateLead, submitLead } from '@/lib/leads';
import { collectClientMeta } from '@/lib/clientMeta';
import { LEAD_SERVICE_OPTIONS } from '@/lib/data';

const SESSION_KEY = 'kb_popup_shown';
const INDIAN_MOBILE = /^[6-9]\d{9}$/;

type Step = 'form' | 'submitting' | 'success' | 'error';

export default function LeadPopup() {
  const { isOpen, closePopup, popupSource } = useLeadPopup();
  const [step, setStep] = useState<Step>('form');
  const [form, setForm] = useState({ name: '', mobile: '', city: '', service: '', message: '' });
  const [mobileError, setMobileError] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Reset form when popup opens
  useEffect(() => {
    if (isOpen) {
      setStep('form');
      setForm({ name: '', mobile: '', city: '', service: '', message: '' });
      setMobileError('');
      setErrorMsg('');
    }
  }, [isOpen]);

  const handleMobileChange = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 10);
    setForm(f => ({ ...f, mobile: digits }));
    if (digits.length === 10 && !INDIAN_MOBILE.test(digits)) {
      setMobileError('Enter a valid 10-digit Indian mobile number');
    } else {
      setMobileError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!INDIAN_MOBILE.test(form.mobile)) {
      setMobileError('Enter a valid 10-digit Indian mobile number');
      return;
    }

    setStep('submitting');

    try {
      const isDuplicate = await hasDuplicateLead(form.mobile);
      if (isDuplicate) {
        // Still show success — don't tell user they're a duplicate
        setStep('success');
        sessionStorage.setItem(SESSION_KEY, '1');
        return;
      }

      const meta = await collectClientMeta();
      await submitLead({
        name: form.name,
        mobile: form.mobile,
        city: form.city,
        service: form.service,
        source: popupSource,
        meta,
      });

      setStep('success');
      sessionStorage.setItem(SESSION_KEY, '1');
    } catch (err) {
      console.error('[LeadPopup] submission error:', err);
      setErrorMsg('Something went wrong. Please try WhatsApp instead.');
      setStep('error');
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
        onClick={closePopup}
        aria-hidden
      />

      {/* Modal */}
      <div
        className="fixed inset-0 z-[101] flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-label="Free Consultation Request"
      >
        <div
          className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
          style={{ background: '#fff' }}
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="px-6 pt-6 pb-4 flex items-start justify-between" style={{ background: 'var(--color-navy)' }}>
            <div>
              <div
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: 'var(--color-orange)' }}
              >
                FREE CONSULTATION
              </div>
              <h2 className="font-black text-xl text-white leading-snug">
                Get a Free Consultation
              </h2>
              <p className="text-sm mt-1" style={{ color: 'var(--color-text-dark-muted)' }}>
                Share a few details and our financial expert will reach out to you shortly.
              </p>
            </div>
            <button
              onClick={closePopup}
              className="ml-3 p-1.5 rounded-lg flex-shrink-0 transition-colors hover:bg-white/10"
              style={{ color: 'var(--color-text-dark-muted)' }}
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="px-6 py-5">
            {step === 'form' && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none"
                    style={{ border: '1.5px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text-head)' }}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number *"
                    value={form.mobile}
                    onChange={e => handleMobileChange(e.target.value)}
                    maxLength={10}
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none"
                    style={{
                      border: `1.5px solid ${mobileError ? 'var(--color-error)' : 'var(--color-border)'}`,
                      background: 'var(--color-surface)',
                      color: 'var(--color-text-head)',
                    }}
                  />
                  {mobileError && (
                    <p className="text-xs mt-1" style={{ color: 'var(--color-error)' }}>{mobileError}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="City"
                    value={form.city}
                    onChange={e => setForm(f => ({ ...f, city: e.target.value }))}
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none"
                    style={{ border: '1.5px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text-head)' }}
                  />
                </div>
                <div>
                  <select
                    value={form.service}
                    onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none"
                    style={{
                      border: '1.5px solid var(--color-border)',
                      background: 'var(--color-surface)',
                      color: form.service ? 'var(--color-text-head)' : 'var(--color-text-muted)',
                    }}
                  >
                    <option value="">Service Required</option>
                    {LEAD_SERVICE_OPTIONS.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Message (optional)"
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    rows={3}
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none resize-none"
                    style={{ border: '1.5px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text-head)' }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg font-bold text-white text-sm transition-opacity hover:opacity-90 mt-1"
                  style={{ background: 'var(--color-orange)' }}
                >
                  Submit Inquiry
                </button>
              </form>
            )}

            {step === 'submitting' && (
              <div className="py-8 text-center">
                <div className="text-4xl mb-3">⏳</div>
                <p className="font-semibold" style={{ color: 'var(--color-text-head)' }}>Submitting your request…</p>
              </div>
            )}

            {step === 'success' && (
              <div className="py-6 text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="font-black text-xl mb-2" style={{ color: 'var(--color-text-head)' }}>
                  Request Received!
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-text-body)' }}>
                  Our advisor will call you at <strong>{form.mobile}</strong> within 30 minutes during business hours.
                </p>
                <button
                  onClick={closePopup}
                  className="px-6 py-2.5 rounded-lg text-sm font-bold text-white"
                  style={{ background: 'var(--color-orange)' }}
                >
                  Close
                </button>
              </div>
            )}

            {step === 'error' && (
              <div className="py-6 text-center">
                <div className="text-4xl mb-3">⚠️</div>
                <p className="font-semibold mb-2" style={{ color: 'var(--color-text-head)' }}>Something went wrong</p>
                <p className="text-sm mb-5" style={{ color: 'var(--color-text-body)' }}>{errorMsg}</p>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={() => setStep('form')}
                    className="px-5 py-2.5 rounded-lg text-sm font-bold border"
                    style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-head)' }}
                  >
                    Try Again
                  </button>
                  <a
                    href="https://wa.me/918742019250?text=Hi!%20I%20would%20like%20a%20free%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-lg text-sm font-bold text-white"
                    style={{ background: 'var(--color-whatsapp)' }}
                    onClick={closePopup}
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
