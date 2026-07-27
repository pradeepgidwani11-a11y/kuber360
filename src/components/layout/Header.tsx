'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Loans', href: '/loans' },
  { label: 'Credit Cards', href: '/credit-cards' },
  { label: 'Insurance', href: '/insurance' },
  { label: 'Investments', href: '/investments' },
  { label: 'Tax & GST', href: '/tax-gst' },
  { label: 'Why KUBER360', href: '/why-us' },
  { label: 'Contact', href: '/contact' },
];

const SOCIAL_ITEMS = [
  { label: 'Facebook',  char: 'f'  },
  { label: 'Instagram', char: '◎' },
  { label: 'LinkedIn',  char: 'in' },
  { label: 'YouTube',   char: '▶' },
];

export default function Header() {
  const [scrollY, setScrollY]     = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const utilBarRef = useRef<HTMLDivElement>(null);
  const [utilH, setUtilH] = useState(37); // measured utility bar height
  const pathname = usePathname();

  // Measure actual utility bar height after mount
  useEffect(() => {
    if (utilBarRef.current) {
      setUtilH(utilBarRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  // When scrolled past utility bar height → fix the header, slide utility bar off-screen
  const navFixed = scrollY >= utilH;

  return (
    <>
      <style>{`
        .kb-nav-link {
          color: rgb(198,208,224);
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
          text-decoration: none;
          padding-bottom: 4px;
          border-bottom: 2px solid transparent;
          cursor: pointer;
          transition: color 0.15s, border-color 0.15s;
          line-height: 1;
        }
        .kb-nav-link:hover { color: #fff; }
        .kb-nav-link.active {
          color: rgb(255,122,0);
          border-bottom-color: rgb(255,122,0);
        }
        .kb-util-link {
          color: rgb(185,196,214);
          font-size: 12px;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: color 0.15s;
        }
        .kb-util-link:hover { color: #fff; }
        .kb-social-circle {
          width: 22px; height: 22px;
          border-radius: 50%;
          border: 1px solid rgb(58,77,116);
          display: flex; align-items: center; justify-content: center;
          font-size: 10px;
          color: rgb(185,196,214);
          text-decoration: none;
          transition: border-color 0.15s, color 0.15s;
          flex-shrink: 0;
        }
        .kb-social-circle:hover { border-color: rgb(255,122,0); color: rgb(255,122,0); }
        .kb-mobile-link {
          color: rgb(198,208,224);
          padding: 10px 14px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          display: block;
          transition: color 0.15s, background 0.15s;
        }
        .kb-mobile-link:hover { color: #fff; background: rgba(255,255,255,0.05); }
        .kb-mobile-link.active { color: rgb(255,122,0); }

        /* On mobile (no utility bar), always keep top at 0 when fixed */
        @media (max-width: 1023px) {
          .kb-header-fixed { top: 0 !important; }
        }
      `}</style>

      <header
        className={navFixed ? 'kb-header-fixed' : ''}
        style={{
          position: navFixed ? 'fixed' : 'absolute',
          top: navFixed ? -utilH : 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: 'rgb(8,28,58)',
          boxShadow: navFixed ? '0 2px 20px rgba(0,0,0,0.35)' : 'none',
          transition: 'box-shadow 0.2s',
        }}
      >
        {/* ── Utility bar (desktop only) ─────────────────── */}
        <div
          ref={utilBarRef}
          className="hidden lg:flex items-center justify-between"
          style={{
            background: 'rgb(5,15,32)',
            padding: '8px 40px',
            fontSize: 12,
            color: 'rgb(185,196,214)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
            <a href="tel:+918742019250" className="kb-util-link">
              <span>📞</span>
              <span>+91 87420 19250</span>
            </a>
            <a href="mailto:info@kuber360.in" className="kb-util-link">
              <span>✉️</span>
              <span>info@kuber360.in</span>
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ opacity: 0.75, fontSize: 12 }}>Follow Us:</span>
            {SOCIAL_ITEMS.map(({ label, char }) => (
              <a key={label} href="#" aria-label={label} className="kb-social-circle">
                {char}
              </a>
            ))}
          </div>
        </div>

        {/* ── Main nav bar ───────────────────────────────── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 8,
            padding: '8px 20px',
            borderBottom: '1px solid rgb(15,43,82)',
            flexWrap: 'nowrap',
            overflowX: 'auto',
          }}
        >
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 9, flexShrink: 0, textDecoration: 'none' }}>
            <Image
              src="/assets/kuber360-logo.svg"
              alt="KUBER360"
              width={54}
              height={54}
              style={{ borderRadius: '50%', flexShrink: 0, objectFit: 'cover' }}
              priority
            />
            <div className="hidden sm:block">
              <div style={{ color: '#fff', fontSize: 16, fontWeight: 900, letterSpacing: '0.01em', whiteSpace: 'nowrap' }}>
                KUBER360<span style={{ color: 'rgb(255,122,0)' }}>™</span>
              </div>
              <div style={{ color: 'rgb(143,161,190)', fontSize: 9, letterSpacing: '0.07em', fontWeight: 700, whiteSpace: 'nowrap' }}>
                YOUR FINANCIAL PARTNER
              </div>
            </div>
          </Link>

          <nav
            className="hidden lg:flex"
            style={{ alignItems: 'center', gap: 9, flexWrap: 'nowrap', whiteSpace: 'nowrap' }}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`kb-nav-link${isActive(href) ? ' active' : ''}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
            <a
              href="https://wa.me/918742019250?text=Hi%21%20I%20would%20like%20to%20get%20a%20free%20consultation%20for%20financial%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block"
              style={{
                background: 'rgb(255,122,0)',
                color: '#fff',
                padding: '7px 13px',
                borderRadius: 8,
                fontSize: 10.5,
                fontWeight: 800,
                whiteSpace: 'nowrap',
                flexShrink: 0,
                textDecoration: 'none',
                transition: 'opacity 0.15s',
              }}
            >
              Get Free Consultation
            </a>
            <button
              className="lg:hidden p-2 rounded-md"
              style={{ color: 'rgb(198,208,224)', background: 'none', border: 'none', cursor: 'pointer' }}
              onClick={() => setMobileOpen(v => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* ── Mobile dropdown ────────────────────────────── */}
        {mobileOpen && (
          <div
            className="lg:hidden"
            style={{ background: 'rgb(8,28,58)', borderTop: '1px solid rgba(255,255,255,0.08)' }}
          >
            <nav className="px-4 py-3 flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`kb-mobile-link${isActive(href) ? ' active' : ''}`}
                >
                  {label}
                </Link>
              ))}
              <div className="pt-3 mt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <a
                  href="https://wa.me/918742019250?text=Hi%21%20I%20would%20like%20to%20get%20a%20free%20consultation%20for%20financial%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    gap: 8, background: 'rgb(255,122,0)', color: '#fff',
                    padding: '11px 16px', borderRadius: 8, fontSize: 13,
                    fontWeight: 800, textDecoration: 'none',
                  }}
                >
                  Get Free Consultation
                </a>
                <div style={{ display: 'flex', gap: 16, marginTop: 14, paddingBottom: 4, color: 'rgb(185,196,214)', fontSize: 12 }}>
                  <a href="tel:+918742019250" className="kb-util-link">📞 +91 87420 19250</a>
                  <a href="mailto:info@kuber360.in" className="kb-util-link">✉️ info@kuber360.in</a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
