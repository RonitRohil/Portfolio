export default function TermWindow({ title, children, glowColor = 'rgba(63,185,80,0.06)', style = {} }) {
  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: `0 0 40px ${glowColor}, 0 8px 32px rgba(0,0,0,0.35)`,
      ...style,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: '7px',
        padding: '10px 14px', background: 'var(--surface2)',
        borderBottom: '1px solid var(--border)',
      }}>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57', display: 'block', flexShrink: 0 }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E', display: 'block', flexShrink: 0 }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28CA41', display: 'block', flexShrink: 0 }} />
        {title && (
          <span style={{
            marginLeft: '8px', fontSize: '11px', color: 'var(--text-muted)',
            letterSpacing: '0.02em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>
            {title}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}
