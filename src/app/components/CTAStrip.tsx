'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface CTABtn {
  label: string;
  href: string;
  download?: boolean;
  icon?: 'arrow' | 'download';
}

interface CTAStripProps {
  heading: React.ReactNode;
  primary: CTABtn;
  secondary: CTABtn;
}

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M7 2V11M7 11L3 7M7 11L11 7M2 12H12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function CTAButton({ btn, variant }: { btn: CTABtn; variant: 'primary' | 'secondary' }) {
  const cls = `btn btn-${variant}`;
  const Icon = btn.icon === 'download' ? DownloadIcon : ArrowIcon;

  if (btn.download) {
    return (
      <a href={btn.href} download className={cls}>
        {btn.label}
        <Icon />
      </a>
    );
  }
  return (
    <Link href={btn.href} className={cls}>
      {btn.label}
      <Icon />
    </Link>
  );
}

export default function CTAStrip({ heading, primary, secondary }: CTAStripProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
      className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pt-16 pb-10 mt-20"
      style={{ borderTop: '1px solid var(--line)' }}
    >
      <h3
        className="font-display font-medium text-fg"
        style={{ fontSize: 'clamp(28px,4vw,56px)', letterSpacing: '-0.03em', lineHeight: 1, maxWidth: '14ch' }}
      >
        {heading}
      </h3>
      <div className="flex gap-3 flex-wrap">
        <CTAButton btn={primary} variant="primary" />
        <CTAButton btn={secondary} variant="secondary" />
      </div>
    </motion.section>
  );
}
