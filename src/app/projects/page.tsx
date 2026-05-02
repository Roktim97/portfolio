'use client';

import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import CTAStrip from '../components/CTAStrip';

const up = (delay = 0) => ({
  initial:    { opacity: 0, y: 14 },
  whileInView:{ opacity: 1, y: 0 },
  viewport:   { once: true },
  transition: { duration: 0.9, delay, ease: [0.2, 0.8, 0.2, 1] as const },
});

const PROJECTS = [
  {
    num: '01 / 03',
    kicker: 'Healthcare · Telehealth',
    title: 'Tooth Truth',
    meta: ['Dental telehealth platform', 'HIPAA-aware', 'Role-based access'],
    pills: [
      { label: 'Node.js',       primary: true  },
      { label: 'TypeScript',    primary: true  },
      { label: 'Next.js',       primary: true  },
      { label: 'AWS',           primary: true  },
      { label: 'EventBridge',   primary: false },
      { label: 'Lambda',        primary: false },
      { label: 'S3',            primary: false },
      { label: 'Authorize.Net', primary: false },
    ],
    description: 'A <b>HIPAA-aware telehealth platform</b> connecting patients, dentists, and administrators through a single, auditable workflow. Built for regulated data handling from day one.',
    bullets: [
      'Role-based access: Patient, Dentist, Admin tiers with scoped permissions',
      'AWS S3 medical file management with short-lived pre-signed URLs',
      'Automated case lifecycle via EventBridge + Lambda orchestration',
      'Authorize.Net subscription & payout engine with provider settlements',
    ],
    year: '2024 · live',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    num: '02 / 03',
    kicker: 'E-commerce · Luxury',
    title: 'Magrabi',
    meta: ['Luxury eyewear e-commerce', 'Headless CMS', 'Pixel-perfect UI'],
    pills: [
      { label: 'Next.js',    primary: true  },
      { label: 'TypeScript', primary: true  },
      { label: 'Sanity',     primary: true  },
      { label: 'Saleor',     primary: true  },
      { label: 'Algolia',    primary: false },
      { label: 'Docker',     primary: false },
    ],
    description: 'A <b>high-end e-commerce platform</b> for a luxury eyewear brand — premium feel, fast catalog search, and a smooth checkout designed to hold conversion on expensive SKUs.',
    bullets: [
      'Pixel-perfect UI implementation from Figma across every breakpoint',
      'Optimized API performance via Next.js server actions & edge caching',
      'Instant catalog search powered by Algolia with faceted filters',
      'Containerized deploys for consistent staging & production parity',
    ],
    year: '2025 · live',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    num: '03 / 03',
    kicker: 'Marketplace · 3D',
    title: '3dimli.com',
    meta: ['3D model marketplace', 'Digital goods', 'Dual payment rails'],
    pills: [
      { label: 'Next.js',       primary: true  },
      { label: 'TypeScript',    primary: true  },
      { label: 'Node.js',       primary: true  },
      { label: 'PayPal',        primary: true  },
      { label: 'Lemon Squeezy', primary: false },
      { label: 'REST',          primary: false },
    ],
    description: 'A <b>marketplace for buying and selling 3D models</b> with a dedicated billing service, payout pipelines, and clean REST APIs for asset management at scale.',
    bullets: [
      'Full PayPal integration: orders, captures, refunds, and seller payouts',
      'Dedicated billing server isolating payment concerns from the app',
      'RESTful APIs for asset upload, previews, licensing, and downloads',
      'Lemon Squeezy as a second checkout rail for international buyers',
    ],
    year: '2024 · live',
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="03 / Projects"
        title={<>Selected<br />work<span className="text-accent">.</span></>}
        crumbs={['03 · case studies', '2023 – 2026', 'full stack · backend focus']}
      />

      <main className="shell relative z-2 w-full pb-20">

        {/* index bar — desktop only */}
        <motion.div
          {...up(0.35)}
          className="hidden md:grid gap-8 py-3.5 font-mono text-mono-xs text-muted tracking-widest uppercase"
          style={{
            gridTemplateColumns: '60px 1.1fr 1fr 120px',
            borderBottom: '1px solid var(--line)',
          }}
        >
          <span>→</span>
          <span>Project · Stack</span>
          <span>Overview</span>
          <span className="text-right">Links</span>
        </motion.div>

        {/* project list */}
        <section>
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.num}
              {...up(0.1 * i)}
              className="project-card grid grid-cols-1 md:grid-cols-[60px_1.1fr_1fr_120px] gap-5 md:gap-8 py-10 md:py-12"
              style={{ borderBottom: '1px solid var(--line)' }}
            >
              {/* number */}
              <div
                className="project-num font-mono text-mono-xs tracking-widest pt-1.5 transition-colors duration-300"
                style={{ color: 'var(--muted)' }}
              >
                {p.num}
              </div>

              {/* main: title + pills */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-mono-xs tracking-[0.08em] uppercase" style={{ color: 'var(--muted)' }}>
                    {p.kicker}
                  </span>
                  <h2
                    className="project-title font-display font-medium text-fg transition-colors duration-300"
                    style={{ fontSize: 'clamp(32px,4vw,52px)', lineHeight: 1, letterSpacing: '-0.035em' }}
                  >
                    {p.title}<span className="text-accent">.</span>
                  </h2>
                  <div className="flex flex-wrap gap-3 font-mono text-mono-xs tracking-[0.05em]" style={{ color: 'var(--muted)', marginTop: 4 }}>
                    {p.meta.map((m, j) => (
                      <span key={m}>
                        {j > 0 && <span className="mr-3" style={{ color: 'var(--muted-2)' }}>·</span>}
                        {j === 0 ? <strong style={{ color: 'var(--fg)', fontWeight: 500 }}>{m}</strong> : m}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {p.pills.map(pill => (
                    <span key={pill.label} className={`pill${pill.primary ? ' primary' : ''}`}>
                      {pill.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* description */}
              <div className="flex flex-col gap-4" style={{ maxWidth: '52ch' }}>
                <p
                  style={{ fontSize: 'var(--fs-body-md)', lineHeight: 1.6, color: 'var(--muted)', maxWidth: 'none' }}
                  dangerouslySetInnerHTML={{ __html: p.description.replace('<b>', '<strong style="color:var(--fg);font-weight:500">').replace('</b>', '</strong>') }}
                />
                <ul className="flex flex-col gap-2">
                  {p.bullets.map(b => (
                    <li
                      key={b}
                      className="relative pl-5 font-display"
                      style={{ fontSize: 'var(--fs-body-sm)', lineHeight: 1.5, color: 'var(--muted)' }}
                    >
                      <span
                        className="absolute left-0 top-2.25 w-2 h-px"
                        style={{ background: 'var(--accent)' }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* actions */}
              <div className="flex flex-row md:flex-col justify-between md:justify-between md:items-end gap-4 pt-1">
                <div className="view-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex md:flex-col gap-3 md:gap-2.5 md:items-end font-mono text-mono-xs tracking-widest uppercase">
                  <a
                    href={p.liveUrl}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 transition-colors duration-200"
                    style={{ color: 'var(--muted)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                  >
                    <span className="w-1 h-1 rounded-full" style={{ background: 'currentColor' }} />
                    View Project
                  </a>
                  <a
                    href={p.githubUrl}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 transition-colors duration-200"
                    style={{ color: 'var(--muted)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                  >
                    <span className="w-1 h-1 rounded-full" style={{ background: 'currentColor' }} />
                    GitHub
                  </a>
                  <div className="font-mono text-mono-xs tracking-widest mt-1" style={{ color: 'var(--muted-2)' }}>
                    {p.year}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        <CTAStrip
          heading={<>Got a project <span className="text-accent italic" style={{ fontWeight: 400 }}>in mind?</span></>}
          primary={{ label: 'Start a conversation', href: '/contact', icon: 'arrow' }}
          secondary={{ label: 'See full archive', href: '#', icon: 'arrow' }}
        />
      </main>
    </>
  );
}
