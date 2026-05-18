import { useReveal } from './useReveal';

export default function SectionHeader({ cmd, title, subtitle }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(12px)',
      transition: 'opacity 0.5s ease, transform 0.5s ease',
      marginBottom: '48px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
        <span style={{ color: 'var(--green)', fontSize: '12px', userSelect: 'none' }}>$</span>
        <span style={{ color: 'var(--text-dim)', fontSize: '12px', letterSpacing: '0.06em' }}>{cmd}</span>
      </div>
      <h2 style={{
        fontFamily: 'var(--font)', fontSize: 'clamp(1.3rem, 2.8vw, 1.9rem)',
        fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.01em', lineHeight: 1.2,
      }}>
        <span style={{ color: 'var(--green)', opacity: 0.65 }}>// </span>{title}
      </h2>
      {subtitle && (
        <p style={{ marginTop: '6px', color: 'var(--text-muted)', fontSize: '13px', letterSpacing: '0.02em' }}>
          {subtitle}
        </p>
      )}
      <div style={{ marginTop: '18px', height: '1px', background: 'linear-gradient(to right, rgba(63,185,80,0.35), transparent)' }} />
    </div>
  );
}
