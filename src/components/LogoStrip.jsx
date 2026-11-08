const tech = [
  'React', 'Next.js', 'Node.js', 'Python', 'OpenAI', 'Claude', 'Flutter', 'Swift',
  'AWS', 'Google Cloud', 'PostgreSQL', 'Stripe', 'Kubernetes', 'TypeScript',
];

export default function LogoStrip() {
  return (
    <section className="logo-strip">
      <p className="container strip-label">Built with the tools world-class teams rely on</p>
      <div className="marquee">
        <div className="marquee-track">
          {[...tech, ...tech].map((t, i) => (
            <span key={i} className="marquee-item">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
