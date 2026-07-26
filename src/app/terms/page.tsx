import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
};

export default function Page() {
  return (
    <div
      className="min-h-[60vh] flex items-center justify-center"
      style={{ background: 'var(--color-surface)' }}
    >
      <div className="text-center px-4">
        <div
          className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-4"
          style={{ background: 'var(--color-navy)', color: '#fff' }}
        >
          Coming Soon
        </div>
        <h1 className="text-3xl font-black mb-3" style={{ color: 'var(--color-text-head)' }}>
          Terms & Conditions
        </h1>
        <p style={{ color: 'var(--color-text-body)' }}>
          This page will be built in Phase 3. Route: <code>/terms</code>
        </p>
      </div>
    </div>
  );
}
