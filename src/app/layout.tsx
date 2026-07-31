import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import { LeadProvider } from '@/components/leads/LeadContext';
import LeadPopup from '@/components/leads/LeadPopup';
import LeadAutoTrigger from '@/components/leads/LeadAutoTrigger';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';

export const metadata: Metadata = {
  title: {
    default: 'KUBER360 Financial Services — Loans, Insurance, Investments & More in Jaipur',
    template: '%s | KUBER360 Financial Services',
  },
  description:
    'KUBER360 is your trusted DSA partner in Jaipur, Rajasthan for home loans, personal loans, business loans, credit cards, insurance, mutual funds, tax & GST services. Get a free consultation today.',
  keywords: [
    'loans in Jaipur', 'home loan Jaipur', 'personal loan Jaipur', 'business loan Jaipur',
    'insurance Jaipur', 'mutual funds Jaipur', 'DSA Jaipur', 'financial services Jaipur',
    'credit cards India', 'tax filing Jaipur', 'GST registration Jaipur', 'KUBER360',
  ],
  metadataBase: new URL('https://kuber360.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'KUBER360 Financial Services',
    url: 'https://kuber360.in',
    title: 'KUBER360 Financial Services — Loans, Insurance, Investments & More in Jaipur',
    description:
      'Your trusted DSA partner in Jaipur, Rajasthan for loans, credit cards, insurance, investments, and tax services. 5000+ clients. 50+ bank partners. Free consultation.',
    images: [
      {
        url: '/assets/kuber360-og.jpg',
        width: 1200,
        height: 630,
        alt: 'KUBER360 Financial Services — Your Financial Partner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KUBER360 Financial Services — Loans, Insurance & More in Jaipur',
    description:
      'Your trusted DSA partner in Jaipur for loans, credit cards, insurance, investments, and tax services.',
    images: ['/assets/kuber360-og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <LocalBusinessSchema />
      </head>
      <body style={{ overflowX: 'hidden' }}>
        <LeadProvider>
          <Header />
          {/* pt-16 = mobile nav height, lg:pt-[104px] = utility bar (36px) + nav (68px) */}
          <main className="pt-16 lg:pt-[80px]">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
          <LeadAutoTrigger />
          <LeadPopup />
        </LeadProvider>
      </body>
    </html>
  );
}
