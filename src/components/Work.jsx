import { useEffect, useState } from 'react';
import { ArrowUpRight, X, Sparkles, CheckCircle2, Layers, Cpu, ShieldCheck, ArrowRight, ExternalLink, PlayCircle } from 'lucide-react';

const projects = [
  {
    title: 'Autoforge AI',
    subtitle: 'Multi-Agent Code Generation, Self-Repair & Research Engine',
    category: 'AI',
    desc: 'Multi-agent backend engine and web interface for generating project boilerplates, running automation scripts, and compiling PDF research reports from text prompts.',
    result: '6+ LLM Failover · Self-Repairing',
    gradient: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 55%, #10b981 100%)',
    mock: 'autoforge',
    liveUrl: 'https://multi-agent-autoforge-ai.onrender.com/',
    videoUrl: '/autoforge-ai-demo.mov',
    stack: [
      'Python',
      'FastAPI',
      'Vanilla JS',
      'Gemini / OpenAI / Claude',
      'Groq / Mistral / NVIDIA NIM',
      'Tavily Web Search',
      'FPDF / ReportLab',
    ],
    challenge:
      'Autoforge AI takes a natural-language prompt, breaks it down into tasks, plans the folder structure, and routes generation across available LLM provider keys. Once code is generated, it writes files to generated_projects/, validates structure, runs a startup check with up to 3 automatic repair attempts if a script crashes, and packages everything into a downloadable .zip archive.',
    solution:
      'Built with FastAPI, Python, and a lightweight vanilla JS frontend served at / with three views: Pipeline runner, direct chat, and an archive of generated projects. Includes a local PreviewAgent that spins up generated Node/Express, static HTML, or Python projects on a free localhost port, plus an automated PDF research report pipeline.',
    results: [
      '🔀 Multi-Provider Routing & Failover: Supports Gemini (default primary), Groq / Grok (xAI), Mistral, OpenAI, Claude & NVIDIA NIM with automatic ProviderFactory failover.',
      '🛠️ Validation & Self-Repair: ProjectValidator and RuntimeTester check entry points (app.py, main.py, server.js, index.html) and feed tracebacks to AIRepairAgent.',
      '🖥️ Live Preview Server: Starts and stops local preview servers for generated Node.js, static HTML, or Python apps directly from the UI and exports .zip bundles.',
      '📄 PDF Report Pipeline: Uses Tavily web search and FPDF / ReportLab to compile deep research prompts into downloadable PDF reports.',
    ],
  },
  {
    title: 'Dhalif Support AI',
    subtitle: 'Autonomous Customer Operations & RAG Agent',
    category: 'AI',
    desc: 'LLM support agent trained on 10k+ product docs and past tickets, resolving 70% of customer inquiries automatically.',
    result: '−62% support costs',
    gradient: 'linear-gradient(135deg, #f472b6, #7c5cff)',
    mock: 'chat',
    videoUrl: '/dhilaf-ai-demo.mp4',
    stack: ['OpenAI GPT-4o', 'LangChain', 'Pinecone', 'Python FastAPI', 'React', 'PostgreSQL'],
    challenge:
      'Scaling customer support across global time zones created a 14-hour average ticket backlog and ballooning operational overhead.',
    solution:
      'Built a context-aware RAG support agent indexed on 10,000+ help articles and historical resolutions, capable of executing live account actions via secure API tool-calling and seamless human handoff.',
    results: [
      '🤖 70% of incoming customer tickets resolved autonomously end-to-end.',
      '💰 62% reduction in monthly customer support operating costs.',
      '⚡ Instant 1.4-second first-response time 24/7 across 12 languages.',
      '📈 96% customer satisfaction score on AI-resolved conversations.',
    ],
  },
  {
    title: 'Universal University App System',
    subtitle: 'Unified Campus, CRM & Recruiter Suite',
    category: 'Mobile',
    desc: 'Single-codebase Flutter & Web campus ecosystem uniting Admissions CRM, RFID digital library, corporate recruiting & Stripe billing.',
    result: '100% Automated Billing · 60 FPS',
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)',
    mock: 'campus',
    stack: ['Flutter 3.x', 'Dart', 'Node.js APIs', 'Stripe Gateway', 'PostgreSQL', 'Digital Library & CRM'],
    challenge:
      'Universities previously juggled disjointed third-party software for admissions, class enrollment, RFID library book tracking, faculty workloads, corporate campus hiring, and tuition collection.',
    solution:
      'Built a single-codebase Flutter and Web university administration ecosystem. Combines an Admissions CRM, an automated RFID/ISBN Digital Library catalog, Faculty workload and grade submitters, a dedicated Corporate Recruiter portal with automated student CV matching, and a direct Stripe payment integration for tuition & fee collections.',
    results: [
      '💳 100% Automated Stripe Billing for tuition, examination, and semester registration fees.',
      '📚 Integrated CRM & Library: Real-time book reservation, ISBN barcode scanner, and admissions pipeline.',
      '🎓 Corporate Recruiter Portal: Direct campus hiring gateway with 3x faster applicant review times.',
      '📱 60 FPS Native Performance with offline caching on iOS, Android, and Web.',
    ],
  },
  {
    title: 'VapiDine AI',
    subtitle: 'Multi-Vendor Autonomous Restaurant Voice Platform',
    category: 'AI',
    desc: 'Multi-tenant voice AI telephony SaaS with on-the-fly dynamic prompting, zero hold times, live KDS tickets & Stripe SMS checkout.',
    result: '+28% Revenue Uplift · 0s Hold',
    gradient: 'linear-gradient(135deg, #f472b6 0%, #7c5cff 55%, #f59e0b 100%)',
    mock: 'voice',
    stack: ['Vapi.ai Voice Engine', 'Next.js 14', 'Dynamic Prompting', 'Node.js Microservices', 'Stripe POS', 'Twilio Webhooks'],
    challenge:
      'High-volume restaurants and multi-vendor food halls miss up to 35% of inbound takeout orders and table reservations during peak hours due to busy lines. Each restaurant requires distinct menu customizations, seasonal promotions, and personalized conversational tones.',
    solution:
      "Architected a multi-tenant voice telephony SaaS leveraging Vapi.ai, Deepgram speech-to-text, and OpenAI. Built a proprietary Dynamic Prompting Engine where individual restaurant owners can alter their AI's instructions on the fly—updating daily specials, 86'd out-of-stock items, upsell pairings, and conversational tone without writing a single line of code. Converts speech directly into structured tickets for Kitchen Display Systems (KDS) and dispatches automated Stripe SMS checkout links.",
    results: [
      '⚡ Zero Call Hold Times: Handles dozens of concurrent phone calls simultaneously during peak dinner rush.',
      '🎯 Dynamic Vendor Prompting: Individual restaurants configure distinct AI personalities and menus in seconds.',
      '💳 Automated Stripe & KDS Flow: 100% automated order ticket creation and SMS billing dispatch.',
      '📈 28% Revenue Uplift via automated smart upselling during live phone orders.',
    ],
  },
  {
    title: 'Finlytics',
    subtitle: 'Real-Time Fintech Intelligence & Ledger SaaS',
    category: 'Software',
    desc: 'Real-time analytics SaaS for fintech teams processing 2M+ transactions a day with sub-second anomaly detection.',
    result: '+340% user growth',
    gradient: 'linear-gradient(135deg, #7c5cff, #3b82f6)',
    mock: 'dash',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis Streams', 'WebSockets', 'AWS'],
    challenge:
      'Fast-growing fintech operators struggled with delayed batch reporting and fragmented payment ledgers when auditing over 2M daily transactions.',
    solution:
      'Engineered an event-driven streaming analytics platform using Redis Streams, PostgreSQL time-series partitioning, and WebSockets to surface live cash-flow telemetry, cohort retention, and instant risk alerts.',
    results: [
      '📈 +340% active enterprise user growth within 6 months of launch.',
      '⚡ Sub-200ms dashboard query execution across 2M+ daily events.',
      '🛡️ 99.99% uptime SLA with automated multi-region failover.',
      '📊 Automated reconciliation saving finance teams 18+ hours weekly.',
    ],
  },
  {
    title: 'Medibook',
    subtitle: 'Multi-Clinic Patient Scheduling & Telehealth Suite',
    category: 'Mobile',
    desc: 'Cross-platform patient booking and EHR companion app for a 40-clinic healthcare network on iOS & Android.',
    result: '+85% booking efficiency',
    gradient: 'linear-gradient(135deg, #22d3ee, #10b981)',
    mock: 'phone',
    stack: ['Flutter', 'Dart', 'Node.js', 'PostgreSQL', 'Twilio SMS', 'Stripe', 'REST APIs'],
    challenge:
      'A 40-clinic healthcare network relied on manual phone bookings, leading to long patient wait times, high no-show rates, and disconnected doctor schedules.',
    solution:
      'Delivered a unified iOS & Android mobile application with real-time practitioner slot syncing, automated SMS/push reminders, digital intake forms, and instant co-pay checkout.',
    results: [
      '⚡ +85% faster patient appointment booking and check-in workflow.',
      '📉 42% reduction in clinic no-shows via automated smart reminders.',
      '🏥 Seamlessly deployed across 40+ clinics with centralized admin control.',
      '🔒 End-to-end encrypted patient health records and role-based access.',
    ],
  },
  {
    title: 'Urban Threads',
    subtitle: 'High-Velocity Headless Commerce Experience',
    category: 'Web',
    desc: 'Headless e-commerce flagship store with sub-second page loads, AI visual size recommendations and one-click checkout.',
    result: '+85% conversion',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    mock: 'shop',
    stack: ['Next.js 14', 'React', 'Shopify Storefront API', 'Stripe Checkout', 'Tailwind CSS', 'Redis Edge Cache'],
    challenge:
      'A sluggish monolithic storefront was causing 68% mobile cart abandonment during high-traffic seasonal streetwear drops.',
    solution:
      'Re-architected the storefront as an edge-cached Next.js 14 headless platform integrated with Shopify Storefront GraphQL APIs, instant predictive search, and a frictionless one-tap Stripe payment flow.',
    results: [
      '🚀 +85% uplift in mobile checkout conversion rate.',
      '⚡ 0.6s average global page load time during flash sales.',
      '🛒 +31% higher average order value via real-time bundle upsells.',
      '💯 99/100 Google Lighthouse performance score.',
    ],
  },
];

