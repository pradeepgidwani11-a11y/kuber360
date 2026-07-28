import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer | KUBER360 Financial Services',
  description: 'Read the KUBER360 disclaimer regarding financial information, DSA services, and third-party references on our website.',
};

const sections = [
  {
    title: 'General Information Only',
    body: 'The content on this website — including articles, guides, product comparisons, eligibility indicators, and interest rate references — is provided for general informational purposes only. It does not constitute financial, legal, tax, or investment advice.\n\nKUBER360 Financial Services is a Direct Selling Agent (DSA) and financial services facilitator. We are not a bank, NBFC, insurance company, or registered investment advisor.',
  },
  {
    title: 'No Guarantee of Approval',
    body: 'Any loan eligibility checks, credit card suitability suggestions, or insurance recommendations provided through this website or via our advisors are indicative only. Final approval of any financial product rests solely with the respective lender, insurer, or financial institution. KUBER360 does not guarantee approval of any application.',
  },
  {
    title: 'Interest Rates and Charges',
    body: 'All interest rates, processing fees, premiums, and charges mentioned on this website are indicative and subject to change at the discretion of the respective financial institution. Actual rates applicable to your case may vary based on your credit profile, income, loan amount, tenure, and the lending institution\'s current policies.\n\nAlways confirm the final terms directly with the bank or NBFC before signing any agreement.',
  },
  {
    title: 'DSA Relationship',
    body: 'KUBER360 acts as an authorised Direct Selling Agent for various banks and financial institutions. We facilitate the introduction of customers to financial products and earn a referral fee or commission from the lending/insurance/investment institution upon successful disbursement or issuance. This does not affect the terms offered to you as a customer.',
  },
  {
    title: 'Third-Party Links and Products',
    body: 'Our website may reference or link to third-party financial institutions, government portals, and regulatory bodies (such as RBI, IRDAI, SEBI, AMFI). KUBER360 does not endorse or take responsibility for the accuracy, completeness, or availability of content on those external websites. We are not liable for any loss arising from your reliance on third-party information.',
  },
  {
    title: 'Investment Risk',
    body: 'Mutual funds, SIPs, bonds, and other investment products are subject to market risks. Past performance is not indicative of future returns. Please read all scheme-related documents carefully before investing. KUBER360 advisors can help you understand products, but investment decisions must be made by you based on your own risk appetite and financial goals.',
  },
  {
    title: 'Insurance Products',
    body: 'Insurance is the subject matter of solicitation. KUBER360 facilitates insurance as a referral partner. Please read the policy document and terms carefully before purchasing any insurance product. Claims are subject to the insurer\'s terms, conditions, and exclusions.',
  },
  {
    title: 'Accuracy of Information',
    body: 'While we strive to keep the information on this website accurate and up to date, KUBER360 makes no warranties or representations, express or implied, about the completeness, accuracy, reliability, or suitability of the information provided. We reserve the right to update, modify, or remove content at any time without notice.',
  },
  {
    title: 'Limitation of Liability',
    body: 'To the fullest extent permitted by applicable law, KUBER360 Financial Services shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website, reliance on information provided herein, or any financial decisions made based on our advisory.',
  },
  {
    title: 'Governing Law',
    body: 'This disclaimer is governed by the laws of India. Any disputes arising in connection with this disclaimer shall be subject to the exclusive jurisdiction of the courts in Jaipur, Rajasthan.',
  },
];

export default function DisclaimerPage() {
  return (
    <div style={{ background: '#081C3A', minHeight: '100vh' }}>
      {/* Hero */}
      <div style={{ background: '#081C3A', padding: '60px 24px 48px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32, fontSize: 13 }}>
            <Link href="/" style={{ color: 'rgb(143,161,190)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgb(143,161,190)' }}>›</span>
            <span style={{ color: '#FF7A00' }}>Disclaimer</span>
          </div>

          {/* Title */}
          <div style={{ fontSize: 'clamp(44px, 6vw, 72px)', fontWeight: 900, lineHeight: 1.05 }}>
            <div style={{ color: '#fff' }}>Website</div>
            <div style={{ color: '#FF7A00' }}>Disclaimer</div>
          </div>
          <p style={{ color: 'rgb(185,196,214)', fontSize: 16, marginTop: 20, maxWidth: 560 }}>
            Please read this disclaimer carefully before using the KUBER360 website or acting on any information provided by our advisors.
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ background: '#061529', padding: '48px 24px 80px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ color: 'rgb(80,110,145)', fontSize: 13, marginBottom: 40 }}>
            Last updated: July 2025
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {sections.map((s) => (
              <div key={s.title}>
                <h2 style={{ color: '#3E6B96', fontSize: 14, fontWeight: 600, marginBottom: 8, letterSpacing: '0.02em' }}>
                  {s.title}
                </h2>
                <p style={{ color: 'rgb(108,135,165)', fontSize: 13, lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
