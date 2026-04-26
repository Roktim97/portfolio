const NOISE_SVG = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`;

export default function PageBackground() {
  return (
    <>
      {/* animated grid */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right,var(--line) 1px,transparent 1px),' +
            'linear-gradient(to bottom,var(--line) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
          animation: 'gridDrift 60s linear infinite',
        }}
      />

      {/* noise overlay */}
      <div
        aria-hidden="true"
        className="fixed z-1 pointer-events-none mix-blend-overlay"
        style={{
          inset: '-50%',
          opacity: 0.04,
          backgroundImage: NOISE_SVG,
          animation: 'noiseShift 8s steps(8) infinite',
        }}
      />
    </>
  );
}
