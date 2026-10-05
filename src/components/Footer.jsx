import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Heart, Mail, Phone, MapPin, MessageCircle, FileText } from 'lucide-react';

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'rgba(7, 10, 18, 0.95)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '4rem',
        paddingBottom: '2.5rem',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Top Footer Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
          }}
        >
          
          {/* Brand Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #4f46e5 0%, #38bdf8 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1rem',
                  color: '#ffffff'
                }}
              >
                AP
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.2rem', color: '#f8fafc' }}>
                Aditya Patwa
              </span>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6 }}>
              Software Engineer & Web Developer passionate about building high-performance web applications, clean code architectures, and delightful digital user experiences.
            </p>

            <div style={{ display: 'flex', gap: '0.6rem', marginTop: '0.25rem' }}>
              <a
                href={`https://wa.me/${personalInfo.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill"
                style={{ padding: '0.45rem', color: '#34d399' }}
                title="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="glass-pill"
                style={{ padding: '0.45rem', color: '#38bdf8' }}
                title="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://github.com/adityapatwa"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill"
                style={{ padding: '0.45rem', color: '#f1f5f9' }}
                title="GitHub"
              >
                <GithubIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc', marginBottom: '1.1rem' }}>
              Quick Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: '#94a3b8',
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                    transition: 'color 0.2s ease',
                    display: 'inline-block'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#38bdf8'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc', marginBottom: '1.1rem' }}>
              Direct Info
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={15} color="#38bdf8" />
                <a href={`mailto:${personalInfo.email}`} style={{ color: '#cbd5e1', textDecoration: 'none' }}>
                  {personalInfo.email}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={15} color="#10b981" />
                <a href={`tel:${personalInfo.phone}`} style={{ color: '#cbd5e1', textDecoration: 'none' }}>
                  {personalInfo.phone}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={15} color="#f43f5e" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                <span>{personalInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Resume Download Action */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc', marginBottom: '1.1rem' }}>
              CV / Resume
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1rem' }}>
              Need a copy of my curriculum vitae for your records or review?
            </p>
            <button
              onClick={onOpenResume}
              className="btn-secondary"
              style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem', width: '100%' }}
            >
              <FileText size={15} color="#38bdf8" />
              <span>View Official Resume</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div 
          style={{
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <p style={{ color: '#64748b', fontSize: '0.85rem', margin: 0 }}>
            © {new Date().getFullYear()} Aditya Patwa. All rights reserved. Crafted with React & Modern Web Tech.
          </p>

          <button
            onClick={scrollToTop}
            className="glass-pill"
            style={{
              padding: '0.45rem 0.9rem',
              color: '#cbd5e1',
              cursor: 'pointer',
              fontSize: '0.82rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
            title="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} color="#38bdf8" />
          </button>
        </div>

      </div>
    </footer>
  );
}
