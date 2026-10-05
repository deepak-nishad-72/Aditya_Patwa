import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { 
  Sparkles, 
  Code2, 
  Layout, 
  Database, 
  Wrench, 
  CheckCircle2, 
  Zap, 
  FileCode, 
  Coffee, 
  Cpu, 
  Server, 
  Atom, 
  Layers, 
  Smartphone,
  HardDrive
} from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'languages': return <Code2 size={18} color="#818cf8" />;
      case 'frontend': return <Layout size={18} color="#38bdf8" />;
      case 'database': return <Database size={18} color="#34d399" />;
      case 'tools': return <Wrench size={18} color="#fbbf24" />;
      default: return <Sparkles size={18} color="#6366f1" />;
    }
  };

  const getSkillIcon = (name) => {
    if (name.includes('Python')) return '🐍';
    if (name.includes('React')) return '⚛️';
    if (name.includes('JavaScript')) return '⚡';
    if (name.includes('HTML')) return '🌐';
    if (name.includes('CSS')) return '🎨';
    if (name.includes('SQL')) return '🗄️';
    if (name.includes('PHP')) return '🐘';
    if (name.includes('JAVA')) return '☕';
    if (name.includes('C++')) return '💻';
    if (name.includes('Git')) return '🌿';
    if (name.includes('Tailwind')) return '🌊';
    return '🚀';
  };

  const categoriesToDisplay = activeTab === 'all' 
    ? skillsData.categories 
    : skillsData.categories.filter(c => c.id === activeTab);

  return (
    <section id="skills" className="section-py" style={{ position: 'relative' }}>
      {/* Background ambient light */}
      <div className="ambient-glow-2"></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="glass-pill" style={{ marginBottom: '0.75rem' }}>
            <Zap size={14} color="#38bdf8" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="gradient-text" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800 }}>
            Skills & Tech Stack
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0.5rem auto 0 auto', fontSize: '1.02rem' }}>
            A versatile spectrum of languages, frameworks, and database technologies honed through practical application and academic rigor.
          </p>
        </div>

        {/* Category Tabs */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.65rem',
            marginBottom: '3rem'
          }}
        >
          <button
            onClick={() => setActiveTab('all')}
            style={{
              padding: '0.6rem 1.3rem',
              borderRadius: '9999px',
              border: activeTab === 'all' ? '1px solid #6366f1' : '1px solid rgba(255, 255, 255, 0.08)',
              background: activeTab === 'all' ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.4) 0%, rgba(56, 189, 248, 0.25) 100%)' : 'rgba(255, 255, 255, 0.03)',
              color: activeTab === 'all' ? '#ffffff' : '#94a3b8',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            All Skills
          </button>

          {skillsData.categories.map((cat) => {
            const isSelected = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 1.3rem',
                  borderRadius: '9999px',
                  border: isSelected ? '1px solid #6366f1' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isSelected ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.4) 0%, rgba(56, 189, 248, 0.25) 100%)' : 'rgba(255, 255, 255, 0.03)',
                  color: isSelected ? '#ffffff' : '#94a3b8',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem'
          }}
        >
          {categoriesToDisplay.map((cat) => (
            <div 
              key={cat.id}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Category Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
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
                    {getCategoryIcon(cat.id)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc' }}>
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1.5rem' }}>
                  {cat.description}
                </p>

                {/* Skills List with Progress Bars */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ fontSize: '1.1rem' }}>{getSkillIcon(skill.name)}</span>
                          <span style={{ fontWeight: 600, fontSize: '0.95rem', color: '#e2e8f0' }}>
                            {skill.name}
                          </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ fontSize: '0.78rem', color: '#38bdf8', fontWeight: 600 }}>
                            {skill.experience}
                          </span>
                          <span style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 500 }}>
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar Track */}
                      <div 
                        style={{
                          width: '100%',
                          height: '6px',
                          background: 'rgba(255, 255, 255, 0.06)',
                          borderRadius: '9999px',
                          overflow: 'hidden',
                          position: 'relative'
                        }}
                      >
                        <div 
                          style={{
                            width: `${skill.level}%`,
                            height: '100%',
                            borderRadius: '9999px',
                            background: 'linear-gradient(90deg, #4f46e5 0%, #38bdf8 100%)',
                            transition: 'width 1s ease-in-out'
                          }}
                        ></div>
                      </div>

                      <p style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '0.25rem' }}>
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Tag Footer */}
              <div 
                style={{
                  marginTop: '1.75rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.4rem'
                }}
              >
                {cat.skills.map(s => (
                  <span key={s.name} className="badge-tech">
                    {s.name}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
