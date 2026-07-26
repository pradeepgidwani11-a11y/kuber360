import Link from 'next/link';
import { GENERAL_WA_LINK } from '@/lib/data';

interface SectionCTAProps {
  title: string;
  sub: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function SectionCTA({
  title,
  sub,
  primaryLabel = 'Get Free Consultation',
  primaryHref = '/contact',
  secondaryLabel = 'Chat on WhatsApp',
  secondaryHref = GENERAL_WA_LINK,
}: SectionCTAProps) {
  return (
    <section style={{ background: 'var(--color-navy)' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16 lg:py-20 text-center">
        <h2 className="font-black text-3xl lg:text-4xl text-white mb-4">{title}</h2>
        <p className="text-base lg:text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-text-dark-body)' }}>{sub}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: 'var(--color-orange)' }}
          >
            {primaryLabel}
          </Link>
          <a
            href={secondaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold transition-colors border"
            style={{ color: 'white', borderColor: 'rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.06)' }}
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
