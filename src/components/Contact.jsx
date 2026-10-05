import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  Copy, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight,
  User,
  MessageSquare,
  FileText
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    sendToWhatsApp: true,
    sendToEmail: true
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
    copiedField: null
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setStatus(prev => ({ ...prev, copiedField: field }));
    setTimeout(() => setStatus(prev => ({ ...prev, copiedField: null })), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prev => ({ ...prev, submitting: true, error: null }));

    try {
      // 1. Prepare WhatsApp formatted message
      const whatsappText = `*New Inquiry for Aditya Patwa*\n` +
        `--------------------------------\n` +
        `👤 *Name:* ${formData.name}\n` +
        `📧 *Email:* ${formData.email}\n` +
        `📱 *Phone:* ${formData.phone || 'Not provided'}\n` +
        `📌 *Subject:* ${formData.subject || 'Portfolio Inquiry'}\n` +
        `💬 *Message:*\n${formData.message}\n` +
        `--------------------------------\n` +
        `Sent via Aditya Patwa's Portfolio Website`;

      const whatsappUrl = `https://wa.me/${personalInfo.phoneRaw}?text=${encodeURIComponent(whatsappText)}`;

      // 2. Dispatch email to adityapatwa4652@gmail.com using asynchronous FormSubmit API
      if (formData.sendToEmail) {
        fetch('https://formsubmit.co/ajax/adityapatwa4652@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject || 'New Contact from Portfolio',
            message: formData.message,
            _subject: `New Portfolio Message from ${formData.name}`,
            _template: 'table'
          })
        }).catch(err => console.log('Email delivery background status:', err));
      }

      // 3. Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });

      setStatus({
        submitting: false,
        submitted: true,
        error: null,
        copiedField: null
      });

      // 4. Open WhatsApp window if enabled
      if (formData.sendToWhatsApp) {
        setTimeout(() => {
          window.open(whatsappUrl, '_blank');
        }, 600);
      }

    } catch (err) {
      console.error(err);
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Something went wrong. You can connect directly via WhatsApp or Email.',
        copiedField: null
      });
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      sendToWhatsApp: true,
      sendToEmail: true
    });
    setStatus({
      submitting: false,
      submitted: false,
      error: null,
      copiedField: null
    });
  };

  return (
    <section id="contact" className="section-py" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="glass-pill" style={{ marginBottom: '0.75rem' }}>
            <Sparkles size={14} color="#10b981" />
            <span>Let's Build Something Great</span>
          </div>
          <h2 className="gradient-text" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800 }}>
            Get In Touch & Connect
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '620px', margin: '0.5rem auto 0 auto', fontSize: '1.02rem' }}>
            Whether you have a job opportunity, project idea, freelance collaboration, or question, feel free to reach out anytime!
          </p>
        </div>

        {/* Two-Column Grid: Contact Information & Smart Form */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem'
          }}
        >
          
          {/* Left Column: Direct Channels & Information */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', marginBottom: '1rem' }}>
                Contact Channels
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                I am actively responsive on both Email and WhatsApp. Click to call, message, or copy details instantly.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                {/* Email Card */}
                <div 
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    borderRadius: '0.85rem',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ padding: '0.55rem', borderRadius: '0.65rem', background: 'rgba(56, 189, 248, 0.15)' }}>
                      <Mail size={20} color="#38bdf8" />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: 0 }}>Direct Email</p>
                      <a 
                        href={`mailto:${personalInfo.email}`} 
                        style={{ color: '#f8fafc', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(personalInfo.email, 'contactEmail')}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#cbd5e1',
                      padding: '0.45rem 0.75rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.78rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    {status.copiedField === 'contactEmail' ? (
                      <>
                        <CheckCircle2 size={13} color="#10b981" />
                        <span style={{ color: '#10b981' }}>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Phone & WhatsApp Card */}
                <div 
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    borderRadius: '0.85rem',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ padding: '0.55rem', borderRadius: '0.65rem', background: 'rgba(16, 185, 129, 0.15)' }}>
                      <Phone size={20} color="#10b981" />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: 0 }}>Phone & WhatsApp</p>
                      <a 
                        href={`tel:${personalInfo.phone}`} 
                        style={{ color: '#f8fafc', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.4rem' }}>
                    <button
                      onClick={() => copyToClipboard(personalInfo.phone, 'contactPhone')}
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#cbd5e1',
                        padding: '0.45rem 0.75rem',
                        borderRadius: '0.5rem',
                        fontSize: '0.78rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      {status.copiedField === 'contactPhone' ? (
                        <>
                          <CheckCircle2 size={13} color="#10b981" />
                          <span style={{ color: '#10b981' }}>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`https://wa.me/${personalInfo.phoneRaw}?text=Hello%20Aditya,%20I%20would%20like%20to%20connect%20with%20you.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: 'rgba(16, 185, 129, 0.15)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        color: '#34d399',
                        padding: '0.45rem 0.75rem',
                        borderRadius: '0.5rem',
                        fontSize: '0.78rem',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontWeight: 600
                      }}
                    >
                      <MessageCircle size={13} />
                      <span>Chat</span>
                    </a>
                  </div>
                </div>

                {/* Location / Address Card */}
                <div 
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    borderRadius: '0.85rem',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem'
                  }}
                >
                  <div style={{ padding: '0.55rem', borderRadius: '0.65rem', background: 'rgba(244, 63, 94, 0.15)' }}>
                    <MapPin size={20} color="#f43f5e" />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: 0 }}>Location & Address</p>
                    <p style={{ color: '#f8fafc', fontWeight: 600, fontSize: '0.92rem', margin: 0 }}>
                      {personalInfo.address}
                    </p>
                  </div>
                </div>

              </div>

              {/* Guarantees Badges */}
              <div 
                style={{
                  marginTop: '1.75rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.85rem' }}>
                  <Clock size={15} color="#38bdf8" />
                  <span>Rapid Response Rate (Within a few hours)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.85rem' }}>
                  <ShieldCheck size={15} color="#10b981" />
                  <span>Verified Email: adityapatwa4652@gmail.com</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Smart Animated Contact Form */}
          <div className="glass-card" style={{ padding: '2.25rem' }}>
            
            {status.submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div 
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem auto'
                  }}
                >
                  <CheckCircle2 size={36} color="#10b981" />
                </div>

                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
                  Message Transmitted Successfully!
                </h3>

                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Thank you, <strong>{formData.name}</strong>. Your message has been sent to <strong>{personalInfo.email}</strong> and formatted for WhatsApp (<strong>{personalInfo.phone}</strong>).
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <a
                    href={`https://wa.me/${personalInfo.phoneRaw}?text=Hi%20Aditya,%20I%20just%20submitted%20the%20form%20on%20your%20website.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                  >
                    <MessageCircle size={16} /> Open WhatsApp Chat
                  </a>

                  <button
                    onClick={handleReset}
                    className="btn-secondary"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.25rem' }}>
                  Send a Message
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginTop: '-0.75rem', marginBottom: '0.5rem' }}>
                  Submitting will automatically send an email to <span style={{ color: '#38bdf8' }}>adityapatwa4652@gmail.com</span> and open WhatsApp to <span style={{ color: '#34d399' }}>+91 8318564652</span>.
                </p>

                {/* Name Field */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.4rem' }}>
                    Your Name <span style={{ color: '#f43f5e' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma / Tech Recruiter"
                    className="glass-input"
                  />
                </div>

                {/* Email and Phone Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.4rem' }}>
                      Your Email <span style={{ color: '#f43f5e' }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="glass-input"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.4rem' }}>
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                      className="glass-input"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.4rem' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity / Web Development"
                    className="glass-input"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.4rem' }}>
                    Your Message <span style={{ color: '#f43f5e' }}>*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Aditya, I'd like to collaborate on a software project..."
                    className="glass-input"
                    style={{ resize: 'vertical' }}
                  ></textarea>
                </div>

                {/* Notification Options */}
                <div 
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    padding: '0.85rem',
                    borderRadius: '0.75rem',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}
                >
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.82rem', color: '#cbd5e1', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      name="sendToEmail"
                      checked={formData.sendToEmail}
                      onChange={handleChange}
                      style={{ accentColor: '#6366f1', width: '15px', height: '15px' }}
                    />
                    <span>Send copy to email (adityapatwa4652@gmail.com)</span>
                  </label>

                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.82rem', color: '#cbd5e1', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      name="sendToWhatsApp"
                      checked={formData.sendToWhatsApp}
                      onChange={handleChange}
                      style={{ accentColor: '#10b981', width: '15px', height: '15px' }}
                    />
                    <span>Open WhatsApp with formatted message (+91 8318564652)</span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.9rem',
                    fontSize: '1rem',
                    marginTop: '0.5rem'
                  }}
                >
                  {status.submitting ? (
                    <span>Sending Notification...</span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Submit & Send (Email + WhatsApp)</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
