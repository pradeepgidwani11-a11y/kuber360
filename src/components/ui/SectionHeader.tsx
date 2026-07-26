interface SectionHeaderProps {
  tag?: string;
  title: string;
  highlight?: string;
  sub?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeader({ tag, title, highlight, sub, center = false, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-7 ${center ? 'text-center' : ''}`}>
      {tag && (
        <div
          style={{
            color: 'var(--color-orange)',
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          {tag}
        </div>
      )}
      <h2
        style={{
          color: light ? '#fff' : 'var(--color-text-head)',
          fontSize: 24,
          fontWeight: 900,
          marginTop: 6,
          lineHeight: 1.25,
        }}
      >
        {title}{highlight && <> <span style={{ color: 'var(--color-orange)' }}>{highlight}</span></>}
      </h2>
      {sub && (
        <p
          style={{
            color: light ? 'var(--color-text-dark-body)' : 'rgb(91,107,132)',
            fontSize: 13,
            marginTop: 8,
            lineHeight: 1.6,
            maxWidth: '42rem',
            marginLeft: center ? 'auto' : undefined,
            marginRight: center ? 'auto' : undefined,
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
