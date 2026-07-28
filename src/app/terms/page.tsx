import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | KUBER360 Financial Services',
  description: 'Read the Terms & Conditions governing the use of KUBER360\'s website and financial services.',
};

const sections = [
  {
    title: 'Acceptance of Terms',
    body: 'By accessing or using the KUBER360 Financial Services website (kuber360.in) or by contacting us for any financial service, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our website or services.\n\nThese terms apply to all visitors, users, and anyone who accesses or uses our services.',
  },
  {
    title: 'Services Provided',
    body: 'KUBER360 Financial Services acts as a Direct Selling Agent (DSA) and facilitates access to the following financial products:',
    bullets: [
      'Home Loans, Personal Loans, Business Loans, Car Loans, and other loan products',
      'Credit Cards',
      'Life, Health, Motor, and General Insurance',
      'Mutual Funds, SIPs, and other Investment products',
      'Tax filing (ITR), GST Registration and Filing',
      'Business Registration and Advisory',
    ],
    footer: 'KUBER360 connects customers with banks, NBFCs, insurers, and investment platforms. We do not ourselves lend, insure, or invest your money.',
  },
  {
    title: 'Eligibility',
    body: 'Our services are available to individuals who are:',
    bullets: [
      'Indian residents aged 18 years or above',
      'Legally competent to enter into a contract under the Indian Contract Act, 1872',
    ],
    footer: 'By submitting any enquiry or application through our website, you represent that you meet these eligibility criteria.',
  },
  {
    title: 'User Obligations',
    body: 'When using our website or services, you agree to:',
    bullets: [
      'Provide accurate, complete, and up-to-date information',
      'Not misrepresent your identity, income, or financial position',
      'Not use our website for any unlawful purpose',
      'Not attempt to gain unauthorised access to any part of our systems',
      'Not engage in any activity that disrupts or interferes with our services',
    ],
    footer: 'KUBER360 reserves the right to refuse service or terminate access to anyone who violates these obligations.',
  },
  {
    title: 'Enquiry and Lead Submission',
    body: 'When you submit an enquiry form on our website, you consent to:',
    bullets: [
      'Being contacted by KUBER360 advisors via phone, WhatsApp, SMS, or email',
      'Your details being shared with relevant financial institutions for the purpose of your enquiry',
      'Our advisors assessing your requirements and recommending suitable financial products',
    ],
    footer: 'Submission of an enquiry does not constitute a binding application or commitment from either party.',
  },
  {
    title: 'Fees and Charges',
    body: 'KUBER360 does not charge customers any direct fee for its advisory and facilitation services. We earn a referral commission from the financial institution upon successful loan disbursement, policy issuance, or investment activation.\n\nFor tax filing, GST, and business registration services, applicable professional fees will be communicated to you upfront before any work commences.',
  },
  {
    title: 'Intellectual Property',
    body: 'All content on this website — including text, graphics, logos, icons, images, and data compilations — is the property of KUBER360 Financial Services and is protected under applicable Indian intellectual property laws.\n\nYou may not reproduce, distribute, modify, or republish any content from this website without our prior written consent.',
  },
  {
    title: 'Privacy',
    body: 'Your use of this website is also governed by our Privacy Policy, which is incorporated into these Terms & Conditions by reference. Please review our Privacy Policy to understand our data practices.',
  },
  {
    title: 'Limitation of Liability',
    body: 'KUBER360 shall not be liable for:',
    bullets: [
      'Any financial loss arising from decisions made based on information provided on this website',
      'Delays, rejections, or errors by the financial institution processing your application',
      'Any technical errors, downtime, or interruptions in website availability',
      'Unauthorised access to your data due to circumstances beyond our reasonable control',
    ],
    footer: 'Our total liability in any matter arising from these terms shall not exceed the professional fee, if any, paid by you for a specific service.',
  },
  {
    title: 'Modifications to Terms',
    body: 'KUBER360 reserves the right to modify these Terms & Conditions at any time. Updated terms will be posted on this page with a revised effective date. Continued use of our website or services after changes are posted constitutes your acceptance of the revised terms.',
  },
  {
    title: 'Termination',
    body: 'We reserve the right to suspend or terminate your access to our services at our sole discretion, without notice, if we believe you have violated these terms or applicable law.',
  },
  {
    title: 'Governing Law and Jurisdiction',
    body: 'These Terms & Conditions are governed by the laws of India. Any dispute arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the competent courts in Jaipur, Rajasthan.',
  },
  {
    title: 'Contact Us',
    body: 'For any questions regarding these Terms & Conditions, please contact us at info@kuber360.in or call +91 87420 19250.',
  },
];

export default function TermsPage() {
  return (
    <div style={{ background: '#081C3A', minHeight: '100vh' }}>
      {/* Hero */}
      <div style={{ background: '#081C3A', padding: '60px 24px 48px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32, fontSize: 13 }}>
            <Link href="/" style={{ color: 'rgb(143,161,190)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgb(143,161,190)' }}>›</span>
            <span style={{ color: '#FF7A00' }}>Terms & Conditions</span>
          </div>

          {/* Title */}
          <div style={{ fontSize: 'clamp(44px, 6vw, 72px)', fontWeight: 900, lineHeight: 1.05 }}>
            <div style={{ color: '#fff' }}>Terms &</div>
            <div style={{ color: '#FF7A00' }}>Conditions</div>
          </div>
          <p style={{ color: 'rgb(185,196,214)', fontSize: 16, marginTop: 20, maxWidth: 560 }}>
            These Terms & Conditions govern your use of the KUBER360 website and the financial services we facilitate. Please read them carefully.
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
                {s.body && (
                  <p style={{ color: 'rgb(108,135,165)', fontSize: 13, lineHeight: 1.8, marginBottom: s.bullets ? 8 : 0, whiteSpace: 'pre-line' }}>
                    {s.body}
                  </p>
                )}
                {s.bullets && (
                  <ul style={{ listStyle: 'none', padding: 0, margin: '6px 0', display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {s.bullets.map((b) => (
                      <li key={b} style={{ color: 'rgb(108,135,165)', fontSize: 13, lineHeight: 1.7, paddingLeft: 14, position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0 }}>•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                {s.footer && (
                  <p style={{ color: 'rgb(108,135,165)', fontSize: 13, lineHeight: 1.8, marginTop: 8 }}>
                    {s.footer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
