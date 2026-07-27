import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionCTA from "@/components/ui/SectionCTA";
import WhyChooseGrid from "@/components/ui/WhyChooseGrid";
import ProcessSteps from "@/components/ui/ProcessSteps";
import FAQAccordion from "@/components/ui/FAQAccordion";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { TAX_SERVICES, TAX_PROCESS_STEPS, TAX_WHO_CAN_BENEFIT, TAX_DOCS, TAX_FAQS, TAX_STATS, TAX_TESTIMONIALS, WHY_CHOOSE_TAX, PAGE_HEROES, waLinkFor } from "@/lib/data";

export const metadata: Metadata = { title: "Tax & GST Services", description: "ITR filing, GST registration, TDS, MSME registration and tax planning with expert CA assistance from KUBER360." };
const h = PAGE_HEROES["tax-gst"];

export default function TaxGSTPage() {
  return (
    <>
      <PageHero {...h} primaryLabel="Book Tax Expert" secondaryLabel="WhatsApp Tax Expert" secondaryHref={waLinkFor("Tax & GST")} />
      <section style={{ background: "var(--color-navy-dark)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {TAX_STATS.map((s) => (<div key={s.label} className="text-center"><div className="font-black text-2xl lg:text-3xl" style={{ color: "var(--color-orange)" }}>{s.value}</div><div className="text-xs mt-1" style={{ color: "var(--color-text-dark-muted)" }}>{s.label}</div></div>))}
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Tax Services" title="Our Tax &" highlight="Compliance Services" center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {TAX_SERVICES.map((svc) => (
              <div key={svc.title} className="rounded-2xl bg-white p-5 flex flex-col" style={{ border: "1px solid var(--color-border)" }}>
                <span className="text-3xl mb-3">{svc.icon}</span>
                <h3 className="font-bold text-sm mb-2" style={{ color: "var(--color-text-head)" }}>{svc.title}</h3>
                <p className="text-xs leading-relaxed flex-1 mb-4" style={{ color: "var(--color-text-body)" }}>{svc.desc}</p>
                <a href={waLinkFor(svc.title)} target="_blank" rel="noopener noreferrer" className="text-xs font-bold" style={{ color: "var(--color-orange)" }}>{svc.ctaLabel} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "var(--color-navy)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Why KUBER360" title="Why Get Tax Help" highlight="From KUBER360?" center light />
          <WhyChooseGrid items={WHY_CHOOSE_TAX} light />
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Who Can Benefit" title="Who Can" highlight="Use Our Tax Services?" center />
          <div className="flex flex-wrap justify-center gap-3">
            {TAX_WHO_CAN_BENEFIT.map((who) => (<span key={who} className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", color: "var(--color-text-body)" }}>{who}</span>))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Our Process" title="Simple Tax Filing" highlight="Process" center />
          <ProcessSteps steps={TAX_PROCESS_STEPS} />
        </div>
      </section>
      <section className="py-16 lg:py-20" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto px-4 lg:px-6 text-center">
          <SectionHeader tag="Documents" title="Documents" highlight="Required for ITR" center />
          <div className="flex flex-wrap justify-center gap-3">
            {TAX_DOCS.map((doc) => (<span key={doc} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", color: "var(--color-text-body)" }}><span style={{ color: "var(--color-orange)" }}>✓</span> {doc}</span>))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "var(--color-navy-dark)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Client Stories" title="What Our Tax" highlight="Clients Say" center light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TAX_TESTIMONIALS.map((t) => <TestimonialCard key={t.name} {...t} light />)}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="FAQs" title="Tax & GST" highlight="FAQs" center />
          <FAQAccordion faqs={TAX_FAQS} />
        </div>
      </section>
      <SectionCTA title="File Your Taxes with Confidence" sub="Expert CA assistance for ITR, GST, TDS and all compliance needs — quick and accurate." primaryLabel="Book Tax Expert" primaryHref="/contact" secondaryLabel="WhatsApp Tax Expert" secondaryHref={waLinkFor("Tax & GST")} />
    </>
  );
}

