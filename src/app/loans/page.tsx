import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionCTA from "@/components/ui/SectionCTA";
import WhyChooseGrid from "@/components/ui/WhyChooseGrid";
import ProcessSteps from "@/components/ui/ProcessSteps";
import FAQAccordion from "@/components/ui/FAQAccordion";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { LOAN_CATEGORIES, LOAN_ELIGIBILITY, LOAN_DOCS_SALARIED, LOAN_DOCS_SELF_EMPLOYED, LOAN_PROCESS_STEPS, LOAN_FAQS, WHY_CHOOSE_LOANS, TESTIMONIALS, PAGE_HEROES, waLinkFor } from "@/lib/data";

export const metadata: Metadata = { title: "Loan Products", description: "Personal, Business, Home, Car, Education and MSME loans with expert guidance from KUBER360." };
const h = PAGE_HEROES.loans;

export default function LoansPage() {
  return (
    <>
      <PageHero {...h} primaryLabel="Check Eligibility" secondaryLabel="Talk to a Loan Expert" secondaryHref={waLinkFor("Loans")} />
      <section className="py-16 lg:py-24" style={{ background: "var(--color-navy)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Loan Products" title="Choose the Right" highlight="Loan for You" center light />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {LOAN_CATEGORIES.map((loan) => (
              <div key={loan.title} className="rounded-2xl bg-white p-5 flex flex-col" style={{ border: "1px solid var(--color-border)" }}>
                <span className="text-3xl mb-3">{loan.icon}</span>
                <h3 className="font-black text-base mb-2" style={{ color: "var(--color-text-head)" }}>{loan.title}</h3>
                <p className="text-sm leading-relaxed flex-1 mb-3" style={{ color: "var(--color-text-body)" }}>{loan.desc}</p>
                <div className="flex items-center gap-1.5 mb-4" style={{ color: "var(--color-text-muted)", fontSize: 12 }}>
                  <span>⏱</span><span>Processing: {loan.time}</span>
                </div>
                <a href={waLinkFor(loan.title)} target="_blank" rel="noopener noreferrer" className="text-sm font-bold" style={{ color: "var(--color-orange)" }}>{loan.ctaLabel} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="" title="Why Choose KUBER360" highlight="" center />
          <WhyChooseGrid items={WHY_CHOOSE_LOANS} />
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="" title="Loan Eligibility" highlight="" center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {LOAN_ELIGIBILITY.map((el) => (
              <div key={el.title} className="flex flex-col items-center text-center rounded-xl p-6 bg-white" style={{ border: "1px solid var(--color-border)" }}>
                <span className="text-3xl mb-3">{el.icon}</span>
                <div className="font-bold text-sm mb-1" style={{ color: "var(--color-text-head)" }}>{el.title}</div>
                <div className="text-sm" style={{ color: "var(--color-text-body)" }}>{el.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="" title="Required Documents" highlight="" center />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[{ label: "For Salaried", docs: LOAN_DOCS_SALARIED }, { label: "For Self Employed", docs: LOAN_DOCS_SELF_EMPLOYED }].map(({ label, docs }) => (
              <div key={label} className="rounded-2xl bg-white p-6" style={{ border: "1px solid var(--color-border)" }}>
                <h4 className="font-bold text-base mb-4" style={{ color: "var(--color-text-head)" }}>{label}</h4>
                <ul className="flex flex-col gap-2">
                  {docs.map((doc) => (<li key={doc} className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-body)" }}><span style={{ color: "var(--color-orange)" }}>✓</span> {doc}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="LOAN PROCESS" title="From Requirement to" highlight="Disbursement" center />
          <ProcessSteps steps={LOAN_PROCESS_STEPS} />
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "var(--color-navy-dark)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Client Stories" title="What Our Loan" highlight="Clients Say" center light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => <TestimonialCard key={t.name} {...t} light />)}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="FAQs" title="Frequently Asked" highlight="Questions" center />
          <FAQAccordion faqs={LOAN_FAQS} />
        </div>
      </section>
      <SectionCTA title="Ready to Apply for a Loan?" sub="Our loan experts are ready to help you get the best rate from 50+ banking partners." primaryLabel="Check Loan Eligibility" primaryHref="/contact" secondaryLabel="WhatsApp a Loan Expert" secondaryHref={waLinkFor("Loan")} />
    </>
  );
}
