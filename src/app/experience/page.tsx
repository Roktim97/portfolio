'use client';

import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import CTAStrip from '../components/CTAStrip';

const up = (delay = 0) => ({
  initial:    { opacity: 0, y: 20 },
  whileInView:{ opacity: 1, y: 0 },
  viewport:   { once: true, margin: '-80px' },
  transition: { duration: 0.9, delay, ease: [0.2, 0.8, 0.2, 1] as const },
});

const ROLES = [
  {
    current: true,
    meta: ['Healthcare · HIPAA', 'Guwahati · IN'],
    company: 'TechVariable',
    role: 'Software Engineer',
    roleDetail: 'full stack, healthcare track',
    range: 'June 2025 – Present',
    rangeAccent: 'June 2025',
    duration: '11+ months',
    body: [
      'Building and maintaining <b>HIPAA-compliant healthcare applications</b> on a React + Node.js + TypeScript stack — shipping features that move sensitive clinical data across clients, providers, and back-office tooling without cutting corners on auditability.',
      'Owning <b>RESTful API integration</b> for cross-system healthcare data exchange, and embedded day-to-day in agile delivery — sprint planning, code review, and the slow, careful work of keeping production calm.',
    ],
    stack: ['React', 'Node.js', 'TypeScript', 'REST'],
  },
  {
    current: false,
    meta: ['3D · Visualization', 'Remote'],
    company: 'CG Viz Studio',
    role: 'Software Engineer',
    roleDetail: 'client portal & services',
    range: 'Jan 2025 – May 2025',
    rangeAccent: null,
    duration: '5 months',
    body: [
      'Built a <b>client portal in Next.js + TypeScript</b> for managing 3D assets — review flows, versioning, and a cleaner handoff between artists and stakeholders than a shared drive ever allowed.',
      'On the backend: services for <b>model data, authentication, and project workflows</b>, designed to scale alongside the studio\'s growing pipeline of long-running renders and heavy file uploads.',
    ],
    stack: ['Next.js', 'TypeScript', 'Node.js', 'Three.js'],
  },
  {
    current: false,
    meta: ['NGO · Social impact', 'First role'],
    company: 'Impact Weaver',
    role: 'Full Stack Developer',
    roleDetail: 'platform & APIs',
    range: 'June 2023 – Jan 2025',
    rangeAccent: null,
    duration: '1 yr 8 mo',
    body: [
      'Shipped <b>React components</b> for an NGO-facing platform — dashboards, reporting surfaces, and admin tooling built to be legible to non-technical program staff, not just engineers.',
      'Stood up a <b>Node.js + Express backend</b> with <b>MongoDB and PostgreSQL</b>, and authored the RESTful API layer that bound client work and partner integrations together.',
    ],
    stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
  },
];

