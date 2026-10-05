import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '0.5rem'
      }}
    >
      {/* Small floating tooltip note */}
      {showTooltip && (
        <div
          style={{
            background: 'rgba(11, 15, 25, 0.92)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(16, 185, 129, 0.35)',
            borderRadius: '0.75rem',
            padding: '0.5rem 0.85rem',
            boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            animation: 'float-slow 4s ease-in-out infinite'
          }}
        >
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
          <span style={{ fontSize: '0.8rem', color: '#f8fafc', fontWeight: 500 }}>
            Chat with Aditya on WhatsApp
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              padding: '0.1rem',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${personalInfo.phoneRaw}?text=Hello%20Aditya,%20I%20am%20reaching%20out%20from%20your%20portfolio.`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          boxShadow: '0 8px 24px rgba(16, 185, 129, 0.45), 0 0 20px rgba(16, 185, 129, 0.3)',
          border: '2px solid rgba(255, 255, 255, 0.25)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          textDecoration: 'none'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1) translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 12px 30px rgba(16, 185, 129, 0.6)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1) translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(16, 185, 129, 0.45)';
        }}
        title="Chat on WhatsApp (+91 8318564652)"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
