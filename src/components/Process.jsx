import { Search, PenTool, Rocket, LifeBuoy } from 'lucide-react';

const steps = [
  { icon: Search, title: 'Discover', text: 'We dig into your goals, users and constraints, then map a clear scope, timeline and budget.' },
  { icon: PenTool, title: 'Design', text: 'Wireframes and polished UI prototypes you can click through before a line of code is written.' },
  { icon: Rocket, title: 'Build & Launch', text: 'Agile two-week sprints, weekly demos, automated testing and a smooth production launch.' },
  { icon: LifeBuoy, title: 'Grow & Support', text: 'Monitoring, iteration and new features as your product and customer base grow.' },
];

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">How we work</span>
          <h2>A process built for <span className="grad-text">speed and clarity</span></h2>
          <p>No black boxes. You see progress every week and own everything we build.</p>
        </div>
        <div className="process-grid">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="process-step reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="step-num">0{i + 1}</div>
              <div className="step-icon"><Icon size={22} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