function renderHTML(html: string) {
  return html
    .replace(/<b>/g, '<strong style="color:var(--fg);font-weight:500">')
    .replace(/<\/b>/g, '</strong>');
}

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="04 / Experience"
        title={<>A working<br />history<span className="text-accent">.</span></>}
        crumbs={['03 · positions', '2023 – present', 'full stack · backend focus']}
      />

      <main className="shell relative z-2 w-full pb-20">

        {/* intro */}
        <motion.div
          {...up(0.3)}
          className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-20 mb-14"
        >
          <h2
            className="font-display font-medium text-fg"
            style={{ fontSize: 'clamp(28px,4vw,52px)', lineHeight: 1, letterSpacing: '-0.035em' }}
          >
            Three years,<br />
            three <span className="text-accent italic" style={{ fontWeight: 400 }}>stacks.</span>
          </h2>
          <p className="text-muted self-end" style={{ fontSize: 'var(--fs-body-lg)', lineHeight: 1.6, maxWidth: '58ch' }}>
            From NGO platforms to 3D visualization portals to HIPAA-compliant healthcare
            tooling — each role added a new layer to how Roktim approaches reliability,
            data modeling, and the quiet work of keeping production systems well.
          </p>
        </motion.div>

        {/* timeline */}
        <div className="tl-line">
          {ROLES.map((role, i) => (
            <motion.article
              key={role.company}
              {...up(0.1 * i)}
              className={`tl-item${role.current ? ' current' : ''} grid grid-cols-1 md:grid-cols-[2.4fr_1fr] gap-8 md:gap-16 py-12${i > 0 ? ' border-t' : ''}`}
              style={i > 0 ? { borderColor: 'var(--line)' } : undefined}
            >
              {/* left: main content */}
              <div className="flex flex-col gap-5">
                {/* meta chips */}
                <div className="flex flex-wrap items-center gap-3 font-mono text-mono-xs tracking-widest uppercase" style={{ color: 'var(--muted)' }}>
                  {role.current && (
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                      style={{
                        color: 'var(--accent)',
                        border: '1px solid var(--accent-dim)',
                        background: 'var(--accent-soft)',
                        letterSpacing: '0.08em',
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)', boxShadow: '0 0 6px var(--accent)' }} />
                      Present
                    </span>
                  )}
                  {role.meta.map((m, j) => (
                    <span key={m}>
                      {j > 0 && <span className="mr-3" style={{ color: 'var(--muted-2)' }}>·</span>}
                      {m}
                    </span>
                  ))}
                </div>

                {/* company name */}
                <h2
                  className="font-display font-medium text-fg"
                  style={{ fontSize: 'clamp(36px,5vw,72px)', lineHeight: 0.95, letterSpacing: '-0.035em' }}
                >
                  {role.company}<span className="text-accent">.</span>
                </h2>

                {/* role */}
                <p className="font-display" style={{ fontSize: 18, color: 'var(--muted)', letterSpacing: '-0.01em' }}>
                  <strong className="text-fg font-medium">{role.role}</strong>
                  {' — '}{role.roleDetail}
                </p>

                {/* body paragraphs */}
                <div className="flex flex-col gap-3.5 mt-2" style={{ maxWidth: '62ch' }}>
                  {role.body.map((para, j) => (
                    <p
                      key={j}
                      style={{ fontSize: 'var(--fs-body-md)', lineHeight: 1.65, color: 'var(--muted)', maxWidth: 'none' }}
                      dangerouslySetInnerHTML={{ __html: renderHTML(para) }}
                    />
                  ))}
                </div>
              </div>

              {/* right: dates + stack */}
              <div className="flex flex-col gap-6 md:items-end md:text-right">
                <div className="font-mono text-mono-sm leading-[1.7] tracking-[0.02em]" style={{ color: 'var(--muted)' }}>
                  <span className="block font-medium mb-1" style={{ color: 'var(--fg)', fontSize: 13, letterSpacing: '0.04em' }}>
                    {role.rangeAccent
                      ? <><span className="text-accent">{role.rangeAccent}</span>{role.range.replace(role.rangeAccent, '')}</>
                      : role.range}
                  </span>
                  <span className="font-mono text-mono-xs tracking-widest uppercase" style={{ color: 'var(--muted-2)' }}>
                    {role.duration}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 md:justify-end">
                  {role.stack.map(s => (
                    <span key={s} className="pill">{s}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}

          {/* timeline cap */}
          <div
            className="relative pl-14 pt-7 font-mono text-mono-xs tracking-widest uppercase"
            style={{ color: 'var(--muted-2)' }}
          >
            <span
              className="absolute left-0.75 top-5.5 w-2.5 h-2.5 rotate-45"
              style={{ border: '1px solid var(--line-2)', background: 'var(--bg)' }}
            />
            ↑ start · 2023
          </div>
        </div>

        <CTAStrip
          heading={<>Want the <span className="text-accent italic" style={{ fontWeight: 400 }}>full résumé?</span></>}
          primary={{ label: 'Download Resume', href: '/Roktim_Software_Engineer.pdf', download: true, icon: 'download' }}
          secondary={{ label: 'Get in touch', href: '/contact', icon: 'arrow' }}
        />
      </main>
    </>
  );
}
