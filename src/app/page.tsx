import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  HERO_STATS,
  HOME_SERVICES,
  WHY_CHOOSE_8,
  PROCESS_4,
  TESTIMONIALS,
  INSIGHTS_3,
  GENERAL_WA_LINK,
} from '@/lib/data';
import SectionHeader from '@/components/ui/SectionHeader';
import TestimonialCard from '@/components/ui/TestimonialCard';

export const metadata: Metadata = {
  title: 'KUBER360 Financial Services — Loans, Insurance, Investments & More',
  description:
    'Your trusted DSA partner for loans, credit cards, insurance, investments, and tax services in India. Get expert guidance and a free consultation today.',
};

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: 560 }}>
        {/* Background image — z-index 1 */}
        <div className="absolute inset-0" style={{ zIndex: 1 }}>
          <Image src="/assets/hero-cover-photo.jpeg" alt="" fill className="object-cover object-center" priority />
        </div>

        {/* Content — z-index 2 */}
        <div className="relative" style={{ zIndex: 2 }}>
          <div className="max-w-full px-4 lg:px-15 pt-24 lg:pt-32 pb-12 lg:pb-16">
            <div className="max-w-full">
              {/* Heading: 3 separate lines */}
              <div className="font-black leading-tight text-white" style={{ fontSize: 'clamp(26px, 4vw, 38px)', lineHeight: 1.15 }}>
                One Stop Solution For
              </div>
              <div className="font-black leading-tight text-white" style={{ fontSize: 'clamp(26px, 4vw, 38px)', lineHeight: 1.15 }}>
                All Your
              </div>
              <div className="font-black leading-tight" style={{ fontSize: 'clamp(26px, 4vw, 38px)', lineHeight: 1.15, color: 'var(--color-orange)', marginTop: 2 }}>
                Financial Needs
              </div>

              <p className="mt-4 leading-relaxed" style={{ color: 'rgb(220, 228, 240)', fontSize: 16, maxWidth: 460 }}>
                Loans, Credit Cards, Insurance, Investments, Tax &amp; GST, Business Registration and Financial Advisory under one roof.
              </p>

              <div className="flex flex-wrap gap-3 mt-7">
                <a
                  href={GENERAL_WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-extrabold text-white transition-opacity hover:opacity-90"
                  style={{ background: 'var(--color-orange)', padding: '14px 22px', borderRadius: 10, fontSize: 13.5 }}
                >
                  Get Free Consultation
                </a>
                <a
                  href={`https://wa.me/918742019250?text=${encodeURIComponent('Hi! I would like to request a callback for financial guidance.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-white transition-colors hover:bg-white/10"
                  style={{ background: 'transparent', border: '1.5px solid rgba(255,255,255,0.5)', padding: '14px 22px', borderRadius: 10, fontSize: 13.5 }}
                >
                  📞 Request a Callback
                </a>
              </div>

              {/* Stats — frosted glass cards inline in hero */}
              <div style={{width:'100%', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginTop: 32 }}>
                {HERO_STATS.map((s) => (
                  <div
                    key={s.label}
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(6px)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: 12,
                      padding: '14px 16px',
                    }}
                  >
                    <div className="font-black" style={{ color: 'var(--color-orange)', fontSize: 20 }}>{s.value}</div>
                    <div className="font-medium" style={{ color: 'rgb(220, 228, 240)', fontSize: 13, marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES GRID ────────────────────────────────────── */}
      <section className="py-12 lg:py-16" style={{ background: 'rgb(247, 249, 252)' }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader
            tag="OUR SERVICES"
            title="Complete Financial Solutions"
            highlight=""
            sub="Wide range of financial services to meet all your needs under one roof."
            center
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-7">
            {HOME_SERVICES.map((s, i) => (
              <Link
                key={s.title}
                href={s.href}
                className="group flex flex-col items-center text-center rounded-2xl bg-white transition-shadow hover:shadow-md"
                style={{ border: '1px solid var(--color-border)', padding: 22, boxShadow: 'rgba(8,28,58,0.04) 0px 2px 10px', cursor: 'pointer' }}
              >
                <div className="flex items-center justify-center" style={{ width: 60,height: 60, borderRadius: 12, background: '#FFF1E3', fontSize: 21, margin: '5px 14px' }}>
                  {s.icon}
                </div>
                <div className="font-extrabold mb-1.5" style={{ color: 'var(--color-text-head)', fontSize: 14.5 }}>{s.title}</div>
                <div className="leading-snug flex-1" style={{ color: 'rgb(139,151,170)', fontSize: 11.5, marginTop: 6, lineHeight: 1.45 }}>{s.desc}</div>
                <div className="font-bold mt-3.5" style={{ color: 'var(--color-orange)', fontSize: 12.5 }}>Explore Service →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE ─────────────────────────────────────── */}
      <section className="py-12 lg:py-16" style={{ background: 'rgb(239, 243, 248)' }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="WHY CHOOSE KUBER360?" title="Your Trust, Our Responsibility" highlight="" center />
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 16, marginTop: 28 }}>
            {WHY_CHOOSE_8.map((w) => (
              <div key={w.title} style={{ textAlign: 'center', padding: 8 }}>
                <div style={{ width: 46, height: 46, borderRadius: '50%', background: '#fff', boxShadow: 'rgba(8,28,58,0.06) 0px 2px 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, margin: '0 auto 12px' }}>
                  {w.icon}
                </div>
                <div style={{ color: 'var(--color-text-head)', fontSize: 13, fontWeight: 800 }}>{w.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─────────────────────────────────────────── */}
      <section className="py-12 lg:py-16" style={{ background: 'rgb(247, 249, 252)' }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="HOW IT WORKS" title="Simple 4 Steps Process" highlight="" center />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginTop: 30 }}>
            {PROCESS_4.map((step) => (
              <div key={step.num} style={{ textAlign: 'center' }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--color-navy)', color: 'var(--color-orange)', fontSize: 13, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                  {step.num}
                </div>
                <div style={{ color: 'var(--color-text-head)', fontSize: 14, fontWeight: 800 }}>{step.title}</div>
                <div style={{ color: 'rgb(139,151,170)', fontSize: 12, marginTop: 6, lineHeight: 1.5 }}>{step.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 26 }}>
            <a
              href={GENERAL_WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-extrabold text-white transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-orange)', padding: '13px 24px', borderRadius: 10, fontSize: 13.5 }}
            >
              Start Step 1: Connect with Us →
            </a>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="WHAT OUR CLIENTS SAY" title="Real Stories, Real Satisfaction" highlight="" center />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── INSIGHTS ────────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: '#F7F9FC' }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="LATEST FINANCIAL INSIGHTS" title="Stay Updated, Stay Ahead" highlight="" center />
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-0" style={{ flexBasis: '600px' }}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {INSIGHTS_3.map((ins) => (
                  <div key={ins.title} className="rounded-2xl overflow-hidden bg-white" style={{ border: '1px solid rgb(231,236,243)' }}>
                    <div style={{ width: '100%', height: 110, background: 'linear-gradient(135deg, var(--color-navy) 0%, rgb(15,43,82) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 14px', textAlign: 'center' }}>
                      <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 11, fontWeight: 700, lineHeight: 1.4 }}>{ins.title}</span>
                    </div>
                    <div style={{ padding: 16 }}>
                      <div className="font-extrabold leading-snug mb-1" style={{ color: 'var(--color-text-head)', fontSize: 13.5 }}>{ins.title}</div>
                      <div className="mb-2.5" style={{ color: 'rgb(139,151,170)', fontSize: 11 }}>{ins.date} · {ins.tag}</div>
                      <div className="font-bold" style={{ color: 'var(--color-orange)', fontSize: 12 }}>Read More →</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <button className="font-extrabold text-white" style={{ background: 'var(--color-navy)', padding: '12px 26px', borderRadius: 8, fontSize: 12.5, border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                  View All Articles
                </button>
              </div>
            </div>
            <div className="flex-shrink-0 rounded-2xl p-6 flex flex-col justify-center" style={{ flexBasis: '240px', background: 'var(--color-navy)' }}>
              <div className="font-extrabold text-white text-base mb-2">Need Financial Assistance?</div>
              <div className="text-sm mb-5" style={{ color: '#B9C4D6' }}>Our experts are just a message away.</div>
              <a
                href={GENERAL_WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-lg font-extrabold text-white text-sm mb-3"
                style={{ background: '#25D366' }}
              >
                💬 Chat on WhatsApp
              </a>
              <a
                href={`https://wa.me/918742019250?text=${encodeURIComponent('Hi! I would like to request a callback for financial guidance.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm"
                style={{ background: '#FFFFFF', color: 'var(--color-navy)' }}
              >
                📞 Request a Callback
              </a>
              <div className="text-xs mt-4" style={{ color: '#8FA1BE' }}>🔒 100% Secure</div>
              <div className="text-xs mt-1.5" style={{ color: '#8FA1BE' }}>✅ No Spam, Only Solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ───────────────────────────────────────── */}
      <section style={{ background: '#FF7A00' }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 lg:py-10 flex items-center justify-between flex-wrap gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0" style={{ background: 'rgba(255,255,255,0.2)' }}>💰</div>
            <div>
              <h2 className="font-black text-base lg:text-xl text-white">Ready to Achieve Your Financial Goals?</h2>
              <p className="text-sm mt-1" style={{ color: '#FFEBD9' }}>Chat with our experts on WhatsApp and get the best solutions today!</p>
            </div>
          </div>
          <a
            href={GENERAL_WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-extrabold transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ background: '#FFFFFF', color: '#081C3A' }}
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
