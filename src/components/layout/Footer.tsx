import Link from 'next/link';
import Image from 'next/image';

const QUICK_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Loan Products', href: '/loans' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Disclaimer', href: '/disclaimer' },
];

const SERVICES_LINKS = [
  { label: 'Loans', href: '/loans' },
  { label: 'Insurance', href: '/insurance' },
  { label: 'Investments', href: '/investments' },
  { label: 'Tax & GST', href: '/tax-gst' },
  { label: 'Business Services', href: '/services' },
];

const SOCIAL_ITEMS = [
  { label: 'Facebook', char: 'f', href: '#' },
  { label: 'Instagram', char: '◎', href: '#' },
  { label: 'LinkedIn', char: 'in', href: '#' },
  { label: 'YouTube', char: '▶', href: '#' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-navy)' }}>
      <style>{`
        .kb-footer-link { color: rgb(185,196,214); font-size: 12.5px; text-decoration: none; cursor: pointer; transition: color 0.15s; }
        .kb-footer-link:hover { color: var(--color-orange); }
        .kb-footer-social { width: 28px; height: 28px; border-radius: 50%; border: 1px solid rgb(42,68,104); display: flex; align-items: center; justify-content: center; color: rgb(185,196,214); font-size: 12px; transition: border-color 0.15s, color 0.15s; text-decoration: none; }
        .kb-footer-social:hover { border-color: var(--color-orange); color: var(--color-orange); }
      `}</style>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 lg:px-10" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <div style={{ gap: 24 }} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">

          {/* Column 1 — Company */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Image
                src="/assets/kuber360-logo.svg"
                alt="KUBER360"
                width={30}
                height={30}
                className="rounded-full object-cover flex-shrink-0"
              />
              <div>
                <div style={{ color: '#fff', fontSize: 13, fontWeight: 900 }}>
                  KUBER360<span style={{ color: 'var(--color-orange)' }}>™</span>
                </div>
                <div style={{ color: '#8FA1BE', fontSize: 7.5, letterSpacing: '0.06em', fontWeight: 700 }}>
                  YOUR FINANCIAL PARTNER
                </div>
              </div>
            </div>
            <p style={{ color: 'rgb(143,161,190)', fontSize: 12, marginTop: 14, lineHeight: 1.6 }}>
              KUBER360 is a one stop solution for all your financial needs. We help you manage your finances better with the right advice and best products.
            </p>
            <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
              {SOCIAL_ITEMS.map(({ label, char, href }) => (
                <a key={label} href={href} aria-label={label} className="kb-footer-social">
                  {char}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <div style={{ color: '#fff', fontSize: 13.5, fontWeight: 800, marginBottom: 14 }}>Quick Links</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {QUICK_LINKS.map(({ label, href }) => (
                <Link key={href} href={href} className="kb-footer-link">{label}</Link>
              ))}
            </div>
          </div>

          {/* Column 3 — Our Services */}
          <div>
            <div style={{ color: '#fff', fontSize: 13.5, fontWeight: 800, marginBottom: 14 }}>Our Services</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SERVICES_LINKS.map(({ label, href }) => (
                <Link key={label} href={href} className="kb-footer-link">{label}</Link>
              ))}
            </div>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <div style={{ color: '#fff', fontSize: 13.5, fontWeight: 800, marginBottom: 14 }}>Contact Us</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ color: 'rgb(185,196,214)', fontSize: 12.5 }}>📞 +91 87420 19250</div>
              <div style={{ color: 'rgb(185,196,214)', fontSize: 12.5 }}>✉️ info@kuber360.in</div>
              <div style={{ color: 'rgb(185,196,214)', fontSize: 12.5, lineHeight: 1.5 }}>📍 Jaipur, Rajasthan</div>
              <div style={{ color: 'rgb(185,196,214)', fontSize: 12.5 }}>🕒 Mon - Sat: 10:00 AM - 7:00 PM</div>
            </div>
          </div>

          {/* Column 5 — Locate Us */}
          <div>
            <div style={{ color: '#fff', fontSize: 13.5, fontWeight: 800, marginBottom: 14 }}>Locate Us</div>
            <div style={{ background: 'rgb(15,43,82)', border: '1px solid rgb(26,58,102)', borderRadius: 10, height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26 }}>
              📍
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div style={{ borderTop: '1px solid rgb(22,41,74)', padding: '16px 0' }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-10" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <div style={{ color: 'rgb(125,141,166)', fontSize: 11 }}>© 2026 KUBER360. All Rights Reserved.</div>
          <div style={{ color: 'rgb(125,141,166)', fontSize: 11 }}>Made with ❤️ for Your Financial Freedom</div>
        </div>
      </div>
    </footer>
  );
}
