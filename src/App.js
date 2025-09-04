import React, { useState, useEffect } from 'react';
import Header from './components/shere/Header';
import Footer from './components/shere/Footer';
import HeroSection from './components/pages/Home/HeroSection';
import KeyFeaturesSection from './components/pages/Home/KeyFeaturesSection';
import PrivacySection from './components/pages/Home/PrivacySection';
import EverydayUseSection from './components/pages/Home/EverydayUseSection';
import FAQSection from './components/pages/Home/FAQSection';
import FinallySection from './components/pages/Home/FinallySection';
import TakeBackPrivacySection from './components/pages/Home/TakeBackPrivacySection';

const HIROHWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobile, setIsMobile] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState(null);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: 'var(--bg-primary)',
      fontFamily: '"Montserrat", sans-serif',
      overflowX: 'hidden'
    },
    imageSection: {
      position: 'relative',
      minHeight: isMobile ? '50vh' : '100vh',
      backgroundImage: `url(${process.env.PUBLIC_URL}/images/hiroh-phone-9.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    imageOverlay: {
      position: 'absolute',
      inset: 0,
    },
    imageContent: {
      position: 'relative',
      zIndex: 1,
      color: 'var(--text-white)',
      textAlign: 'center',
      top: '50%',
      transform: 'translateY(-50%)',
    }    
  };



  const HomePage = () => (
    <>
      <HeroSection setCurrentPage={setCurrentPage} isMobile={isMobile} />
      <KeyFeaturesSection isMobile={isMobile} />
      
      <section style={styles.imageSection}>
        <div style={styles.imageOverlay} />
        <div style={styles.imageContent}>
        </div>
      </section>
      <PrivacySection isMobile={isMobile} />
      <EverydayUseSection isMobile={isMobile} />
      <FAQSection isMobile={isMobile} />
      <FinallySection isMobile={isMobile} />
      <TakeBackPrivacySection isMobile={isMobile} />
    </>
  );

  const ContactPage = () => {
    const [formStatus, setFormStatus] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);

      try {
        const response = await fetch('https://formspree.io/f/xgvlopqg', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          setFormStatus('success');
          form.reset();
        } else {
          setFormStatus('error');
        }
      } catch (error) {
        setFormStatus('error');
      }
    };

    return (
      <section style={{ paddingTop: '120px', padding: '120px 2rem 4rem', backgroundColor: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h1 style={styles.sectionTitle}>Contact Us</h1>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
            Have questions about HIROH? We're here to help.
          </p>

          {formStatus === 'success' && (
            <div style={{
              backgroundColor: 'var(--color-green)',
              color: 'var(--text-white)',
              padding: '1rem',
              borderRadius: '0.5rem',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              Thank you! We'll get back to you soon.
            </div>
          )}

          {formStatus === 'error' && (
            <div style={{
              backgroundColor: 'var(--color-red)',
              color: 'var(--text-white)',
              padding: '1rem',
              borderRadius: '0.5rem',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              Something went wrong. Please try again.
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: 'var(--bg-white)',
              padding: '2rem',
              borderRadius: '1rem',
              boxShadow: '0 10px 30px var(--color-black-10)'
            }}
          >
            {/* Hidden Formspree configuration fields */}
            <input type="hidden" name="_subject" value="New Contact from HIROH Website" />
            <input type="hidden" name="_captcha" value="true" />

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-gray-700)', fontWeight: '500' }}>
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid var(--color-gray-300)',
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-gray-700)', fontWeight: '500' }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid var(--color-gray-300)',
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-gray-700)', fontWeight: '500' }}>
                Subject
              </label>
              <select
                name="subject"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid var(--color-gray-300)',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  backgroundColor: 'white'
                }}
              >
                <option value="">Select a topic</option>
                <option value="sales">Sales Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="business">Business/Partnership</option>
                <option value="media">Media/Press</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-gray-700)', fontWeight: '500' }}>
                Message
              </label>
              <textarea
                name="message"
                required
                rows="5"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid var(--color-gray-300)',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '1rem',
                backgroundColor: 'var(--bg-teal)',
                color: 'var(--text-white)',
                border: 'none',
                borderRadius: '0.5rem',
                fontSize: '1.125rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--color-primary-teal-hover)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--bg-teal)'}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };

  // Extracted: Government & Military extras
  function GovtMilitaryExtras({ styles = {} }) {
    const heroBg =
      'linear-gradient(135deg, var(--color-gray-900), var(--color-gray-800)), url(/images/gov-hero-bg.jpg) center/cover no-repeat';

    const steelBg =
      'linear-gradient(135deg, var(--color-gray-600), var(--color-gray-800)), url(/images/steel-texture.jpg) center/cover no-repeat';

    const cardBase = {
      backgroundColor: 'var(--color-white-90)',
      border: '1px solid var(--color-gray-200)',
      borderRadius: '1rem',
      padding: '2rem',
      boxShadow: '0 8px 24px var(--color-black-08)',
    };

    const btn = {
      padding: '0.875rem 1.5rem',
      borderRadius: '0.75rem',
      fontWeight: 600,
      border: '1px solid transparent',
      cursor: 'pointer',
    };

    const btnPrimary = {
      ...btn,
      backgroundColor: 'var(--color-green)',
      color: 'var(--text-white)',
    };

    const btnGhost = {
      ...btn,
      backgroundColor: 'transparent',
      color: 'var(--text-white)',
      borderColor: 'var(--color-white-35)',
    };

    return (
      <>
        {/* Hero Section (Top Banner) */}
        <section style={{ background: heroBg, color: 'var(--text-white)', padding: '6rem 2rem' }}>
          <div style={{ ...(styles.section || {}), textAlign: 'center' }}>
            <h1 style={{ fontWeight: 800, marginBottom: '0.75rem' }}>HIROH: Your Mobile SCIF</h1>
            <p style={{ fontSize: '1.25rem', opacity: 0.95, marginBottom: '2rem' }}>
              Military-grade privacy, anywhere you go.
            </p>

            <div
              style={{
                maxWidth: 900,
                margin: '0 auto 2rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.5rem',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  background: 'var(--color-white-06)',
                  border: '1px solid var(--color-white-15)',
                  borderRadius: '1rem',
                  padding: '1rem',
                }}
              >
                <img
                  src={`${process.env.PUBLIC_URL || ''}/images/hiroh-phone-hero.png`}
                  alt="HIROH phone with secure overlay"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              </div>

              <div style={{ textAlign: 'left', padding: '0 0.25rem' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '999px',
                    background: 'var(--color-teal-15)',
                    border: '1px solid var(--color-teal-35)',
                    fontSize: '0.9rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  <span>🛡️</span> <span>SCIF-inspired protection</span>
                </div>
                <p style={{ lineHeight: 1.7, color: 'rgba(255,255,255,0.9)' }}>
                  Physical kill switches, hardened firmware, and zero trust defaults.
                  HIROH brings compartmented security to a device you can carry anywhere.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button style={btnPrimary}>Request a Government Demo</button>
            </div>
          </div>
        </section>

        {/* Section 1 – What is a Mobile SCIF? */}
        <section style={{ backgroundColor: '#0b1220', color: 'var(--text-white)', padding: '4.5rem 2rem' }}>
          <div
            style={{
              ...(styles.section || {}),
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                background:
                  'radial-gradient(1200px 400px at 50% -50%, rgba(16,185,129,0.15), transparent), rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '1rem',
                padding: '1rem',
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL || ''}/images/hiroh-phone-closeup.png`}
                alt="Phone close-up with shield glow"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            </div>

            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                Sensitive Compartmented Information Facilities — Reimagined
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, marginBottom: '1rem' }}>
                HIROH replicates SCIF-level safeguards in a pocket device, enforcing physical separation and
                hardware-enforced privacy for high-stakes users and missions.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.75rem' }}>
                {[
                  'Hardware kill switches (mic, cam, GPS, Wi-Fi, Bluetooth)',
                  'Zero remote exploit risk',
                  'Built for high-stakes users',
                ].map((t) => (
                  <li key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span
                      style={{
                        width: '0.5rem',
                        height: '0.5rem',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-green)', // subtle green accent
                      }}
                    />
                    <span style={{ color: 'rgba(255,255,255,0.9)' }}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2 – Role-Specific Benefits */}
        <section style={{ backgroundColor: '#0e1628', color: 'var(--text-white)', padding: '4.5rem 2rem' }}>
          <div style={{ ...(styles.section || {}) }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Role-Specific Benefits</h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {[
                { title: 'Politicians & Diplomats', text: 'Secure negotiations, safe travel.' },
                { title: 'Military & Defense', text: 'Secure ops in the field.' },
                { title: 'Government Agencies', text: 'Deployable security at scale.' },
                { title: 'Journalists', text: 'Protect sources in conflict zones.' },
              ].map((c) => (
                <div key={c.title} style={cardBase}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{c.icon}</div>
                  <h4 style={{ color: 'var(--text-primary)', margin: 0, marginBottom: '0.25rem', fontWeight: 700 }}>{c.title}</h4>
                  <p style={{ color: 'var(--text-tertiary)', margin: 0 }}>{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 – Technology Advantages */}
        <section style={{ backgroundColor: '#0b1220', color: 'var(--text-white)', padding: '4.5rem 2rem' }}>
          <div
            style={{
              ...(styles.section || {}),
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '1rem',
                padding: '1rem',
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL || ''}/images/kill-switch-diagram.png`}
                alt="Kill switch circuit cutoff diagram"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            </div>

            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>Unhackable by Design</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.75 }}>
                Software can be bypassed; physics can’t. HIROH’s hardware kill switches cut the electrical path to
                microphones and cameras. When the circuit is open, those sensors are inert—no app, exploit, or baseband
                trick can re-enable them.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 – Callout Banner */}
        <section style={{ background: steelBg, color: 'var(--text-white)', padding: '4rem 2rem' }}>
          <div style={{ ...(styles.section || {}) }}>
            <blockquote
              style={{
                margin: 0,
                fontSize: '1.35rem',
                lineHeight: 1.8,
                textAlign: 'center',
                maxWidth: 900,
                marginInline: 'auto',
              }}
            >
              “If the circuit is off, it’s off. No app. No malware. No spy can turn it back on.”
            </blockquote>
          </div>
        </section>

        {/* Section 5 – Deployment & Procurement */}
        <section style={{ backgroundColor: '#0e1628', color: 'var(--text-white)', padding: '4.5rem 2rem' }}>
          <div
            style={{
              ...(styles.section || {}),
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              alignItems: 'center',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                Deployment & Procurement
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.75 }}>
                Built for fleet rollout with secure provisioning, device management, and long-term support. Our team
                partners with defense and government programs to meet mission requirements at scale.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button style={btnPrimary}>Contact Defense Sales</button>
              <button style={btnGhost}>Government Procurement Inquiries</button>
            </div>
          </div>
        </section>

        {/* Final Call to Action (Bottom Banner) */}
        <section style={{ backgroundColor: '#111827', color: 'var(--text-white)', padding: '5rem 2rem' }}>
          <div style={{ ...(styles.section || {}), textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              HIROH. SCIF-level security in your pocket.
            </h3>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.85)', marginBottom: '1.5rem' }}>
              Trusted by leaders, soldiers, and truth-seekers worldwide.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button style={btnPrimary}>Request Demo</button>
              <button style={btnGhost}>Talk to Sales</button>
            </div>
          </div>
        </section>
      </>
    );
  }

  const PhoneSpecsPage = () => (
    <>
      <section
        style={{
          position: 'relative',
          paddingTop: '120px',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'var(--text-white)',
          backgroundImage: `
      linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.3) 100%),
      url(${process.env.PUBLIC_URL}/images/hiroh-phone-12.jpg)
    `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div style={{ padding: '2rem', borderRadius: '1rem', marginBottom: '20rem' }}>
          <h1 style={{ ...styles.sectionTitle, color: 'var(--text-white)' }}>The HIROH Phone</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-white)' }}>
            Currently viewing:{' '}
            <strong>
              {selectedSegment === 'govt-military'
                ? 'Government & Military'
                : selectedSegment === 'business'
                  ? 'Business'
                  : selectedSegment === 'journalists'
                    ? 'Journalists'
                    : 'Individuals'}
            </strong>{' '}
            specifications
          </p>
        </div>
      </section>

      {selectedSegment === 'govt-military' && <GovtMilitaryExtras styles={styles} />
      }

      {/* Comparison Section */}
      <section style={{ backgroundColor: 'var(--bg-primary)', padding: '6rem 2rem' }}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>How We Compare</h2>
          <p style={{ fontSize: '1.25rem', textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 4rem', lineHeight: '1.6' }}>
            See how HIROH stacks up against flagship competitors.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', maxWidth: '900px', margin: '0 auto', backgroundColor: 'var(--bg-white)', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 10px 30px var(--color-black-10)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-dark)' }}>
                  <th style={{ padding: '1.5rem', color: 'var(--text-white)', textAlign: 'left', fontWeight: '600' }}>Feature</th>
                  <th style={{ padding: '1.5rem', color: 'var(--text-white)', textAlign: 'center', fontWeight: '600' }}>HIROH</th>
                  <th style={{ padding: '1.5rem', color: 'var(--text-white)', textAlign: 'center', fontWeight: '600' }}>Apple/Samsung</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--color-gray-200)' }}>
                  <td style={{ padding: '1.25rem', color: 'var(--color-gray-700)', fontWeight: '500' }}>RAM</td>
                  <td style={{ padding: '1.25rem', textAlign: 'center', color: 'var(--color-primary-teal)', fontWeight: 'bold' }}>16GB</td>
                  <td style={{ padding: '1.25rem', textAlign: 'center', color: 'var(--text-secondary)' }}>8–12GB</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-gray-200)', backgroundColor: 'var(--color-gray-100)' }}>
                  <td style={{ padding: '1.25rem', color: 'var(--color-gray-700)', fontWeight: '500' }}>Storage</td>
                  <td style={{ padding: '1.25rem', textAlign: 'center', color: 'var(--color-primary-teal)', fontWeight: 'bold' }}>512GB + 2TB expandable</td>
                  <td style={{ padding: '1.25rem', textAlign: 'center', color: 'var(--text-secondary)' }}>Max 1TB, no expansion</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-gray-200)' }}>
                  <td style={{ padding: '1.25rem', color: 'var(--color-gray-700)', fontWeight: '500' }}>Privacy Features</td>
                  <td style={{ padding: '1.25rem', textAlign: 'center', color: 'var(--color-primary-teal)', fontWeight: 'bold' }}>Hardware kill switches</td>
                  <td style={{ padding: '1.25rem', textAlign: 'center', color: 'var(--text-secondary)' }}>Software controls only</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-gray-200)', backgroundColor: 'var(--color-gray-100)' }}>
                  <td style={{ padding: '1.25rem', color: 'var(--color-gray-700)', fontWeight: '500' }}>Data Collection</td>
                  <td style={{ padding: '1.25rem', textAlign: 'center', color: 'var(--color-primary-teal)', fontWeight: 'bold' }}>Zero tracking</td>
                  <td style={{ padding: '1.25rem', textAlign: 'center', color: 'var(--text-secondary)' }}>Extensive data mining</td>
                </tr>
                <tr>
                  <td style={{ padding: '1.25rem', color: 'var(--color-gray-700)', fontWeight: '500' }}>Pricing</td>
                  <td style={{ padding: '1.25rem', textAlign: 'center', color: 'var(--color-primary-teal)', fontWeight: 'bold' }}></td>
                  <td style={{ padding: '1.25rem', textAlign: 'center', color: 'var(--text-secondary)' }}></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section >

      <section style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-white)', padding: '6rem 2rem' }}>
        <div style={styles.section}>
          {/* Detailed Specs Section */}
          <div style={{
            backgroundColor: 'var(--bg-white)',
            borderRadius: '1rem',
            boxShadow: 'var(--shadow-light)',
            padding: '3rem',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '3rem',
              color: 'var(--text-primary)',
              borderBottom: '3px solid #0d9488',
              paddingBottom: '1rem'
            }}>
              Detailed Specifications
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '3rem'
            }}>
              {/* Performance */}
              <div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--color-primary-teal)',
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Performance
                </h3>
                <dl style={{ margin: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--color-gray-200)' }}>
                    <dt style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>RAM</dt>
                    <dd style={{ color: 'var(--text-primary)', fontWeight: '600', margin: 0 }}>16GB</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--color-gray-200)' }}>
                    <dt style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Internal Storage</dt>
                    <dd style={{ color: 'var(--text-primary)', fontWeight: '600', margin: 0 }}>512GB</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--color-gray-200)' }}>
                    <dt style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Expandable Storage</dt>
                    <dd style={{ color: 'var(--text-primary)', fontWeight: '600', margin: 0 }}>Up to 2TB</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--color-gray-200)' }}>
                    <dt style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Processor</dt>
                    <dd style={{ color: 'var(--text-primary)', fontWeight: '600', margin: 0 }}>MediaTek Dimensity 8300</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--color-gray-200)' }}>
                    <dt style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Operating System</dt>
                    <dd style={{ color: 'var(--text-primary)', fontWeight: '600', margin: 0 }}>e/OS</dd>
                  </div>
                </dl>
              </div>

              {/* Camera */}
              <div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--color-primary-teal)',
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Camera
                </h3>
                <dl style={{ margin: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--color-gray-200)' }}>
                    <dt style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Rear Main</dt>
                    <dd style={{ color: 'var(--text-primary)', fontWeight: '600', margin: 0 }}>108MP Samsung</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--color-gray-200)' }}>
                    <dt style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Wide Angle</dt>
                    <dd style={{ color: 'var(--text-primary)', fontWeight: '600', margin: 0 }}>13MP</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--color-gray-200)' }}>
                    <dt style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Macro</dt>
                    <dd style={{ color: 'var(--text-primary)', fontWeight: '600', margin: 0 }}>2MP</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--color-gray-200)' }}>
                    <dt style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Front</dt>
                    <dd style={{ color: 'var(--text-primary)', fontWeight: '600', margin: 0 }}>32MP Sony</dd>
                  </div>
                </dl>
              </div>

              {/* Display */}
              <div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--color-primary-teal)',
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Display
                </h3>
                <dl style={{ margin: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--color-gray-200)' }}>
                    <dt style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Size</dt>
                    <dd style={{ color: 'var(--text-primary)', fontWeight: '600', margin: 0 }}>6.67" AMOLED</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--color-gray-200)' }}>
                    <dt style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Refresh Rate</dt>
                    <dd style={{ color: 'var(--text-primary)', fontWeight: '600', margin: 0 }}>120Hz</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--color-gray-200)' }}>
                    <dt style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Brightness</dt>
                    <dd style={{ color: 'var(--text-primary)', fontWeight: '600', margin: 0 }}>600 nits (1800 peak)</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--color-gray-200)' }}>
                    <dt style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Resolution</dt>
                    <dd style={{ color: 'var(--text-primary)', fontWeight: '600', margin: 0 }}>2400 x 1080</dd>
                  </div>
                </dl>
              </div>

              {/* Security & Privacy */}
              <div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--color-primary-teal)',
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Security & Privacy
                </h3>
                <dl style={{ margin: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--color-gray-200)' }}>
                    <dt style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Encrypted Storage</dt>
                    <dd style={{ color: 'var(--text-primary)', fontWeight: '600', margin: 0 }}>2TB SD Slot</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--color-gray-200)' }}>
                    <dt style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Private Mode</dt>
                    <dd style={{ color: 'var(--text-primary)', fontWeight: '600', margin: 0 }}>Secure Sandbox</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--color-gray-200)' }}>
                    <dt style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Biometric</dt>
                    <dd style={{ color: 'var(--text-primary)', fontWeight: '600', margin: 0 }}>Fingerprint</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--color-gray-200)' }}>
                    <dt style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Tracking</dt>
                    <dd style={{ color: 'var(--text-primary)', fontWeight: '600', margin: 0 }}>Zero Data Harvesting</dd>
                  </div>
                </dl>
              </div>

              {/* Battery */}
              <div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--color-primary-teal)',
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Battery
                </h3>
                <dl style={{ margin: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--color-gray-200)' }}>
                    <dt style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Capacity</dt>
                    <dd style={{ color: 'var(--text-primary)', fontWeight: '600', margin: 0 }}>5000mAh High Density</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--color-gray-200)' }}>
                    <dt style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Fast Charging</dt>
                    <dd style={{ color: 'var(--text-primary)', fontWeight: '600', margin: 0 }}>33W</dd>
                  </div>
                </dl>
              </div>

              {/* Connectivity */}
              <div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--color-primary-teal)',
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Connectivity
                </h3>
                <dl style={{ margin: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--color-gray-200)' }}>
                    <dt style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Network</dt>
                    <dd style={{ color: 'var(--text-primary)', fontWeight: '600', margin: 0 }}>5G Enabled</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--color-gray-200)' }}>
                    <dt style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>WiFi</dt>
                    <dd style={{ color: 'var(--text-primary)', fontWeight: '600', margin: 0 }}>WiFi 6</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--color-gray-200)' }}>
                    <dt style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Bluetooth</dt>
                    <dd style={{ color: 'var(--text-primary)', fontWeight: '600', margin: 0 }}>5.2</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--color-gray-200)' }}>
                    <dt style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Port</dt>
                    <dd style={{ color: 'var(--text-primary)', fontWeight: '600', margin: 0 }}>USB-C</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const AboutPage = () => (
    <section style={{ paddingTop: '120px', backgroundColor: 'var(--bg-dark)', color: 'var(--text-white)', padding: '120px 2rem 4rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Main About Content */}
        <div style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '4rem' }}>
        <h1 style={{ fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center',color: 'var(--text-white)' }}>About HIROH</h1>
          <p style={{ fontSize: '1.5rem', lineHeight: '1.8', marginBottom: '2rem', color: 'var(--color-gray-200)' }}>
            At HIROH, we believe your phone should work for you — not against you. <br></br>Big Tech built devices that spy on, track, and monetize your life. <br></br>We built HIROH to stop that.
          </p>

          <p style={{ fontSize: '1.25rem', lineHeight: '1.8', marginBottom: '2rem', color: 'var(--color-gray-300)' }}>
            We are the <span style={{ color: 'var(--text-white)', fontWeight: 'bold' }}>inventors of the Kill Switch</span> — the world's first hardware system that <span style={{ color: 'var(--text-white)', fontWeight: 'bold' }}>electrically disables your camera and microphone</span> at the circuit level. Not software-controlled. Not a gimmick. A true physical cutoff that no malware, spyware, or hidden app can override.
          </p>

          <p style={{ fontSize: '1.25rem', lineHeight: '1.8', marginBottom: '3rem', color: 'var(--color-gray-300)' }}>
            This is the future of personal technology: <span style={{ color: 'var(--text-white)', fontWeight: 'bold' }}>flagship performance, with uncompromising privacy built into the DNA of the hardware itself.</span>
          </p>
        </div>

        {/* Mission Section */}
        <div
          style={{
            backgroundColor: 'var(--color-white-03)',
            borderRadius: '1rem',
            padding: '3rem',
            maxWidth: '900px',
            margin: '0 auto',
            border: '1px solid var(--color-white-10)',
            backdropFilter: 'blur(6px)'
          }}
        >
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              textAlign: 'center',
              color: 'var(--text-white)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            Our Mission
          </h2>
          <p
            style={{
              fontSize: '1.25rem',
              lineHeight: '1.8',
              textAlign: 'center',
              color: 'var(--color-gray-200)',
            }}
          >
            To give people back control over their digital lives by building technology that
            prioritizes privacy, transparency, and user freedom without sacrificing performance or
            design.
          </p>
        </div>
      </div>
    </section>
  );

  return (
    <div style={styles.container}>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} setSelectedSegment={setSelectedSegment} isMobile={isMobile} />

      {/* Page Content */}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'phone' && <PhoneSpecsPage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
      
      <Footer />
    </div>
  );
};

export default HIROHWebsite;