interface Step { num: string; title: string; desc?: string }
interface ProcessStepsProps { steps: Step[]; light?: boolean }

export default function ProcessSteps({ steps, light = false }: ProcessStepsProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {steps.map((s, i) => (
        <div key={i} className="relative flex flex-col items-center text-center p-4 rounded-xl" style={{ background: light ? 'rgba(255,255,255,0.06)' : 'var(--color-surface)', border: `1px solid ${light ? 'rgba(255,255,255,0.08)' : 'var(--color-border)'}` }}>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm mb-3"
            style={{ background: 'var(--color-orange)', color: '#fff' }}
          >
            {s.num}
          </div>
          <p className="text-xs font-semibold leading-snug" style={{ color: light ? '#fff' : 'var(--color-text-head)' }}>
            {s.title}
          </p>
          {s.desc && <p className="text-xs mt-1 leading-snug" style={{ color: light ? 'var(--color-text-dark-body)' : 'var(--color-text-body)' }}>{s.desc}</p>}
        </div>
      ))}
    </div>
  );
}
