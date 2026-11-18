import { ArrowLeft, ShieldCheck, FileText, Cookie, Mail, MapPin, Phone } from 'lucide-react';

const LAST_UPDATED = 'November 2026';

export default function LegalPage({ activeTab = 'privacy', onSelectTab, onBackHome }) {
  return (
    <section className="legal-page">
      <div className="container legal-container">
        <div className="legal-top-bar">
          <button type="button" className="btn btn-ghost btn-sm" onClick={onBackHome}>
            <ArrowLeft size={16} /> Back to Home
          </button>

          <div className="legal-tabs" role="tablist" aria-label="Legal documents">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'privacy'}
              className={activeTab === 'privacy' ? 'active' : ''}
              onClick={() => onSelectTab('privacy')}
            >
              <ShieldCheck size={15} /> Privacy Policy
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'terms'}
              className={activeTab === 'terms' ? 'active' : ''}
              onClick={() => onSelectTab('terms')}
            >
              <FileText size={15} /> Terms of Service
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'cookies'}
              className={activeTab === 'cookies' ? 'active' : ''}
              onClick={() => onSelectTab('cookies')}
            >
              <Cookie size={15} /> Cookie Policy
            </button>
          </div>
        </div>

        {activeTab === 'privacy' && (
          <article className="legal-card">
            <div className="legal-header">
              <span className="eyebrow">Legal &amp; Compliance</span>
              <h1>Privacy <span className="grad-text">Policy</span></h1>
              <p className="legal-updated">Last updated: {LAST_UPDATED} · Effective immediately</p>
            </div>

            <div className="legal-content">
              <p>
                At <strong>Roveniq Technologies</strong> (“Roveniq”, “we”, “us”, or “our”), accessible from{' '}
                <a href="https://www.roveniq-tech.com">https://www.roveniq-tech.com</a>, respecting your privacy and
                protecting your personal and business data is one of our core priorities. This Privacy Policy explains
                what information we collect, how we use and safeguard it, and your rights regarding your personal data.
              </p>

              <h2>1. Information We Collect</h2>
              <p>We collect information that you voluntarily provide to us and automated technical data when you visit our website:</p>
              <ul>
                <li>
                  <strong>Contact &amp; Inquiry Information:</strong> Your name, email address, phone/WhatsApp number,
                  company name, selected service interests (such as AI Solutions, Software Development, Business
                  Automation, Web &amp; Cloud, Mobile Apps, or UI/UX Design), and project details submitted through our
                  contact form, email, WhatsApp, or Facebook Messenger.
                </li>
                <li>
                  <strong>Client Project &amp; Billing Information:</strong> When you engage us for a project, we collect
                  billing details, invoicing records, and technical specifications necessary to deliver and support your software.
                </li>
                <li>
                  <strong>Automated Usage &amp; Device Data:</strong> IP address, browser type, operating system, referring
                  URLs, pages viewed, and interaction timestamps collected automatically for security and analytics.
                </li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect strictly for legitimate business purposes, including to:</p>
              <ul>
                <li>Respond to your project inquiries, prepare technical proposals, and schedule discovery calls.</li>
                <li>Design, engineer, deploy, and maintain custom software, AI agents, and cloud infrastructure for your business.</li>
                <li>Provide our 6-month post-launch support and ongoing maintenance services.</li>
                <li>Process milestone payments and issue official invoices (via Bank Transfer, International Cards, Payoneer, or bKash).</li>
                <li>Measure website performance and improve our marketing and advertising relevance.</li>
              </ul>

              <h2>3. Meta Pixel, Cookies &amp; Analytics</h2>
              <p>
                Our website uses cookies and similar tracking technologies, including the <strong>Meta Pixel</strong>{' '}
                (Facebook Pixel), to understand how visitors interact with our website and to measure the effectiveness of
                our advertising campaigns.
              </p>
              <ul>
                <li>
                  <strong>Events Tracked:</strong> Standard events such as <code>PageView</code> and <code>Lead</code>{' '}
                  (when you submit a project inquiry or initiate a direct message on WhatsApp or Facebook).
                </li>
                <li>
                  <strong>Opt-Out Controls:</strong> You can disable cookies through your browser settings at any time or
                  manage your ad preferences directly within your Meta / Facebook account settings.
                </li>
              </ul>

              <h2>4. Confidentiality &amp; Intellectual Property</h2>
              <p>
                All project ideas, source code, business logic, datasets, and proprietary documents shared with Roveniq
                Technologies during discovery or development are treated as strictly confidential. Upon full project
                payment, <strong>100% of your custom source code, designs, and assets belong to you</strong>. We never
                sell, rent, or trade your personal or business information to third parties.
              </p>

              <h2>5. Data Sharing &amp; Third-Party Services</h2>
              <p>
                We only share data with trusted infrastructure providers necessary to operate our services (such as
                Cloudflare for hosting/CDN, email delivery services for contact form notifications, and payment processors
                for invoicing). All third-party processors are bound by strict data protection and security obligations.
              </p>

              <h2>6. Data Security &amp; Retention</h2>
              <p>
                We implement industry-standard technical and organizational safeguards—including HTTPS/TLS encryption,
                role-based access control (RBAC), and secure cloud environments—to protect your data against unauthorized
                access, alteration, or disclosure. We retain inquiry records only as long as necessary to fulfill the
                purposes outlined in this policy or comply with legal and tax obligations.
              </p>

              <h2>7. Your Privacy Rights</h2>
              <p>Depending on your location, you have the right to:</p>
              <ul>
                <li>Request access to the personal data we hold about you.</li>
                <li>Request correction or deletion of your personal information.</li>
                <li>Withdraw consent for marketing communications or analytics tracking at any time.</li>
              </ul>

              <h2>8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact
                us directly:
              </p>
              <div className="legal-contact-box">
                <div><strong>Roveniq Technologies</strong> (Founded by Washifur Rahman)</div>
                <div><Mail size={15} /> <a href="mailto:roveniq.technologies@gmail.com">roveniq.technologies@gmail.com</a></div>
                <div><Phone size={15} /> <a href="https://wa.me/8801759957439" target="_blank" rel="noopener noreferrer">+880 1759957439 (Phone &amp; WhatsApp)</a></div>
                <div><MapPin size={15} /> Bangladesh · Serving clients worldwide</div>
              </div>
            </div>
          </article>
        )}

        {activeTab === 'terms' && (
          <article className="legal-card">
            <div className="legal-header">
              <span className="eyebrow">Legal &amp; Compliance</span>
              <h1>Terms of <span className="grad-text">Service</span></h1>
              <p className="legal-updated">Last updated: {LAST_UPDATED}</p>
            </div>

            <div className="legal-content">
              <p>
                Welcome to <strong>Roveniq Technologies</strong>. By accessing our website or engaging our engineering
                services, you agree to these Terms of Service.
              </p>

              <h2>1. Services &amp; Project Scope</h2>
              <p>
                Roveniq Technologies provides custom AI solutions, full-stack software development, business automation,
                mobile app development, and cloud infrastructure services. Every client engagement is governed by a
                written project proposal or statement of work defining deliverables, timelines (typically 1–2 weeks for
                websites/prototypes and 3–4 weeks for MVPs), and milestone schedules.
              </p>

              <h2>2. Pricing, Milestones &amp; Payments</h2>
              <ul>
                <li>Fixed-price projects are billed across agreed milestones (typically 40% kickoff / 30% mid-project / 30% upon delivery).</li>
                <li>International clients may pay via International Bank Transfer, Credit/Debit Cards, or Payoneer.</li>
                <li>Local clients in Bangladesh may pay via bKash, local bank transfer, or cards (local packages start from 10,000 BDT).</li>
              </ul>

              <h2>3. Code Ownership &amp; Handover</h2>
              <p>
                Upon completion of final milestone payment, full ownership (100%) of all custom source code, repositories,
                UI/UX designs, and deployment artifacts transfers to the client with zero vendor lock-in.
              </p>

              <h2>4. Post-Launch Support &amp; Maintenance</h2>
              <p>
                Every launched project includes <strong>6 months of complimentary support and maintenance</strong> covering
                bug fixes, security updates, and stability monitoring. Continued feature development or extended SLA coverage
                beyond the 6-month period is available via our flexible maintenance or Scale retainer plans.
              </p>

              <h2>5. Contact</h2>
              <p>
                Questions regarding these Terms can be directed to{' '}
                <a href="mailto:roveniq.technologies@gmail.com">roveniq.technologies@gmail.com</a>.
              </p>
            </div>
          </article>
        )}

        {activeTab === 'cookies' && (
          <article className="legal-card">
            <div className="legal-header">
              <span className="eyebrow">Legal &amp; Compliance</span>
              <h1>Cookie <span className="grad-text">Policy</span></h1>
              <p className="legal-updated">Last updated: {LAST_UPDATED}</p>
            </div>

            <div className="legal-content">
              <p>
                This Cookie Policy explains how <strong>Roveniq Technologies</strong> uses cookies and similar technologies
                on <a href="https://www.roveniq-tech.com">https://www.roveniq-tech.com</a>.
              </p>

              <h2>1. What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device when you visit a website. They help the website
                remember your preferences and understand how visitors interact with key pages.
              </p>

              <h2>2. Cookies We Use</h2>
              <ul>
                <li>
                  <strong>Essential Cookies:</strong> Required for core site navigation, security, and form submission functionality.
                </li>
                <li>
                  <strong>Analytics &amp; Marketing Cookies (Meta Pixel):</strong> Used to measure page views (<code>PageView</code>)
                  and inquiry conversions (<code>Lead</code>) so we can evaluate and improve our campaigns.
                </li>
              </ul>

              <h2>3. Managing Cookies</h2>
              <p>
                You can block or delete cookies at any time through your browser settings. Please note that disabling
                certain cookies will not affect your ability to browse our portfolio or contact our team.
              </p>
            </div>
          </article>
        )}
      </div>
    </section>
  );
}
