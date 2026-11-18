import { Facebook, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { Logo } from './Navbar.jsx';

const cols = [
  {
    title: 'Services',
    links: [
      { label: 'AI Solutions', href: '#services' },
      { label: 'Software Development', href: '#services' },
      { label: 'Business Automation', href: '#services' },
      { label: 'Web & Cloud', href: '#services' },
      { label: 'Mobile Apps', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#top' },
      { label: 'Work', href: '#work' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy', legalTab: 'privacy' },
      { label: 'Terms of Service', href: '/terms-of-service', legalTab: 'terms' },
      { label: 'Cookies', href: '/cookies', legalTab: 'cookies' },
    ],
  },
];

export default function Footer({ onOpenLegal, onNavigateHome }) {
  const handleLinkClick = (e, item) => {
    if (item.legalTab && onOpenLegal) {
      e.preventDefault();
      onOpenLegal(item.legalTab, item.href);
    } else if (onNavigateHome) {
      onNavigateHome(e, item.href);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo onClick={(e) => onNavigateHome && onNavigateHome(e, '#top')} />
            <p>AI solutions, software development, business automation and cloud infrastructure — transforming businesses through technology.</p>
            <div className="socials">
              <a href="https://www.facebook.com/profile.php?id=61594943630411" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="https://wa.me/8801759957439" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={18} /></a>
              <a href="mailto:roveniq.technologies@gmail.com" aria-label="Email"><Mail size={18} /></a>
              <a href="https://www.linkedin.com/in/washifur-rahman/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="footer-col">
              <h4>{c.title}</h4>
              {c.links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Roveniq Technologies. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a
              href="/privacy-policy"
              onClick={(e) => {
                if (onOpenLegal) {
                  e.preventDefault();
                  onOpenLegal('privacy', '/privacy-policy');
                }
              }}
            >
              Privacy Policy
            </a>
            <span>·</span>
            <a
              href="/terms-of-service"
              onClick={(e) => {
                if (onOpenLegal) {
                  e.preventDefault();
                  onOpenLegal('terms', '/terms-of-service');
                }
              }}
            >
              Terms of Service
            </a>
            <span>·</span>
            <span>Made with ♥ and innovation.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
