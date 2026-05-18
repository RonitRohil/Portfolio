import { useState, useEffect } from 'react';
import TermWindow from './utils/TermWindow';

const BOOT_LINES = [
  { text: 'RONIT JAIN PORTFOLIO  ——  v2.0.0',                                         type: 'title'   },
  { text: '═══════════════════════════════════════════════════════',                   type: 'divider' },
  { text: '[INIT]  Loading runtime environment...',                                    type: 'muted'   },
  { text: '[OK]    Node.js 20.x LTS',                                                  type: 'ok'      },
  { text: '[OK]    PostgreSQL · MySQL · MongoDB',                                      type: 'ok'      },
  { text: '[OK]    Redis session store',                                               type: 'ok'      },
  { text: '[OK]    Microsoft Azure  ·  AZ-900 certified',                             type: 'ok'      },
  { text: '[BOOT]  Mounting 10+ REST API endpoints...',                                type: 'blue'    },
  { text: '[BOOT]  JWT + CSRF authentication active',                                  type: 'blue'    },
  { text: '[WARN]  Redis: 28,233 TCP connections detected  ⚠',                        type: 'warn'    },
  { text: '[FIX]   sysctl tuning applied  →  35 connections. Crisis resolved.  ✓',   type: 'ok'      },
  { text: '[OK]    Bull queue workers: 8 online',                                      type: 'ok'      },
  { text: '═══════════════════════════════════════════════════════',                   type: 'divider' },
  { text: '[READY] Portfolio initialized. Welcome, guest.',                            type: 'ready'   },
];

const TYPE_COLOR = {
  title:   'var(--text)',
  divider: 'var(--border)',
  muted:   'var(--text-muted)',
  ok:      'var(--green)',
  blue:    'var(--blue)',
  warn:    'var(--yellow)',
  ready:   'var(--green)',
};

export default function BootSequence({ onComplete }) {
  const [lines, setLines]       = useState([]);
  const [progress, setProgress] = useState(0);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    const skipT = setTimeout(() => setShowSkip(true), 1000);
    return () => clearTimeout(skipT);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const BASE = 80, STEP = 175;
    BOOT_LINES.forEach((line, i) => {
      setTimeout(() => {
        if (cancelled) return;
        setLines(prev => [...prev, line]);
        setProgress(Math.round(((i + 1) / BOOT_LINES.length) * 100));
      }, BASE + i * STEP);
    });
    const total = BASE + (BOOT_LINES.length - 1) * STEP + 800;
    setTimeout(() => { if (!cancelled) onComplete(); }, total);
    return () => { cancelled = true; };
  }, [onComplete]);

  return (
    <>
      <div style={{ padding: '24px', width: '100%', maxWidth: '620px' }}>
        <TermWindow
          title="ronit-portfolio — bash"
          glowColor="rgba(63,185,80,0.18)"
          style={{ boxShadow: '0 0 80px rgba(63,185,80,0.12), 0 24px 80px rgba(0,0,0,0.7)' }}
        >
          <div style={{
            padding: '22px 24px', fontFamily: 'var(--font)',
            fontSize: '12.5px', lineHeight: '2', minHeight: '320px',
          }}>
            {lines.map((line, i) => (
              <div key={i} style={{
                color: TYPE_COLOR[line.type],
                fontWeight: line.type === 'title' ? 700 : 400,
                animation: 'bootFadeIn 0.15s ease-out',
                letterSpacing: line.type === 'title' ? '0.04em' : '0',
              }}>
                {line.text}
              </div>
            ))}
            {lines.length < BOOT_LINES.length && (
              <span style={{ color: 'var(--green)', animation: 'termBlink 1s step-end infinite' }}>█</span>
            )}
          </div>
          <div style={{ padding: '0 24px 20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--text-dim)', marginBottom: '6px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              <span>Initializing</span>
              <span>{progress}%</span>
            </div>
            <div style={{ height: '3px', background: 'var(--surface3)', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${progress}%`, background: 'var(--green)', boxShadow: '0 0 10px var(--green-glow)', transition: 'width 0.18s ease', borderRadius: '2px' }} />
            </div>
          </div>
        </TermWindow>
      </div>

      {showSkip && (
        <button
          onClick={onComplete}
          style={{
            position: 'fixed', bottom: '32px', right: '32px',
            padding: '7px 16px', background: 'transparent',
            border: '1px solid rgba(63,185,80,0.28)', borderRadius: '4px',
            color: 'rgba(63,185,80,0.55)', fontFamily: 'var(--font)', fontSize: '12px',
            letterSpacing: '0.06em', cursor: 'pointer', zIndex: 1001,
            animation: 'skipFadeIn 0.4s ease forwards',
            transition: 'border-color 0.2s, color 0.2s, background 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(63,185,80,0.65)';
            e.currentTarget.style.color = 'var(--green)';
            e.currentTarget.style.background = 'rgba(63,185,80,0.07)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(63,185,80,0.28)';
            e.currentTarget.style.color = 'rgba(63,185,80,0.55)';
            e.currentTarget.style.background = 'transparent';
          }}
        >
          Skip Intro →
        </button>
      )}
    </>
  );
}
