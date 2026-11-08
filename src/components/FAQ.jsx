import { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  { q: 'How long does a typical project take?', a: 'Websites usually take 2–4 weeks. MVP apps and custom software typically launch in 6–10 weeks. We give you a detailed timeline after the discovery call.' },
  { q: 'Do I own the code and designs?', a: 'Yes — 100%. Once the project is paid, all source code, designs and assets are yours. No lock-in.' },
  { q: 'Can you integrate AI into my existing product?', a: 'Absolutely. We add chatbots, AI agents, document processing, search and recommendations to existing apps using models like GPT and Claude, with your data kept secure.' },
  { q: 'What happens after launch?', a: 'Every package includes a support period. After that, you can pick a flexible maintenance plan or a monthly retainer for continued development.' },
  { q: 'How do payments work?', a: 'Fixed-price projects are usually split into milestones (e.g. 40% / 30% / 30%). Retainers are billed monthly. We accept bank transfer and card.' },
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
