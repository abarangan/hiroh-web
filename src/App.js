import React, { useState, useEffect } from 'react';

const HIROHWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [selectedSegment, setSelectedSegment] = useState('individuals');
  const [killSwitchActive, setKillSwitchActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: 'var(--bg-primary)',
      fontFamily: '"Montserrat", sans-serif'
    },
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      backgroundColor: 'var(--color-white-95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--color-gray-200)',
      padding: '1rem 0.5rem' // Reduced padding for mobile testing
    },
    navContent: {
      maxWidth: isMobile ? '100%' : '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: isMobile ? '0 0.5rem' : '0 2rem' // Add some inner padding on mobile
    },
    navLinks: {
      display: 'flex',
      gap: '2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    navLink: {
      color: 'var(--text-secondary)',
      backgroundColor: 'var(--color-transparent)',
      border: 'none',
      cursor: 'pointer',
      fontWeight: '500',
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      transition: 'color 0.2s',
      fontFamily: 'inherit'
    },
    navLinkActive: {
      color: 'var(--text-primary)'
    },
    submenu: {
      position: 'absolute',
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'var(--bg-white)',
      boxShadow: '0 10px 30px var(--color-black-15)',
      borderRadius: '0.75rem',
      padding: '0.5rem 0',
      minWidth: '220px',
      marginTop: '0',  // Changed from 0.75rem to 0
      zIndex: 100,
      border: '1px solid var(--color-gray-200)'
    },
    submenuItem: {
      display: 'block',
      width: '100%',
      padding: '0.875rem 1.5rem',
      textAlign: 'left',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--color-gray-700)',
      fontSize: '0.925rem',
      fontFamily: 'inherit',
      transition: 'all 0.2s',
      borderLeft: '3px solid var(--color-transparent)'
    },    
    hero: {
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      backgroundImage: `url(${process.env.PUBLIC_URL}/images/hiroh-phone-4.jpg)`,
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
      fontSize: '5rem',
      fontWeight: 'bold',
      color: 'var(--text-white)',
      marginBottom: '1.5rem',
      lineHeight: '1.1',
      textShadow: '1px 1px 1px var(--color-black-50)'
    },
    heroSubtitle: {
      fontSize: '1.75rem',
      color: 'var(--text-white-90)',
      marginBottom: '3rem',
      lineHeight: '1.6',
      fontWeight: '400',
      textShadow: '1px 1px 1px var(--color-black-50)',
      maxWidth: '800px',
      margin: '0 auto 3rem'
    },
    button: {
      backgroundColor: 'var(--bg-teal)',
      color: 'var(--text-primary)',
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
      backgroundColor: 'var(--color-transparent)',
      color: 'var(--color-primary-teal)',
      padding: '1.25rem 2.5rem',
      borderRadius: '1rem',
      border: '2px solid var(--color-primary-teal)',
      fontWeight: '600',
      cursor: 'pointer',
      margin: '0 0.5rem 0.5rem 0',
      transition: 'all 0.2s',
      display: 'inline-block',
      fontSize: '1rem',
      backdropFilter: 'blur(10px)'
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
      color: 'var(--text-primary)'
    },
    footer: {
      backgroundColor: 'var(--bg-dark)',
      color: 'var(--text-white)',
      padding: '4rem 2rem',
      textAlign: 'center'
    },
    hamburger: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '30px',
      height: '30px',
      cursor: 'pointer',
      backgroundColor: 'var(--color-red-debug)',
    },
    hamburgerLine: {
      width: '20px',
      height: '2px',
      backgroundColor: 'var(--color-gray-700)',
      margin: '2px 0',
      transition: 'all 0.3s ease'
    }    
  };

  const HamburgerIcon = () => (
    <div
      style={{
        width: '30px',
        height: '30px',
        backgroundColor: 'var(--color-red-debug)',
        position: 'relative',
        zIndex: 999
      }}
      onClick={() => {
        console.log('Hamburger clicked!');
        setMobileMenuOpen(!mobileMenuOpen);
      }}
    >
      TEST
    </div>
  );

  const HomePage = () => (
    <>
      {/* Hero Section - UNCHANGED */}
      <section
        style={{
          ...styles.hero,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end', // 👈 pushes heroContent down
          minHeight: '100vh',         // full screen hero
          position: 'relative',
        }}
      >
        <div style={styles.heroOverlay}></div>

        <div
          style={{
            ...styles.heroContent,
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            paddingBottom: '4rem', // 👈 spacing from bottom edge
          }}
        >
          <h1 style={{ ...styles.heroTitle, fontSize: '3.5rem' }}>
            Your Everyday Phone Is Also<br />
            Your Privacy Phone
          </h1>

          <div
            style={{
              display: 'grid',
              gridAutoFlow: 'column',
              justifyContent: 'center',
              gap: '6rem',
              margin: '2rem 0',
              fontSize: '1.5rem',
              color: 'var(--text-white)',
              fontWeight: '600',
              textShadow: '0 2px 6px var(--color-black-60)',
            }}
          >
            <span>PREMIUM</span>
            <span>PRIVATE</span>
            <span>CONVENIENT</span>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              style={styles.button}
              onClick={() => setCurrentPage('phone')}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.backgroundColor = 'var(--bg-white)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.backgroundColor = 'var(--color-white-90)';
              }}
            >
              Shop Now
            </button>
            <button
              style={styles.buttonSecondary}
              onClick={() => setCurrentPage('phone')}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.backgroundColor = 'var(--color-white-10)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.backgroundColor = 'var(--color-transparent)';
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
      {/* Section 2: Key Features (Quick Overview) */}
      <section style={styles.section}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: '2rem',
            marginBottom: '4rem',
          }}
        >
          <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'var(--bg-white)', borderRadius: '1rem', boxShadow: '0 10px 30px var(--color-black-10)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '1rem' }}>Privacy First</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              Electronically disable camera and microphone, second switch for GPS, Wi-Fi, Bluetooth. You control who sees you and who hears you.
            </p>
          </div>
          <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'var(--bg-white)', borderRadius: '1rem', boxShadow: '0 10px 30px var(--color-black-10)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '1rem' }}>Power & Performance</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              16GB RAM + 512GB storage,<br /> 108MP triple back camera and 32MP selfie cam.
            </p>
          </div>
          <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'var(--bg-white)', borderRadius: '1rem', boxShadow: '0 10px 30px var(--color-black-10)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '1rem' }}>Stunning Display</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              6.67" AMOLED screen, 120Hz refresh, <br />600 nits with peak 1800 nits brightness.
            </p>
          </div>
          <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'var(--bg-white)', borderRadius: '1rem', boxShadow: '0 10px 30px var(--color-black-10)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '1rem' }}>Encrypted SD Storage</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              Add up to 2TB for everything that matters.
            </p>
          </div>
        </div>
      </section>
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/hiroh-phone-9.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            color: 'white',
            textAlign: 'center',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
        </div>
      </section>
      {/* Section 3: Privacy Section (Unique Selling Point) */}
      <section style={{ backgroundColor: 'var(--color-dark-primary)', color: 'var(--text-white)', padding: '0rem 2rem', marginTop: '-1rem' }}>
        <div style={styles.section}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: 'var(--text-white)' }}>
            You Don't Need To Change Your Phone Habits to Gain Privacy
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ backgroundColor: 'var(--color-white-10)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--color-white-10)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--text-white)' }}>Convenience</h3>
              <p style={{ color: 'var(--color-gray-300)', lineHeight: '1.6' }}>
                Be in Private mode, and still have all the convenience you're used to.
              </p>
            </div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.2)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>Keep Your Apps</h3>
              <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
                Don't sacrifice apps to be private, just click the switch and enjoy them without selling out your privacy.
              </p>
            </div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.2)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>Everything Encrypted</h3>
              <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
                Your files, photos, and conversations stay encrypted.
              </p>
            </div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.2)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>Private Browsing</h3>
              <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
                Private browsing and communication tools included.
              </p>
            </div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.2)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>Local Data Control</h3>
              <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
                You own your information - no cloud dependency.
              </p>
            </div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.2)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>Privacy Lockdown Mode</h3>
              <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
                One-click "Privacy Lockdown Mode" for instant protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Everyday Use Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>From Everyday Phone to Privacy Phone in One Click</h2>
        <p style={{ fontSize: '1.25rem', textAlign: 'center', color: '#6b7280', maxWidth: '800px', margin: '0 auto 4rem', lineHeight: '1.6' }}>
          Seamlessly transition between your everyday needs and complete privacy protection.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem', maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ backgroundColor: 'white', padding: '2.5rem', borderRadius: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#111827' }}>Business-Ready</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', color: '#374151' }}>✓ All productivity apps supported</li>
              <li style={{ marginBottom: '1rem', color: '#374151' }}>✓ 512GB storage for documents</li>
              <li style={{ marginBottom: '1rem', color: '#374151' }}>✓ Flagship performance</li>
            </ul>
          </div>
          <div style={{ backgroundColor: 'white', padding: '2.5rem', borderRadius: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#111827' }}>Personal-Life Friendly</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', color: '#374151' }}>✓ Media streaming & gaming</li>
              <li style={{ marginBottom: '1rem', color: '#374151' }}>✓ Social apps compatible</li>
              <li style={{ marginBottom: '1rem', color: '#374151' }}>✓ Premium camera system</li>
            </ul>
          </div>
          <div style={{ backgroundColor: 'white', padding: '2.5rem', borderRadius: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#111827' }}>Privacy On-Demand</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', color: '#374151' }}>✓ Toggle secure mode for banking</li>
              <li style={{ marginBottom: '1rem', color: '#374151' }}>✓ Private conversations</li>
              <li style={{ marginBottom: '1rem', color: '#374151' }}>✓ Anonymous browsing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 6: FAQ Section */}
      <section style={{ backgroundColor: '#1f2937', padding: '4rem 0' }}>
        <h2 style={{ ...styles.sectionTitle, color: 'white' }}>Frequently Asked Questions</h2>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {[
            {
              q: 'Is HIROH compatible with my carrier?',
              a: 'Yes, HIROH works with all major carriers worldwide. It supports 5G, 4G LTE, and includes dual SIM capability.'
            },
            {
              q: 'Can I install my own apps?',
              a: 'Absolutely! HIROH runs the e/OS operating system for a fully "deGoogled" Android-based experience, giving you access to millions of apps while maintaining your privacy.'
            },
            {
              q: 'How does privacy mode work?',
              a: 'Our hardware kill switches physically disconnect cameras, microphones at the circuit level. No software can override this.'
            },
            {
              q: 'What happens if I lose my phone?',
              a: 'All data is encrypted by default. Remote wipe capabilities and secure boot ensure your information stays protected.'
            },
            {
              q: 'Is my data stored in the cloud?',
              a: 'No. HIROH prioritizes local storage and gives you complete control. Cloud backup is optional and always encrypted end-to-end.'
            }
          ].map((item, i) => (
            <div
              key={i}
              style={{
                marginBottom: '2rem',
                background: 'rgba(255,255,255,0.9)',  // softer than pure white
                padding: '2rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb',          // subtle border
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                backdropFilter: 'blur(4px)'           // frosted effect
              }}
            >
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  color: '#111827'
                }}
              >
                {item.q}
              </h3>
              <p style={{ color: '#4b5563', lineHeight: '1.6' }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>


      <section style={{ padding: '6rem 2rem', backgroundColor: '#f9fafb' }}>
        <div style={styles.section}>
          <h2
            style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '1.5rem',
              color: '#111827',
            }}
          >
            Finally, a Phone That Puts You First
          </h2>

          <p
            style={{
              textAlign: 'center',
              fontSize: '1.25rem',
              color: '#6b7280',
              maxWidth: '900px',
              margin: '0 auto 3rem',
              lineHeight: '1.6',
            }}
          >
            In a world where your data is constantly harvested, we chose a different path.
            Zero tracking. Zero data collection. Maximum security.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem',
            }}
          >
            <div
              style={{
                textAlign: 'center',
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '1rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '0.5rem',
                }}
              >
                Zero Surveillance
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#6b7280', lineHeight: '1.5' }}>
                No behavioral tracking, no location harvesting, no digital fingerprinting.
              </p>
            </div>

            <div
              style={{
                textAlign: 'center',
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '1rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '0.5rem',
                }}
              >
                End-to-End Encryption
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#6b7280', lineHeight: '1.5' }}>
                Military-grade encryption. Your keys, your data—never ours.
              </p>
            </div>

            <div
              style={{
                textAlign: 'center',
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '1rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '0.5rem',
                }}
              >
                Open Source Security
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#6b7280', lineHeight: '1.5' }}>
                Protocols open to audit by independent researchers.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Updated CTA Section */}
      <section
        style={{
          position: 'relative',
          backgroundColor: '#1f2937',
          color: 'white',
          padding: 0,
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background image */}
        <img
          src={`${process.env.PUBLIC_URL}/images/hiroh-phone-3.jpg`}
          alt="HIROH Phone"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            filter: 'brightness(0.45) contrast(1.1)', // darken for text readability
          }}
        />

        {/* Overlay content */}
        <div style={{ position: 'relative', zIndex: 1, padding: '2rem', maxWidth: '900px' }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
            Take Back Your Privacy
          </h2>
          <p
            style={{
              fontSize: '1.5rem',
              marginBottom: '2.5rem',
              lineHeight: '1.6',
              color: 'rgba(255,255,255,0.9)',
            }}
          >
            Join thousands of privacy-conscious individuals who refuse to compromise their digital freedom.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              ...styles.button,
              backgroundColor: 'rgba(255,255,255,0.9)',
              color: '#111827'               // White text
            }}>
              Shop Now
            </button>
            <button style={{
              ...styles.buttonSecondary,
              backgroundColor: 'transparent', // Keep transparent or change to solid
              color: 'white',                 // White text
              borderColor: 'white'            // White border
            }}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <img
            src={`${process.env.PUBLIC_URL}/images/hiroh-inner-t.png`}
            alt="HIROH Symbol"
            style={{ height: '30px', width: 'auto' }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/hiroh-logo-t.png`}
            alt="HIROH"
            style={{ height: '30px', width: 'auto' }}
          />
        </div>
        <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
          Inventors of the Kill Switch. Makers of the Privacy Phone.
        </p>
        <p style={{ color: '#9ca3af' }}>© 2025 HIROH. Your phone. Your control.</p>
      </footer>
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
      <section style={{ paddingTop: '120px', padding: '120px 2rem 4rem', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h1 style={styles.sectionTitle}>Contact Us</h1>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#6b7280', marginBottom: '3rem' }}>
            Have questions about HIROH? We're here to help.
          </p>

          {formStatus === 'success' && (
            <div style={{
              backgroundColor: '#10b981',
              color: 'white',
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
              backgroundColor: '#ef4444',
              color: 'white',
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
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '1rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}
          >
            {/* Hidden Formspree configuration fields */}
            <input type="hidden" name="_subject" value="New Contact from HIROH Website" />
            <input type="hidden" name="_captcha" value="true" />

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#374151', fontWeight: '500' }}>
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#374151', fontWeight: '500' }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#374151', fontWeight: '500' }}>
                Subject
              </label>
              <select
                name="subject"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
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
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#374151', fontWeight: '500' }}>
                Message
              </label>
              <textarea
                name="message"
                required
                rows="5"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
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
                backgroundColor: '#0d9488',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                fontSize: '1.125rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#0f766e'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#0d9488'}
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
      'linear-gradient(135deg, rgba(17,24,39,0.95), rgba(31,41,55,0.9)), url(/images/gov-hero-bg.jpg) center/cover no-repeat';

    const steelBg =
      'linear-gradient(135deg, rgba(55,65,81,0.90), rgba(31,41,55,0.92)), url(/images/steel-texture.jpg) center/cover no-repeat';

    const cardBase = {
      backgroundColor: 'rgba(255,255,255,0.9)',
      border: '1px solid #e5e7eb',
      borderRadius: '1rem',
      padding: '2rem',
      boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
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
      backgroundColor: '#10b981',
      color: 'white',
    };

    const btnGhost = {
      ...btn,
      backgroundColor: 'transparent',
      color: 'white',
      borderColor: 'rgba(255,255,255,0.35)',
    };

    return (
      <>
        {/* Hero Section (Top Banner) */}
        <section style={{ background: heroBg, color: 'white', padding: '6rem 2rem' }}>
          <div style={{ ...(styles.section || {}), textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.75rem' }}>HIROH: Your Mobile SCIF</h1>
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
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.15)',
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
                    background: 'rgba(16,185,129,0.15)',
                    border: '1px solid rgba(16,185,129,0.35)',
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
        <section style={{ backgroundColor: '#0b1220', color: 'white', padding: '4.5rem 2rem' }}>
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
                        backgroundColor: '#10b981', // subtle green accent
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
        <section style={{ backgroundColor: '#0e1628', color: 'white', padding: '4.5rem 2rem' }}>
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
                  <h4 style={{ color: '#111827', margin: 0, marginBottom: '0.25rem', fontWeight: 700 }}>{c.title}</h4>
                  <p style={{ color: '#4b5563', margin: 0 }}>{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 – Technology Advantages */}
        <section style={{ backgroundColor: '#0b1220', color: 'white', padding: '4.5rem 2rem' }}>
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
        <section style={{ background: steelBg, color: 'white', padding: '4rem 2rem' }}>
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
        <section style={{ backgroundColor: '#0e1628', color: 'white', padding: '4.5rem 2rem' }}>
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
        <section style={{ backgroundColor: '#111827', color: 'white', padding: '5rem 2rem' }}>
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
          color: 'white',
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
          <h1 style={{ ...styles.sectionTitle, color: 'white' }}>The HIROH Phone</h1>
          <p style={{ fontSize: '1.25rem', color: 'white' }}>
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
      <section style={{ backgroundColor: '#f8fafc', padding: '6rem 2rem' }}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>How We Compare</h2>
          <p style={{ fontSize: '1.25rem', textAlign: 'center', color: '#6b7280', maxWidth: '800px', margin: '0 auto 4rem', lineHeight: '1.6' }}>
            See how HIROH stacks up against flagship competitors.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', maxWidth: '900px', margin: '0 auto', backgroundColor: 'white', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <thead>
                <tr style={{ backgroundColor: '#1f2937' }}>
                  <th style={{ padding: '1.5rem', color: 'white', textAlign: 'left', fontWeight: '600' }}>Feature</th>
                  <th style={{ padding: '1.5rem', color: 'white', textAlign: 'center', fontWeight: '600' }}>HIROH</th>
                  <th style={{ padding: '1.5rem', color: 'white', textAlign: 'center', fontWeight: '600' }}>Apple/Samsung</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '1.25rem', color: '#374151', fontWeight: '500' }}>RAM</td>
                  <td style={{ padding: '1.25rem', textAlign: 'center', color: '#0d9488', fontWeight: 'bold' }}>16GB</td>
                  <td style={{ padding: '1.25rem', textAlign: 'center', color: '#6b7280' }}>8–12GB</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                  <td style={{ padding: '1.25rem', color: '#374151', fontWeight: '500' }}>Storage</td>
                  <td style={{ padding: '1.25rem', textAlign: 'center', color: '#0d9488', fontWeight: 'bold' }}>512GB + 2TB expandable</td>
                  <td style={{ padding: '1.25rem', textAlign: 'center', color: '#6b7280' }}>Max 1TB, no expansion</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '1.25rem', color: '#374151', fontWeight: '500' }}>Privacy Features</td>
                  <td style={{ padding: '1.25rem', textAlign: 'center', color: '#0d9488', fontWeight: 'bold' }}>Hardware kill switches</td>
                  <td style={{ padding: '1.25rem', textAlign: 'center', color: '#6b7280' }}>Software controls only</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                  <td style={{ padding: '1.25rem', color: '#374151', fontWeight: '500' }}>Data Collection</td>
                  <td style={{ padding: '1.25rem', textAlign: 'center', color: '#0d9488', fontWeight: 'bold' }}>Zero tracking</td>
                  <td style={{ padding: '1.25rem', textAlign: 'center', color: '#6b7280' }}>Extensive data mining</td>
                </tr>
                <tr>
                  <td style={{ padding: '1.25rem', color: '#374151', fontWeight: '500' }}>Pricing</td>
                  <td style={{ padding: '1.25rem', textAlign: 'center', color: '#0d9488', fontWeight: 'bold' }}></td>
                  <td style={{ padding: '1.25rem', textAlign: 'center', color: '#6b7280' }}></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section >

      <section style={{ backgroundColor: '#1f2937', color: 'white', padding: '6rem 2rem' }}>
        <div style={styles.section}>
          {/* Detailed Specs Section */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '1rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            padding: '3rem',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '3rem',
              color: '#111827',
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
                  color: '#0d9488',
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Performance
                </h3>
                <dl style={{ margin: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #e5e7eb' }}>
                    <dt style={{ color: '#6b7280', fontWeight: '500' }}>RAM</dt>
                    <dd style={{ color: '#111827', fontWeight: '600', margin: 0 }}>16GB</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #e5e7eb' }}>
                    <dt style={{ color: '#6b7280', fontWeight: '500' }}>Internal Storage</dt>
                    <dd style={{ color: '#111827', fontWeight: '600', margin: 0 }}>512GB</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #e5e7eb' }}>
                    <dt style={{ color: '#6b7280', fontWeight: '500' }}>Expandable Storage</dt>
                    <dd style={{ color: '#111827', fontWeight: '600', margin: 0 }}>Up to 2TB</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #e5e7eb' }}>
                    <dt style={{ color: '#6b7280', fontWeight: '500' }}>Processor</dt>
                    <dd style={{ color: '#111827', fontWeight: '600', margin: 0 }}>MediaTek Dimensity 8300</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #e5e7eb' }}>
                    <dt style={{ color: '#6b7280', fontWeight: '500' }}>Operating System</dt>
                    <dd style={{ color: '#111827', fontWeight: '600', margin: 0 }}>e/OS</dd>
                  </div>
                </dl>
              </div>

              {/* Camera */}
              <div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#0d9488',
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Camera
                </h3>
                <dl style={{ margin: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #e5e7eb' }}>
                    <dt style={{ color: '#6b7280', fontWeight: '500' }}>Rear Main</dt>
                    <dd style={{ color: '#111827', fontWeight: '600', margin: 0 }}>108MP Samsung</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #e5e7eb' }}>
                    <dt style={{ color: '#6b7280', fontWeight: '500' }}>Wide Angle</dt>
                    <dd style={{ color: '#111827', fontWeight: '600', margin: 0 }}>13MP</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #e5e7eb' }}>
                    <dt style={{ color: '#6b7280', fontWeight: '500' }}>Macro</dt>
                    <dd style={{ color: '#111827', fontWeight: '600', margin: 0 }}>2MP</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #e5e7eb' }}>
                    <dt style={{ color: '#6b7280', fontWeight: '500' }}>Front</dt>
                    <dd style={{ color: '#111827', fontWeight: '600', margin: 0 }}>32MP Sony</dd>
                  </div>
                </dl>
              </div>

              {/* Display */}
              <div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#0d9488',
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Display
                </h3>
                <dl style={{ margin: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #e5e7eb' }}>
                    <dt style={{ color: '#6b7280', fontWeight: '500' }}>Size</dt>
                    <dd style={{ color: '#111827', fontWeight: '600', margin: 0 }}>6.67" AMOLED</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #e5e7eb' }}>
                    <dt style={{ color: '#6b7280', fontWeight: '500' }}>Refresh Rate</dt>
                    <dd style={{ color: '#111827', fontWeight: '600', margin: 0 }}>120Hz</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #e5e7eb' }}>
                    <dt style={{ color: '#6b7280', fontWeight: '500' }}>Brightness</dt>
                    <dd style={{ color: '#111827', fontWeight: '600', margin: 0 }}>600 nits (1800 peak)</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #e5e7eb' }}>
                    <dt style={{ color: '#6b7280', fontWeight: '500' }}>Resolution</dt>
                    <dd style={{ color: '#111827', fontWeight: '600', margin: 0 }}>2400 x 1080</dd>
                  </div>
                </dl>
              </div>

              {/* Security & Privacy */}
              <div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#0d9488',
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Security & Privacy
                </h3>
                <dl style={{ margin: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #e5e7eb' }}>
                    <dt style={{ color: '#6b7280', fontWeight: '500' }}>Encrypted Storage</dt>
                    <dd style={{ color: '#111827', fontWeight: '600', margin: 0 }}>2TB SD Slot</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #e5e7eb' }}>
                    <dt style={{ color: '#6b7280', fontWeight: '500' }}>Private Mode</dt>
                    <dd style={{ color: '#111827', fontWeight: '600', margin: 0 }}>Secure Sandbox</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #e5e7eb' }}>
                    <dt style={{ color: '#6b7280', fontWeight: '500' }}>Biometric</dt>
                    <dd style={{ color: '#111827', fontWeight: '600', margin: 0 }}>Fingerprint</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #e5e7eb' }}>
                    <dt style={{ color: '#6b7280', fontWeight: '500' }}>Tracking</dt>
                    <dd style={{ color: '#111827', fontWeight: '600', margin: 0 }}>Zero Data Harvesting</dd>
                  </div>
                </dl>
              </div>

              {/* Battery */}
              <div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#0d9488',
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Battery
                </h3>
                <dl style={{ margin: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #e5e7eb' }}>
                    <dt style={{ color: '#6b7280', fontWeight: '500' }}>Capacity</dt>
                    <dd style={{ color: '#111827', fontWeight: '600', margin: 0 }}>5000mAh High Density</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #e5e7eb' }}>
                    <dt style={{ color: '#6b7280', fontWeight: '500' }}>Fast Charging</dt>
                    <dd style={{ color: '#111827', fontWeight: '600', margin: 0 }}>33W</dd>
                  </div>
                </dl>
              </div>

              {/* Connectivity */}
              <div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#0d9488',
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Connectivity
                </h3>
                <dl style={{ margin: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #e5e7eb' }}>
                    <dt style={{ color: '#6b7280', fontWeight: '500' }}>Network</dt>
                    <dd style={{ color: '#111827', fontWeight: '600', margin: 0 }}>5G Enabled</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #e5e7eb' }}>
                    <dt style={{ color: '#6b7280', fontWeight: '500' }}>WiFi</dt>
                    <dd style={{ color: '#111827', fontWeight: '600', margin: 0 }}>WiFi 6</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #e5e7eb' }}>
                    <dt style={{ color: '#6b7280', fontWeight: '500' }}>Bluetooth</dt>
                    <dd style={{ color: '#111827', fontWeight: '600', margin: 0 }}>5.2</dd>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #e5e7eb' }}>
                    <dt style={{ color: '#6b7280', fontWeight: '500' }}>Port</dt>
                    <dd style={{ color: '#111827', fontWeight: '600', margin: 0 }}>USB-C</dd>
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
    <section style={{ paddingTop: '120px', backgroundColor: '#1f2937', color: 'white', padding: '120px 2rem 4rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Main About Content */}
        <div style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '4rem' }}>
          <p style={{ fontSize: '1.5rem', lineHeight: '1.8', marginBottom: '2rem', color: '#e5e7eb' }}>
            At HIROH, we believe your phone should work for you — not against you. <br></br>Big Tech built devices that spy on, track, and monetize your life. <br></br>We built HIROH to stop that.
          </p>

          <p style={{ fontSize: '1.25rem', lineHeight: '1.8', marginBottom: '2rem', color: '#d1d5db' }}>
            We are the <span style={{ color: 'white', fontWeight: 'bold' }}>inventors of the Kill Switch</span> — the world's first hardware system that <span style={{ color: 'white', fontWeight: 'bold' }}>electrically disables your camera and microphone</span> at the circuit level. Not software-controlled. Not a gimmick. A true physical cutoff that no malware, spyware, or hidden app can override.
          </p>

          <p style={{ fontSize: '1.25rem', lineHeight: '1.8', marginBottom: '3rem', color: '#d1d5db' }}>
            This is the future of personal technology: <span style={{ color: 'white', fontWeight: 'bold' }}>flagship performance, with uncompromising privacy built into the DNA of the hardware itself.</span>
          </p>
        </div>

        {/* Mission Section */}
        <div
          style={{
            backgroundColor: 'rgba(255,255,255,0.03)',
            borderRadius: '1rem',
            padding: '3rem',
            maxWidth: '900px',
            margin: '0 auto',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(6px)'
          }}
        >
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              textAlign: 'center',
              color: 'white',
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
              color: '#e5e7eb',
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

  console.log('isMobile:', isMobile);

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <button
            onClick={() => setCurrentPage('home')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/hiroh-inner.png`}
              alt="HIROH Symbol"
              style={{ height: '24px', width: 'auto' }}
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/hiroh-logo.png`}
              alt="HIROH"
              style={{ height: '22px', width: 'auto' }}
            />
          </button>
          {/* Desktop Navigation - hide on mobile */}
          <ul style={{
            ...styles.navLinks,
            display: isMobile ? 'none' : 'flex'
          }}>
            <li>
              <button
                onClick={() => setCurrentPage('home')}
                style={{
                  ...styles.navLink,
                  ...(currentPage === 'home' ? styles.navLinkActive : {})
                }}
              >
                Home
              </button>
            </li>
            <li
              style={{ position: 'relative' }}
              onMouseEnter={() => setHoveredMenu('phone')}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button
                onClick={() => setCurrentPage('phone')}
                style={{
                  ...styles.navLink,
                  ...(currentPage === 'phone' ? styles.navLinkActive : {})
                }}
              >
                Phone
              </button>
              {hoveredMenu === 'phone' && (
                <div
                  style={styles.submenu}
                  onMouseEnter={() => setHoveredMenu('phone')}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <button
                    onClick={() => {
                      setSelectedSegment('govt-military');
                      setCurrentPage('phone');
                      setHoveredMenu(null);
                    }}
                    style={styles.submenuItem}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#f3f4f6';
                      e.target.style.borderLeftColor = '#0d9488';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.borderLeftColor = 'transparent';
                    }}
                  >
                    Government and Military
                  </button>
                  <button
                    onClick={() => {
                      setSelectedSegment('business');
                      setCurrentPage('phone');
                      setHoveredMenu(null);
                    }}
                    style={styles.submenuItem}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#f3f4f6';
                      e.target.style.borderLeftColor = '#0d9488';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.borderLeftColor = 'transparent';
                    }}
                  >
                    Business
                  </button>
                  <button
                    onClick={() => {
                      setSelectedSegment('journalists');
                      setCurrentPage('phone');
                      setHoveredMenu(null);
                    }}
                    style={styles.submenuItem}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#f3f4f6';
                      e.target.style.borderLeftColor = '#0d9488';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.borderLeftColor = 'transparent';
                    }}
                  >
                    Journalists
                  </button>
                  <button
                    onClick={() => {
                      setSelectedSegment('individuals');
                      setCurrentPage('phone');
                      setHoveredMenu(null);
                    }}
                    style={styles.submenuItem}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#f3f4f6';
                      e.target.style.borderLeftColor = '#0d9488';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.borderLeftColor = 'transparent';
                    }}
                  >
                    Individuals
                  </button>
                </div>
              )}
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('tech')}
                style={{
                  ...styles.navLink,
                  ...(currentPage === 'tech' ? styles.navLinkActive : {})
                }}
              >
                Technology
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('about')}
                style={{
                  ...styles.navLink,
                  ...(currentPage === 'about' ? styles.navLinkActive : {})
                }}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('contact')}
                style={{
                  ...styles.navLink,
                  ...(currentPage === 'contact' ? styles.navLinkActive : {})
                }}
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Mobile Hamburger Icon */}
          {isMobile && (
            <div
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                flexShrink: 0,
                marginRight: '1rem'
              }}
              onClick={() => {
                console.log('Hamburger clicked!');
                setMobileMenuOpen(!mobileMenuOpen);
              }}
            >
              <div style={{
                width: '20px',
                height: '2px',
                backgroundColor: '#374151',
                margin: '2px 0',
                transition: 'all 0.3s ease',
                transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
              }} />
              <div style={{
                width: '20px',
                height: '2px',
                backgroundColor: '#374151',
                margin: '2px 0',
                transition: 'all 0.3s ease',
                opacity: mobileMenuOpen ? 0 : 1
              }} />
              <div style={{
                width: '20px',
                height: '2px',
                backgroundColor: '#374151',
                margin: '2px 0',
                transition: 'all 0.3s ease',
                transform: mobileMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'
              }} />
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && isMobile && (
        <div style={{
          position: 'fixed',
          top: '80px', // Just below your nav bar
          left: 0,
          right: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid #e5e7eb',
          zIndex: 40,
          padding: '1rem 0'
        }}>
          <div style={{ padding: '0 2rem' }}>
            {/* Home */}
            <button
              onClick={() => {
                setCurrentPage('home');
                setMobileMenuOpen(false);
              }}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: currentPage === 'home' ? '#111827' : '#6b7280',
                fontSize: '1rem',
                fontWeight: currentPage === 'home' ? '600' : '500',
                padding: '1rem 0',
                borderBottom: '1px solid #f3f4f6',
                fontFamily: 'inherit'
              }}
            >
              Home
            </button>

            {/* Phone Section with Expanded Submenu */}
            <div style={{ borderBottom: '1px solid #f3f4f6' }}>
              <button
                onClick={() => {
                  setCurrentPage('phone');
                  setMobileMenuOpen(false);
                }}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: currentPage === 'phone' ? '#111827' : '#6b7280',
                  fontSize: '1rem',
                  fontWeight: currentPage === 'phone' ? '600' : '500',
                  padding: '1rem 0',
                  fontFamily: 'inherit'
                }}
              >
                Phone
              </button>

              {/* Phone Submenu Items */}
              <div style={{ paddingLeft: '1rem' }}>
                {[
                  { key: 'govt-military', label: 'Government & Military' },
                  { key: 'business', label: 'Business' },
                  { key: 'journalists', label: 'Journalists' },
                  { key: 'individuals', label: 'Individuals' }
                ].map(item => (
                  <button
                    key={item.key}
                    onClick={() => {
                      setSelectedSegment(item.key);
                      setCurrentPage('phone');
                      setMobileMenuOpen(false);
                    }}
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#6b7280',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      padding: '0.75rem 0',
                      borderBottom: '1px solid #f9fafb'
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Other Menu Items */}
            {[
              { key: 'tech', label: 'Technology' },
              { key: 'about', label: 'About' },
              { key: 'contact', label: 'Contact' }
            ].map(item => (
              <button
                key={item.key}
                onClick={() => {
                  setCurrentPage(item.key);
                  setMobileMenuOpen(false);
                }}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: currentPage === item.key ? '#111827' : '#6b7280',
                  fontSize: '1rem',
                  fontWeight: currentPage === item.key ? '600' : '500',
                  padding: '1rem 0',
                  borderBottom: '1px solid #f3f4f6',
                  fontFamily: 'inherit'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Page Content */}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'phone' && <PhoneSpecsPage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
    </div>
  );
};

export default HIROHWebsite;