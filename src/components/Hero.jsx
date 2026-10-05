import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowRight, 
  Download, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Phone, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  Copy,
  ExternalLink
} from 'lucide-react';

export default function Hero({ onOpenResume }) {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);
  const [copiedField, setCopiedField] = useState(null);

  const roles = [
    'Software Engineer',
    'Full Stack Web Developer',
    'Problem Solver',
    'Python & React Specialist',
    'Database & Backend Builder'
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setTypedText(
        isDeleting 
          ? fullText.substring(0, typedText.length - 1) 
          : fullText.substring(0, typedText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(300);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed]);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section 
      id="home" 
      style={{
        position: 'relative',
        paddingTop: '8.5rem',
        paddingBottom: '5.5rem',
        overflow: 'hidden'
      }}
    >
      {/* Background ambient radial lights */}
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          
          {/* Left Column: Headlines & Call to Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Live Status Pill */}
            <div 
              className="glass-pill"
              style={{
                alignSelf: 'flex-start',
                padding: '0.4rem 1rem',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                background: 'rgba(16, 185, 129, 0.08)'
              }}
            >
              <span 
                className="live-pulse"
                style={{
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  background: '#10b981',
                  display: 'inline-block',
                  marginRight: '0.35rem'
                }}
              ></span>
              <span style={{ color: '#6ee7b7', fontWeight: 600, fontSize: '0.85rem' }}>
                Open to Opportunities & Projects
              </span>
            </div>

            {/* Main Greeting & Name */}
            <div>
              <p style={{ color: '#94a3b8', fontSize: '1.15rem', fontWeight: 500, marginBottom: '0.4rem' }}>
                Hello there! I am
              </p>
              <h1 
                className="gradient-text"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  marginBottom: '0.75rem'
                }}
              >
                Aditya Patwa
              </h1>
              
              {/* Animated Typewriter Title */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  minHeight: '2.4rem',
                  fontSize: 'clamp(1.2rem, 2.8vw, 1.85rem)',
                  fontWeight: 700
                }}
              >
                <span className="gradient-text-accent">
                  {typedText}
                </span>
                <span 
                  style={{
                    display: 'inline-block',
                    width: '3px',
                    height: '1.4em',
                    backgroundColor: '#38bdf8',
                    animation: 'pulse-ring 1s infinite'
                  }}
                ></span>
              </div>
            </div>

            {/* Bio Description */}
            <p 
              style={{
                color: '#cbd5e1',
                fontSize: '1.05rem',
                lineHeight: 1.7,
                maxWidth: '560px'
              }}
            >
              Passionate Software Engineer with hands-on experience in building modern web applications using 
              <span style={{ color: '#38bdf8', fontWeight: 600 }}> React, JavaScript, Python, PHP, and SQL</span>. 
              Dedicated to writing clean, maintainable code and translating complex problems into elegant digital solutions.
            </p>

            {/* Quick Contact & Location Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.25rem' }}>
              <div 
                className="glass-pill"
                style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                title="Click to copy email"
              >
                <Mail size={14} color="#38bdf8" />
                <span>{personalInfo.email}</span>
                {copiedField === 'email' ? <CheckCircle2 size={13} color="#10b981" /> : <Copy size={12} color="#64748b" />}
              </div>

              <div 
                className="glass-pill"
                style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                title="Click to copy phone"
              >
                <Phone size={14} color="#10b981" />
                <span>{personalInfo.phone}</span>
                {copiedField === 'phone' ? <CheckCircle2 size={13} color="#10b981" /> : <Copy size={12} color="#64748b" />}
              </div>

              <div className="glass-pill">
                <MapPin size={14} color="#f43f5e" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
              
              {/* Contact / Hire Me Button */}
              <a href="#contact" className="btn-primary">
                <span>Let's Connect</span>
                <ArrowRight size={17} />
              </a>

              {/* WhatsApp Direct Chat */}
              <a 
                href={`https://wa.me/${personalInfo.phoneRaw}?text=Hello%20Aditya,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity.`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-whatsapp"
              >
                <MessageCircle size={17} />
                <span>Chat on WhatsApp</span>
              </a>

              {/* View/Download Resume */}
              <button 
                onClick={onOpenResume}
                className="btn-secondary"
              >
                <Download size={16} color="#38bdf8" />
                <span>View Resume</span>
              </button>
            </div>

          </div>

          {/* Right Column: Visual Portrait with Floating Tech Badges */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            
            {/* Outer Glowing Ring Frame */}
            <div 
              style={{
                position: 'relative',
                width: 'min(360px, 85vw)',
                height: 'min(440px, 105vw)',
                borderRadius: '1.75rem',
                padding: '8px',
                background: 'linear-gradient(145deg, rgba(99, 102, 241, 0.4) 0%, rgba(56, 189, 248, 0.2) 50%, rgba(16, 185, 129, 0.3) 100%)',
                boxShadow: '0 20px 50px -15px rgba(0, 0, 0, 0.7), 0 0 35px -5px rgba(99, 102, 241, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              
              {/* Inner Glass Image Container */}
              <div 
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '1.35rem',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: '#0f172a'
                }}
              >
                <img 
                  src={personalInfo.photo} 
                  alt={personalInfo.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    transition: 'transform 0.5s ease'
                  }}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
                  }}
                />

                {/* Bottom Gradient Overlay on Image */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '35%',
                    background: 'linear-gradient(to top, rgba(11, 15, 25, 0.95) 0%, rgba(11, 15, 25, 0) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '1.25rem'
                  }}
                >
                  <p style={{ fontWeight: 700, fontSize: '1.1rem', color: '#ffffff' }}>
                    Aditya Patwa
                  </p>
                  <p style={{ fontSize: '0.8rem', color: '#38bdf8' }}>
                    Bachelor of Computer Applications (BCA) • Deoria
                  </p>
                </div>
              </div>

              {/* Floating Tech Badge 1: React */}
              <div 
                className="glass-card animate-float"
                style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '-20px',
                  padding: '0.6rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                  borderRadius: '0.85rem'
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>⚛️</span>
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>Frontend</p>
                  <p style={{ fontSize: '0.88rem', fontWeight: 700, color: '#38bdf8', margin: 0 }}>React.js</p>
                </div>
              </div>

              {/* Floating Tech Badge 2: Python */}
              <div 
                className="glass-card animate-float-delayed"
                style={{
                  position: 'absolute',
                  top: '30%',
                  right: '-25px',
                  padding: '0.6rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  border: '1px solid rgba(99, 102, 241, 0.35)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                  borderRadius: '0.85rem'
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>🐍</span>
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>Language</p>
                  <p style={{ fontSize: '0.88rem', fontWeight: 700, color: '#818cf8', margin: 0 }}>Python</p>
                </div>
              </div>

              {/* Floating Tech Badge 3: SQL Database */}
              <div 
                className="glass-card animate-float"
                style={{
                  position: 'absolute',
                  bottom: '-18px',
                  left: '10px',
                  padding: '0.6rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                  borderRadius: '0.85rem'
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>🗄️</span>
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>Backend</p>
                  <p style={{ fontSize: '0.88rem', fontWeight: 700, color: '#34d399', margin: 0 }}>SQL Database</p>
                </div>
              </div>

              {/* Floating Tech Badge 4: C++ & Java */}
              <div 
                className="glass-card animate-float-delayed"
                style={{
                  position: 'absolute',
                  bottom: '40px',
                  right: '-20px',
                  padding: '0.5rem 0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  border: '1px solid rgba(244, 63, 94, 0.3)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                  borderRadius: '0.85rem'
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>☕</span>
                <p style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f43f5e', margin: 0 }}>Java / C++</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
