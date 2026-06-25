import Reveal from './Reveal';
import SectionHeader from './utils/SectionHeader';
import TermWindow from './utils/TermWindow';
import Tag from './utils/Tag';
import { siteContent } from '../data/content';

const SEVERITY_COLOR = {
  P0: { bg: 'rgba(255,95,87,0.12)', border: 'rgba(255,95,87,0.3)', text: '#FF5F57' },
  P1: { bg: 'rgba(227,179,65,0.10)', border: 'rgba(227,179,65,0.3)', text: '#E3B341' },
  P2: { bg: 'rgba(88,166,255,0.10)', border: 'rgba(88,166,255,0.25)', text: '#58A6FF' },
};

const ROW_CONFIG = [
  { key: 'symptom',   label: 'SYMPTOM',   color: 'var(--orange)' },
  { key: 'diagnosed', label: 'DIAGNOSED', color: 'var(--yellow)' },
  { key: 'fix',       label: 'FIX',       color: 'var(--blue)'   },
  { key: 'outcome',   label: 'OUTCOME',   color: 'var(--green)'  },
];

export default function IncidentLog() {
  const { incidents } = siteContent;
  if (!incidents?.length) return null;

  return (
    <section id="incidents" style={{ padding: '80px 32px', maxWidth: '1120px', margin: '0 auto' }}>
      <SectionHeader
        cmd="tail -f /var/log/production/incidents.log"
        title="Production Incidents"
        subtitle="Real fires, diagnosed and resolved in production."
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {incidents.map((inc) => {
          const sev = SEVERITY_COLOR[inc.severity] ?? SEVERITY_COLOR.P2;
          return (
            <Reveal key={inc.id}>
              <TermWindow
                title={`${inc.id.toLowerCase()}_${inc.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.log`}
                glowColor="rgba(255,95,87,0.04)"
                style={{ border: `1px solid ${sev.border}` }}
              >
                {/* Incident header bar */}
                <div style={{
                  padding: '10px 18px',
                  background: sev.bg,
                  borderBottom: `1px solid ${sev.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  flexWrap: 'wrap',
                }}>
                  <span style={{
                    fontFamily: 'var(--font)', fontSize: '11px', color: sev.text,
                    fontWeight: 700, letterSpacing: '0.08em',
                  }}>
                    [{inc.id}]
                  </span>
                  <span style={{
                    fontFamily: 'var(--font)', fontSize: '13px', color: 'var(--text)',
                    fontWeight: 600, flex: 1,
                  }}>
                    {inc.title}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: 'auto' }}>
                    <span style={{
                      padding: '2px 9px',
                      background: sev.bg,
                      border: `1px solid ${sev.border}`,
                      borderRadius: '3px',
                      fontFamily: 'var(--font)', fontSize: '10px', color: sev.text,
                      letterSpacing: '0.1em',
                    }}>
                      {inc.severity}
                    </span>
                    <span style={{
                      padding: '2px 9px',
                      background: 'rgba(63,185,80,0.08)',
                      border: '1px solid rgba(63,185,80,0.25)',
                      borderRadius: '3px',
                      fontFamily: 'var(--font)', fontSize: '10px', color: 'var(--green)',
                      letterSpacing: '0.1em',
                    }}>
                      ● RESOLVED
                    </span>
                  </div>
                </div>

                <div style={{ padding: '18px 20px' }}>
                  {/* System + TTD metadata */}
                  <div style={{
                    display: 'flex', gap: '24px', flexWrap: 'wrap',
                    marginBottom: '20px', paddingBottom: '16px',
                    borderBottom: '1px solid var(--border)',
                  }}>
                    <div>
                      <span style={{ fontFamily: 'var(--font)', fontSize: '10px', color: 'var(--text-dim)', letterSpacing: '0.08em' }}>SYSTEM</span>
                      <div style={{ fontFamily: 'var(--font)', fontSize: '12px', color: 'var(--text-muted)', marginTop: '3px' }}>{inc.system}</div>
                    </div>
                    <div>
                      <span style={{ fontFamily: 'var(--font)', fontSize: '10px', color: 'var(--text-dim)', letterSpacing: '0.08em' }}>TIME TO DIAGNOSE</span>
                      <div style={{ fontFamily: 'var(--font)', fontSize: '12px', color: 'var(--text-muted)', marginTop: '3px' }}>{inc.ttd}</div>
                    </div>
                  </div>

                  {/* Story rows */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
                    {ROW_CONFIG.map(({ key, label, color }) => (
                      <div key={key} style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '14px', alignItems: 'flex-start' }}>
                        <span style={{
                          fontFamily: 'var(--font)', fontSize: '10px', color,
                          letterSpacing: '0.1em', paddingTop: '2px',
                          display: 'flex', alignItems: 'center', gap: '6px',
                        }}>
                          <span style={{ color: 'var(--text-dim)' }}>$</span> {label}
                        </span>
                        <span style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.65' }}>
                          {inc[key]}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Stack tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '14px', borderTop: '1px solid var(--border)' }}>
                    <span style={{ fontFamily: 'var(--font)', fontSize: '10px', color: 'var(--text-dim)', alignSelf: 'center', marginRight: '4px' }}>stack:</span>
                    {inc.stack.map(t => <Tag key={t}>{t}</Tag>)}
                  </div>
                </div>
              </TermWindow>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
