import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | KUBER360 Financial Services',
  description: 'Read KUBER360\'s Privacy Policy to understand how we collect, use, and protect your personal information.',
};

const sections = [
  {
    title: 'Information We Collect',
    body: 'When you contact KUBER360 through our website or WhatsApp, we may collect the following personal information:',
    bullets: ['Name', 'Phone number', 'Email address', 'City / location', 'Financial service enquiry details', 'Device and browser information (IP address, browser type, OS)'],
  },
  {
    title: 'How We Use Your Information',
    body: 'We use your information to:',
    bullets: [
      'Contact you regarding your financial service enquiry',
      'Provide personalised financial guidance and product recommendations',
      'Connect you with the appropriate lending institution, insurer, or investment partner',
      'Improve our website and services',
      'Send service-related updates (not marketing spam)',
    ],
  },
  {
    title: 'Sharing of Information',
    body: 'KUBER360 acts as a Direct Selling Agent (DSA). We may share your details with:',
    bullets: [
      'Banks, NBFCs, insurance companies, or investment platforms relevant to your enquiry',
      'Regulatory authorities if required by law',
    ],
    footer: 'We do not sell, rent, or trade your personal information to any third party for marketing purposes.',
  },
  {
    title: 'Data Security',
    body: 'We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.',
  },
  {
    title: 'Cookies',
    body: 'Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyse site traffic. You can control cookie settings through your browser.',
  },
  {
    title: 'Data Retention',
    body: 'We retain your personal data only for as long as necessary to fulfil the purpose for which it was collected, or as required by applicable law — typically up to 3 years.',
  },
  {
    title: 'Your Rights',
    body: 'You have the right to:',
    bullets: [
      'Access the personal information we hold about you',
      'Request correction of inaccurate data',
      'Request deletion of your data (subject to legal obligations)',
      'Withdraw consent for us to contact you at any time',
    ],
    footer: 'To exercise any of these rights, please contact us at info@kuber360.in.',
  },
  {
    title: 'Third-Party Links',
    body: 'Our website may contain links to third-party websites (banks, insurance portals, government platforms). KUBER360 is not responsible for the privacy practices of those sites.',
  },
  {
    title: 'Changes to This Policy',
    body: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of our website constitutes acceptance of the revised policy.',
  },
  {
    title: 'Your Consent',
    body: 'By contacting KUBER360 through this website or WhatsApp, you consent to this Privacy Policy.',
  },
  {
    title: 'Contact',
    body: 'For any privacy related concerns, please contact KUBER360 using the contact information available on this website.',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div style={{ background: '#081C3A', minHeight: '100vh' }}>
      {/* Hero */}
      <div style={{ background: '#081C3A', padding: '60px 24px 48px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32, fontSize: 13 }}>
            <Link href="/" style={{ color: 'rgb(143,161,190)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgb(143,161,190)' }}>›</span>
            <span style={{ color: '#FF7A00' }}>Privacy Policy</span>
          </div>

          {/* Title */}
          <div style={{ fontSize: 'clamp(44px, 6vw, 72px)', fontWeight: 900, lineHeight: 1.05 }}>
            <div style={{ color: '#fff' }}>Privacy</div>
            <div style={{ color: '#FF7A00' }}>Policy</div>
          </div>
          <p style={{ color: 'rgb(185,196,214)', fontSize: 16, marginTop: 20, maxWidth: 520 }}>
            How KUBER360 collects, uses and protects your information.
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ background: '#061529', padding: '48px 24px 80px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Effective date + intro */}
          <div style={{ marginBottom: 40 }}>
            <p style={{ color: 'rgb(80,110,145)', fontSize: 13, marginBottom: 14 }}>
              Effective Date: 28 July 2025
            </p>
            <p style={{ color: 'rgb(108,135,165)', fontSize: 13, lineHeight: 1.8 }}>
              At KUBER360, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website or services.
            </p>
          </div>

          {/* Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
            {sections.map((s) => (
              <div key={s.title}>
                <h2 style={{ color: '#3E6B96', fontSize: 14, fontWeight: 600, marginBottom: 8, letterSpacing: '0.02em' }}>
                  {s.title}
                </h2>
                {s.body && (
                  <p style={{ color: 'rgb(108,135,165)', fontSize: 13, lineHeight: 1.8, marginBottom: s.bullets ? 8 : 0 }}>
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
