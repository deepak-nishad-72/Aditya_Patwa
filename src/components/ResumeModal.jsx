import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="glass-card" 
        style={{
          maxWidth: '850px',
          width: '100%',
          height: '88vh',
          background: '#0a0e1a',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          padding: '0',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div 
          style={{
            padding: '1.1rem 1.5rem',
            background: 'rgba(17, 24, 39, 0.9)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div style={{ padding: '0.45rem', borderRadius: '0.5rem', background: 'rgba(99, 102, 241, 0.2)' }}>
              <FileText size={18} color="#818cf8" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                Aditya Patwa - Official Resume
              </h3>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>
                Bachelor of Computer Applications (BCA) • Software Engineer
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href={personalInfo.resume}
              download="Aditya_Patwa_Resume.pdf"
              className="btn-primary"
              style={{
                padding: '0.45rem 1rem',
                fontSize: '0.82rem',
                borderRadius: '0.6rem'
              }}
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                padding: '0.45rem',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body / PDF Viewer */}
        <div style={{ flex: 1, position: 'relative', width: '100%', height: '100%', backgroundColor: '#1e293b' }}>
          <iframe
            src={`${personalInfo.resume}#toolbar=0`}
            title="Aditya Patwa Resume"
            style={{
              width: '100%',
              height: '100%',
              border: 'none'
            }}
          />
        </div>

      </div>
    </div>
  );
}
