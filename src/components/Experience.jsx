import React from 'react';
import { experiences, education } from '../data/portfolioData';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section-py" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="glass-pill" style={{ marginBottom: '0.75rem' }}>
            <Briefcase size={14} color="#818cf8" />
            <span>Career & Academic Journey</span>
          </div>
          <h2 className="gradient-text" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800 }}>
            Experience & Education
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0.5rem auto 0 auto', fontSize: '1.02rem' }}>
            Practical industry exposure combined with an academic computer science foundation.
          </p>
        </div>

        {/* Two-Column Grid: Left Experience, Right Education */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem'
          }}
        >
          
          {/* Column 1: Work Experience */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
              <div 
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(99, 102, 241, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Briefcase size={20} color="#818cf8" />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#f8fafc' }}>
                Professional Experience
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {experiences.map((exp, idx) => (
                <div 
                  key={idx} 
                  className="glass-card" 
                  style={{
                    padding: '2rem',
                    position: 'relative',
                    borderLeft: '4px solid #6366f1'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc' }}>
                        {exp.role}
                      </h4>
                      <p style={{ color: '#38bdf8', fontWeight: 500, fontSize: '0.95rem' }}>
                        {exp.company}
                      </p>
                    </div>
                    <span 
                      className="glass-pill"
                      style={{ fontSize: '0.78rem', color: '#cbd5e1', padding: '0.25rem 0.65rem' }}
                    >
                      <Calendar size={12} /> {exp.period}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#94a3b8', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                    <MapPin size={13} color="#f43f5e" />
                    <span>{exp.location}</span>
                    <span style={{ margin: '0 0.3rem' }}>•</span>
                    <span style={{ color: '#34d399' }}>{exp.type}</span>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                        <CheckCircle2 size={16} color="#38bdf8" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                        <span style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6 }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    {exp.tech.map((t) => (
                      <span key={t} className="badge-tech" style={{ fontSize: '0.75rem' }}>
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Education & Academic Credentials */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
              <div 
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(56, 189, 248, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <GraduationCap size={20} color="#38bdf8" />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#f8fafc' }}>
                Academic Background
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {education.map((edu, idx) => (
                <div 
                  key={idx} 
                  className="glass-card" 
                  style={{
                    padding: '2rem',
                    borderLeft: '4px solid #38bdf8'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc' }}>
                        {edu.degree}
                      </h4>
                      <p style={{ color: '#818cf8', fontWeight: 500, fontSize: '0.95rem' }}>
                        {edu.institution}
                      </p>
                    </div>
                    <span 
                      className="glass-pill"
                      style={{ fontSize: '0.78rem', color: '#38bdf8', padding: '0.25rem 0.65rem' }}
                    >
                      {edu.badge}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#94a3b8', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                    <MapPin size={13} color="#f43f5e" />
                    <span>{edu.location}</span>
                  </div>

                  <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    {edu.details}
                  </p>

                  {/* Core CS Modules Studied */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1rem', borderRadius: '0.75rem', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <p style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                      Key Focus Areas
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {['Data Structures', 'Algorithms', 'DBMS / SQL', 'Object-Oriented Design', 'Operating Systems', 'Web Tech'].map(item => (
                        <span key={item} className="glass-pill" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
