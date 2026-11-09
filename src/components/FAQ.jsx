import { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Initial websites, discovery and interactive prototypes take 1–2 weeks, while full MVP apps and custom software usually launch in 3–4 weeks. We provide a clear milestone schedule right after our discovery call.',
  },
  {
    q: 'What happens after launch?',
    a: 'After launch, we offer 6 months of free support and maintenance on every project—covering bug fixes, security updates, and performance monitoring. Once the 6-month free period ends, you can move to a flexible maintenance plan or our Scale retainer for continuous feature upgrades.',
  },
  {
    q: 'How do payments work, and what methods do you accept?',
    a: 'Projects are split into simple milestones (e.g. 40% / 30% / 30%). For international clients, we accept International Bank Transfers, Credit/Debit Cards, and Payoneer (packages start at $1,000 for Launch and $2,500 for Growth). For local clients in Bangladesh, we accept bKash, local bank transfers, and cards, with dedicated local project pricing starting from 10,000 BDT.',
  },
  {
    q: 'Do I own the code and designs?',
    a: 'Yes — 100%. Once the project is paid, all source code, Git repositories, UI/UX designs and deployment assets are completely yours with zero lock-in.',
  },
  {
    q: 'Can you integrate AI into my existing product?',
    a: 'Absolutely. We engineer RAG knowledge assistants, autonomous voice agents (Vapi.ai), custom LLM chatbots, and workflow automations using OpenAI GPT-4o, Claude, and Pinecone—securely integrated with your existing databases and APIs.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="faq">
      <div className="container faq-wrap">
        <div className="section-head left reveal">
          <span className="eyebrow">FAQ</span>
          <h2>Questions? <span className="grad-text">We've got answers.</span></h2>
          <p>Can't find what you're looking for? <a href="#contact" className="link">Talk to our team</a>.</p>
        </div>
        <div className="faq-list reveal">
          {faqs.map((f, i) => (
            <div key={f.q} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span>{f.q}</span>
                <Plus size={20} className="faq-icon" />
              </button>
              <div className="faq-answer"><div><p>{f.a}</p></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
