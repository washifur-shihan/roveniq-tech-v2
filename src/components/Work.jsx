import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Finlytics',
    category: 'Software',
    desc: 'Real-time analytics SaaS for fintech teams processing 2M+ transactions a day.',
    result: '+340% user growth',
    gradient: 'linear-gradient(135deg,#7c5cff,#3b82f6)',
    mock: 'dash',
  },
  {
    title: 'Medibook',
    category: 'Mobile',
    desc: 'Patient booking app for a 40-clinic healthcare network on iOS & Android.',
    result: '4.9★ App Store',
    gradient: 'linear-gradient(135deg,#22d3ee,#10b981)',
    mock: 'phone',
  },
  {
    title: 'Nova Support AI',
    category: 'AI',
    desc: 'LLM support agent trained on 10k docs, resolving 70% of tickets automatically.',
    result: '−62% support costs',
    gradient: 'linear-gradient(135deg,#f472b6,#7c5cff)',
    mock: 'chat',
  },
  {
    title: 'Urban Threads',
    category: 'Web',
    desc: 'Headless e-commerce store with sub-second page loads and a custom checkout.',
    result: '+85% conversion',
    gradient: 'linear-gradient(135deg,#f59e0b,#ef4444)',
    mock: 'shop',
  },
];

const filters = ['All', 'Software', 'Web', 'Mobile', 'AI'];

function Mock({ type }) {
  if (type === 'phone')
    return (
      <div className="mock-phone">
        <div className="mp-notch" />
        <div className="mp-line w60" /><div className="mp-line w40" />
        <div className="mp-card" /><div className="mp-card" /><div className="mp-card short" />
      </div>
    );
  if (type === 'chat')
    return (
      <div className="mock-chat">
        <div className="bubble left">How do I reset my API key?</div>
        <div className="bubble right">Go to Settings → API and click “Regenerate”. Want me to do it for you?</div>
        <div className="bubble left">Yes please 🙌</div>
      </div>
    );
  if (type === 'shop')
    return (
      <div className="mock-shop">
        {[0, 1, 2].map((i) => (
          <div key={i} className="ms-item"><div className="ms-img" /><div className="mp-line w60" /><div className="mp-line w40" /></div>
        ))}
      </div>
    );
  return (
    <div className="mock-dash">
      <div className="md-side" />
      <div className="md-main">
        <div className="md-kpis"><div /><div /><div /></div>
        <div className="md-chart">
          {[40, 65, 50, 80, 60, 90, 75, 95].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const [filter, setFilter] = useState('All');
  const shown = projects.filter((p) => filter === 'All' || p.category === filter);

  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Selected work</span>
          <h2>Products we're <span className="grad-text">proud of</span></h2>
          <p>A few recent launches and the results they delivered for our clients.</p>
        </div>
        <div className="filters reveal">
          {filters.map((f) => (
            <button key={f} className={filter === f ? 'active' : ''} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>
        <div className="work-grid">
          {shown.map((p) => (
            <article key={p.title} className="work-card">
              <div className="work-visual" style={{ background: p.gradient }}>
                <Mock type={p.mock} />
              </div>
              <div className="work-body">
                <div className="work-meta">
                  <span className="work-cat">{p.category}</span>
                  <span className="work-result">{p.result}</span>
                </div>
                <h3>{p.title} <ArrowUpRight size={18} /></h3>
                <p>{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
