import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionCTA from "@/components/ui/SectionCTA";
import WhyChooseGrid from "@/components/ui/WhyChooseGrid";
import ProcessSteps from "@/components/ui/ProcessSteps";
import FAQAccordion from "@/components/ui/FAQAccordion";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { INSURANCE_CATEGORIES, INSURANCE_HOW_STEPS, INSURANCE_BENEFITS, INSURANCE_DOCS, INSURANCE_FAQS, INSURANCE_TESTIMONIALS, WHY_CHOOSE_INSURANCE, PAGE_HEROES, waLinkFor } from "@/lib/data";
import FaqSchema from "@/components/seo/FaqSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: 'Insurance in Jaipur — Life, Health, Motor & Business Insurance | KUBER360',
  description: 'Compare and buy the best life insurance, health insurance, motor insurance, and general insurance plans in Jaipur. Expert advice, quick issuance. Free consultation with KUBER360.',
  alternates: { canonical: 'https://kuber360.in/insurance' },
  openGraph: {
    title: 'Insurance in Jaipur — Life, Health & Motor Insurance | KUBER360',
    description: 'Compare insurance plans from top insurers. Expert guidance, quick issuance, full claim support.',
    url: 'https://kuber360.in/insurance',
    images: [{ url: '/assets/kuber360-og.jpg', width: 1200, height: 630, alt: 'Insurance in Jaipur — KUBER360' }],
  },
};
const h = PAGE_HEROES.insurance;

export default function InsurancePage() {
  return (
    <>
      <FaqSchema faqs={INSURANCE_FAQS} />
      <BreadcrumbSchema crumbs={[{ name: 'Home', url: 'https://kuber360.in' }, { name: 'Insurance', url: 'https://kuber360.in/insurance' }]} />
      <PageHero {...h} primaryLabel="Compare Plans" secondaryLabel="Talk to Insurance Expert" secondaryHref={waLinkFor("Insurance")} />
      <section className="py-16 lg:py-24" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Insurance Plans" title="Find the Right" highlight="Insurance Plan" center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INSURANCE_CATEGORIES.map((cat) => (
              <div key={cat.title} className="rounded-2xl bg-white p-5 flex flex-col" style={{ border: "1px solid var(--color-border)" }}>
                <span className="text-3xl mb-3">{cat.icon}</span>
                <h3 className="font-bold text-base mb-2" style={{ color: "var(--color-text-head)" }}>{cat.title}</h3>
                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "var(--color-text-body)" }}>{cat.desc}</p>
                <a href={waLinkFor(cat.title)} target="_blank" rel="noopener noreferrer" className="text-xs font-bold" style={{ color: "var(--color-orange)" }}>{cat.ctaLabel} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "var(--color-navy)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Why Insurance?" title="Key Insurance" highlight="Benefits" center light />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {INSURANCE_BENEFITS.map((b) => (
              <div key={b.title} className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="text-3xl">{b.icon}</span>
                <span className="text-sm font-semibold text-white">{b.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Why KUBER360" title="Why Choose KUBER360" highlight="for Insurance?" center />
          <WhyChooseGrid items={WHY_CHOOSE_INSURANCE} />
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="How It Works" title="How We Help You" highlight="Get Insured" center />
          <ProcessSteps steps={INSURANCE_HOW_STEPS} />
        </div>
      </section>
      <section className="py-16 lg:py-20" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto px-4 lg:px-6 text-center">
          <SectionHeader tag="Documents" title="Documents" highlight="Required" center />
          <div className="flex flex-wrap justify-center gap-3">
            {INSURANCE_DOCS.map((doc) => (
              <span key={doc} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", color: "var(--color-text-body)" }}><span style={{ color: "var(--color-orange)" }}>✓</span> {doc}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "var(--color-navy-dark)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Client Stories" title="What Our Insurance" highlight="Clients Say" center light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INSURANCE_TESTIMONIALS.map((t) => <TestimonialCard key={t.name} {...t} light />)}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="FAQs" title="Insurance" highlight="FAQs" center />
          <FAQAccordion faqs={INSURANCE_FAQS} />
        </div>
      </section>
      <SectionCTA title="Get the Right Insurance Plan Today" sub="Compare plans from top insurers with expert guidance — free consultation." primaryLabel="Compare Insurance Plans" primaryHref="/contact" secondaryLabel="WhatsApp an Insurance Expert" secondaryHref={waLinkFor("Insurance")} />
    </>
  );
}

