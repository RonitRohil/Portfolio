import Reveal from './Reveal';
import SectionHeader from './utils/SectionHeader';
import TermWindow from './utils/TermWindow';
import { siteContent } from '../data/content';

export default function DomainExpertise() {
  const d = siteContent;
  if (!d.domainExpertise) return null;
  return (
    <section id="domain" style={{ padding: '80px 32px', maxWidth: '1120px', margin: '0 auto' }}>
      <SectionHeader cmd="cat domain-expertise.conf" title="Domain Expertise" subtitle="FinTech systems knowledge beyond the code layer." />
      <Reveal>
        <TermWindow
          title="FINAC_DOMAIN_KNOWLEDGE.conf"
          glowColor="rgba(227,179,65,0.08)"
          style={{ border: '1px solid rgba(227,179,65,0.18)' }}
        >
          <div style={{ padding: '8px 18px 10px', background: 'rgba(227,179,65,0.04)', borderBottom: '1px solid rgba(227,179,65,0.14)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontFamily: 'var(--font)', fontSize: '10px', color: 'var(--yellow)', letterSpacing: '0.12em' }}>MODULE</span>
            <span style={{ fontFamily: 'var(--font)', fontSize: '10px', color: 'var(--text-dim)' }}>·</span>
            <span style={{ fontFamily: 'var(--font)', fontSize: '10px', color: 'var(--text-dim)', letterSpacing: '0.06em' }}>fintech domain knowledge — 2+ years production</span>
            <span style={{ marginLeft: 'auto', fontFamily: 'var(--font)', fontSize: '10px', color: 'rgba(63,185,80,0.5)', letterSpacing: '0.08em' }}>// loaded</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1px', background: 'rgba(48,54,61,0.25)' }}>
            {d.domainExpertise.map((item, i) => (
              <div
                key={i}
                style={{ background: 'var(--surface)', padding: '16px 18px', transition: 'background 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(227,179,65,0.04)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--surface)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ fontFamily: 'var(--font)', fontSize: '11px', color: 'var(--yellow)', marginTop: '3px', flexShrink: 0 }}>▶</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font)', fontSize: '13px', color: 'var(--text)', fontWeight: 600, marginBottom: '4px', lineHeight: 1.3 }}>{item.title}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-dim)', lineHeight: 1.55, marginBottom: '7px' }}>{item.detail}</div>
                    <span style={{ display: 'inline-block', padding: '1px 8px', background: 'rgba(227,179,65,0.07)', border: '1px solid rgba(227,179,65,0.2)', borderRadius: '3px', fontSize: '9px', fontFamily: 'var(--font)', color: 'rgba(227,179,65,0.65)', letterSpacing: '0.1em' }}>{item.tag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TermWindow>
      </Reveal>
    </section>
  );
}
