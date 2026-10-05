import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  CheckCircle, 
  Sparkles, 
  Eye, 
  X,
  Code2
} from 'lucide-react';

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Full Stack', 'Web Apps', 'Database & Python', 'Computer Science'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-py" style={{ position: 'relative' }}>
      {/* Ambient background light */}
      <div className="ambient-glow-3"></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="glass-pill" style={{ marginBottom: '0.75rem' }}>
            <FolderGit2 size={14} color="#6366f1" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="gradient-text" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800 }}>
            Highlighted Projects & Creations
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '620px', margin: '0.5rem auto 0 auto', fontSize: '1.02rem' }}>
            A curated showcase of full-stack systems, interactive web applications, and database-driven solutions.
          </p>
        </div>

        {/* Category Filters */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.65rem',
            marginBottom: '3rem'
          }}
        >
          {categories.map((cat) => {
            const isSelected = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: '9999px',
                  border: isSelected ? '1px solid #6366f1' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isSelected ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.4) 0%, rgba(56, 189, 248, 0.25) 100%)' : 'rgba(255, 255, 255, 0.03)',
                  color: isSelected ? '#ffffff' : '#94a3b8',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem'
          }}
        >
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
              }}
            >
              
              {/* Project Image Banner */}
              <div 
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '210px',
                  overflow: 'hidden',
                  backgroundColor: '#0f172a'
                }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                
                {/* Category Badge overlay */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(11, 15, 25, 0.85)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#38bdf8',
                    border: '1px solid rgba(56, 189, 248, 0.3)'
                  }}
                >
                  {project.category}
                </div>

                {/* Overlay Action Buttons */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '12px',
                    display: 'flex',
                    gap: '0.5rem'
                  }}
                >
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="glass-pill"
                    style={{
                      padding: '0.35rem 0.7rem',
                      background: 'rgba(11, 15, 25, 0.85)',
                      color: '#ffffff',
                      cursor: 'pointer',
                      fontSize: '0.78rem'
                    }}
                    title="Quick Details"
                  >
                    <Eye size={13} color="#38bdf8" /> Details
                  </button>
                </div>
              </div>

              {/* Project Content Body */}
              <div 
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.65rem' }}>
                    {project.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {project.description}
                  </p>

                  {/* Feature highlights preview */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.25rem' }}>
                    {project.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <CheckCircle size={14} color="#10b981" style={{ flexShrink: 0 }} />
                        <span style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {project.tags.map((tag) => (
                      <span key={tag} className="badge-tech">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link Footer */}
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    <button
                      onClick={() => setActiveModalProject(project)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#38bdf8',
                        fontWeight: 600,
                        fontSize: '0.88rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      <span>Explore System</span>
                      <ExternalLink size={14} />
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-pill"
                      style={{
                        textDecoration: 'none',
                        fontSize: '0.8rem',
                        color: '#e2e8f0',
                        padding: '0.35rem 0.75rem'
                      }}
                    >
                      <GithubIcon size={13} />
                      <span>Source</span>
                    </a>
                  </div>

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
        <div className="modal-backdrop" onClick={() => setActiveModalProject(null)}>
          <div 
            className="glass-card" 
            style={{ 
              maxWidth: '680px', 
              width: '100%', 
              background: '#0d1322',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '2rem',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                padding: '0.4rem',
                borderRadius: '0.5rem',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>

            {/* Modal Image */}
            <div style={{ width: '100%', height: '240px', borderRadius: '0.85rem', overflow: 'hidden', marginBottom: '1.5rem' }}>
              <img 
                src={activeModalProject.image} 
                alt={activeModalProject.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div className="glass-pill" style={{ marginBottom: '0.75rem', color: '#38bdf8' }}>
              {activeModalProject.category}
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.75rem' }}>
              {activeModalProject.title}
            </h3>

            <p style={{ color: '#cbd5e1', lineHeight: 1.7, fontSize: '0.98rem', marginBottom: '1.5rem' }}>
              {activeModalProject.description}
            </p>

            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>
              Key Architectural Features:
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
              {activeModalProject.features.map((feat, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <CheckCircle size={16} color="#10b981" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <span style={{ color: '#e2e8f0', fontSize: '0.92rem' }}>{feat}</span>
                </li>
              ))}
            </ul>

            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>
              Technologies Utilized:
            </h4>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '2rem' }}>
              {activeModalProject.tags.map(t => (
                <span key={t} className="badge-tech">{t}</span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href={`https://wa.me/918318564652?text=Hello%20Aditya,%20I%20would%20like%20to%20know%20more%20about%20your%20project:%20${encodeURIComponent(activeModalProject.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ flex: 1 }}
              >
                Discuss on WhatsApp
              </a>
              <button 
                onClick={() => setActiveModalProject(null)}
                className="btn-secondary"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
