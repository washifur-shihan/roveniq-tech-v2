import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#work', label: 'Work' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

export function Logo() {
  return (
    <a href="#top" className="logo" aria-label="Roveniq Technologies home">
      <img src="/logo.svg" alt="Roveniq" className="logo-img" />
      <span className="logo-text">
        Roveniq<span className="grad-text"> Technologies</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-inner">
        <Logo />
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary btn-sm nav-cta-mobile" onClick={() => setOpen(false)}>
            Start a project
          </a>
        </nav>
        <a href="#contact" className="btn btn-primary btn-sm nav-cta">
          Start a project <ArrowRight size={16} />
        </a>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
