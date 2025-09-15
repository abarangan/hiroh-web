import React from 'react';

const AboutPage = (isMobile) => {
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    content: {
      color: 'var(--text-white)',
      fontSize: '1.25rem',
      lineHeight: '1.8',
      maxWidth: '800px',
      margin: '0 auto',
      marginBottom: '2rem',
      marginTop:'3rem'
    },
    subtitle: {
      color: 'var(--text-white)',
      fontSize: '1.5rem',
      lineHeight: '1.6',
      textAlign: 'center',
      marginBottom: '3rem',
      fontWeight: '300'
    },
    missionSection: {
      backgroundColor: 'var(--color-white-03)',
      borderRadius: '1rem',
      padding: '3rem',
      maxWidth: '900px',
      margin: '0 auto',
      marginTop: '2rem',
    },
    sectionDivider: {
      height: '1px',
      background: 'linear-gradient(90deg, transparent, var(--color-gray-600), transparent)',
      margin: '4rem 0',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    missionSectionTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      textAlign: 'center',
      color: 'var(--text-white)',
    },
    missionSectionSubtitle: {
      fontSize: '1.25rem',
      lineHeight: '1.8',
      textAlign: 'center',
      color: 'var(--color-gray-200)'
    },
    missionSectionContent: {
      fontSize: '1.25rem',
      lineHeight: '1.8',
      textAlign: 'center',
      color: 'var(--color-gray-300)'
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/hiroh-phone-4.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Overlay for text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.4) 100%)',
          pointerEvents: 'none'
        }}></div>

        {/* Hero Content */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          color: 'var(--text-white)',
          maxWidth: '800px',
          padding: '0 2rem',
          marginTop: '8rem'
        }}>
          <h1 style={{
            fontSize: isMobile ? '3rem' : '4rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            lineHeight: '1.1',
            color: 'var(--text-white)',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
          }}>
            About HIROH
          </h1>
          <p style={{
            fontSize: isMobile ? '1.25rem' : '1.5rem',
            lineHeight: '1.4',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
            marginBottom: '1rem'
          }}>
            At HIROH, we believe your phone should work for you — not against you.
          </p>
          <p style={{
            fontSize: isMobile ? '1.25rem' : '1.5rem',
            lineHeight: '1.4',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
            marginBottom: '1rem'
          }}>
            Big Tech built devices that spy on, track, and monetize your life.
          </p>
          <p style={{
            fontSize: isMobile ? '1.25rem' : '1.5rem',
            lineHeight: '1.4',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
            fontWeight: 'bold'
          }}>
            We built HIROH to stop that.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className='section' style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div style={styles.container}>
          <div style={styles.content}>
            <p style={styles.content}>
              We are the <span style={{ color: 'var(--text-white)', fontWeight: 'bold' }}>inventors of the Kill Switch</span> — the world's first hardware system that <span style={{ color: 'var(--text-white)', fontWeight: 'bold' }}>electrically disables your camera and microphone</span> at the circuit level. Not software-controlled. Not a gimmick. A true physical cutoff that no malware, spyware, or hidden app can override.
            </p>

            <p style={styles.content}>
              This is the future of personal technology: <span style={{ color: 'var(--text-white)', fontWeight: 'bold' }}>flagship performance, with uncompromising privacy built into the DNA of the hardware itself.</span>
            </p>

            {/* Section Divider */}
            <div style={styles.sectionDivider}></div>
          </div>

        {/* Panopticon Image with Mission Overlay */}
        <section style={{
          position: 'relative',
          padding: '0',
          margin: '0',
          height: '60vh',
          overflow: 'hidden'
        }}>
          <img
            src={`${process.env.PUBLIC_URL}/images/panopticon.jpg`}
            alt="The Panopticon - Symbol of surveillance and control"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />

          {/* Mission Statement Overlay */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderRadius: '1rem',
            padding: '2rem',
            maxWidth: '600px',
            width: '90%',
            textAlign: 'center',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: 'var(--text-primary)'
            }}>
              Our Mission
            </h2>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: '1.6',
              color: 'var(--text-black-60)',
              margin: 0
            }}>
              To give people back control over their digital lives by building technology that
              prioritizes privacy, transparency, and user freedom without sacrificing performance or
              design.
            </p>
          </div>
        </section>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
