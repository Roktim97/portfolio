'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  crumbs: string[];
}

export default function PageHeader({ eyebrow, title, crumbs }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
      className="shell relative z-2 flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-12 mt-16 md:mt-20 mb-10 md:mb-14 pb-10 md:pb-14 w-full"
      style={{ borderBottom: '1px solid var(--line)' }}
    >
      <div>
        <div className="flex items-center gap-3 mb-5 font-mono text-mono-sm text-muted tracking-[0.08em] uppercase">
          <span className="w-7 h-px bg-accent shrink-0" />
          <span>{eyebrow}</span>
        </div>
        <h1
          className="font-display font-semibold text-fg"
          style={{ fontSize: 'var(--fs-h1)', lineHeight: 0.9, letterSpacing: '-0.045em' }}
        >
          {title}
        </h1>
      </div>

      <div className="font-mono text-mono-sm text-muted leading-[1.7] md:text-right tracking-[0.02em] shrink-0 pb-0 md:pb-3">
        {crumbs.map((line, i) => (
          <div key={i} style={i === 0 ? { color: 'var(--fg)', fontWeight: 500 } : undefined}>
            {line}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
