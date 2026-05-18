import { useState, useEffect, useRef } from 'react';
import SectionHeader from './utils/SectionHeader';
import TermWindow from './utils/TermWindow';
import { siteContent } from '../data/content';

function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function SkillBar({ name, level, visible, delay = 0 }) {
  const widths = { proficient: 88, working: 62, learning: 34 };
  const w = widths[level] || 50;
  const color = level === 'proficient' ? 'var(--green)' : level === 'working' ? 'var(--blue)' : 'var(--orange)';
  return (
    <div style={{ padding: '7px 0', borderBottom: '1px solid rgba(48,54,61,0.35)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
        <span style={{ fontFamily: 'var(--font)', fontSize: '12px', color: 'var(--text)' }}>{name}</span>
        <span style={{ fontFamily: 'var(--font)', fontSize: '10px', color, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{level}</span>
      </div>
      <div style={{ height: '3px', background: 'var(--surface3)', borderRadius: '2px', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: visible ? `${w}%` : '0%', background: color, borderRadius: '2px', transition: `width 0.8s ease ${delay}s`, boxShadow: visible ? `0 0 6px ${color}50` : 'none' }} />
      </div>
    </div>
  );
}

function SkillGroup({ group, delay }) {
  const [ref, vis] = useReveal();
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(16px)', transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s` }}>
      <TermWindow title={`skills/${group.title.toLowerCase().replace(/[& ]+/g, '-')}.json`} glowColor="rgba(63,185,80,0.04)">
        <div style={{ padding: '14px 18px' }}>
          {group.items.map(([name, level], ii) => (
            <SkillBar key={name} name={name} level={level} visible={vis} delay={ii * 0.05} />
          ))}
        </div>
      </TermWindow>
    </div>
  );
}

export default function Skills() {
  const d = siteContent;
  return (
    <section id="skills" style={{ padding: '80px 32px', maxWidth: '1120px', margin: '0 auto' }}>
      <SectionHeader cmd="cat skills.json | jq ." title="Skills" subtitle="A backend-first toolkit with room to explore." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '16px' }}>
        {d.skillGroups.map((group, gi) => (
          <SkillGroup key={gi} group={group} delay={gi * 0.07} />
        ))}
      </div>
    </section>
  );
}
