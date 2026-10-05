import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  GraduationCap, 
  MapPin, 
  Languages, 
  Heart, 
  Code, 
  Terminal, 
  Sparkles, 
  Award, 
  CheckCircle,
  Plane,
  Music,
  Brain,
  Cpu
} from 'lucide-react';

export default function About() {
  const getHobbyIcon = (iconName) => {
    switch (iconName) {
      case 'Plane': return <Plane size={18} color="#38bdf8" />;
      case 'Music': return <Music size={18} color="#a855f7" />;
      case 'Brain': return <Brain size={18} color="#f43f5e" />;
      case 'Cpu': return <Cpu size={18} color="#10b981" />;
      default: return <Sparkles size={18} color="#6366f1" />;
    }
  };

  return (
    <section id="about" className="section-py" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="glass-pill" style={{ marginBottom: '0.75rem' }}>
            <Sparkles size={14} color="#6366f1" />
            <span>Know Me Better</span>
          </div>
          <h2 className="gradient-text" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800 }}>
            About Myself & Background
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '620px', margin: '0.5rem auto 0 auto', fontSize: '1.02rem' }}>
            A disciplined Computer Applications graduate and Software Engineer driven by a passion for clean architecture and practical digital solutions.
          </p>
        </div>

        {/* Top Grid: Bio Narrative & Interactive Code Terminal */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}
        >
          
          {/* Left Card: Who I Am & Key Highlights */}
          <div className="glass-card" style={{ padding: '2.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div 
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(99, 102, 241, 0.15)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Code size={20} color="#818cf8" />
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#f8fafc' }}>
                Engineering Mindset
              </h3>
            </div>

            <p style={{ color: '#cbd5e1', lineHeight: 1.75, marginBottom: '1.25rem', fontSize: '1rem' }}>
              I am a <strong>Software Engineer</strong> with proficiency in a variety of programming languages and a proven track record of delivering high-quality, maintainable code.
            </p>

            <p style={{ color: '#94a3b8', lineHeight: 1.75, marginBottom: '1.75rem', fontSize: '0.96rem' }}>
              I excel in analytical problem-solving, structured database modeling, and translating client objectives into intuitive web software. Being a proactive communicator, I relish collaborating within agile, cross-functional teams to build outstanding digital products.
            </p>

            {/* Feature Bullets */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle size={16} color="#10b981" />
                <span style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: 500 }}>High Code Standards</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle size={16} color="#10b981" />
                <span style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: 500 }}>Full-Stack Capability</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle size={16} color="#10b981" />
                <span style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: 500 }}>Fast Problem Solver</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle size={16} color="#10b981" />
                <span style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: 500 }}>Collaborative Teammate</span>
              </div>
            </div>

          </div>

          {/* Right Card: Code Terminal Profile */}
          <div 
            className="glass-card-static" 
            style={{ 
              padding: '0', 
              overflow: 'hidden',
              background: '#0d1322',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            {/* Terminal Header */}
            <div 
              style={{
                background: 'rgba(17, 24, 39, 0.8)',
                padding: '0.85rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }}></span>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }}></span>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8', marginLeft: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                  aditya-profile.ts
                </span>
              </div>
              <Terminal size={16} color="#64748b" />
            </div>

            {/* Terminal Code Body */}
            <div 
              style={{ 
                padding: '1.5rem', 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.88rem',
                lineHeight: 1.8,
                color: '#cbd5e1'
              }}
            >
              <p><span style={{ color: '#818cf8' }}>const</span> <span style={{ color: '#38bdf8' }}>developer</span> = &#123;</p>
              <p style={{ paddingLeft: '1.25rem' }}>
                <span style={{ color: '#94a3b8' }}>name:</span> <span style={{ color: '#34d399' }}>"{personalInfo.name}"</span>,
              </p>
              <p style={{ paddingLeft: '1.25rem' }}>
                <span style={{ color: '#94a3b8' }}>education:</span> <span style={{ color: '#34d399' }}>"Bachelor of Computer Applications (BCA)"</span>,
              </p>
              <p style={{ paddingLeft: '1.25rem' }}>
                <span style={{ color: '#94a3b8' }}>location:</span> <span style={{ color: '#34d399' }}>"Ram Gulam Tola, Deoria, UP"</span>,
              </p>
              <p style={{ paddingLeft: '1.25rem' }}>
                <span style={{ color: '#94a3b8' }}>coreSkills:</span> [
                <span style={{ color: '#fbbf24' }}>'React'</span>, 
                <span style={{ color: '#fbbf24' }}>'Python'</span>, 
                <span style={{ color: '#fbbf24' }}>'SQL'</span>, 
                <span style={{ color: '#fbbf24' }}>'PHP'</span>,
                <span style={{ color: '#fbbf24' }}>'Java'</span>,
                <span style={{ color: '#fbbf24' }}>'C++'</span>
                ],
              </p>
              <p style={{ paddingLeft: '1.25rem' }}>
                <span style={{ color: '#94a3b8' }}>passions:</span> [
                <span style={{ color: '#38bdf8' }}>'Traveling'</span>, 
                <span style={{ color: '#38bdf8' }}>'Music'</span>, 
                <span style={{ color: '#38bdf8' }}>'System Architecture'</span>
                ],
              </p>
              <p style={{ paddingLeft: '1.25rem' }}>
                <span style={{ color: '#94a3b8' }}>mindset:</span> <span style={{ color: '#f43f5e' }}>() =&gt;</span> &#123;
              </p>
              <p style={{ paddingLeft: '2.5rem' }}>
                <span style={{ color: '#818cf8' }}>return</span> <span style={{ color: '#34d399' }}>"Delivering clean, robust code with empathy."</span>;
              </p>
              <p style={{ paddingLeft: '1.25rem' }}>&#125;</p>
              <p>&#125;;</p>
            </div>
          </div>

        </div>

        {/* Middle Grid: Detailed Cards (Location, Education, Languages, Hobbies) */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3.5rem'
          }}
        >
          
          {/* Card 1: Education */}
          <div className="glass-card" style={{ padding: '1.6rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
              <div style={{ padding: '0.5rem', borderRadius: '0.5rem', background: 'rgba(56, 189, 248, 0.15)' }}>
                <GraduationCap size={20} color="#38bdf8" />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc' }}>Education</h4>
            </div>
            <p style={{ fontWeight: 600, color: '#e2e8f0', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
              Bachelor of Computer Applications (BCA)
            </p>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
              Rigorous foundation in Web Development, Database Management, and Software Engineering.
            </p>
          </div>

          {/* Card 2: Address / Location */}
          <div className="glass-card" style={{ padding: '1.6rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
              <div style={{ padding: '0.5rem', borderRadius: '0.5rem', background: 'rgba(244, 63, 94, 0.15)' }}>
                <MapPin size={20} color="#f43f5e" />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc' }}>Location</h4>
            </div>
            <p style={{ fontWeight: 600, color: '#e2e8f0', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
              Ram Gulam Tola, Deoria
            </p>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
              Uttar Pradesh, India (Open to Remote & On-site relocation).
            </p>
          </div>

          {/* Card 3: Languages */}
          <div className="glass-card" style={{ padding: '1.6rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
              <div style={{ padding: '0.5rem', borderRadius: '0.5rem', background: 'rgba(16, 185, 129, 0.15)' }}>
                <Languages size={20} color="#10b981" />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc' }}>Languages</h4>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.9rem', color: '#cbd5e1', fontWeight: 500 }}>English</span>
                <span className="glass-pill" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', color: '#38bdf8' }}>Proficient</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.9rem', color: '#cbd5e1', fontWeight: 500 }}>Hindi</span>
                <span className="glass-pill" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', color: '#34d399' }}>Native / Proficient</span>
              </div>
            </div>
          </div>

          {/* Card 4: Hobbies & Passions */}
          <div className="glass-card" style={{ padding: '1.6rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
              <div style={{ padding: '0.5rem', borderRadius: '0.5rem', background: 'rgba(168, 85, 247, 0.15)' }}>
                <Heart size={20} color="#a855f7" />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc' }}>Interests</h4>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {personalInfo.hobbies.map((h) => (
                <div 
                  key={h.name} 
                  className="glass-pill"
                  style={{ fontSize: '0.8rem', padding: '0.3rem 0.65rem' }}
                >
                  {getHobbyIcon(h.icon)}
                  <span>{h.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Metric Stats Counters */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
            background: 'linear-gradient(135deg, rgba(20, 27, 45, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)',
            padding: '2rem',
            borderRadius: '1.25rem',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          {personalInfo.stats.map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <p 
                className="gradient-text-accent"
                style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1, marginBottom: '0.35rem' }}
              >
                {stat.number}
              </p>
              <p style={{ fontWeight: 600, color: '#f8fafc', fontSize: '0.95rem' }}>
                {stat.label}
              </p>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
