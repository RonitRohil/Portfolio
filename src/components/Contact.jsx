import { useState } from 'react';
import Reveal from './Reveal';
import SectionHeader from './utils/SectionHeader';
import TermWindow from './utils/TermWindow';
import { siteContent } from '../data/content';

const fieldStyle = {
  width: '100%', background: 'var(--surface)', border: '1px solid var(--border)',
  borderRadius: '4px', padding: '9px 12px', fontFamily: 'var(--font)', fontSize: '13px',
  color: 'var(--text)', outline: 'none', transition: 'border-color 0.2s ease',
  boxSizing: 'border-box',
};
const labelStyle = {
  fontFamily: 'var(--font)', fontSize: '11px', color: 'var(--text-dim)',
  letterSpacing: '0.08em', marginBottom: '6px', display: 'block',
};

export default function Contact() {
  const d = siteContent;
  const [form, setForm] = useState({ name: '', email: '', subject: d.contactSubjects[0], message: '' });
  const [sent, setSent] = useState(false);

  const set = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  return (
    <section id="contact" style={{ padding: '80px 32px', maxWidth: '1120px', margin: '0 auto' }}>
      <SectionHeader cmd="./connect.sh --interactive" title="Contact" subtitle={d.contactIntro} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
        {/* Form */}
        <Reveal>
          <TermWindow title="connect.sh" glowColor="rgba(63,185,80,0.07)">
            <div style={{ padding: '24px' }}>
              {sent ? (
                <div style={{ padding: '32px 0', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font)', fontSize: '13px', color: 'var(--green)', marginBottom: '8px' }}>
                    [OK] Message sent successfully. ✓
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>I'll get back to you soon.</div>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ color: 'var(--green)', fontFamily: 'var(--font)', fontSize: '12px' }}>$</span>
                    <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font)', fontSize: '12px' }}>./connect.sh</span>
                    {form.name && <span style={{ color: 'var(--text-dim)', fontFamily: 'var(--font)', fontSize: '12px' }}>--from "{form.name}"</span>}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={labelStyle}>--name</label>
                      <input
                        value={form.name} onChange={e => set('name', e.target.value)}
                        placeholder="Your name" required style={fieldStyle}
                        onFocus={e => { e.target.style.borderColor = 'rgba(63,185,80,0.5)'; }}
                        onBlur={e => { e.target.style.borderColor = 'var(--border)'; }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>--email</label>
                      <input
                        type="email" value={form.email} onChange={e => set('email', e.target.value)}
                        placeholder="your@email.com" required style={fieldStyle}
                        onFocus={e => { e.target.style.borderColor = 'rgba(63,185,80,0.5)'; }}
                        onBlur={e => { e.target.style.borderColor = 'var(--border)'; }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>--subject</label>
                    <select
                      value={form.subject} onChange={e => set('subject', e.target.value)}
                      style={{ ...fieldStyle, cursor: 'pointer', appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23768390' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                    >
                      {d.contactSubjects.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>--message</label>
                    <textarea
                      value={form.message} onChange={e => set('message', e.target.value)}
                      placeholder="What's on your mind?" required rows={5}
                      style={{ ...fieldStyle, resize: 'vertical', lineHeight: '1.6' }}
                      onFocus={e => { e.target.style.borderColor = 'rgba(63,185,80,0.5)'; }}
                      onBlur={e => { e.target.style.borderColor = 'var(--border)'; }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{ width: '100%', padding: '11px', background: 'var(--green)', color: '#080C10', border: 'none', borderRadius: '4px', fontFamily: 'var(--font)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.06em', cursor: 'pointer', transition: 'opacity 0.2s, transform 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    $ send --message
                  </button>
                </form>
              )}
            </div>
          </TermWindow>
        </Reveal>

        {/* Info */}
        <Reveal delay={0.1}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { label: '$ echo $EMAIL',   value: d.email,           href: `mailto:${d.email}`,                               color: 'var(--blue)'   },
              { label: '$ open GitHub',   value: 'RonitRohil',      href: 'https://github.com/RonitRohil',                   color: 'var(--orange)' },
              { label: '$ open LinkedIn', value: 'ronitjain0402',   href: 'https://www.linkedin.com/in/ronitjain0402/',      color: 'var(--blue)'   },
              { label: '$ open LeetCode', value: 'ronitrohil',      href: 'https://leetcode.com/ronitrohil/',                color: 'var(--yellow)' },
              { label: '$ open Topmate',  value: 'ronit_jain04',    href: 'https://topmate.io/ronit_jain04',                 color: 'var(--green)'  },
            ].map(item => (
              <a
                key={item.label} href={item.href} target="_blank" rel="noreferrer"
                style={{ textDecoration: 'none', display: 'block', padding: '14px 16px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '6px', transition: 'all 0.2s ease' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = item.color; e.currentTarget.style.background = 'var(--surface2)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--surface)'; }}
              >
                <div style={{ fontFamily: 'var(--font)', fontSize: '11px', color: 'var(--text-dim)', marginBottom: '4px', letterSpacing: '0.06em' }}>{item.label}</div>
                <div style={{ fontFamily: 'var(--font)', fontSize: '13px', color: item.color }}>{item.value}</div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
