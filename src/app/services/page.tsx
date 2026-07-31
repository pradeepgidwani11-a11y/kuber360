import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionCTA from "@/components/ui/SectionCTA";
import WhyChooseGrid from "@/components/ui/WhyChooseGrid";
import { SERVICES_CATEGORIES, WHY_CHOOSE_SERVICES, PAGE_HEROES } from "@/lib/data";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: 'Financial Services in Jaipur — Loans, Insurance, Investments & Tax | KUBER360',
  description: 'Explore all financial services by KUBER360 in Jaipur — home loans, personal loans, business loans, credit cards, insurance, mutual funds, ITR filing, GST registration, and more.',
  alternates: { canonical: 'https://kuber360.in/services' },
  openGraph: {
    title: 'All Financial Services in Jaipur | KUBER360',
    description: 'One-stop financial services in Jaipur — loans, credit cards, insurance, investments, tax & GST, and business registration.',
    url: 'https://kuber360.in/services',
    images: [{ url: '/assets/kuber360-og.jpg', width: 1200, height: 630, alt: 'Financial Services — KUBER360 Jaipur' }],
  },
};
const h = PAGE_HEROES.services;

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', url: 'https://kuber360.in' }, { name: 'Services', url: 'https://kuber360.in/services' }]} />
      <PageHero {...h} primaryLabel="Get Free Consultation" secondaryLabel="View All Products" secondaryHref="#services-grid" />
      <section id="services-grid" className="py-16 lg:py-24" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="All Services" title="Everything We" highlight="Offer" center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_CATEGORIES.map((cat) => (
              <div key={cat.title} className="rounded-2xl bg-white p-6 flex flex-col" style={{ border: "1px solid var(--color-border)" }}>
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="font-black text-lg mb-3" style={{ color: "var(--color-text-head)" }}>{cat.title}</h3>
                <ul className="flex flex-col gap-1.5 flex-1 mb-5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-body)" }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-orange)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={cat.href} className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ background: "var(--color-orange)" }}>{cat.ctaLabel}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "var(--color-navy)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Why KUBER360" title="Why Choose" highlight="Us?" center light />
          <WhyChooseGrid items={WHY_CHOOSE_SERVICES} light />
        </div>
      </section>
      <SectionCTA title="Not Sure Which Service You Need?" sub="Talk to our experts and get personalized guidance — completely free." />
    </>
  );
}
