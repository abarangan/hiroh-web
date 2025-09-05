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
      marginBottom: '4rem',
      marginTop:'3rem'
    },
    missionSection: {
      backgroundColor: 'var(--color-white-03)',
      borderRadius: '1rem',
      padding: '3rem',
      maxWidth: '900px',
      margin: '0 auto',
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
    <section className='section' style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div style={styles.container}>

        {/* Main About Content */}
        <div style={styles.content}>
        <h2 className='sectionTitle' style={{textAlign: 'center',color: 'var(--text-white)',marginBottom: '3rem'}}>About HIROH</h2>
          <p style={styles.subtitle}>
            At HIROH, we believe your phone should work for you — not against you. <br></br>Big Tech built devices that spy on, track, and monetize your life. <br></br>We built HIROH to stop that.
          </p>

          <p style={styles.content}>
            We are the <span style={{ color: 'var(--text-white)', fontWeight: 'bold' }}>inventors of the Kill Switch</span> — the world's first hardware system that <span style={{ color: 'var(--text-white)', fontWeight: 'bold' }}>electrically disables your camera and microphone</span> at the circuit level. Not software-controlled. Not a gimmick. A true physical cutoff that no malware, spyware, or hidden app can override.
          </p>

          <p style={styles.content}>
            This is the future of personal technology: <span style={{ color: 'var(--text-white)', fontWeight: 'bold' }}>flagship performance, with uncompromising privacy built into the DNA of the hardware itself.</span>
          </p>
        </div>

        {/* Mission Section */}
        <div
          style={styles.missionSection}>
          <h2 style={styles.missionSectionTitle}>
            Our Mission
          </h2>
          <p style={styles.missionSectionContent}>
            To give people back control over their digital lives by building technology that
            prioritizes privacy, transparency, and user freedom without sacrificing performance or
            design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
