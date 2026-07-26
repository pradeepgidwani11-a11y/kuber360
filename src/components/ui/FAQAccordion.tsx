'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ { q: string; a: string }
interface FAQAccordionProps { faqs: FAQ[]; light?: boolean }

export default function FAQAccordion({ faqs, light = false }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="flex flex-col gap-2">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-xl overflow-hidden"
          style={{ border: `1px solid ${light ? 'rgba(255,255,255,0.1)' : 'var(--color-border)'}`, background: light ? 'rgba(255,255,255,0.04)' : '#fff' }}
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-semibold text-sm leading-snug" style={{ color: light ? '#fff' : 'var(--color-text-head)' }}>
              {faq.q}
            </span>
            <ChevronDown
              size={16}
              className="flex-shrink-0 transition-transform"
              style={{ color: 'var(--color-orange)', transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </button>
          {open === i && (
            <div className="px-5 pb-4">
              <p className="text-sm leading-relaxed" style={{ color: light ? 'var(--color-text-dark-body)' : 'var(--color-text-body)' }}>
                {faq.a}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
