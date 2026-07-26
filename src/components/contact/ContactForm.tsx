'use client';
import { useState } from 'react';
import { CONTACT_SERVICE_OPTIONS, WA_NUMBER } from '@/lib/data';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', mobile: '', city: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi! I'd like a free consultation.\n\nName: ${form.name}\nMobile: ${form.mobile}\nCity: ${form.city}\nService: ${form.service}${form.message ? `\nMessage: ${form.message}` : ''}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="rounded-2xl bg-white p-6 lg:p-8" style={{ border: '1px solid var(--color-border)' }}>
      <h3 className="font-black text-xl mb-6" style={{ color: 'var(--color-text-head)' }}>
        Request Free Consultation
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--color-text-head)' }}>
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="Your full name"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors"
            style={{ border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text-head)' }}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--color-text-head)' }}>
            Mobile Number *
          </label>
          <input
            type="tel"
            required
            pattern="[6-9][0-9]{9}"
            maxLength={10}
            placeholder="10-digit mobile number"
            value={form.mobile}
            onChange={e => setForm(f => ({ ...f, mobile: e.target.value.replace(/\D/g, '') }))}
            className="w-full rounded-lg px-4 py-3 text-sm outline-none"
            style={{ border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text-head)' }}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--color-text-head)' }}>
            City
          </label>
          <input
            type="text"
            placeholder="Your city"
            value={form.city}
            onChange={e => setForm(f => ({ ...f, city: e.target.value }))}
            className="w-full rounded-lg px-4 py-3 text-sm outline-none"
            style={{ border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text-head)' }}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--color-text-head)' }}>
            Service Interested In
          </label>
          <select
            value={form.service}
            onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
            className="w-full rounded-lg px-4 py-3 text-sm outline-none"
            style={{ border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: form.service ? 'var(--color-text-head)' : 'var(--color-text-muted)' }}
          >
            <option value="">Select a service</option>
            {CONTACT_SERVICE_OPTIONS.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--color-text-head)' }}>
            Message (Optional)
          </label>
          <textarea
            rows={3}
            placeholder="Tell us more about your requirement..."
            value={form.message}
            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            className="w-full rounded-lg px-4 py-3 text-sm outline-none resize-none"
            style={{ border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text-head)' }}
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3.5 rounded-lg font-bold text-white transition-opacity hover:opacity-90 text-sm"
          style={{ background: 'var(--color-orange)' }}
        >
          Send on WhatsApp →
        </button>
        <p className="text-xs text-center" style={{ color: 'var(--color-text-muted)' }}>
          Clicking &quot;Send&quot; opens WhatsApp with your details. We respond within 30 minutes.
        </p>
      </form>
    </div>
  );
}
