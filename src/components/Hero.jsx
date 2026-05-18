import { useState, useEffect } from 'react';
import { siteContent } from '../data/content';
import TermWindow from './utils/TermWindow';

function useTypewriter(text, { speed = 55, delay = 0, enabled = true } = {}) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (!enabled) { setDisplayed(text); setDone(true); return; }
    setDisplayed(''); setDone(false);
    let i = 0, iv;
    const t = setTimeout(() => {
      iv = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) { clearInterval(iv); setDone(true); }
      }, speed);
    }, delay);
    return () => { clearTimeout(t); clearInterval(iv); };
  }, [text, enabled]);
  return [displayed, done];
}

const go = id => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 68, behavior: 'smooth' });
};

export default function Hero({ visible }) {
  const d = siteContent;
  const [typedName, nameDone]   = useTypewriter(d.name,  { speed: 65, delay: 250,  enabled: visible });
  const [typedTitle, titleDone] = useTypewriter(d.title, { speed: 50, delay: 1100, enabled: visible });

  const fade = (delay) => ({
    opacity: nameDone ? 1 : 0,
    transform: nameDone ? 'translateY(0)' : 'translateY(10px)',
    transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
  });

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '80px 32px 60px', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient glows */}
      <div style={{ position: 'absolute', top: '15%', left: '-8%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(63,185,80,0.055) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(247,129,102,0.04) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div className="mt-hero-grid" style={{ maxWidth: '1120px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr auto', gap: '64px', alignItems: 'center' }}>

        {/* Left */}
        <div>
          {/* Prompt */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px', marginBottom: '24px', fontFamily: 'var(--font)', fontSize: '12px', opacity: visible ? 1 : 0, transition: 'opacity 0.5s ease 0.1s' }}>
            <span style={{ color: 'var(--green)' }}>guest@portfolio</span>
            <span style={{ color: 'var(--text-dim)' }}>:</span>
            <span style={{ color: 'var(--blue)' }}>~/ronit-jain</span>
            <span style={{ color: 'var(--text)' }}>$</span>
            <span style={{ color: 'var(--text-muted)' }}>whoami</span>
          </div>

          {/* Name */}
          <h1 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 700, color: 'var(--text)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '10px', minHeight: '1.2em' }}>
            {typedName}
            {!nameDone && <span style={{ color: 'var(--green)', animation: 'termBlink 0.75s step-end infinite' }}>█</span>}
          </h1>

          {/* Title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px', minHeight: '2rem' }}>
            {nameDone && (
              <>
                <span style={{ color: 'var(--green)', fontSize: '18px', fontWeight: 600, lineHeight: 1 }}>›</span>
                <span style={{ fontFamily: 'var(--font)', fontSize: 'clamp(0.95rem, 2vw, 1.25rem)', color: 'var(--green)', fontWeight: 500, letterSpacing: '0.02em' }}>
                  {typedTitle}
                  {!titleDone && <span style={{ animation: 'termBlink 0.75s step-end infinite' }}>█</span>}
                </span>
              </>
            )}
          </div>

          {/* Intro */}
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.85', maxWidth: '540px', marginBottom: '28px', ...fade(0.1) }}>
            <span style={{ color: 'var(--text-dim)' }}>{'// '}</span>{d.intro}
          </p>

          {/* AI callout */}
          <div style={{ marginBottom: '20px', fontFamily: 'var(--font)', fontSize: '11px', letterSpacing: '0.04em', ...fade(0.15) }}>
            <span style={{ color: 'var(--text-dim)' }}>{'// '}</span>
            <span style={{ color: 'var(--text-dim)' }}>AI-augmented: </span>
            {['Claude Code', 'OpenAI Codex', 'Google AI Studio'].map((tool, i, arr) => (
              <span key={tool}>
                <span style={{ color: 'var(--blue)' }}>{tool}</span>
                {i < arr.length - 1 && <span style={{ color: 'var(--text-dim)' }}> · </span>}
              </span>
            ))}
          </div>

          {/* Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '18px', ...fade(0.2) }}>
            {[
              { text: d.location,            bg: 'rgba(48,54,61,0.4)', color: 'var(--text-muted)', border: 'var(--border)', prefix: '~/' },
              { text: 'Open to Work · Remote', bg: 'var(--green-dim)', color: 'var(--green)',      border: 'rgba(63,185,80,0.35)', pulse: true },
            ].map(b => (
              <span key={b.text} style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '6px 14px', background: b.bg, border: `1px solid ${b.border}`, borderRadius: '4px', fontSize: '12px', fontFamily: 'var(--font)', color: b.color, letterSpacing: '0.04em' }}>
                {b.pulse && <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--green)', display: 'inline-block', animation: 'statusPulse 2s ease infinite', flexShrink: 0 }} />}
                {b.prefix && <span style={{ color: 'var(--text-dim)' }}>{b.prefix}</span>}
                {b.text}
              </span>
            ))}
          </div>

          {/* Availability signal */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '28px', ...fade(0.25) }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--green)', flexShrink: 0, animation: 'statusPulse 1.8s ease infinite', boxShadow: '0 0 6px rgba(63,185,80,0.6)' }} />
            <span style={{ fontFamily: 'var(--font)', fontSize: '12px', color: 'var(--green)', letterSpacing: '0.04em' }}>
              Available for Backend Engineering roles
            </span>
            <span style={{ fontFamily: 'var(--font)', fontSize: '12px', color: 'var(--text-dim)', letterSpacing: '0.04em' }}>—</span>
            <span style={{ fontFamily: 'var(--font)', fontSize: '12px', color: 'var(--yellow)', letterSpacing: '0.04em', fontWeight: 600 }}>May 2026</span>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px', ...fade(0.3) }}>
            <a
              href={d.resumeUrl} target="_blank" rel="noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                padding: '10px 22px', fontFamily: 'var(--font)', fontSize: '13px', fontWeight: 600,
                letterSpacing: '0.04em', cursor: 'pointer', borderRadius: '4px',
                background: 'var(--green)', color: '#080C10', border: 'none', textDecoration: 'none',
                transition: 'opacity 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Download Resume ↓
            </a>
            <button
              onClick={() => go('contact')}
              style={{
                padding: '10px 22px', fontFamily: 'var(--font)', fontSize: '13px', fontWeight: 400,
                letterSpacing: '0.04em', cursor: 'pointer', borderRadius: '4px',
                background: 'transparent', color: 'var(--text)', border: '1px solid var(--border)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.borderColor = 'var(--green)'; e.currentTarget.style.color = 'var(--green)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; }}
            >
              Contact Me →
            </button>
            <button
              onClick={() => go('projects')}
              style={{
                padding: '10px 22px', fontFamily: 'var(--font)', fontSize: '13px', fontWeight: 400,
                letterSpacing: '0.04em', cursor: 'pointer', borderRadius: '4px',
                background: 'transparent', color: 'var(--text-muted)', border: '1px solid rgba(48,54,61,0.6)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'rgba(48,54,61,0.6)'; }}
            >
              View Projects ↓
            </button>
          </div>

          {/* Tech stack */}
          <div style={fade(0.45)}>
            <div style={{ fontSize: '11px', color: 'var(--text-dim)', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'var(--font)' }}>
              <span style={{ color: 'var(--purple)' }}>export </span>
              <span style={{ color: 'var(--text-muted)' }}>STACK</span>
              <span style={{ color: 'var(--text-dim)' }}>=</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Node.js', 'PostgreSQL', 'Python', 'Redis', 'Azure', 'JavaScript'].map(t => (
                <span
                  key={t}
                  style={{ padding: '4px 12px', background: 'rgba(48,54,61,0.3)', border: '1px solid rgba(63,185,80,0.2)', borderRadius: '3px', fontSize: '12px', color: 'var(--green)', fontFamily: 'var(--font)', letterSpacing: '0.04em', transition: 'background 0.2s, border-color 0.2s', cursor: 'default' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--green-dim)'; e.currentTarget.style.borderColor = 'rgba(63,185,80,0.5)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(48,54,61,0.3)'; e.currentTarget.style.borderColor = 'rgba(63,185,80,0.2)'; }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: profile in terminal frame */}
        <div className="mt-hero-profile" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(24px)', transition: 'opacity 0.9s ease 0.5s, transform 0.9s ease 0.5s' }}>
          <TermWindow title="profile.jpg — Preview" glowColor="rgba(63,185,80,0.1)" style={{ width: '300px', boxShadow: '0 0 60px rgba(63,185,80,0.1), 0 20px 60px rgba(0,0,0,0.5)' }}>
            <div style={{ position: 'relative' }}>
              <img src={d.profileImage} alt="Ronit Jain" style={{ width: '100%', display: 'block', aspectRatio: '1 / 1', objectFit: 'cover', objectPosition: 'top center' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 55%, rgba(8,12,16,0.5) 100%)', pointerEvents: 'none' }} />
            </div>
            <div style={{ padding: '12px 14px', fontSize: '11px', fontFamily: 'var(--font)', lineHeight: '1.75', borderTop: '1px solid var(--border)' }}>
              <div><span style={{ color: 'var(--green)' }}>$</span><span style={{ color: 'var(--text-muted)' }}> identify profile.jpg</span></div>
              <div style={{ color: 'var(--text-dim)' }}>Name: <span style={{ color: 'var(--text)' }}>Ronit Jain</span></div>
              <div style={{ color: 'var(--text-dim)' }}>Role: <span style={{ color: 'var(--blue)' }}>Backend Engineer</span></div>
              <div style={{ color: 'var(--text-dim)' }}>Based: <span style={{ color: 'var(--text-muted)' }}>Jaipur, IN</span></div>
              <div style={{ color: 'var(--text-dim)' }}>Status: <span style={{ color: 'var(--green)' }}>● Open to Work</span></div>
            </div>
          </TermWindow>

          {/* Social links */}
          <div style={{ marginTop: '14px', display: 'flex', gap: '8px', justifyContent: 'center' }}>
            {[
              { label: 'GH',  href: 'https://github.com/RonitRohil' },
              { label: 'in',  href: 'https://www.linkedin.com/in/ronitjain0402/' },
              { label: '{}',  href: 'https://leetcode.com/ronitrohil/' },
              { label: '@',   href: 'mailto:ronitrohil@gmail.com' },
            ].map(s => (
              <a
                key={s.label} href={s.href} target="_blank" rel="noreferrer"
                style={{
                  width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px',
                  color: 'var(--text-muted)', fontSize: '12px', fontFamily: 'var(--font)', fontWeight: 600,
                  textDecoration: 'none', transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--green)'; e.currentTarget.style.borderColor = 'rgba(63,185,80,0.45)'; e.currentTarget.style.background = 'var(--green-dim)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--surface)'; }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
