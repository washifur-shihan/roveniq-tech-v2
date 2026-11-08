import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Launch',
    price: '$2,900',
    note: 'one-time',
    desc: 'A stunning, high-performance website to establish your brand.',
    features: ['Up to 8 custom pages', 'Responsive, SEO-optimised build', 'CMS for easy editing', 'Analytics & contact forms', '30 days of support'],
  },
  {
    name: 'Growth',
    price: '$9,500',
    note: 'starting at',
    desc: 'An MVP web or mobile app to validate your idea and win users.',
    features: ['Product discovery & UI/UX design', 'Web app or cross-platform mobile app', 'Auth, payments & admin dashboard', 'One AI-powered feature included', 'Cloud deployment & CI/CD', '90 days of support'],
    popular: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    note: 'monthly retainer',
    desc: 'A dedicated product team for ongoing development and AI.',
    features: ['Dedicated engineers & designer', 'Custom software & AI agents', 'Priority SLA & 24/7 monitoring', 'Security & compliance reviews', 'Quarterly strategy sessions'],
  },
];

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Pricing</span>
          <h2>Transparent pricing, <span className="grad-text">no surprises</span></h2>
          <p>Fixed-price packages to get you started, or a dedicated team when you're ready to scale.</p>
        </div>
        <div className="pricing-grid">
          {plans.map((p, i) => (
            <div key={p.name} className={`card price-card reveal ${p.popular ? 'popular' : ''}`} style={{ transitionDelay: `${i * 100}ms` }}>
              {p.popular && <span className="popular-badge">Most popular</span>}
              <h3>{p.name}</h3>
              <p className="price-desc">{p.desc}</p>
              <div className="price">
                <small>{p.note}</small>
                <strong>{p.price}</strong>
              </div>
              <ul>
                {p.features.map((f) => (
                  <li key={f}><Check size={16} /> {f}</li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${p.popular ? 'btn-primary' : 'btn-ghost'} btn-block`}>
                Get started <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
