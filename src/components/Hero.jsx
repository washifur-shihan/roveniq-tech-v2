import { ArrowRight, Sparkles, Zap, ShieldCheck, Bot, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="pill reveal">
            <Sparkles size={14} /> AI • Software • Automation
          </span>
          <h1 className="reveal">
            We transform <span className="grad-text">your business</span> through technology.
          </h1>
          <p className="lead reveal">
            Roveniq Technologies delivers AI solutions, custom software, business automation and cloud infrastructure.
            We turn ideas into real impact with cutting-edge technology.
          </p>
          <div className="hero-actions reveal">
            <a href="#contact" className="btn btn-primary btn-lg">
              Start your project <ArrowRight size={18} />
            </a>
            <a href="#work" className="btn btn-ghost btn-lg">
              See our work
            </a>
          </div>
          <div className="hero-trust reveal">
            <div className="avatars">
              {['#7c5cff', '#22d3ee', '#f472b6', '#facc15'].map((c, i) => (
                <span key={i} style={{ background: c }}>{['A', 'M', 'S', 'J'][i]}</span>
              ))}
            </div>
            <div>
              <div className="stars">★★★★★</div>
              <small>Trusted by 25+ founders & teams</small>
            </div>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="window">
            <div className="window-bar">
              <span /><span /><span />
              <div className="window-url">app.roven.it/dashboard</div>
            </div>
            <div className="window-body">
              <div className="dash-head">
                <div>
                  <small>Monthly revenue</small>
                  <strong>$248,930</strong>
                </div>
                <span className="badge-up"><TrendingUp size={14} /> +32.4%</span>
              </div>
              <svg className="chart" viewBox="0 0 300 110" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#7c5cff" stopOpacity="0.45" />
                    <stop offset="1" stopColor="#7c5cff" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#7c5cff" />
                    <stop offset="1" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
                <path d="M0,90 C30,85 45,70 70,72 C95,74 110,50 140,52 C170,54 180,35 210,30 C240,25 260,18 300,8 L300,110 L0,110 Z" fill="url(#area)" />
                <path className="chart-line" d="M0,90 C30,85 45,70 70,72 C95,74 110,50 140,52 C170,54 180,35 210,30 C240,25 260,18 300,8" fill="none" stroke="url(#line)" strokeWidth="3" />
              </svg>
              <div className="dash-bars">
                {[45, 70, 55, 85, 65, 95, 78].map((h, i) => (
                  <div key={i} className="bar" style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }} />
                ))}
              </div>
              <div className="dash-rows">
                <div className="dash-row"><span className="dot g" /> Deploy succeeded <em>2m ago</em></div>
                <div className="dash-row"><span className="dot p" /> AI agent resolved 312 tickets <em>today</em></div>
              </div>
            </div>
          </div>

          <div className="float-card fc-1">
            <div className="fc-icon"><Bot size={18} /></div>
            <div><strong>AI Assistant</strong><small>Live · 99.9% uptime</small></div>
          </div>
          <div className="float-card fc-2">
            <div className="fc-icon cyan"><Zap size={18} /></div>
            <div><strong>98 / 100</strong><small>Lighthouse score</small></div>
          </div>
          <div className="float-card fc-3">
            <div className="fc-icon pink"><ShieldCheck size={18} /></div>
            <div><strong>SOC 2 ready</strong><small>Secure by default</small></div>
          </div>
        </div>
      </div>
    </section>
  );
}
