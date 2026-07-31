import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionCTA from "@/components/ui/SectionCTA";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { WHY_US_CARDS, VS_COMPARISON, WHY_CUSTOMERS_RETURN, TESTIMONIALS, HERO_STATS, PAGE_HEROES, GENERAL_WA_LINK } from "@/lib/data";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: 'Why Choose KUBER360? — Trusted DSA in Jaipur with 5000+ Happy Clients',
  description: 'Discover why 5000+ clients trust KUBER360. 50+ banking partners, zero hidden charges, expert advisors, quick processing, and dedicated post-service support in Jaipur, Rajasthan.',
  alternates: { canonical: 'https://kuber360.in/why-us' },
  openGraph: {
    title: 'Why Choose KUBER360? — Jaipur\'s Most Trusted Financial DSA',
    description: '5000+ happy clients, 50+ bank partners, zero hidden charges. See why KUBER360 is Jaipur\'s top DSA.',
    url: 'https://kuber360.in/why-us',
    images: [{ url: '/assets/kuber360-og.jpg', width: 1200, height: 630, alt: 'Why KUBER360 — Trusted Financial Partner' }],
  },
};
const h = PAGE_HEROES["why-us"];

export default function WhyUsPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', url: 'https://kuber360.in' }, { name: 'Why KUBER360', url: 'https://kuber360.in/why-us' }]} />
      <PageHero {...h} primaryLabel="Get Free Consultation" secondaryLabel="Chat on WhatsApp" secondaryHref={GENERAL_WA_LINK} />
      <section style={{ background: "var(--color-navy-dark)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {HERO_STATS.map((s) => (<div key={s.label} className="text-center"><div className="font-black text-2xl lg:text-3xl" style={{ color: "var(--color-orange)" }}>{s.value}</div><div className="text-xs mt-1" style={{ color: "var(--color-text-dark-muted)" }}>{s.label}</div></div>))}
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Our Advantages" title="What Sets Us" highlight="Apart?" center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_US_CARDS.map((card) => (<div key={card.title} className="rounded-2xl bg-white p-5 flex flex-col gap-3" style={{ border: "1px solid var(--color-border)" }}><span className="text-3xl">{card.icon}</span><div className="font-bold text-base" style={{ color: "var(--color-text-head)" }}>{card.title}</div><div className="text-sm leading-relaxed" style={{ color: "var(--color-text-body)" }}>{card.desc}</div></div>))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "var(--color-navy)" }}>
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Comparison" title="KUBER360 vs" highlight="Going Directly to a Bank" center light />
          <div style={{ overflowX: "auto" }}>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left px-4 py-3 font-bold text-white" style={{ background: "rgba(255,255,255,0.05)" }}>Feature</th>
                  <th className="px-4 py-3 font-bold text-center text-white" style={{ background: "rgba(255,255,255,0.05)" }}>Directly to Bank</th>
                  <th className="px-4 py-3 font-bold text-center" style={{ background: "var(--color-orange)", color: "#fff" }}>KUBER360</th>
                </tr>
              </thead>
              <tbody>
                {VS_COMPARISON.map((row, i) => (<tr key={row.feature} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)" }}><td className="px-4 py-3 font-semibold text-white">{row.feature}</td><td className="px-4 py-3 text-center" style={{ color: "var(--color-text-dark-muted)" }}>{row.traditional}</td><td className="px-4 py-3 text-center font-semibold" style={{ color: "#4ade80" }}>✓ {row.kuber}</td></tr>))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Customer Loyalty" title="Why Customers" highlight="Come Back to Us" center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CUSTOMERS_RETURN.map((item) => (<div key={item.title} className="rounded-2xl p-5 flex items-start gap-4" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}><span className="text-3xl flex-shrink-0">{item.icon}</span><div><div className="font-bold text-base mb-1" style={{ color: "var(--color-text-head)" }}>{item.title}</div><div className="text-sm leading-relaxed" style={{ color: "var(--color-text-body)" }}>{item.desc}</div></div></div>))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "var(--color-navy-dark)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Client Stories" title="What Our Clients" highlight="Say" center light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => <TestimonialCard key={t.name} {...t} light />)}
          </div>
        </div>
      </section>
      <SectionCTA title="Experience the KUBER360 Difference" sub="Join 5000+ happy clients who trust KUBER360 for all their financial needs." />
    </>
  );
}
