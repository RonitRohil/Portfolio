export default function Footer() {
  return (
    <footer style={{ padding: '28px 32px', maxWidth: '1120px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ fontFamily: 'var(--font)', fontSize: '12px', color: 'var(--text-dim)' }}>
          <span style={{ color: 'var(--green)' }}>~/ronit-jain</span>
          <span> · git commit -m "portfolio v2.0.0" · May 2026</span>
        </div>
        <div style={{ fontFamily: 'var(--font)', fontSize: '12px', color: 'var(--text-dim)' }}>
          <span>Built with </span>
          <span style={{ color: 'var(--green)' }}>React</span>
          <span> · Designed in </span>
          <span style={{ color: 'var(--blue)' }}>Midnight Terminal</span>
        </div>
      </div>
    </footer>
  );
}
