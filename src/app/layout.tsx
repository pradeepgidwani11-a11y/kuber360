import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import { LeadProvider } from '@/components/leads/LeadContext';
import LeadPopup from '@/components/leads/LeadPopup';
import LeadAutoTrigger from '@/components/leads/LeadAutoTrigger';

export const metadata: Metadata = {
  title: {
    default: 'KUBER360 Financial Services — Loans, Insurance, Investments & More',
    template: '%s | KUBER360 Financial Services',
  },
  description:
    'KUBER360 is your trusted DSA partner in India for home loans, personal loans, business loans, credit cards, insurance, mutual funds, tax & GST services. Get a free consultation today.',
  keywords: ['loans', 'insurance', 'investments', 'credit cards', 'tax GST', 'financial services', 'DSA', 'India'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'KUBER360 Financial Services',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
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
