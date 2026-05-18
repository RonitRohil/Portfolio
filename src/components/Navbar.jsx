import { useState, useEffect } from 'react';
import { siteContent } from '../data/content';

const links = [
  { id: 'about',       label: 'about' },
  { id: 'experience',  label: 'experience' },
  { id: 'skills',      label: 'skills' },
  { id: 'projects',    label: 'projects' },
  { id: 'open-source', label: 'open-source' },
  { id: 'contact',     label: 'contact' },
];

const go = id => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 68, behavior: 'smooth' });
};

export default function Navbar({ visible, onOpenPalette }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(8,12,16,0.96)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      transition: 'all 0.35s ease',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(-16px)',
    }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 32px', height: '62px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', fontFamily: 'var(--font)', cursor: 'default' }}>
          <span style={{ color: 'var(--text-dim)' }}>~/</span>
          <span style={{ color: 'var(--text)' }}>ronit-jain</span>
          <span style={{ color: 'var(--text-muted)', margin: '0 4px' }}>$</span>
          <span style={{ color: 'var(--green)', animation: 'termBlink 1.2s step-end infinite' }}>▌</span>
        </div>
        {/* Links */}
        <div className="mt-nav-links" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              style={{
                background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '12px',
                fontFamily: 'var(--font)', cursor: 'pointer', letterSpacing: '0.04em',
                padding: '6px 8px', borderRadius: '3px', transition: 'color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--green)'; e.currentTarget.style.background = 'var(--green-dim)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'transparent'; }}
            >
              ./{l.label}
            </button>
          ))}
          <button
            onClick={onOpenPalette}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '5px',
              padding: '5px 10px', background: 'var(--surface2)', border: '1px solid var(--border)',
              borderRadius: '4px', fontFamily: 'var(--font)', fontSize: '11px', color: 'var(--text-dim)',
              cursor: 'pointer', letterSpacing: '0.04em', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--green)'; e.currentTarget.style.color = 'var(--green)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-dim)'; }}
          >
            ⌘K
          </button>
          <a
            href={siteContent.resumeUrl}
            target="_blank" rel="noreferrer"
            style={{
              padding: '6px 14px', background: 'var(--green-dim)',
              color: 'var(--green)', border: '1px solid rgba(63,185,80,0.3)', borderRadius: '4px',
              fontSize: '12px', fontFamily: 'var(--font)', textDecoration: 'none',
              letterSpacing: '0.04em', transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(63,185,80,0.2)'; e.currentTarget.style.borderColor = 'rgba(63,185,80,0.6)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--green-dim)'; e.currentTarget.style.borderColor = 'rgba(63,185,80,0.3)'; }}
          >
            resume ↗
          </a>
        </div>
      </div>
    </nav>
  );
}
