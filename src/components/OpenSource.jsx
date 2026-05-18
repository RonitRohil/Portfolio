import Reveal from './Reveal';
import SectionHeader from './utils/SectionHeader';
import Tag from './utils/Tag';
import { siteContent } from '../data/content';

export default function OpenSource() {
  const d = siteContent;
  return (
    <section id="open-source" style={{ padding: '80px 32px', maxWidth: '1120px', margin: '0 auto' }}>
      <SectionHeader cmd="git log --all --author='RonitRohil' --oneline" title="Open Source" subtitle="Public repositories and experiments." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
        {d.githubProjects.map((proj, i) => (
          <Reveal key={proj.title} delay={i * 0.07}>
            <a href={proj.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div
                style={{ height: '100%', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '20px', transition: 'all 0.25s ease', cursor: 'pointer' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(63,185,80,0.45)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(63,185,80,0.08)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <span style={{ fontFamily: 'var(--font)', fontSize: '11px', color: 'var(--orange)' }}>{'>'}</span>
                  <span style={{ fontFamily: 'var(--font)', fontSize: '11px', color: 'var(--text-dim)', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{proj.path}</span>
                  <span style={{ fontFamily: 'var(--font)', fontSize: '10px', color: 'var(--blue)' }}>↗</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font)', fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '8px', lineHeight: 1.4 }}>{proj.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '12px', lineHeight: '1.7', marginBottom: '16px' }}>{proj.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  {proj.stack.map(t => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
