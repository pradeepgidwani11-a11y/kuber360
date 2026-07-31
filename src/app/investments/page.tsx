import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionCTA from "@/components/ui/SectionCTA";
import WhyChooseGrid from "@/components/ui/WhyChooseGrid";
import ProcessSteps from "@/components/ui/ProcessSteps";
import FAQAccordion from "@/components/ui/FAQAccordion";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { INVESTMENT_CATEGORIES, INVESTMENT_PROCESS_STEPS, INVESTMENT_SOLUTIONS, INVESTMENT_CALCULATORS, INVESTMENT_STATS, INVESTMENT_FAQS, INVESTMENT_TESTIMONIALS, WHY_CHOOSE_INVESTMENTS, PAGE_HEROES, waLinkFor } from "@/lib/data";
import FaqSchema from "@/components/seo/FaqSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: 'Investments in Jaipur — Mutual Funds, SIP, FD & NPS | KUBER360',
  description: 'Start investing in mutual funds, SIP, fixed deposits, NPS, and bonds in Jaipur. Expert investment guidance tailored to your goals and risk appetite. Free consultation with KUBER360.',
  alternates: { canonical: 'https://kuber360.in/investments' },
  openGraph: {
    title: 'Investments in Jaipur — Mutual Funds, SIP & Wealth Management | KUBER360',
    description: 'Expert investment planning for mutual funds, SIP, FD, NPS, and bonds. Start your wealth journey today.',
    url: 'https://kuber360.in/investments',
    images: [{ url: '/assets/kuber360-og.jpg', width: 1200, height: 630, alt: 'Investments in Jaipur — KUBER360' }],
  },
};
const h = PAGE_HEROES.investments;

export default function InvestmentsPage() {
  return (
    <>
      <FaqSchema faqs={INVESTMENT_FAQS} />
      <BreadcrumbSchema crumbs={[{ name: 'Home', url: 'https://kuber360.in' }, { name: 'Investments', url: 'https://kuber360.in/investments' }]} />
      <PageHero {...h} primaryLabel="Start Investing" secondaryLabel="Talk to an Expert" secondaryHref={waLinkFor("Investments")} />
      <section style={{ background: "var(--color-navy-dark)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {INVESTMENT_STATS.map((s) => (<div key={s.label} className="text-center"><div className="font-black text-2xl lg:text-3xl" style={{ color: "var(--color-orange)" }}>{s.value}</div><div className="text-xs mt-1" style={{ color: "var(--color-text-dark-muted)" }}>{s.label}</div></div>))}
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Investment Options" title="Choose the Right" highlight="Investment Plan" center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INVESTMENT_CATEGORIES.map((cat) => (
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
          <SectionHeader tag="Investment Solutions" title="Goals We Help" highlight="You Achieve" center light />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {INVESTMENT_SOLUTIONS.map((sol) => (<div key={sol.title} className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}><span className="text-3xl">{sol.icon}</span><span className="text-sm font-semibold text-white">{sol.title}</span></div>))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Why KUBER360" title="Why Invest Through" highlight="KUBER360?" center />
          <WhyChooseGrid items={WHY_CHOOSE_INVESTMENTS} />
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Our Process" title="How We Plan" highlight="Your Investments" center />
          <ProcessSteps steps={INVESTMENT_PROCESS_STEPS} />
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Calculators" title="Investment" highlight="Calculators" center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INVESTMENT_CALCULATORS.map((calc) => (<div key={calc.title} className="rounded-2xl p-6 flex flex-col items-center text-center gap-3" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}><span className="text-4xl">{calc.icon}</span><h3 className="font-bold text-base" style={{ color: "var(--color-text-head)" }}>{calc.title}</h3><p className="text-sm leading-relaxed" style={{ color: "var(--color-text-body)" }}>{calc.desc}</p><a href={waLinkFor(calc.title)} target="_blank" rel="noopener noreferrer" className="text-xs font-bold mt-auto" style={{ color: "var(--color-orange)" }}>Calculate →</a></div>))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "var(--color-navy-dark)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Client Stories" title="Investment" highlight="Success Stories" center light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INVESTMENT_TESTIMONIALS.map((t) => <TestimonialCard key={t.name} {...t} light />)}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="FAQs" title="Investment" highlight="FAQs" center />
          <FAQAccordion faqs={INVESTMENT_FAQS} />
        </div>
      </section>
      <SectionCTA title="Start Your Investment Journey Today" sub="Get a personalized investment plan from our experts — zero commission, complete transparency." primaryLabel="Book Investment Consultation" primaryHref="/contact" secondaryLabel="WhatsApp an Investment Expert" secondaryHref={waLinkFor("Investments")} />
    </>
  );
}


