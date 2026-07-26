import Image from 'next/image';
import Link from 'next/link';

interface PageHeroProps {
  crumb: string;
  title1: string;
  title2: string;
  sub: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function PageHero({
  crumb,
  title1,
  title2,
  sub,
  primaryLabel = 'Get Free Consultation',
  primaryHref = '/contact',
  secondaryLabel,
  secondaryHref,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden" style={{ background: 'var(--color-navy)', minHeight: 560 }}>
      {/* Hero background photo */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-cover-photo.jpeg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 pt-24 lg:pt-32 pb-16 lg:pb-24">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm" style={{ color: 'var(--color-text-dark-muted)' }}>
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span style={{ color: 'var(--color-orange)' }}>{crumb}</span>
        </div>

        <div className="max-w-3xl">
          <h1 className="font-black text-4xl lg:text-5xl xl:text-6xl leading-tight text-white mb-4">
            {title1}{' '}
            <span style={{ color: 'var(--color-orange)' }}>{title2}</span>
          </h1>
          <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--color-text-dark-body)' }}>
            {sub}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={primaryHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-orange)' }}
            >
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-colors border"
                style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.06)' }}
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
