import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, FileText, Send, Sparkles, MessageCircle } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(11, 15, 25, 0.88)' : 'rgba(11, 15, 25, 0.4)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        padding: scrolled ? '0.75rem 0' : '1.1rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Monogram & Name */}
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            color: '#ffffff'
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #4f46e5 0%, #38bdf8 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1.15rem',
              color: '#ffffff',
              boxShadow: '0 4px 14px rgba(79, 70, 229, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            AP
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: 700, fontSize: '1.15rem', letterSpacing: '-0.02em', color: '#f8fafc' }}>
              Aditya Patwa
            </span>
            <span style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 500 }}>
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '0.35rem 0.6rem',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.07)'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  padding: '0.45rem 1.05rem',
                  borderRadius: '9999px',
                  transition: 'all 0.2s ease',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  background: isActive ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(56, 189, 248, 0.2) 100%)' : 'transparent',
                  border: isActive ? '1px solid rgba(99, 102, 241, 0.4)' : '1px solid transparent'
                }}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Header Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          
          {/* Resume View Button */}
          <button
            onClick={onOpenResume}
            className="btn-secondary"
            style={{
              padding: '0.55rem 1.1rem',
              fontSize: '0.85rem',
              borderRadius: '0.65rem',
              display: 'none'
            }}
            className="desktop-btn"
          >
            <FileText size={15} color="#38bdf8" />
            <span>Resume</span>
          </button>

          {/* Quick WhatsApp Button */}
          <a
            href={`https://wa.me/${personalInfo.phoneRaw}?text=Hi%20Aditya,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{
              padding: '0.55rem 1.15rem',
              fontSize: '0.85rem',
              borderRadius: '0.65rem'
            }}
          >
            <MessageCircle size={15} />
            <span>WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#f8fafc',
              padding: '0.5rem',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="mobile-toggle-btn"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(11, 15, 25, 0.96)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: activeSection === link.href.substring(1) ? '#38bdf8' : '#cbd5e1',
                padding: '0.6rem 0.5rem',
                fontSize: '1rem',
                fontWeight: 500,
                borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{link.name}</span>
              {activeSection === link.href.substring(1) && (
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#38bdf8' }}></span>
              )}
            </a>
          ))}

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn-secondary"
              style={{ flex: 1, padding: '0.65rem', fontSize: '0.88rem' }}
            >
              <FileText size={16} /> View Resume
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav { display: flex !important; }
          .desktop-btn { display: inline-flex !important; }
          .mobile-toggle-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
