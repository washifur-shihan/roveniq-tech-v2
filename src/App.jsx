import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import LogoStrip from './components/LogoStrip.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
import Work from './components/Work.jsx';
import Stats from './components/Stats.jsx';
import Testimonials from './components/Testimonials.jsx';
import Pricing from './components/Pricing.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import LegalPage from './components/LegalPage.jsx';

function detectLegalTab() {
  const path = window.location.pathname.toLowerCase().replace(/\/+$/, '');
  const hash = window.location.hash.toLowerCase();
  if (path === '/privacy-policy' || path === '/privacy' || hash === '#privacy-policy' || hash === '#privacy') {
    return 'privacy';
  }
  if (path === '/terms-of-service' || path === '/terms' || hash === '#terms-of-service' || hash === '#terms') {
    return 'terms';
  }
  if (path === '/cookies' || path === '/cookie-policy' || hash === '#cookies') {
    return 'cookies';
  }
  return null;
}

export default function App() {
  const [legalTab, setLegalTab] = useState(() => detectLegalTab());

  useEffect(() => {
    const onPopState = () => {
      setLegalTab(detectLegalTab());
    };
    window.addEventListener('popstate', onPopState);
    window.addEventListener('hashchange', onPopState);
    return () => {
      window.removeEventListener('popstate', onPopState);
      window.removeEventListener('hashchange', onPopState);
    };
  }, []);

  // Fade-in-on-scroll for any element with the .reveal class
  useEffect(() => {
    if (legalTab) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [legalTab]);

  const openLegal = (tab, path = '/privacy-policy') => {
    const urlMap = {
      privacy: '/privacy-policy',
      terms: '/terms-of-service',
      cookies: '/cookies',
    };
    const nextUrl = urlMap[tab] || path;
    window.history.pushState({}, '', nextUrl);
    setLegalTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateHome = (e, targetHash = '#top') => {
    if (legalTab) {
      if (e) e.preventDefault();
      window.history.pushState({}, '', targetHash === '#top' ? '/' : `/${targetHash}`);
      setLegalTab(null);
      setTimeout(() => {
        if (targetHash && targetHash !== '#top') {
          const el = document.querySelector(targetHash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 40);
    }
  };

  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-orb orb-1" aria-hidden="true" />
      <div className="bg-orb orb-2" aria-hidden="true" />
      <Navbar onNavigateHome={navigateHome} />
      <main>
        {legalTab ? (
          <LegalPage
            activeTab={legalTab}
            onSelectTab={(tab) => openLegal(tab)}
            onBackHome={() => navigateHome(null, '#top')}
          />
        ) : (
          <>
            <Hero />
            <LogoStrip />
            <Services />
            <Process />
            <Work />
            <Stats />
            <Testimonials />
            <Pricing />
            <FAQ />
            <Contact />
          </>
        )}
      </main>
      <Footer onOpenLegal={openLegal} onNavigateHome={navigateHome} />
    </>
  );
}
