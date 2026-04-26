'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '/',           label: 'Home' },
  { href: '/about',      label: 'About' },
  { href: '/projects',   label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact',    label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [time, setTime] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function tick() {
      const opts: Intl.DateTimeFormatOptions = {
        hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata',
      };
      setTime(new Date().toLocaleTimeString('en-GB', opts) + ' IST');
    }
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
        className="shell relative z-(--z-nav) flex items-center justify-between py-5 md:py-7"
      >
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-mono text-mono-lg tracking-mono text-fg no-underline"
        >
          <motion.span
            animate={{ opacity: [1, 0.55, 1], scale: [1, 0.85, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block shrink-0 w-2 h-2 rounded-(--r-sm) bg-accent shadow-accent-glow"
          />
          <span>RG</span>
          <span className="text-muted">/ portfolio · v2026</span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-1 p-1.5 border border-line rounded-full bg-white/1.5 backdrop-blur-sm">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'text-body-sm px-4 py-2 rounded-full transition-all duration-200',
                  isActive
                    ? 'text-fg bg-white/6'
                    : 'text-muted hover:text-fg hover:bg-white/4'
                )}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Desktop right: status + clock */}
        <div className="hidden md:flex items-center gap-4 font-mono text-mono-md text-muted">
          <span className="status-dot">Available for work</span>
          {time && <span>{time}</span>}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 text-muted"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-5 h-px bg-current origin-center"
          />
          <motion.span
            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-px bg-current"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-5 h-px bg-current origin-center"
          />
        </button>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-(--z-modal) md:hidden flex flex-col"
            style={{ background: 'var(--bg)' }}
          >
            {/* top bar mirrors the nav */}
            <div className="shell flex items-center justify-between py-5">
              <Link
                href="/"
                className="flex items-center gap-2.5 font-mono text-mono-lg tracking-mono text-fg no-underline"
              >
                <span className="inline-block shrink-0 w-2 h-2 rounded-(--r-sm) bg-accent" />
                <span>RG</span>
                <span className="text-muted">/ portfolio · v2026</span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex flex-col justify-center items-center gap-1.5 w-8 h-8 text-muted"
              >
                <motion.span
                  initial={{ rotate: 0, y: 0 }}
                  animate={{ rotate: 45, y: 6 }}
                  className="block w-5 h-px bg-current origin-center"
                />
                <span className="block w-5 h-px bg-current opacity-0" />
                <motion.span
                  initial={{ rotate: 0, y: 0 }}
                  animate={{ rotate: -45, y: -6 }}
                  className="block w-5 h-px bg-current origin-center"
                />
              </button>
            </div>

            {/* links */}
            <nav className="shell flex flex-col gap-1 mt-8">
              {NAV_LINKS.map(({ href, label }, i) => {
                const isActive = pathname === href;
                return (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={href}
                      className={cn(
                        'flex items-center gap-3 py-4 border-b font-display text-[clamp(28px,8vw,48px)] font-semibold leading-none tracking-tight transition-colors duration-200',
                        isActive
                          ? 'text-fg border-line-2'
                          : 'text-muted hover:text-fg border-line'
                      )}
                      style={{ letterSpacing: '-0.03em' }}
                    >
                      {isActive && <span className="text-accent text-[0.6em]">→</span>}
                      {label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* bottom status */}
            <div className="shell mt-auto pb-10 font-mono text-mono-sm text-muted tracking-[0.04em] uppercase">
              <span className="status-dot">Available for work</span>
              {time && <div className="mt-2">{time}</div>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
