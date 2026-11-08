import { Code2, Smartphone, BrainCircuit, Cloud, Palette, ArrowUpRight, Zap } from 'lucide-react';

const services = [
  {
    icon: BrainCircuit,
    title: 'AI Solutions',
    text: 'Intelligent chatbots, AI agents, document automation and machine learning models that transform your operations.',
    tags: ['LLMs', 'ML', 'RAG'],
    color: 'violet',
    featured: true,
  },
  {
    icon: Code2,
    title: 'Software Development',
    text: 'Custom enterprise software, SaaS platforms, internal tools and APIs built to scale.',
    tags: ['SaaS', 'APIs', 'Web Apps'],
    color: 'cyan',
    featured: true,
  },
  {
    icon: Zap,
    title: 'Business Automation',
    text: 'Workflow automation, process optimization and intelligent systems that eliminate repetitive tasks.',
    tags: ['Workflows', 'Integration', 'RPA'],
    color: 'violet',
  },
  {
    icon: Cloud,
    title: 'Web & Cloud Solutions',
    text: 'High-performance websites, cloud infrastructure and DevOps on AWS, GCP or Azure.',
    tags: ['Cloud', 'CI/CD', 'Hosting'],
    color: 'cyan',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    text: 'Cross-platform iOS and Android apps that deliver native performance from one codebase.',
    tags: ['iOS', 'Android', 'Flutter'],
    color: 'pink',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    text: 'User-centered design, brand identities and interfaces that users love.',
    tags: ['Figma', 'Design Systems'],
    color: 'pink',
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">What we do</span>
          <h2>Everything you need to <span className="grad-text">launch and scale</span></h2>
          <p>One partner for your entire digital stack — from the first sketch to millions of users.</p>
        </div>
        <div className="services-grid">
          {services.map(({ icon: Icon, title, text, tags, color, featured }, i) => (
            <article
              key={title}
              className={`card service-card reveal ${featured ? 'featured' : ''}`}
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
                e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
              }}
            >
              <div className={`icon-box ${color}`}><Icon size={24} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="tags">
                {tags.map((t) => <span key={t}>{t}</span>)}
              </div>
              <a href="#contact" className="card-link">
                Learn more <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
