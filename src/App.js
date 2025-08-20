import React, { useState } from 'react';

const HirohWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #e5e7eb',
      padding: '1rem 2rem'
    },
    navContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#111827'
    },
    navLinks: {
      display: 'flex',
      gap: '2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    navLink: {
      color: '#6b7280',
      textDecoration: 'none',
      fontWeight: '500',
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      transition: 'color 0.2s'
    },
    hero: {
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      backgroundImage: 'url(/images/hiroh-phone-12.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.3) 100%)',
      zIndex: 1
    },
    heroContent: {
      position: 'relative',
      zIndex: 2,
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem',
      textAlign: 'center'
    },
    heroTitle: {
      fontSize: '6rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '1.5rem',
      lineHeight: '1.1',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
    },
    heroSubtitle: {
      fontSize: '1.75rem',
      color: 'rgba(255,255,255,0.9)',
      marginBottom: '3rem',
      lineHeight: '1.6',
      fontWeight: '400',
      textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
      maxWidth: '800px',
      margin: '0 auto 3rem'
    },
    button: {
      backgroundColor: 'rgba(255,255,255,0.9)',
      color: '#111827',
      padding: '1.25rem 2.5rem',
      borderRadius: '1rem',
      border: 'none',
      fontWeight: '600',
      cursor: 'pointer',
      margin: '0 0.5rem 0.5rem 0',
      transition: 'all 0.2s',
      display: 'inline-block',
      fontSize: '1rem',
      backdropFilter: 'blur(10px)'
    },
    buttonSecondary: {
      backgroundColor: 'transparent',
      color: 'white',
      padding: '1.25rem 2.5rem',
      borderRadius: '1rem',
      border: '2px solid rgba(255,255,255,0.8)',
      fontWeight: '600',
      cursor: 'pointer',
      margin: '0 0.5rem 0.5rem 0',
      transition: 'all 0.2s',
      display: 'inline-block',
      fontSize: '1rem',
      backdropFilter: 'blur(10px)'
    },
    privacySection: {
      backgroundColor: '#111827',
      color: 'white',
      padding: '6rem 2rem'
    },
    section: {
      padding: '6rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '3rem',
      color: '#111827'
    },
    sectionTitleWhite: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '3rem',
      color: 'white'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '3rem',
      marginTop: '3rem'
    },
    gridThree: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginTop: '2rem'
    },
    card: {
      backgroundColor: 'white',
      padding: '2.5rem',
      borderRadius: '1.5rem',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      border: '1px solid #e5e7eb',
      transition: 'transform 0.3s ease'
    },
    cardDark: {
      backgroundColor: 'rgba(255,255,255,0.1)',
      padding: '2rem',
      borderRadius: '1rem',
      border: '1px solid rgba(255,255,255,0.2)'
    },
    cardTitle: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#111827'
    },
    cardTitleWhite: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: 'white'
    },
    cardText: {
      color: '#6b7280',
      lineHeight: '1.6',
      marginBottom: '1.5rem'
    },
    cardTextWhite: {
      color: '#d1d5db',
      lineHeight: '1.6',
      marginBottom: '1.5rem'
    },
    productImage: {
      width: '100%',
      height: '250px',
      backgroundColor: '#f3f4f6',
      borderRadius: '1rem',
      marginBottom: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    },
    productImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '1rem'
    },
    footer: {
      backgroundColor: '#111827',
      color: 'white',
      padding: '4rem 2rem',
      textAlign: 'center'
    },
    featureList: {
      listStyle: 'none',
      padding: 0,
      margin: '0 0 2rem 0'
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem',
      color: '#374151'
    },
    checkIcon: {
      color: '#10b981',
      marginRight: '1rem',
      fontWeight: 'bold',
      fontSize: '1.2rem'
    }
  };

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <div style={styles.logo}>Hiroh</div>
          <ul style={styles.navLinks}>
            <li><a href="#home" style={styles.navLink}>Home</a></li>
            <li><a href="#products" style={styles.navLink}>Products</a></li>
            <li><a href="#privacy" style={styles.navLink}>Privacy</a></li>
            <li><a href="#contact" style={styles.navLink}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Secure by<br />
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>Design</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Experience digital communication that puts your privacy first.
            No tracking. No data mining. Pure secure connectivity.
          </p>
          <div>
            <button
              style={styles.button}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.backgroundColor = 'white';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.backgroundColor = 'rgba(255,255,255,0.9)';
              }}
            >
              Explore Products
            </button>
            <button
              style={styles.buttonSecondary}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              Security Whitepaper
            </button>
          </div>
        </div>
      </section>

      {/* Privacy Promise Section */}
      <section style={styles.privacySection}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitleWhite}>Our Privacy Promise</h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.5rem',
            color: '#d1d5db',
            maxWidth: '900px',
            margin: '0 auto 4rem',
            lineHeight: '1.6'
          }}>
            In a world where your data is constantly harvested, we chose a different path.
            Zero tracking. Zero data collection. Maximum security.
          </p>
          <div style={styles.gridThree}>
            <div style={styles.cardDark}>
              <h3 style={styles.cardTitleWhite}>Zero Surveillance</h3>
              <p style={styles.cardTextWhite}>
                No behavioral tracking, no location harvesting, no digital fingerprinting.
              </p>
            </div>
            <div style={styles.cardDark}>
              <h3 style={styles.cardTitleWhite}>End-to-End Encryption</h3>
              <p style={styles.cardTextWhite}>
                Military-grade encryption that even we can't access. Your data stays yours.
              </p>
            </div>
            <div style={styles.cardDark}>
              <h3 style={styles.cardTitleWhite}>Open Source Security</h3>
              <p style={styles.cardTextWhite}>
                Our security protocols are open for audit by independent researchers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Products</h2>
        <p style={{
          textAlign: 'center',
          fontSize: '1.5rem',
          color: '#6b7280',
          maxWidth: '900px',
          margin: '0 auto 4rem',
          lineHeight: '1.6'
        }}>
          Meticulously crafted devices that prioritize your privacy without compromising on performance or design.
        </p>
        <div style={styles.grid}>
          <div
            style={styles.card}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-10px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            <h3 style={styles.cardTitle}>Hiroh Phone</h3>

            <div style={styles.productImage}>
              <img
                src="/images/hiroh-phone-3.jpg"
                alt="Hiroh Phone Camera Detail"
                style={styles.productImg}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<div style="color: #6b7280; font-size: 2rem;">Premium Design</div>';
                }}
              />
            </div>

            <ul style={styles.featureList}>
              <li style={styles.featureItem}>
                <span style={styles.checkIcon}>✓</span>
                Hardware-level privacy switches
              </li>
              <li style={styles.featureItem}>
                <span style={styles.checkIcon}>✓</span>
                De-Googled Android with privacy OS
              </li>
              <li style={styles.featureItem}>
                <span style={styles.checkIcon}>✓</span>
                Secure element for cryptographic operations
              </li>
              <li style={styles.featureItem}>
                <span style={styles.checkIcon}>✓</span>
                No pre-installed tracking apps
              </li>
            </ul>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '1rem',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#111827' }}>108MP</div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Triple Camera</div>
              </div>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#111827' }}>5000mAh</div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Battery Life</div>
              </div>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#111827' }}>256GB</div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Encrypted Storage</div>
              </div>
            </div>

            <button style={{ ...styles.button, width: '100%', backgroundColor: '#111827', color: 'white' }}>Learn More</button>
          </div>

          <div
            style={styles.card}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-10px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            <h3 style={styles.cardTitle}>Hiroh Messenger</h3>

            <div style={styles.productImage}>
              <div style={{ color: '#6b7280', fontSize: '4rem' }}>💬</div>
            </div>

            <ul style={styles.featureList}>
              <li style={styles.featureItem}>
                <span style={styles.checkIcon}>✓</span>
                Signal Protocol with perfect forward secrecy
              </li>
              <li style={styles.featureItem}>
                <span style={styles.checkIcon}>✓</span>
                Disappearing messages with secure deletion
              </li>
              <li style={styles.featureItem}>
                <span style={styles.checkIcon}>✓</span>
                No metadata collection or storage
              </li>
              <li style={styles.featureItem}>
                <span style={styles.checkIcon}>✓</span>
                Decentralized architecture
              </li>
            </ul>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '1rem',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#111827' }}>E2E</div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Encryption</div>
              </div>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#111827' }}>0</div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Data Stored</div>
              </div>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#111827' }}>∞</div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Privacy</div>
              </div>
            </div>

            <button style={{ ...styles.button, width: '100%', backgroundColor: '#111827', color: 'white' }}>Learn More</button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.privacySection}>
        <div style={{ ...styles.section, textAlign: 'center' }}>
          <h2 style={styles.sectionTitleWhite}>Take Back Your Privacy</h2>
          <p style={{
            fontSize: '1.5rem',
            color: '#d1d5db',
            marginBottom: '3rem',
            maxWidth: '700px',
            margin: '0 auto 3rem',
            lineHeight: '1.6'
          }}>
            Join thousands of privacy-conscious individuals who refuse to compromise their digital freedom.
          </p>
          <div>
            <button style={{
              ...styles.button,
              backgroundColor: 'white',
              color: '#111827'
            }}>Shop Hiroh Phone</button>
            <button style={{
              ...styles.buttonSecondary,
              borderColor: 'white',
              color: 'white'
            }}>Download Messenger</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Hiroh</h3>
        <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Privacy-first technology for the conscious digital citizen.</p>
        <p style={{ color: '#9ca3af' }}>© 2025 Hiroh. Privacy guaranteed.</p>
      </footer>
    </div>
  );
};

export default HirohWebsite;