import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import SectionCTA from '@/components/ui/SectionCTA';
import WhyChooseGrid from '@/components/ui/WhyChooseGrid';
import { CORE_VALUES, INDUSTRIES_SERVED, EXPERT_ROLES, PAGE_HEROES } from '@/lib/data';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'About KUBER360 — DSA & Financial Services Company in Jaipur, Rajasthan',
  description: 'KUBER360 is a DSA-based financial services company in Jaipur, Rajasthan. Learn about our mission, values, expert team, and why 5000+ clients trust us for loans, insurance, and investments.',
  alternates: { canonical: 'https://kuber360.in/about' },
  openGraph: {
    title: 'About KUBER360 — Your Trusted Financial Partner in Jaipur',
    description: 'Learn about KUBER360 — Jaipur\'s trusted DSA with 50+ banking partners and 5000+ happy clients.',
    url: 'https://kuber360.in/about',
    images: [{ url: '/assets/kuber360-og.jpg', width: 1200, height: 630, alt: 'About KUBER360 Financial Services' }],
  },
};

const h = PAGE_HEROES.about;

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', url: 'https://kuber360.in' }, { name: 'About Us', url: 'https://kuber360.in/about' }]} />
      <PageHero {...h} primaryLabel="Talk to Our Experts" primaryHref="/contact" />

      <section className="py-16 lg:py-24" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader tag="Who We Are" title="Your Trusted" highlight="Financial Partner" />
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-text-body)' }}>
                KUBER360 Financial Services is a DSA (Direct Selling Agent) based in Jaipur, Rajasthan. We simplify access to financial products — helping individuals, families and businesses make smarter financial decisions.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-text-body)' }}>
                With 50+ banking and NBFC partners, we compare and recommend the best loan rates, insurance plans and investment options — completely free of charge to you.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-body)' }}>
                Our experts handle everything: paperwork, documentation, and liaising with lenders and insurers — so you can focus on your goals.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '5000+', label: 'Happy Clients' },
                { value: '50+', label: 'Banking Partners' },
                { value: '100+', label: 'Financial Products' },
                { value: '98%', label: 'Satisfaction Rate' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl p-6 text-center bg-white" style={{ border: '1px solid var(--color-border)' }}>
                  <div className="font-black text-3xl mb-1" style={{ color: 'var(--color-orange)' }}>{stat.value}</div>
                  <div className="text-sm font-medium" style={{ color: 'var(--color-text-body)' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-8" style={{ background: 'var(--color-navy)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-black text-2xl text-white mb-3">Our Mission</h3>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-dark-body)' }}>
                To make quality financial services accessible, transparent and simple for every individual and business in India — with honest guidance and zero hidden charges.
              </p>
            </div>
            <div className="rounded-2xl p-8" style={{ background: 'var(--color-navy-dark)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="font-black text-2xl text-white mb-3">Our Vision</h3>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-dark-body)' }}>
                To become India&apos;s most trusted one-stop financial services partner — empowering families and businesses to achieve financial security and long-term prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Our Values" title="What We" highlight="Stand For" center />
          <WhyChooseGrid items={CORE_VALUES} />
        </div>
      </section>

      <section className="py-16 lg:py-24" style={{ background: 'var(--color-navy)' }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Who We Serve" title="Industries &" highlight="Profiles We Serve" center light />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {INDUSTRIES_SERVED.map((ind) => (
              <div key={ind.title} className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="text-3xl">{ind.icon}</span>
                <span className="text-sm font-semibold text-white">{ind.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Our Team" title="Expert" highlight="Advisors" center />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {EXPERT_ROLES.map((role) => (
              <div key={role.title} className="flex flex-col items-center text-center gap-4 rounded-2xl p-8" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                <span className="text-5xl">{role.icon}</span>
                <div className="font-bold text-base" style={{ color: 'var(--color-text-head)' }}>{role.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA title="Ready to Start Your Financial Journey?" sub="Talk to a KUBER360 expert today — free consultation, no obligation." />
    </>
  );
}
