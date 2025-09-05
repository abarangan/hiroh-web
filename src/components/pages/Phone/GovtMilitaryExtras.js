import React from 'react';

const GovtMilitaryExtras = ({ isMobile }) => {
  const heroBg =
    'linear-gradient(135deg, var(--color-gray-900), var(--color-gray-800)), url(/images/gov-hero-bg.jpg) center/cover no-repeat';

  const steelBg =
    'linear-gradient(135deg, var(--color-gray-600), var(--color-gray-800)), url(/images/steel-texture.jpg) center/cover no-repeat';

  const styles = {
    section: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '0 1rem' : '0 2rem',
      boxSizing: 'border-box'
    },
    cardBase: {
      backgroundColor: 'var(--color-white-90)',
      border: '1px solid var(--color-gray-200)',
      borderRadius: '1rem',
      padding: isMobile ? '1.5rem' : '2rem',
      boxShadow: '0 8px 24px var(--color-black-08)',
    },
    btn: {
      padding: isMobile ? '0.75rem 1.25rem' : '0.875rem 1.5rem',
      borderRadius: '0.75rem',
      fontWeight: 600,
      border: '1px solid transparent',
      cursor: 'pointer',
      fontSize: isMobile ? '0.9rem' : '1rem'
    },
    btnPrimary: {
      backgroundColor: 'var(--color-green)',
      color: 'var(--text-white)',
    },
    btnGhost: {
      backgroundColor: 'transparent',
      color: 'var(--text-white)',
      borderColor: 'var(--color-white-35)',
    },
    heroGrid: {
      maxWidth: 900,
      margin: '0 auto 2rem',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: isMobile ? '1rem' : '1.5rem',
      alignItems: 'center',
    },
    heroImageContainer: {
      background: 'var(--color-white-06)',
      border: '1px solid var(--color-white-15)',
      borderRadius: '1rem',
      padding: '1rem',
    },
    heroTextContainer: {
      textAlign: isMobile ? 'center' : 'left',
      padding: isMobile ? '0' : '0 0.25rem'
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem 0.75rem',
      borderRadius: '999px',
      background: 'var(--color-teal-15)',
      border: '1px solid var(--color-teal-35)',
      fontSize: isMobile ? '0.8rem' : '0.9rem',
      marginBottom: '0.75rem',
    },
    heroDescription: {
      lineHeight: 1.7,
      color: 'rgba(255,255,255,0.9)',
      fontSize: isMobile ? '0.9rem' : '1rem'
    },
    buttonContainer: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    sectionDescription: {
      color: 'rgba(255,255,255,0.85)',
      lineHeight: 1.75,
      marginBottom: '1rem',
      fontSize: isMobile ? '0.9rem' : '1rem'
    },
    featureList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'grid',
      gap: '0.75rem'
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    featureDot: {
      width: '0.5rem',
      height: '0.5rem',
      borderRadius: '50%',
      backgroundColor: 'var(--color-green)'
    },
    featureText: {
      color: 'rgba(255,255,255,0.9)',
      fontSize: isMobile ? '0.85rem' : '1rem'
    },
    benefitsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '1rem'
    },
    benefitCard: {
      backgroundColor: 'var(--color-white-90)',
      border: '1px solid var(--color-gray-200)',
      borderRadius: '1rem',
      padding: isMobile ? '1.5rem' : '2rem',
      boxShadow: '0 8px 24px var(--color-black-08)',
    },
    benefitIcon: {
      fontSize: isMobile ? '1.5rem' : '2rem',
      marginBottom: '0.5rem'
    },
    benefitTitle: {
      color: 'var(--text-primary)',
      margin: 0,
      marginBottom: '0.25rem',
      fontWeight: 700,
      fontSize: isMobile ? '1rem' : '1.125rem'
    },
    benefitText: {
      color: 'var(--text-gray)',
      margin: 0,
      fontSize: isMobile ? '0.85rem' : '1rem'
    },
    techGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: isMobile ? '1.5rem' : '2rem',
      alignItems: 'center'
    },
    techImageContainer: {
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: '1rem',
      padding: '1rem'
    },
    techTitle: {
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      fontWeight: 800,
      marginBottom: '0.75rem'
    },
    techDescription: {
      color: 'rgba(255,255,255,0.85)',
      lineHeight: 1.75,
      fontSize: isMobile ? '0.9rem' : '1rem'
    },
    quote: {
      margin: 0,
      fontSize: isMobile ? '1.1rem' : '1.35rem',
      lineHeight: 1.8,
      textAlign: 'center',
      maxWidth: 900,
      marginInline: 'auto'
    },
    deploymentGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: isMobile ? '1rem' : '1.5rem',
      alignItems: 'center'
    },
    deploymentTitle: {
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      fontWeight: 800,
      marginBottom: '0.5rem'
    },
    deploymentDescription: {
      color: 'rgba(255,255,255,0.85)',
      lineHeight: 1.75,
      fontSize: isMobile ? '0.9rem' : '1rem'
    },
    deploymentButtons: {
      display: 'flex',
      gap: '0.75rem',
      flexWrap: 'wrap',
      justifyContent: isMobile ? 'center' : 'flex-start'
    },
    finalTitle: {
      fontSize: isMobile ? '1.5rem' : '2rem',
      fontWeight: 800,
      marginBottom: '0.5rem'
    },
    finalSubtitle: {
      fontSize: isMobile ? '1rem' : '1.125rem',
      color: 'rgba(255,255,255,0.85)',
      marginBottom: '1.5rem'
    },
    finalButtons: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    sectionTitle: {
      fontSize: isMobile ? '1.25rem' : '1.75rem',
      color: 'var(--text-white)',
      marginBottom: '1rem'
    }
  };

  return (
    <>
      {/* Hero Section (Top Banner) */}
      <section className="section" style={{ background: heroBg, color: 'var(--text-white)' }}>
        <div style={{textAlign: 'center'}}>
          <h2 style={{color: 'var(--text-white)'}}>HIROH: Your Mobile SCIF</h2>
          <p style={{fontSize: '1.25rem', color: 'var(--text-white)', margin: '0 auto 4rem', lineHeight: '1.6'}}>
            Military-grade privacy, anywhere you go.
          </p>

          <div style={styles.heroGrid}>
            <div style={styles.heroImageContainer}>
              <img
                src={`${process.env.PUBLIC_URL || ''}/images/hiroh-phone-hero.png`}
                alt="HIROH phone with secure overlay"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            </div>

            <div style={styles.heroTextContainer}>
              <div style={styles.badge}>
                <span>🛡️</span> <span>SCIF-inspired protection</span>
              </div>
              <p style={styles.heroDescription}>
                Physical kill switches, hardened firmware, and zero trust defaults.
                HIROH brings compartmented security to a device you can carry anywhere.
              </p>
            </div>
          </div>

          <div style={styles.buttonContainer}>
            <button style={{ ...styles.btn, ...styles.btnPrimary }}>Request a Government Demo</button>
          </div>
        </div>
      </section>

      {/* Section 1 – What is a Mobile SCIF? */}
      <section className="section" style={{ backgroundColor: '#0b1220', color: 'var(--text-white)' }}>
        <div style={{ ...styles.techGrid }}>
          <div style={styles.techImageContainer}>
            <img
              src={`${process.env.PUBLIC_URL || ''}/images/hiroh-phone-closeup.png`}
              alt="Phone close-up with shield glow"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          </div>

          <div>
            <h2 style={styles.sectionTitle}>
              Sensitive Compartmented Information Facilities — Reimagined
            </h2>
            <p style={styles.sectionDescription}>
              HIROH replicates SCIF-level safeguards in a pocket device, enforcing physical separation and
              hardware-enforced privacy for high-stakes users and missions.
            </p>
            <ul style={styles.featureList}>
              {[
                'Hardware kill switches (mic, cam, GPS, Wi-Fi, Bluetooth)',
                'Zero remote exploit risk',
                'Built for high-stakes users',
              ].map((t) => (
                <li key={t} style={styles.featureItem}>
                  <span style={styles.featureDot} />
                  <span style={styles.featureText}>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2 – Role-Specific Benefits */}
      <section className="section" style={{ backgroundColor: '#0e1628', color: 'var(--text-white)' }}>
        <div>
          <h3 style={{ color: 'var(--text-white)', fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Role-Specific Benefits</h3>

          <div style={styles.benefitsGrid}>
            {[
              { title: 'Politicians & Diplomats', text: 'Secure negotiations, safe travel.' },
              { title: 'Military & Defense', text: 'Secure ops in the field.' },
              { title: 'Government Agencies', text: 'Deployable security at scale.' },
              { title: 'Journalists', text: 'Protect sources in conflict zones.' },
            ].map((c) => (
              <div key={c.title} style={styles.benefitCard}>
                <div style={styles.benefitIcon}>{c.icon}</div>
                <h4 style={styles.benefitTitle}>{c.title}</h4>
                <p style={styles.benefitText}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 – Technology Advantages */}
      <section className="section" style={{ backgroundColor: '#0b1220', color: 'var(--text-white)' }}>
        <div style={styles.techGrid }>
          <div style={styles.techImageContainer}>
            <img
              src={`${process.env.PUBLIC_URL || ''}/images/kill-switch-diagram.png`}
              alt="Kill switch circuit cutoff diagram"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          </div>

          <div>
            <h3 style={{...styles.techTitle, color: 'var(--text-white)'}}>Unhackable by Design</h3>
            <p style={styles.techDescription}>
              Software can be bypassed; physics can't. HIROH's hardware kill switches cut the electrical path to
              microphones and cameras. When the circuit is open, those sensors are inert—no app, exploit, or baseband
              trick can re-enable them.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 – Callout Banner */}
      <section className="section" style={{ background: steelBg, color: 'var(--text-white)'}}>
        <div style={styles.section}>
          <blockquote style={styles.quote}>
            "If the circuit is off, it's off. No app. No malware. No spy can turn it back on."
          </blockquote>
        </div>
      </section>

      {/* Section 5 – Deployment & Procurement */}
      <section className="section" style={{ backgroundColor: '#0e1628', color: 'var(--text-white)' }}>
        <div style={styles.deploymentGrid }>
          <div>
            <h3 style={{...styles.deploymentTitle, color: 'var(--text-white)'}}>
              Deployment & Procurement
            </h3>
            <p style={styles.deploymentDescription}>
              Built for fleet rollout with secure provisioning, device management, and long-term support. Our team
              partners with defense and government programs to meet mission requirements at scale.
            </p>
          </div>
          <div style={styles.deploymentButtons}>
            <button style={{ ...styles.btn, ...styles.btnPrimary }}>Contact Defense Sales</button>
            <button style={{ ...styles.btn, ...styles.btnGhost }}>Government Procurement Inquiries</button>
          </div>
        </div>
      </section>

      {/* Final Call to Action (Bottom Banner) */}
      <section className="section" style={{ backgroundColor: '#111827', color: 'var(--text-white)' }}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{...styles.finalTitle, color: 'var(--text-white)'}}>
            HIROH. SCIF-level security in your pocket.
          </h3>
          <p style={styles.finalSubtitle}>
            Trusted by leaders, soldiers, and truth-seekers worldwide.
          </p>
          <div style={styles.finalButtons}>
            <button style={{ ...styles.btn, ...styles.btnPrimary }}>Request Demo</button>
            <button style={{ ...styles.btn, ...styles.btnGhost }}>Talk to Sales</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default GovtMilitaryExtras;
