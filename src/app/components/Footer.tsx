import Link from 'next/link';

const SOCIAL_LINKS = [
  { href: 'https://github.com/Roktim97',          label: 'github →' },
  { href: 'https://linkedin.com/in/roktim-gogoi', label: 'linkedin →' },
  { href: 'https://x.com/roktim97',               label: 'x →' },
];

export default function Footer() {
  return (
    <footer className="shell flex flex-col gap-4 md:flex-row md:items-center md:justify-between py-8 md:py-10 font-mono text-mono-sm text-muted tracking-mono uppercase border-t border-line">
      <span>© 2026 — R. Gogoi</span>
      <div className="flex gap-5 md:gap-6 items-center flex-wrap">
        {SOCIAL_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            {label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
