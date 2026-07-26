interface TestimonialCardProps {
  name: string;
  city: string;
  quote: string;
  light?: boolean;
}

export default function TestimonialCard({ name, city, quote, light = false }: TestimonialCardProps) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div
      style={{
        background: light ? 'rgba(255,255,255,0.06)' : 'rgb(247,249,252)',
        border: `1px solid ${light ? 'rgba(255,255,255,0.1)' : 'rgb(231,236,243)'}`,
        borderRadius: 16,
        padding: 22,
      }}
    >
      {/* Large opening quote */}
      <div style={{ color: light ? 'rgba(255,255,255,0.15)' : 'rgba(8,28,58,0.15)', fontSize: 22, lineHeight: 1 }}>&ldquo;</div>

      {/* Quote text */}
      <p style={{ color: light ? 'var(--color-text-dark-body)' : 'rgb(58,74,96)', fontSize: 13, lineHeight: 1.6, marginTop: 4 }}>
        {quote}
      </p>

      {/* Stars */}
      <div style={{ marginTop: 12, fontSize: 13 }}>
        {[1,2,3,4,5].map(s => <span key={s} style={{ color: 'var(--color-orange)' }}>★</span>)}
      </div>

      {/* Avatar + Name/City */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 12 }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: light ? 'rgba(255,255,255,0.15)' : 'var(--color-navy)',
          color: '#fff',
          fontSize: 13, fontWeight: 800,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          {initial}
        </div>
        <div>
          <div style={{ color: light ? '#fff' : 'var(--color-text-head)', fontSize: 12.5, fontWeight: 800 }}>{name}</div>
          <div style={{ color: light ? 'var(--color-text-dark-muted)' : 'rgb(139,151,170)', fontSize: 11 }}>{city}</div>
        </div>
      </div>
    </div>
  );
}
