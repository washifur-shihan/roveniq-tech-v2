import { Facebook, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { Logo } from './Navbar.jsx';

const cols = [
  { title: 'Services', links: ['AI Solutions', 'Software Development', 'Business Automation', 'Web & Cloud', 'Mobile Apps'] },
  { title: 'Company', links: ['About', 'Work', 'Careers', 'Blog', 'Contact'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookies'] },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>AI solutions, software development, business automation and cloud infrastructure — transforming businesses through technology.</p>
            <div className="socials">
              <a href="https://www.facebook.com/profile.php?id=61594943630411" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="https://wa.me/8801759957439" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={18} /></a>
              <a href="mailto:roveniq.technologies@gmail.com" aria-label="Email"><Mail size={18} /></a>
              <a href="#top" aria-label="LinkedIn"><Linkedin size={18} /></a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="footer-col">
              <h4>{c.title}</h4>
              {c.links.map((l) => <a key={l} href="#top">{l}</a>)}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Roveniq Technologies. All rights reserved.</span>
          <span>Made with ♥ and innovation.</span>
        </div>
      </div>
    </footer>
  );
}
