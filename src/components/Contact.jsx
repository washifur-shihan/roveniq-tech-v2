import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle } from 'lucide-react';

const services = ['AI Solutions', 'Software Development', 'Business Automation', 'Web & Cloud', 'Mobile App', 'UI/UX Design'];
const budgets = ['< $5k', '$5k – $15k', '$15k – $50k', '$50k+'];

export default function Contact() {
  const [selected, setSelected] = useState(['AI Integration']);
  const [budget, setBudget] = useState('$5k – $15k');
  const [sent, setSent] = useState(false);

  const toggle = (s) =>
    setSelected((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));

  const onSubmit = (e) => {
    e.preventDefault();
    // Hook this up to your email service / backend (e.g. Formspree, Resend, or an API route).
    setSent(true);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-panel reveal">
          <div className="contact-info">
            <span className="eyebrow">Let's talk</span>
            <h2>Have a project in mind? <span className="grad-text">Let's build it.</span></h2>
            <p>Tell us a bit about what you need. We'll get back to you within one business day with ideas and a rough estimate.</p>
            <ul className="contact-list">
              <li><span><Mail size={18} /></span> roveniq.technologies@gmail.com</li>
              <li>
                <span><MessageCircle size={18} /></span>
                <a href="https://wa.me/8801759957439" target="_blank" rel="noopener noreferrer">
                  +880 1759957439 (WhatsApp)
                </a>
              </li>
              <li><span><Phone size={18} /></span> +880 1759957439</li>
              <li><span><MapPin size={18} /></span> Bangladesh · Serving worldwide</li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            {sent ? (
              <div className="sent">
                <CheckCircle2 size={48} />
                <h3>Thanks — message received!</h3>
                <p>We'll be in touch within one business day.</p>
                <button type="button" className="btn btn-ghost" onClick={() => setSent(false)}>Send another</button>
              </div>
            ) : (
              <>
                <div className="field-row">
                  <label>Name<input required placeholder="Jane Doe" /></label>
                  <label>Email<input required type="email" placeholder="jane@company.com" /></label>
                </div>
                <div className="field">
                  <span className="field-label">What do you need?</span>
                  <div className="chips">
                    {services.map((s) => (
                      <button type="button" key={s} className={selected.includes(s) ? 'chip active' : 'chip'} onClick={() => toggle(s)}>{s}</button>
                    ))}
                  </div>
                </div>
                <div className="field">
                  <span className="field-label">Budget</span>
                  <div className="chips">
                    {budgets.map((b) => (
                      <button type="button" key={b} className={budget === b ? 'chip active' : 'chip'} onClick={() => setBudget(b)}>{b}</button>
                    ))}
                  </div>
                </div>
                <label>Project details<textarea rows={4} placeholder="Tell us about your goals, timeline and anything else we should know…" /></label>
                <button type="submit" className="btn btn-primary btn-lg btn-block">
                  Send message <Send size={18} />
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
