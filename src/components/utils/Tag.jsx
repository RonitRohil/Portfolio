export default function Tag({ children, variant = 'default' }) {
  const v = {
    default: { bg: 'rgba(48,54,61,0.45)', color: 'var(--text-muted)', border: 'rgba(48,54,61,0.9)' },
    green:   { bg: 'var(--green-dim)',    color: 'var(--green)',       border: 'rgba(63,185,80,0.35)' },
    orange:  { bg: 'var(--orange-dim)',   color: 'var(--orange)',      border: 'rgba(247,129,102,0.35)' },
    blue:    { bg: 'var(--blue-dim)',     color: 'var(--blue)',        border: 'rgba(121,192,255,0.35)' },
  }[variant] || { bg: 'rgba(48,54,61,0.45)', color: 'var(--text-muted)', border: 'rgba(48,54,61,0.9)' };

  return (
    <span style={{
      display: 'inline-block', padding: '2px 10px', fontSize: '11px',
      fontFamily: 'var(--font)', background: v.bg, color: v.color,
      border: `1px solid ${v.border}`, borderRadius: '3px',
      letterSpacing: '0.04em', whiteSpace: 'nowrap',
    }}>
      {children}
    </span>
  );
}
