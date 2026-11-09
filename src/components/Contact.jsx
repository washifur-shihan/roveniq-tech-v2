import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle, Facebook, Loader2 } from 'lucide-react';

const services = ['AI Solutions', 'Software Development', 'Business Automation', 'Web & Cloud', 'Mobile App', 'UI/UX Design'];

const EMAIL_TO = 'roveniq.technologies@gmail.com';
const WHATSAPP_URL = 'https://wa.me/8801759957439?text=Hello%20Roveniq%20Technologies!%20I%20would%20like%20to%20discuss%20a%20project.';
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61594943630411';

export default function Contact() {
  const [selected, setSelected] = useState(['AI Solutions']);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const toggle = (s) =>
    setSelected((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));

  const buildMailtoLink = () => {
    const subject = encodeURIComponent(`New Project Inquiry from ${name || 'Website Visitor'} — Roveniq Technologies`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nServices Needed: ${selected.join(', ') || 'General Inquiry'}\n\nProject Details:\n${details}`
    );
    return `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${EMAIL_TO}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          services: selected.join(', '),
          message: details,
          _subject: `New Roveniq Project Inquiry from ${name}`,
          _template: 'table',
        }),
      });
      const data = await response.json().catch(() => null);
      if (!response.ok || (data && data.success === 'false')) {
        window.location.href = buildMailtoLink();
      }
    } catch {
      window.location.href = buildMailtoLink();
    } finally {
      setSubmitting(false);
      setSent(true);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-panel reveal">
          <div className="contact-info">
            <span className="eyebrow">Let's talk</span>
            <h2>Have a project in mind? <span className="grad-text">Let's build it.</span></h2>
            <p>Tell us a bit about what you need. We'll get back to you within one business day with architecture ideas and a clear roadmap.</p>
            <ul className="contact-list">
              <li>
                <span><Mail size={18} /></span>
                <a href={`mailto:${EMAIL_TO}`} className="contact-email-link">
                  {EMAIL_TO}
                </a>
              </li>
              <li>
                <span><MessageCircle size={18} /></span>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  +880 1759957439 (WhatsApp)
                </a>
              </li>
              <li>
                <span><Phone size={18} /></span>
                <a href="tel:+8801759957439">+880 1759957439</a>
              </li>
              <li><span><MapPin size={18} /></span> Bangladesh · Serving worldwide</li>
            </ul>

            <div className="direct-chat-box">
              <span className="direct-chat-label">Prefer instant messaging? Message us directly:</span>
              <div className="direct-chat-actions">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={18} /> Message on WhatsApp
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-facebook"
                >
                  <Facebook size={18} /> Message on Facebook
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            {sent ? (
              <div className="sent">
                <CheckCircle2 size={48} />
                <h3>Thanks — your message is on its way!</h3>
                <p>
                  We've dispatched your inquiry to <strong>{EMAIL_TO}</strong> and will reply within one business day. You can also open it in your email app or message us directly below:
                </p>
                <div className="sent-actions">
                  <a href={buildMailtoLink()} className="btn btn-primary btn-sm">
                    <Mail size={16} /> Open in Email Client
                  </a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm">
                    <MessageCircle size={16} /> Chat on WhatsApp
                  </a>
                  <button type="button" className="btn btn-ghost btn-sm" onClick={() => setSent(false)}>
                    Send another
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="field-row">
                  <label>
                    Name
                    <input
                      required
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                    />
                  </label>
                  <label>
                    Email
                    <input
                      required
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                    />
                  </label>
                </div>
                <div className="field">
                  <span className="field-label">What do you need?</span>
                  <div className="chips">
                    {services.map((s) => (
                      <button
                        type="button"
                        key={s}
                        className={selected.includes(s) ? 'chip active' : 'chip'}
                        onClick={() => toggle(s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <label>
                  Project details
                  <textarea
                    required
                    name="details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    rows={4}
                    placeholder="Tell us about your goals, timeline and anything else we should know…"
                  />
                </label>
                <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={submitting}>
                  {submitting ? (
                    <>Sending… <Loader2 size={18} className="spin-icon" /></>
                  ) : (
                    <>Send message <Send size={18} /></>
                  )}
                </button>
                <div className="form-quick-links">
                  <span>Or reach out directly via</span>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                  <span>·</span>
                  <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">Facebook</a>
                  <span>·</span>
                  <a href={`mailto:${EMAIL_TO}`}>Direct Email</a>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
