import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import WhyChooseGrid from "@/components/ui/WhyChooseGrid";
import ProcessSteps from "@/components/ui/ProcessSteps";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { CONTACT_INFO, CONTACT_SERVICES_ICONS, WHY_CONTACT_KUBER, HOW_WE_RESPOND_STEPS, CONTACT_FAQS, PAGE_HEROES, GENERAL_WA_LINK, CALLBACK_WA_LINK } from "@/lib/data";
import ContactForm from "@/components/contact/ContactForm";
import FaqSchema from "@/components/seo/FaqSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: 'Contact KUBER360 — Free Financial Consultation in Jaipur | +91 87420 19250',
  description: 'Contact KUBER360 Financial Services in Jaipur for free consultation on loans, insurance, investments, and tax services. Call +91 87420 19250 or email info@kuber360.in.',
  alternates: { canonical: 'https://kuber360.in/contact' },
  openGraph: {
    title: 'Contact KUBER360 — Free Financial Consultation in Jaipur',
    description: 'Reach out to our expert advisors for loans, insurance, investments, or tax help. Free consultation.',
    url: 'https://kuber360.in/contact',
    images: [{ url: '/assets/kuber360-og.jpg', width: 1200, height: 630, alt: 'Contact KUBER360 Financial Services' }],
  },
};
const h = PAGE_HEROES.contact;

export default function ContactPage() {
  return (
    <>
      <FaqSchema faqs={CONTACT_FAQS} />
      <BreadcrumbSchema crumbs={[{ name: 'Home', url: 'https://kuber360.in' }, { name: 'Contact', url: 'https://kuber360.in/contact' }]} />
      <PageHero {...h} primaryLabel="Chat on WhatsApp" primaryHref={GENERAL_WA_LINK} secondaryLabel="Request Callback" secondaryHref={CALLBACK_WA_LINK} />
      <section className="py-16 lg:py-24" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader tag="Get In Touch" title="We are Here" highlight="to Help" />
              <div className="flex flex-col gap-5 mb-8">
                {CONTACT_INFO.map((info) => (<div key={info.title} className="flex items-start gap-4 rounded-xl p-4 bg-white" style={{ border: "1px solid var(--color-border)" }}><span className="text-2xl flex-shrink-0">{info.icon}</span><div><div className="font-bold text-sm mb-1" style={{ color: "var(--color-text-head)" }}>{info.title}</div><div className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "var(--color-text-body)" }}>{info.value}</div></div></div>))}
              </div>
              <div className="flex gap-3 flex-wrap">
                <a href={GENERAL_WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-bold text-white transition-opacity hover:opacity-90" style={{ background: "var(--color-whatsapp)" }}>Chat on WhatsApp</a>
                <a href="tel:+918742019250" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-bold text-white transition-opacity hover:opacity-90" style={{ background: "var(--color-navy)" }}>Call Now</a>
              </div>
            </div>
            <div><ContactForm /></div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Our Services" title="What Can We" highlight="Help You With?" center />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {CONTACT_SERVICES_ICONS.map((svc) => (<a key={svc.title} href={GENERAL_WA_LINK} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl transition-shadow hover:shadow-md" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}><span className="text-3xl">{svc.icon}</span><span className="text-sm font-semibold" style={{ color: "var(--color-text-head)" }}>{svc.title}</span></a>))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "var(--color-navy)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Why Us" title="Why Contact" highlight="KUBER360?" center light />
          <WhyChooseGrid items={WHY_CONTACT_KUBER} light />
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="Our Process" title="How We Handle" highlight="Your Inquiry" center />
          <ProcessSteps steps={HOW_WE_RESPOND_STEPS} />
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <SectionHeader tag="FAQs" title="Contact" highlight="FAQs" center />
          <FAQAccordion faqs={CONTACT_FAQS} />
        </div>
      </section>
    </>
  );
}