const filters = ['All', 'AI', 'Software', 'Mobile', 'Web'];

function Mock({ type }) {
  if (type === 'autoforge')
    return (
      <div className="mock-rag">
        <div className="mr-top">
          <span className="mr-badge">FastAPI · Multi-Agent</span>
          <span className="mr-latency">⚡ Auto-Repair ✓</span>
        </div>
        <div className="mr-query">“Generate full-stack app + PDF report…”</div>
        <div className="mr-nodes">
          <div className="mr-node">Planner</div>
          <div className="mr-node active">AIRepairAgent</div>
          <div className="mr-node">Preview + ZIP</div>
        </div>
        <div className="mr-bars">
          <div style={{ width: '94%' }} />
          <div style={{ width: '82%' }} />
          <div style={{ width: '88%' }} />
        </div>
      </div>
    );
  if (type === 'campus')
    return (
      <div className="mock-campus">
        <div className="mc-card">
          <div className="mc-header">
            <span className="mc-dot" />
            <strong>Campus & Recruiter Suite</strong>
            <span className="mc-pill">Stripe Paid ✓</span>
          </div>
          <div className="mc-grid">
            <div className="mc-box">
              <small>RFID Library</small>
              <strong>18,420 Books</strong>
            </div>
            <div className="mc-box">
              <small>CV Matched</small>
              <strong>3x Faster</strong>
            </div>
          </div>
          <div className="mc-bar-row">
            <span>Admissions CRM</span>
            <div className="mc-progress"><div style={{ width: '88%' }} /></div>
          </div>
        </div>
      </div>
    );
  if (type === 'voice')
    return (
      <div className="mock-voice">
        <div className="mv-header">
          <span className="mv-live">● LIVE CALL</span>
          <span className="mv-tag">Vapi.ai · 0s Hold</span>
        </div>
        <div className="mv-wave">
          {[28, 55, 85, 45, 95, 65, 100, 50, 80, 40, 75, 90, 60, 35].map((h, i) => (
            <span key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="mv-ticket">
          <div>
            <strong>KDS Ticket #409</strong>
            <small>2x Truffle Burger + Upsell Drink</small>
          </div>
          <span className="mv-sms">Stripe SMS ✓</span>
        </div>
      </div>
    );
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
  const [activeProject, setActiveProject] = useState(null);
  const shown = projects.filter((p) => filter === 'All' || p.category === filter);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Selected work</span>
          <h2>Products we're <span className="grad-text">proud of</span></h2>
          <p>Explore our recent enterprise AI, mobile and SaaS launches — click the arrow on any project to inspect its architecture, stack, video demo and verified impact.</p>
        </div>
        <div className="filters reveal">
          {filters.map((f) => (
            <button key={f} className={filter === f ? 'active' : ''} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>
        <div className="work-grid">
          {shown.map((p) => (
            <article
              key={p.title}
              className="work-card"
              onClick={() => setActiveProject(p)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveProject(p);
                }
              }}
            >
              <div className="work-visual" style={{ background: p.gradient }}>
                <Mock type={p.mock} />
              </div>
              <div className="work-body">
                <div className="work-meta">
                  <span className="work-cat">{p.category}</span>
                  <div className="work-meta-right">
                    {p.videoUrl && (
                      <span className="work-video-badge">
                        <PlayCircle size={13} /> Video Demo
                      </span>
                    )}
                    <span className="work-result">{p.result}</span>
                  </div>
                </div>
                <div className="work-title-row">
                  <div>
                    <h3>{p.title}</h3>
                    {p.subtitle && <span className="work-subtitle">{p.subtitle}</span>}
                  </div>
                  <button
                    type="button"
                    className="work-arrow-btn"
                    aria-label={`View ${p.title} case study and tech stack`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveProject(p);
                    }}
                  >
                    <ArrowUpRight size={19} />
                  </button>
                </div>
                <p>{p.desc}</p>

                {p.liveUrl && (
                  <div className="work-live-row" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-live-link"
                    >
                      <ExternalLink size={13} /> Live Demo: {p.liveUrl.replace(/^https?:\/\//, '')}
                    </a>
                  </div>
                )}

                <div className="work-stack-preview">
                  {p.stack.slice(0, 4).map((tech) => (
                    <span key={tech} className="stack-pill">{tech}</span>
                  ))}
                  {p.stack.length > 4 && (
                    <span className="stack-pill more">+{p.stack.length - 4} more</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setActiveProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <div className="project-modal-hero" style={{ background: activeProject.gradient }}>
              <button
                type="button"
                className="project-modal-close"
                onClick={() => setActiveProject(null)}
                aria-label="Close project details"
              >
                <X size={20} />
              </button>
              <div className="project-modal-hero-inner">
                <div className="project-modal-badges">
                  <span className="pm-cat">{activeProject.category}</span>
                  <span className="pm-result">{activeProject.result}</span>
                </div>
                <h3 id="modal-project-title">{activeProject.title}</h3>
                {activeProject.subtitle && <p className="pm-subtitle">{activeProject.subtitle}</p>}
              </div>
            </div>

            <div className="project-modal-body">
              {(activeProject.liveUrl || activeProject.videoUrl) && (
                <div className="pm-media-bar">
                  {activeProject.liveUrl && (
                    <div className="pm-live-box">
                      <span className="pm-live-label">🌐 Live Deployment</span>
                      <a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pm-live-url"
                      >
                        {activeProject.liveUrl} <ExternalLink size={14} />
                      </a>
                    </div>
                  )}
                  {activeProject.videoUrl && (
                    <div className="pm-video-card">
                      <div className="pm-video-head">
                        <span><PlayCircle size={15} /> Interactive Demo Walkthrough</span>
                        <small>Click play to watch</small>
                      </div>
                      <video
                        key={activeProject.videoUrl}
                        src={activeProject.videoUrl}
                        controls
                        playsInline
                        preload="metadata"
                        className="pm-video-player"
                      />
                    </div>
                  )}
                </div>
              )}

              <div className="pm-section">
                <h4><Layers size={16} /> Technology Stack</h4>
                <div className="pm-stack">
                  {activeProject.stack.map((t) => (
                    <span key={t} className="pm-stack-chip">{t}</span>
                  ))}
                </div>
              </div>

              <div className="pm-two-col">
                <div className="pm-box">
                  <h4><Sparkles size={16} /> Overview &amp; Architecture</h4>
                  <p>{activeProject.challenge}</p>
                </div>
                <div className="pm-box">
                  <h4><Cpu size={16} /> Engineering Solution</h4>
                  <p>{activeProject.solution}</p>
                </div>
              </div>

              <div className="pm-section">
                <h4><ShieldCheck size={16} /> Key Features &amp; Verified Results</h4>
                <ul className="pm-results">
                  {activeProject.results.map((r) => (
                    <li key={r}>
                      <CheckCircle2 size={16} className="pm-check" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pm-footer">
                <button type="button" className="btn btn-ghost" onClick={() => setActiveProject(null)}>
                  Close
                </button>
                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    Open Live Demo <ExternalLink size={16} />
                  </a>
                )}
                <a
                  href="#contact"
                  className="btn btn-primary"
                  onClick={() => setActiveProject(null)}
                >
                  Build a similar project <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
