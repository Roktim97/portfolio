'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import CTAStrip from '../components/CTAStrip';

const up = (delay = 0) => ({
  initial:    { opacity: 0, y: 14 },
  whileInView:{ opacity: 1, y: 0 },
  viewport:   { once: true },
  transition: { duration: 0.9, delay, ease: [0.2, 0.8, 0.2, 1] as const },
});

const SKILL_GROUPS = [
  {
    num: '01', name: 'Frontend', meta: '7 entries · daily',
    pills: [
      { label: 'React',         primary: true  },
      { label: 'Next.js',       primary: true  },
      { label: 'TypeScript',    primary: true  },
      { label: 'Tailwind CSS',  primary: false },
      { label: 'Framer Motion', primary: false },
      { label: 'Zustand',       primary: false },
    ],
  },
  {
    num: '02', name: 'Backend', meta: '7 entries · daily',
    pills: [
      { label: 'Node.js',     primary: true  },
      { label: 'Express',     primary: true  },
      { label: 'NestJS',      primary: true  },
      { label: 'GraphQL',     primary: false },
      { label: 'REST',        primary: false },
      { label: 'WebSockets',  primary: false },
      { label: 'Python',      primary: false },
      { label: 'Fast API',      primary: false },
    ],
  },
  {
    num: '03', name: 'Cloud (AWS)', meta: '6 entries · ongoing',
    pills: [
      { label: 'EC2',         primary: true  },
      { label: 'Lambda',      primary: true  },
      { label: 'S3',          primary: true  },
      { label: 'RDS',         primary: false },
      { label: 'CloudFront',  primary: false },
      { label: 'API Gateway', primary: false },
    ],
  },
  {
    num: '04', name: 'Databases', meta: '4 entries · production',
    pills: [
      { label: 'PostgreSQL', primary: true  },
      { label: 'MongoDB',    primary: true  },
      { label: 'Redis',      primary: false },
      { label: 'Prisma',     primary: false },
    ],
  },
  {
    num: '05', name: 'Tools', meta: '4 entries · workflow',
    pills: [
      { label: 'Git',            primary: true  },
      { label: 'Docker',         primary: true  },
      { label: 'GitHub Actions', primary: false },
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="02 / About"
        title={<>The human<br />behind the <span className="text-accent">code.</span></>}
        crumbs={['Roktim Gogoi', 'Guwahati, Assam · IN', '3+ yrs · Full Stack']}
      />

      {/* ── main content ── */}
      <main className="shell relative z-2 w-full pb-20">

        {/* ── bio split ── */}
        <motion.section
          {...up(0.4)}
          className="grid grid-cols-1 md:grid-cols-[1fr_1.25fr] gap-10 md:gap-20 py-4 pb-20 md:pb-24"
        >
          {/* portrait */}
          <div className="relative overflow-hidden"
               style={{ aspectRatio: '4 / 5', border: '1px solid var(--line)' }}>
            <Image
              src="/portrait.jpg"
              alt="Roktim Gogoi"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
            {/* gradient fade at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-32 z-10"
                 style={{ background: 'linear-gradient(to top,rgba(10,10,11,0.75) 0%,transparent 100%)' }} />
            {/* corner accents */}
            {(['tl','tr','bl','br'] as const).map(pos => (
              <span key={pos} className="absolute w-4.5 h-4.5 z-20" style={{
                border:       '1px solid var(--accent)',
                top:          pos.startsWith('t') ? 12 : undefined,
                bottom:       pos.startsWith('b') ? 12 : undefined,
                left:         pos.endsWith('l')   ? 12 : undefined,
                right:        pos.endsWith('r')   ? 12 : undefined,
                borderRight:  pos.endsWith('l')   ? 'none' : undefined,
                borderLeft:   pos.endsWith('r')   ? 'none' : undefined,
                borderBottom: pos.startsWith('t') ? 'none' : undefined,
                borderTop:    pos.startsWith('b') ? 'none' : undefined,
              }} />
            ))}
            {/* bottom label */}
            <div className="absolute bottom-5 left-5 right-5 z-20 flex justify-between items-end font-mono text-mono-xs tracking-[0.05em] uppercase"
                 style={{ color: 'var(--muted)' }}>
              <div>
                <div style={{ color: 'var(--muted-2)', marginBottom: 4 }}>01 / img</div>
                <span style={{ color: 'var(--fg)', fontWeight: 500 }}>R. GOGOI</span>
              </div>
              <div className="text-right">
                <div style={{ color: 'var(--muted-2)', marginBottom: 4 }}>Shot in</div>
                <span style={{ color: 'var(--fg)', fontWeight: 500 }}>Guwahati · 2026</span>
              </div>
            </div>
          </div>

          {/* bio text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-7 font-mono text-mono-xs tracking-[0.08em] uppercase"
                 style={{ color: 'var(--muted)' }}>
              <span className="w-6 h-px shrink-0" style={{ background: 'var(--muted)' }} />
              Introduction
            </div>

            <p className="font-display font-normal leading-tight mb-8"
               style={{ fontSize: 'clamp(22px,2.4vw,34px)', letterSpacing: '-0.015em', color: 'var(--fg)', maxWidth: 'none' }}>
              A <span className="text-accent italic">Full Stack Software Engineer</span>{' '}
              based in Assam, India —{' '}
              <span className="text-muted">shipping production‑grade web applications that hold up under real traffic.</span>
            </p>

            <p className="text-muted mb-5"
               style={{ fontSize: 'var(--fs-body-lg)', lineHeight: 'var(--lh-relaxed)', maxWidth: '62ch' }}>
              For the last <strong className="text-fg font-medium">three‑plus years</strong>, Roktim has designed
              and built end‑to‑end systems spanning patient‑facing healthcare platforms, interactive 3D visualization
              tools, and lean, high‑impact software for NGOs. The work tends to be quiet: clean APIs, measured
              latency, thoughtful data models — the kind of infrastructure users never have to think about.
            </p>
            <p className="text-muted"
               style={{ fontSize: 'var(--fs-body-lg)', lineHeight: 'var(--lh-relaxed)', maxWidth: '62ch' }}>
              He specializes in <strong className="text-fg font-medium">React</strong>,{' '}
              <strong className="text-fg font-medium">Next.js</strong>,{' '}
              <strong className="text-fg font-medium">Node.js</strong>, and{' '}
              <strong className="text-fg font-medium">TypeScript</strong>, with a backend bias and a soft spot
              for well‑drawn interfaces. Off‑screen: trail walks in the Northeast, longform writing, and the
              occasional open‑source drive‑by.
            </p>

            {/* facts */}
            <div className="grid grid-cols-3 mt-10" style={{ borderTop: '1px solid var(--line)' }}>
              {[
                { k: 'Experience', v: '3+',     sub: 'years'        },
                { k: 'Based in',   v: 'Assam',  sub: 'IN'           },
                { k: 'Focus',      v: 'Backend', sub: '/ Full Stack' },
              ].map(({ k, v, sub }, i) => (
                <div key={k} className="pt-6 pb-1"
                     style={i > 0
                       ? { paddingLeft: 28, borderLeft: '1px solid var(--line)' }
                       : { paddingRight: 20 }}>
                  <div className="font-mono text-mono-xs tracking-widest uppercase mb-2.5"
                       style={{ color: 'var(--muted)' }}>{k}</div>
                  <div className="font-display font-medium text-fg"
                       style={{ fontSize: 22, letterSpacing: '-0.02em' }}>
                    {v}
                    <span className="font-normal ml-1.5" style={{ fontSize: 13, color: 'var(--muted)' }}>{sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── skills ── */}
        <motion.section {...up(0.3)} className="pb-20">
          {/* divider */}
          <div className="flex items-center gap-5 mb-12 font-mono text-mono-xs tracking-widest uppercase">
            <span className="text-accent">03</span>
            <span className="font-medium text-fg">Stack &amp; tooling</span>
            <span className="flex-1 h-px" style={{ background: 'var(--line)' }} />
            <span className="text-muted hidden md:block">5 categories · 28 entries</span>
          </div>

          {/* intro */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-5 md:gap-20 mb-16">
            <h2 className="font-display font-medium text-fg"
                style={{ fontSize: 'clamp(28px,4.5vw,64px)', lineHeight: 1, letterSpacing: '-0.035em' }}>
              What I build with<br />day to day.
            </h2>
            <p className="text-muted self-end"
               style={{ fontSize: 'var(--fs-body-lg)', lineHeight: 1.6, maxWidth: '58ch' }}>
              A working set, not a trophy case. These are the tools Roktim reaches for when shipping real
              software — chosen because they hold up, compose well, and stay out of the way. Updated as the
              work evolves.
            </p>
          </div>

          {/* groups */}
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.num}
              {...up(0.08 * i)}
              className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-5 md:gap-16 py-9"
              style={{
                borderTop:    '1px solid var(--line)',
                borderBottom: i === SKILL_GROUPS.length - 1 ? '1px solid var(--line)' : undefined,
              }}
            >
              <div className="flex flex-col gap-1.5 pt-1">
                <span className="font-mono text-mono-xs tracking-widest" style={{ color: 'var(--muted)' }}>
                  {group.num} →
                </span>
                <span className="font-display font-medium text-fg"
                      style={{ fontSize: 24, letterSpacing: '-0.02em' }}>
                  {group.name}
                </span>
                <span className="font-mono text-mono-xs tracking-[0.08em] uppercase mt-2"
                      style={{ color: 'var(--muted-2)' }}>
                  {group.meta}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 md:pt-1">
                {group.pills.map(p => (
                  <span key={p.label} className={`pill${p.primary ? ' primary' : ''}`}>
                    {p.label}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.section>

        <CTAStrip
          heading={<>Have something <span className="text-accent italic" style={{ fontWeight: 400 }}>to build?</span></>}
          primary={{ label: 'View My Work', href: '/projects', icon: 'arrow' }}
          secondary={{ label: 'Get in touch', href: '/contact', icon: 'arrow' }}
        />

      </main>
    </>
  );
}
