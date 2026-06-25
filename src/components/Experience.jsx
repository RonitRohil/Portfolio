import Reveal from './Reveal';
import SectionHeader from './utils/SectionHeader';
import TermWindow from './utils/TermWindow';
import Tag from './utils/Tag';
import { siteContent } from '../data/content';

export default function Experience() {
  const d = siteContent;
  return (
    <section id="experience" style={{ padding: '80px 32px', maxWidth: '1120px', margin: '0 auto' }}>
      <SectionHeader cmd="git log --experience --format=full" title="Experience" subtitle="Product work that ships into real operations." />

      {d.experience.map((exp, idx) => (
        <Reveal key={idx}>
          <div style={{ position: 'relative', paddingLeft: '28px', marginBottom: '48px' }}>
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: 0, top: '10px', bottom: 0, width: '1px', background: 'linear-gradient(to bottom, rgba(63,185,80,0.4), transparent)' }} />
            <div style={{ position: 'absolute', left: '-5px', top: '8px', width: '11px', height: '11px', borderRadius: '50%', background: 'var(--green)', boxShadow: '0 0 12px rgba(63,185,80,0.6)' }} />

            {/* Commit header */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontFamily: 'var(--font)', fontSize: '11px', color: 'var(--text-dim)' }}>
                  commit <span style={{ color: 'var(--orange)' }}>a7f3b2c</span>
                </span>
                <span style={{ fontFamily: 'var(--font)', fontSize: '11px', color: 'var(--blue)' }}>(HEAD → main)</span>
              </div>
              <div style={{ fontFamily: 'var(--font)', fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                <div>Author: <span style={{ color: 'var(--text)' }}>{d.name} &lt;{d.email}&gt;</span></div>
                <div>Date: &nbsp; <span style={{ color: 'var(--text)' }}>{exp.period} · {exp.location}</span></div>
              </div>
            </div>

            {/* Main card */}
            <TermWindow title={`${exp.role.toLowerCase().replace(/ /g, '-')}.log`} glowColor="rgba(63,185,80,0.05)">
              <div style={{ padding: '20px 24px' }}>
                {/* Role */}
                <div style={{ marginBottom: '18px' }}>
                  <div style={{ fontFamily: 'var(--font)', fontSize: '11px', color: 'var(--text-dim)', marginBottom: '8px', letterSpacing: '0.06em' }}>
                    <span style={{ color: 'var(--purple)' }}>feat</span>(career): <span style={{ color: 'var(--text)' }}>{exp.role} @ {exp.company}</span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.75' }}>{exp.summary}</p>
                </div>

                {/* Stack */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '11px', color: 'var(--text-dim)', fontFamily: 'var(--font)', marginBottom: '8px', letterSpacing: '0.08em' }}>$ tech-stack</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {exp.stack.map(t => <Tag key={t}>{t}</Tag>)}
                  </div>
                </div>

                {/* Bullets */}
                <div style={{ fontSize: '11px', color: 'var(--text-dim)', fontFamily: 'var(--font)', marginBottom: '12px', letterSpacing: '0.08em' }}>$ git log --oneline --bullets</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {exp.bullets.map((b, i) => (
                    <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--green)', fontFamily: 'var(--font)', fontSize: '12px', marginTop: '2px', flexShrink: 0 }}>+</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.65' }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TermWindow>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
