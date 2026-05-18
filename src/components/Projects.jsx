import { useState } from 'react';
import Reveal from './Reveal';
import SectionHeader from './utils/SectionHeader';
import { siteContent } from '../data/content';

const TONE_GLOW = {
  green:  { glow: 'rgba(63,185,80,0.08)',   accent: 'var(--green)',  accentDim: 'var(--green-dim)',  border: 'rgba(63,185,80,0.3)'   },
  blue:   { glow: 'rgba(121,192,255,0.08)', accent: 'var(--blue)',   accentDim: 'var(--blue-dim)',   border: 'rgba(121,192,255,0.3)' },
  orange: { glow: 'rgba(247,129,102,0.08)', accent: 'var(--orange)', accentDim: 'var(--orange-dim)', border: 'rgba(247,129,102,0.3)' },
};

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const tone = TONE_GLOW[project.tone] || TONE_GLOW.green;
  const isEven = index % 2 === 0;

  return (
    <Reveal delay={index * 0.04}>
      <div
        className="mt-project-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0',
          background: 'var(--surface)', border: `1px solid ${hovered ? tone.border : 'var(--border)'}`,
          borderRadius: '8px', overflow: 'hidden',
          boxShadow: hovered ? `0 0 40px ${tone.glow}, 0 8px 32px rgba(0,0,0,0.3)` : '0 2px 12px rgba(0,0,0,0.2)',
          transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        {/* Visual panel */}
        <div
          className="mt-project-visual"
          style={{
            order: isEven ? 0 : 1,
            background: `linear-gradient(135deg, ${tone.accentDim} 0%, rgba(13,17,23,0.6) 100%)`,
            borderRight: isEven ? `1px solid ${tone.border}` : 'none',
            borderLeft: isEven ? 'none' : `1px solid ${tone.border}`,
            padding: '28px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '280px',
          }}
        >
          {/* Terminal dots + path */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '22px' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF5F57', display: 'block' }} />
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFBD2E', display: 'block' }} />
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#28CA41', display: 'block' }} />
            <span style={{ marginLeft: '8px', fontFamily: 'var(--font)', fontSize: '10px', color: 'var(--text-dim)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>
              {project.path}
            </span>
          </div>

          <div style={{ flex: 1 }}>
            {/* Production badge */}
            {project.production && (
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '2px 9px', background: 'rgba(63,185,80,0.08)', border: '1px solid rgba(63,185,80,0.22)', borderRadius: '20px', fontSize: '9px', fontFamily: 'var(--font)', color: 'rgba(63,185,80,0.75)', letterSpacing: '0.12em', marginBottom: '14px' }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }} />
                PRODUCTION
              </div>
            )}
            {/* Metric */}
            {project.metric && (
              <div style={{ fontFamily: 'var(--font)', fontSize: 'clamp(1.25rem, 2vw, 1.6rem)', fontWeight: 700, color: tone.accent, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '10px' }}>
                {project.metric}
              </div>
            )}
            {/* Project name */}
            <h3 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(0.85rem, 1.4vw, 1rem)', fontWeight: 600, color: 'var(--text)', lineHeight: 1.35, letterSpacing: '-0.01em', marginBottom: '8px' }}>
              {project.title}
            </h3>
            {/* Status */}
            <div style={{ fontFamily: 'var(--font)', fontSize: '10px', color: tone.accent, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.65 }}>
              // {project.status}
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '18px' }}>
            {project.stack.map(t => (
              <span key={t} style={{ padding: '2px 8px', background: 'rgba(0,0,0,0.3)', border: `1px solid ${tone.border}`, borderRadius: '3px', fontSize: '10px', fontFamily: 'var(--font)', color: tone.accent, letterSpacing: '0.04em' }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Info panel */}
        <div className="mt-project-info" style={{ order: isEven ? 1 : 0, padding: '28px 28px' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.8', marginBottom: '20px' }}>
            <span style={{ color: 'var(--text-dim)', fontFamily: 'var(--font)' }}>{'// '}</span>{project.description}
          </p>

          <div style={{ fontFamily: 'var(--font)', fontSize: '11px', color: 'var(--text-dim)', marginBottom: '10px', letterSpacing: '0.08em' }}>$ ls features/</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
            {project.features.map((f, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: tone.accent, fontFamily: 'var(--font)', fontSize: '11px', marginTop: '2px', flexShrink: 0 }}>✓</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '12px', lineHeight: '1.6' }}>{f}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
            <span style={{ fontFamily: 'var(--font)', fontSize: '11px', color: tone.accent, letterSpacing: '0.06em' }}>
              ● {project.status}
            </span>
            <div style={{ display: 'flex', gap: '8px' }}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer"
                  style={{ padding: '5px 12px', background: 'transparent', color: 'var(--text-muted)', border: '1px solid var(--border)', borderRadius: '3px', fontSize: '11px', fontFamily: 'var(--font)', textDecoration: 'none', letterSpacing: '0.04em', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--text-muted)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}>
                  GitHub ↗
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer"
                  style={{ padding: '5px 12px', background: tone.accentDim, color: tone.accent, border: `1px solid ${tone.border}`, borderRadius: '3px', fontSize: '11px', fontFamily: 'var(--font)', textDecoration: 'none', letterSpacing: '0.04em', transition: 'background 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = tone.glow; }}
                  onMouseLeave={e => { e.currentTarget.style.background = tone.accentDim; }}>
                  View Live ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

const getCat = s => {
  const l = s.toLowerCase();
  if (l.includes('production') || l.includes('live')) return 'production';
  if (l.includes('development') || l.includes('dev')) return 'indev';
  return 'other';
};

export default function Projects() {
  const d = siteContent;
  const [filter, setFilter] = useState('all');

  const tabs = [
    { id: 'all',        label: 'All',        count: d.projects.length },
    { id: 'production', label: 'Production', count: d.projects.filter(p => getCat(p.status) === 'production').length },
    { id: 'indev',      label: 'In Dev',     count: d.projects.filter(p => getCat(p.status) === 'indev').length },
  ];

  const visible = filter === 'all' ? d.projects : d.projects.filter(p => getCat(p.status) === filter);

  return (
    <section id="projects" style={{ padding: '80px 32px', maxWidth: '1120px', margin: '0 auto' }}>
      <SectionHeader cmd="ls -la ~/projects/" title="Projects" subtitle="Shipping useful systems, not just demos." />

      {/* Filter tabs */}
      <div style={{ display: 'flex', gap: '6px', marginBottom: '28px', flexWrap: 'wrap' }}>
        {tabs.map(tab => {
          const active = filter === tab.id;
          return (
            <button key={tab.id} onClick={() => setFilter(tab.id)} style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              padding: '6px 14px', fontFamily: 'var(--font)', fontSize: '12px', letterSpacing: '0.04em',
              background: active ? 'var(--green-dim)' : 'transparent',
              color: active ? 'var(--green)' : 'var(--text-muted)',
              border: `1px solid ${active ? 'rgba(63,185,80,0.4)' : 'var(--border)'}`,
              borderRadius: '4px', cursor: 'pointer', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { if (!active) { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--text-dim)'; } }}
              onMouseLeave={e => { if (!active) { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)'; } }}
            >
              {tab.label}
              <span style={{ padding: '0 5px', background: active ? 'rgba(63,185,80,0.2)' : 'var(--surface2)', borderRadius: '20px', fontSize: '10px', color: active ? 'var(--green)' : 'var(--text-dim)' }}>
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {visible.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
      </div>
    </section>
  );
}
