import Reveal from './Reveal';
import SectionHeader from './utils/SectionHeader';
import TermWindow from './utils/TermWindow';
import { siteContent } from '../data/content';

export default function About() {
  const d = siteContent;
  return (
    <section id="about" style={{ padding: '80px 32px', maxWidth: '1120px', margin: '0 auto' }}>
      <SectionHeader cmd="cat about.md" title="About" subtitle="Building the systems behind the product." />

      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: '48px', alignItems: 'start' }}>
        {/* Text */}
        <Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {d.about.map((p, i) => (
              <p key={i} style={{ color: i === 0 ? 'var(--text)' : 'var(--text-muted)', fontSize: '14px', lineHeight: '1.85' }}>
                {i === 0 && <span style={{ color: 'var(--text-dim)' }}>{'// '}</span>}{p}
              </p>
            ))}
          </div>
        </Reveal>

        {/* Stats + Education */}
        <Reveal delay={0.1}>
          <TermWindow title="stats.json" glowColor="rgba(63,185,80,0.04)">
            <div style={{ padding: '10px 14px', background: 'var(--surface2)', borderBottom: '1px solid var(--border)', fontSize: '11px', color: 'var(--text-dim)', fontFamily: 'var(--font)', letterSpacing: '0.08em' }}>
              $ cat stats.json
            </div>
            <div style={{ padding: '16px' }}>
              {d.stats.map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'baseline', padding: '8px 0', borderBottom: i < d.stats.length - 1 ? '1px solid rgba(48,54,61,0.5)' : 'none' }}>
                  <span style={{ fontFamily: 'var(--font)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--green)', minWidth: '68px', letterSpacing: '-0.01em' }}>{s.value}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '12px', lineHeight: 1.4 }}>{s.label}</span>
                </div>
              ))}
            </div>
          </TermWindow>

          {/* Education */}
          <div style={{ marginTop: '16px' }}>
            <TermWindow title="education/" glowColor="rgba(63,185,80,0.04)">
              <div style={{ padding: '10px 14px', background: 'var(--surface2)', borderBottom: '1px solid var(--border)', fontSize: '11px', color: 'var(--text-dim)', fontFamily: 'var(--font)', letterSpacing: '0.08em' }}>
                $ ls education/
              </div>
              <div style={{ padding: '8px 0' }}>
                {d.education.map((e, i) => {
                  const isDA = i === 0;
                  return (
                    <div key={i} style={{
                      display: 'grid', gridTemplateColumns: '1fr auto', gap: '8px',
                      padding: isDA ? '14px 16px' : '10px 16px', alignItems: 'center',
                      borderBottom: i < d.education.length - 1 ? '1px solid rgba(48,54,61,0.3)' : 'none',
                      background: isDA ? 'rgba(227,179,65,0.05)' : 'transparent',
                      borderLeft: isDA ? '2px solid var(--yellow)' : '2px solid transparent',
                    }}>
                      <div>
                        <div style={{ fontFamily: 'var(--font)', fontSize: isDA ? '14px' : '13px', color: isDA ? 'var(--yellow)' : 'var(--text)', fontWeight: 700, lineHeight: 1.3 }}>
                          {isDA ? 'B.Tech ICT — DA-IICT, Gandhinagar' : e.title}
                        </div>
                        <div style={{ fontSize: '11px', color: isDA ? 'rgba(227,179,65,0.65)' : 'var(--text-muted)', marginTop: '3px', letterSpacing: '0.02em' }}>
                          {isDA ? `Dhirubhai Ambani Institute of ICT · Tier-1 · ${e.meta}` : `${e.subtitle} · ${e.meta}`}
                        </div>
                      </div>
                      <span style={{ fontFamily: 'var(--font)', fontSize: '12px', color: isDA ? 'var(--yellow)' : 'var(--green)', fontWeight: 600, whiteSpace: 'nowrap' }}>{e.detail}</span>
                    </div>
                  );
                })}
              </div>
            </TermWindow>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
