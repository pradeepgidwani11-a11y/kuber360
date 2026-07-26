interface WhyItem { icon: string; title: string; desc?: string }
interface WhyChooseGridProps { items: WhyItem[]; light?: boolean }

export default function WhyChooseGrid({ items, light = false }: WhyChooseGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-start gap-3 rounded-xl p-4"
          style={{
            background: light ? 'rgba(255,255,255,0.06)' : 'var(--color-surface)',
            border: `1px solid ${light ? 'rgba(255,255,255,0.08)' : 'var(--color-border)'}`,
          }}
        >
          <span className="text-xl flex-shrink-0">{item.icon}</span>
          <div>
            <p className="font-semibold text-sm leading-snug" style={{ color: light ? '#fff' : 'var(--color-text-head)' }}>
              {item.title}
            </p>
            {item.desc && (
              <p className="text-xs mt-1 leading-snug" style={{ color: light ? 'var(--color-text-dark-body)' : 'var(--color-text-body)' }}>
                {item.desc}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
