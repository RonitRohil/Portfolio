import { useState, useEffect, useRef, useMemo } from 'react';
import { siteContent } from '../data/content';

const go = id => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 68, behavior: 'smooth' });
};

function buildItems() {
  const d = siteContent;
  return [
    { group: 'Navigate',  label: 'About',           icon: '→', action: () => go('about') },
    { group: 'Navigate',  label: 'Experience',       icon: '→', action: () => go('experience') },
    { group: 'Navigate',  label: 'Skills',           icon: '→', action: () => go('skills') },
    { group: 'Navigate',  label: 'Projects',         icon: '→', action: () => go('projects') },
    { group: 'Navigate',  label: 'Open Source',      icon: '→', action: () => go('open-source') },
    { group: 'Navigate',  label: 'Contact',          icon: '→', action: () => go('contact') },
    { group: 'Links',     label: 'Download Resume',  icon: '↓', action: () => window.open(d.resumeUrl, '_blank') },
    { group: 'Links',     label: 'GitHub',           icon: '↗', action: () => window.open('https://github.com/RonitRohil', '_blank') },
    { group: 'Links',     label: 'LinkedIn',         icon: '↗', action: () => window.open('https://www.linkedin.com/in/ronitjain0402/', '_blank') },
    { group: 'Links',     label: 'LeetCode',         icon: '↗', action: () => window.open('https://leetcode.com/ronitrohil/', '_blank') },
    { group: 'Links',     label: 'Send Email',       icon: '@', action: () => window.open('mailto:' + d.email) },
    ...d.projects.map(p => ({ group: 'Projects', label: p.title, icon: '▶', sub: p.status, action: () => go('projects') })),
    ...d.githubProjects.map(p => ({ group: 'Repos', label: p.title, icon: '⎇', sub: p.stack.slice(0, 2).join(' · '), action: () => window.open(p.url, '_blank') })),
  ];
}

export default function CommandPalette({ open, onClose }) {
  const [query, setQuery]       = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef                = useRef(null);
  const allItems                = useMemo(() => buildItems(), []);

  const filtered = query.trim()
    ? allItems.filter(it => it.label.toLowerCase().includes(query.toLowerCase()) || (it.sub || '').toLowerCase().includes(query.toLowerCase()))
    : allItems;

  const groups = filtered.reduce((acc, it) => {
    if (!acc[it.group]) acc[it.group] = [];
    acc[it.group].push(it);
    return acc;
  }, {});

  useEffect(() => {
    if (open) { setQuery(''); setSelected(0); setTimeout(() => inputRef.current?.focus(), 50); }
  }, [open]);
  useEffect(() => { setSelected(0); }, [query]);

  const execute = it => { it.action(); onClose(); };

  const handleKey = e => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelected(s => Math.min(s + 1, filtered.length - 1)); }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setSelected(s => Math.max(s - 1, 0)); }
    if (e.key === 'Enter' && filtered[selected]) execute(filtered[selected]);
    if (e.key === 'Escape') onClose();
  };

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.72)',
        zIndex: 500, display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        paddingTop: '16vh', backdropFilter: 'blur(5px)',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: '560px', margin: '0 20px',
          background: 'var(--surface)', border: '1px solid rgba(63,185,80,0.35)',
          borderRadius: '8px', overflow: 'hidden',
          boxShadow: '0 0 60px rgba(63,185,80,0.14), 0 24px 80px rgba(0,0,0,0.75)',
        }}
      >
        {/* Search bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 16px', borderBottom: '1px solid var(--border)' }}>
          <span style={{ color: 'var(--green)', fontFamily: 'var(--font)', fontSize: '15px', flexShrink: 0 }}>›</span>
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Type a command or search..."
            style={{ flex: 1, background: 'none', border: 'none', outline: 'none', color: 'var(--text)', fontFamily: 'var(--font)', fontSize: '13px', letterSpacing: '0.02em' }}
          />
          <kbd style={{ padding: '2px 7px', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '3px', fontSize: '10px', color: 'var(--text-dim)', fontFamily: 'var(--font)' }}>esc</kbd>
        </div>

        {/* Results */}
        <div style={{ maxHeight: '380px', overflowY: 'auto' }}>
          {filtered.length === 0 ? (
            <div style={{ padding: '28px', textAlign: 'center', fontFamily: 'var(--font)', fontSize: '12px', color: 'var(--text-dim)' }}>
              No results for "{query}"
            </div>
          ) : Object.entries(groups).map(([groupName, items]) => (
            <div key={groupName}>
              <div style={{ padding: '8px 16px 3px', fontSize: '10px', color: 'var(--text-dim)', fontFamily: 'var(--font)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {groupName}
              </div>
              {items.map(item => {
                const idx = filtered.indexOf(item);
                const active = idx === selected;
                return (
                  <div
                    key={item.label + groupName}
                    onClick={() => execute(item)}
                    onMouseEnter={() => setSelected(idx)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 16px',
                      cursor: 'pointer', background: active ? 'var(--green-dim)' : 'transparent',
                      borderLeft: `2px solid ${active ? 'var(--green)' : 'transparent'}`,
                      transition: 'background 0.1s',
                    }}
                  >
                    <span style={{ color: active ? 'var(--green)' : 'var(--text-dim)', fontFamily: 'var(--font)', fontSize: '12px', width: '14px', flexShrink: 0 }}>{item.icon}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: 'var(--font)', fontSize: '13px', color: active ? 'var(--text)' : 'var(--text-muted)' }}>{item.label}</div>
                      {item.sub && <div style={{ fontFamily: 'var(--font)', fontSize: '10px', color: 'var(--text-dim)', marginTop: '1px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.sub}</div>}
                    </div>
                    {active && <span style={{ fontSize: '11px', color: 'var(--green)', fontFamily: 'var(--font)', flexShrink: 0 }}>↵</span>}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ padding: '8px 16px', borderTop: '1px solid var(--border)', display: 'flex', gap: '16px', fontSize: '10px', color: 'var(--text-dim)', fontFamily: 'var(--font)' }}>
          {[['↑↓', 'navigate'], ['↵', 'select'], ['esc', 'close']].map(([k, l]) => (
            <span key={k}>
              <kbd style={{ padding: '1px 5px', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '2px', marginRight: '5px' }}>{k}</kbd>
              {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
