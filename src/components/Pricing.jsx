import { useState } from 'react';
import { Check, ArrowRight, Globe2, MapPin, CreditCard, Landmark, Smartphone, Wallet } from 'lucide-react';

const pricingByRegion = {
  intl: [
    {
      name: 'Launch',
      price: '$1,000',
      note: 'one-time · local starts at 10,000 BDT',
      desc: 'A stunning, high-performance website or web platform to establish your brand and convert visitors.',
      features: [
        'Up to 8 custom-designed pages',
        'Responsive, ultra-fast SEO build',
        'CMS & dynamic admin controls',
        'Analytics, leads & contact automation',
        '6 months free support & maintenance',
      ],
    },
    {
      name: 'Growth',
      price: '$2,500',
      note: 'starting at · MVP in 3–4 weeks',
      desc: 'A production-ready MVP web or mobile app with AI capabilities to launch fast and scale.',
      features: [
        'Product discovery & complete UI/UX design',
        'Full-stack web or Flutter mobile app',
        'Auth, Stripe/local payments & admin CRM',
        'Custom AI agent or RAG feature included',
        'Cloud deployment & CI/CD pipeline',
        '6 months free support & maintenance',
      ],
      popular: true,
    },
    {
      name: 'Scale',
      price: 'Custom',
      note: 'monthly retainer or post-6mo plan',
      desc: 'A dedicated engineering & AI team for enterprise systems, continuous shipping and long-term maintenance.',
      features: [
        'Dedicated senior engineers & designer',
        'Multi-agent AI, voice & custom SaaS',
        'Priority SLA & 24/7 cloud monitoring',
        'SOC2 / RBAC security & compliance',
        'Post-6-month maintenance & growth roadmap',
      ],
    },
  ],
  local: [
    {
      name: 'Launch (BD)',
      price: '10,000 BDT',
      note: 'starting at · for local businesses',
      desc: 'Professional, high-speed business website, portfolio or e-commerce storefront tailored for Bangladesh.',
      features: [
        'Custom modern responsive UI design',
        'SEO-ready & mobile-first performance',
        'Easy admin panel to manage content',
        'bKash, Nagad & local courier/form ready',
        'WhatsApp & Facebook Messenger integration',
        '6 months free support & maintenance',
      ],
    },
    {
      name: 'Growth MVP (BD)',
      price: '35,000 BDT',
      note: 'starting at · MVP in 3–4 weeks',
      desc: 'Complete custom software, ERP/CRM, or iOS & Android app for ambitious local startups and enterprises.',
      features: [
        'Full UI/UX design + Web or Flutter Mobile App',
        'bKash, SSLCommerz & bank payment gateway',
        'Custom Admin Dashboard, POS or CRM suite',
        'AI Chatbot / automated support integration',
        'Cloud hosting setup & staff training',
        '6 months free support & maintenance',
      ],
      popular: true,
    },
    {
      name: 'Scale & Maintenance',
      price: 'Custom',
      note: 'monthly plan · after 6 months free support',
      desc: 'Flexible ongoing maintenance plan or dedicated engineering team after your 6-month free support period.',
      features: [
        'Continued feature upgrades & server scaling',
        '24/7 uptime monitoring & daily backups',
        'Custom AI workflow & voice automation',
        'Dedicated account manager & priority support',
        'Flexible bKash or local bank billing',
      ],
    },
  ],
};

export default function Pricing() {
  const [region, setRegion] = useState('intl');
  const plans = pricingByRegion[region];

  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Pricing</span>
          <h2>Transparent pricing, <span className="grad-text">no surprises</span></h2>
          <p>
            Every launch includes <strong>6 months of free support & maintenance</strong>. Switch between International (USD) and Local Bangladesh (BDT) packages below.
          </p>

          <div className="pricing-region-toggle" role="tablist" aria-label="Select pricing currency">
            <button
              type="button"
              role="tab"
              aria-selected={region === 'intl'}
              className={region === 'intl' ? 'active' : ''}
              onClick={() => setRegion('intl')}
            >
              <Globe2 size={16} /> International (USD)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={region === 'local'}
              className={region === 'local' ? 'active' : ''}
              onClick={() => setRegion('local')}
            >
              <MapPin size={16} /> Local Clients (BDT · Starts 10,000৳)
            </button>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((p, i) => (
            <div key={p.name} className={`card price-card reveal visible ${p.popular ? 'popular' : ''}`} style={{ transitionDelay: `${i * 100}ms` }}>
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

        <div className="payment-methods-banner reveal">
          <div className="pm-banner-title">
            <strong>Flexible Global & Local Payment Methods</strong>
            <span>Milestone-based billing with official invoices. Local projects start at 10,000 BDT.</span>
          </div>
          <div className="pm-badges">
            <span className="pm-badge"><Smartphone size={15} /> bKash (Local)</span>
            <span className="pm-badge"><Landmark size={15} /> International & Local Bank Transfer</span>
            <span className="pm-badge"><CreditCard size={15} /> International Cards (Visa / Mastercard)</span>
            <span className="pm-badge"><Wallet size={15} /> Payoneer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
