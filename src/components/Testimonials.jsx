import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'Roven IT took our idea from a napkin sketch to a live SaaS in seven weeks. The code quality and communication were outstanding.',
    name: 'Sarah Mitchell',
    role: 'CEO, Finlytics',
    color: '#7c5cff',
  },
  {
    quote: 'Their AI support agent now handles most of our tickets. It paid for itself in the first month — easily the best investment we made this year.',
    name: 'David Chen',
    role: 'Head of Ops, Nova',
    color: '#22d3ee',
  },
  {
    quote: 'Beautiful design, blazing-fast site and our conversion rate nearly doubled. They genuinely care about business results, not just pixels.',
    name: 'Amira Hassan',
    role: 'Founder, Urban Threads',
    color: '#f472b6',
  },
];

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Testimonials</span>
          <h2>Founders <span className="grad-text">love working with us</span></h2>
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
                <div><strong>{t.name}</strong><small>{t.role}</small></div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
