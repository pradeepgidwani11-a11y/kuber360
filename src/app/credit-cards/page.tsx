import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionCTA from "@/components/ui/SectionCTA";
import WhyChooseGrid from "@/components/ui/WhyChooseGrid";
import ProcessSteps from "@/components/ui/ProcessSteps";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { CARD_CATEGORIES, CARD_HELP_STEPS, CARD_COMPARISON_COLS, CARD_COMPARISON_ROWS, CARD_BENEFITS, CARD_ELIGIBILITY, CARD_DOCS_SALARIED, CARD_DOCS_SELF_EMPLOYED, CARD_FAQS, WHY_CHOOSE_CARDS, PAGE_HEROES, waLinkFor } from "@/lib/data";
import FaqSchema from "@/components/seo/FaqSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: 'Best Credit Cards in India — Cashback, Travel & Lifetime Free | KUBER360',
  description: 'Apply for the best credit cards in India — cashback cards, travel cards, rewards cards, and lifetime free cards. Expert comparison and instant application with KUBER360.',
  alternates: { canonical: 'https://kuber360.in/credit-cards' },
  openGraph: {
    title: 'Best Credit Cards in India — Compare & Apply Online | KUBER360',
    description: 'Compare cashback, travel, rewards, and lifetime free credit cards. Apply online with expert guidance.',
    url: 'https://kuber360.in/credit-cards',
    images: [{ url: '/assets/kuber360-og.jpg', width: 1200, height: 630, alt: 'Credit Cards — KUBER360' }],
  },
};
const h = PAGE_HEROES["credit-cards"];

export default function CreditCardsPage() {
  return (
    <>
      <FaqSchema faqs={CARD_FAQS} />
      <BreadcrumbSchema crumbs={[{ name: 'Home', url: 'https://kuber360.in' }, { name: 'Credit Cards', url: 'https://kuber360.in/credit-cards' }]} />
      <PageHero {...h} primaryLabel="Compare Credit Cards" secondaryLabel="Talk to a Card Expert" secondaryHref={waLinkFor("Credit Card")} />
      <section className="py-16 lg:py-24" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Card Categories" title="Find the Perfect Card" highlight="for Your Lifestyle" center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CARD_CATEGORIES.map((cat) => (
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
          <SectionHeader tag="Benefits" title="Credit Card" highlight="Benefits" center light />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {CARD_BENEFITS.map((b) => (
              <div key={b.title} className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="text-3xl">{b.icon}</span>
                <span className="text-sm font-semibold text-white">{b.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Compare" title="Card Category" highlight="Comparison" center />
          <div style={{ overflowX: "auto" }}>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-navy)" }}>
                  <th className="text-left px-4 py-3 font-bold text-white">Feature</th>
                  {CARD_COMPARISON_COLS.map((col) => (<th key={col} className="px-4 py-3 font-bold text-white text-center">{col}</th>))}
                </tr>
              </thead>
              <tbody>
                {CARD_COMPARISON_ROWS.map((row, i) => (
                  <tr key={row.label} style={{ background: i % 2 === 0 ? "var(--color-surface)" : "#fff" }}>
                    <td className="px-4 py-3 font-semibold" style={{ color: "var(--color-text-head)" }}>{row.label}</td>
                    {row.values.map((v, j) => (<td key={j} className="px-4 py-3 text-center" style={{ color: "var(--color-text-body)" }}>{v}</td>))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Why KUBER360" title="Why Choose" highlight="KUBER360 for Cards?" center />
          <WhyChooseGrid items={WHY_CHOOSE_CARDS} />
        </div>
      </section>
      <section className="py-16 lg:py-20" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Eligibility" title="Who Can" highlight="Apply?" center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {CARD_ELIGIBILITY.map((el) => (
              <div key={el.title} className="flex flex-col gap-3 rounded-xl p-5" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
                <span className="text-2xl">{el.icon}</span>
                <div className="font-bold text-sm" style={{ color: "var(--color-text-head)" }}>{el.title}</div>
                <div className="text-sm" style={{ color: "var(--color-text-body)" }}>{el.desc}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[{ label: "Salaried", docs: CARD_DOCS_SALARIED }, { label: "Self-Employed", docs: CARD_DOCS_SELF_EMPLOYED }].map(({ label, docs }) => (
              <div key={label} className="rounded-2xl bg-white p-6" style={{ border: "1px solid var(--color-border)" }}>
                <h4 className="font-bold text-base mb-4" style={{ color: "var(--color-text-head)" }}>{label} Documents</h4>
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
          <SectionHeader tag="Our Process" title="How We Help You" highlight="Get the Right Card" center />
          <ProcessSteps steps={CARD_HELP_STEPS} />
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="FAQs" title="Credit Card" highlight="FAQs" center />
          <FAQAccordion faqs={CARD_FAQS} />
        </div>
      </section>
      <SectionCTA title="Find Your Perfect Credit Card Today" sub="Compare cards from 50+ banking partners with expert help." primaryLabel="Get Card Recommendation" primaryHref="/contact" secondaryLabel="WhatsApp a Card Expert" secondaryHref={waLinkFor("Credit Card")} />
    </>
  );
}

