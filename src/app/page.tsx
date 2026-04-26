'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const STACK_PRIMARY   = ['Node.js', 'TypeScript', 'AWS', 'PostgreSQL', 'Docker'];
const STACK_SECONDARY = ['React.js', 'Next.js', 'Tailwind CSS'];

const STATS = [
  '[ 04 · projects shipped this qtr ]',
  '[ 99.98% · uptime maintained ]',
  '[ NE India → ∞ ]',
];

const up = (delay: number) => ({
  initial:    { opacity: 0, y: 14 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.2, 0.8, 0.2, 1] as const },
});

export default function HeroPage() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      glow.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <>
      {/* ─── hero glow orb ─── */}
      <div ref={glowRef} aria-hidden="true" className="fixed z-0 pointer-events-none"
        style={{
          width: 900, height: 900,
          left: '50%', top: '45%',
          transform: 'translate(-50%,-50%)',
          background: 'radial-gradient(circle at center,var(--accent-soft) 0%,transparent 60%)',
          filter: 'blur(60px)',
          animation: 'glowPulse 9s ease-in-out infinite',
        }}
      />

      {/* ─── hero content ─── */}
      <section className="shell relative z-2 flex-1 flex flex-col justify-center w-full pt-6 pb-12 md:pt-0 md:pb-20">

        {/* meta row */}
        <motion.div {...up(0.35)}
          className="flex flex-wrap items-center gap-3 md:gap-3.5 mb-8 md:mb-11 font-mono text-mono-md text-muted tracking-[0.04em] uppercase"
        >
          <span className="shrink-0 w-14 h-px bg-accent" />
          <span>Software Engineer</span>
          <span style={{ color: 'var(--line)' }}>·</span>
          <span className="text-fg">Backend Focus</span>
          <span style={{ color: 'var(--line)' }}>·</span>
          <span>Est. 2021</span>
        </motion.div>

        {/* name */}
        <h1 className="font-display font-semibold text-fg mb-8"
            style={{ fontSize: 'var(--fs-display)', lineHeight: 0.88, letterSpacing: '-0.045em' }}>
          <span className="inline-block overflow-hidden align-top">
            <motion.span
              initial={{ y: '110%' }} animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
              className="inline-block"
            >
              <span className="text-accent" style={{ marginRight: '0.04em' }}>→</span>Roktim
            </motion.span>
          </span>
          <br />
          <span className="inline-block overflow-hidden align-top">
            <motion.span
              initial={{ y: '110%' }} animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.58, ease: [0.2, 0.8, 0.2, 1] }}
              className="inline-block"
            >
              Gogoi.
            </motion.span>
          </span>
        </h1>

        {/* tagline + stats */}
        <motion.div {...up(0.85)} className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-12 mt-4">
          <p className="font-display font-normal leading-[1.3] max-w-160 text-fg"
             style={{ fontSize: 'clamp(18px,2vw,28px)', letterSpacing: '-0.01em' }}>
            I architect the logic behind{' '}
            <span className="text-accent italic">great products.</span>
            <br />
            <span className="text-muted">
              Scalable backend systems, cloud infrastructure, and full‑stack web apps
              built with Node.js, TypeScript, and AWS.
            </span>
          </p>

          <div className="font-mono text-mono-md text-muted leading-[1.7] md:text-right tracking-[0.02em] shrink-0">
            {STATS.map(s => <div key={s}>{s}</div>)}
          </div>
        </motion.div>

        {/* stack pills */}
        <motion.div {...up(1.0)} className="mt-8 flex flex-col gap-2">
          <div className="flex flex-wrap gap-2">
            {STACK_PRIMARY.map(t => <span key={t} className="pill primary">{t}</span>)}
          </div>
          <div className="flex flex-wrap gap-2">
            {STACK_SECONDARY.map(t => <span key={t} className="pill">{t}</span>)}
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div {...up(1.15)} className="flex gap-3 mt-8 md:mt-11 flex-wrap">
          <Link href="/projects" className="btn btn-primary">
            View My Work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <a href="/Roktim_Software_Engineer.pdf" download className="btn btn-secondary">
            Download Resume
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 2V11M7 11L3 7M7 11L11 7M2 12H12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>

        {/* scroll hint */}
        {/* <motion.div {...up(1.35)}
          className="hidden md:flex items-center gap-2.5 mt-16 font-mono text-mono-sm text-muted tracking-[0.04em] uppercase"
        >
          <span>Scroll to explore</span>
          <span className="relative inline-block w-6 overflow-hidden" style={{ height: 1, background: 'var(--muted)' }}>
            <span className="absolute inset-0" style={{ background: 'var(--fg)', animation: 'scrollBar 2.4s ease-in-out infinite' }} />
          </span>
        </motion.div> */}
      </section>

    </>
  );
}
