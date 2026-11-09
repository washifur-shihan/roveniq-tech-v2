import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Roveniq Technologies engineered our clinical platform ahead of schedule with rock-solid reliability. They understood our medical workflows deeply and delivered a fast, secure system our doctors and patients rely on every day.',
    name: 'Omar Farooq',
    role: 'Engineer, NiHealth',
    color: '#2563eb',
  },
  {
    quote:
      'They built our complete auto repair & service management ecosystem from the ground up — online booking, service bay tracking, and automated invoicing. It cut our administrative workload by over 60% in the first month.',
    name: 'Mobassir Hossain',
    role: 'CEO, Radiant Auto Repairs',
    color: '#06b6d4',
  },
  {
    quote:
      'Collaborating from Japan with the Roveniq engineering team was effortless. Their technical architecture, 60 FPS cross-platform execution, and proactive communication exceeded our highest enterprise standards.',
    name: 'Nafiu Rahman',
    role: 'TU IT, Japan',
    color: '#8b5cf6',
  },
];

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Testimonials</span>
          <h2>Founders & leaders <span className="grad-text">trust our engineering</span></h2>
          <p>Real feedback from engineering leaders and executives across healthcare, automotive and enterprise IT.</p>
        </div>
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <figure key={t.name} className="card testi reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <Quote className="testi-quote" size={28} />
              <div className="stars">★★★★★</div>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <span className="avatar" style={{ background: t.color }}>
                  {t.name.split(' ').map((w) => w[0]).join('')}
                </span>
                <div>
                  <strong>{t.name}</strong>
                  <small>{t.role}</small>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
