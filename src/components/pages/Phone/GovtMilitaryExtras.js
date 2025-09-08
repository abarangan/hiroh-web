import React from 'react';

const GovtMilitaryExtras = ({ isMobile, setCurrentPage }) => {
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    section: {
      padding: isMobile ? '3rem 0' : '5rem 0'
    },
    sectionTitle: {
      fontSize: isMobile ? '2rem' : '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'var(--text-white)',
      marginBottom: '1rem'
    },
    sectionSubtitle: {
      fontSize: isMobile ? '1.125rem' : '1.25rem',
      textAlign: 'center',
      color: 'var(--color-gray-300)',
      marginBottom: isMobile ? '2rem' : '3rem',
      maxWidth: '800px',
      margin: '0 auto',
      marginBottom: isMobile ? '2rem' : '3rem'
    },
    grid2Col: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      gap: isMobile ? '2rem' : '4rem',
      alignItems: 'center',
      marginBottom: '3rem'
    },
    grid3Col: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: isMobile ? '2rem' : '3rem',
      marginBottom: '3rem'
    },
    phoneImage: {
      width: '100%',
      maxWidth: '500px',
      height: 'auto',
      borderRadius: '1rem',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
    },
    scifText: {
      fontSize: '1.125rem',
      lineHeight: '1.8',
      color: 'var(--color-gray-800)'
    },
    scifTitle: {
      fontSize: isMobile ? '1.5rem' : '2rem',
      fontWeight: 'bold',
      color: 'var(--color-gray-800)',
      marginBottom: '1.5rem'
    },
    trustPoints: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      gap: '1rem',
      marginBottom: '3rem'
    },
    trustPoint: {
      backgroundColor: 'var(--color-white-05)',
      padding: '1rem',
      borderRadius: '0.5rem',
      border: '1px solid var(--color-gray-600)',
      textAlign: 'center'
    },
    trustText: {
      fontSize: '0.9rem',
      color: 'var(--color-gray-300)',
      margin: 0
    },
    roleCard: {
      backgroundColor: 'var(--color-white-05)',
      padding: '2rem',
      borderRadius: '1rem',
      textAlign: 'center',
      border: '1px solid var(--color-gray-600)'
    },
    roleIcon: {
      fontSize: '3rem',
      marginBottom: '1rem',
      color: 'var(--color-primary-teal)'
    },
    roleTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: 'var(--text-white)',
      marginBottom: '1rem'
    },
    roleDescription: {
      fontSize: '1rem',
      color: 'var(--color-gray-300)',
      lineHeight: '1.6'
    },
    techImage: {
      width: '100%',
      maxWidth: '500px',
      height: 'auto',
      borderRadius: '1rem',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
    },
    techTitle: {
      fontSize: isMobile ? '1.5rem' : '2rem',
      fontWeight: 'bold',
      color: 'var(--color-gray-800)',
      marginBottom: '1.5rem'
    },
    techDescription: {
      fontSize: '1.125rem',
      lineHeight: '1.8',
      color: 'var(--color-gray-800)'
    },
    calloutSection: {
      backgroundColor: 'var(--color-gray-800)',
      padding: isMobile ? '3rem 2rem' : '4rem 3rem',
      borderRadius: '1rem',
      textAlign: 'center',
      margin: '3rem 0',
      backgroundImage: 'linear-gradient(135deg, var(--color-gray-700), var(--color-gray-900))'
    },
    calloutQuote: {
      fontSize: isMobile ? '1.5rem' : '2rem',
      fontWeight: 'bold',
      color: 'var(--text-white)',
      marginBottom: '2rem',
      fontStyle: 'italic'
    },
    calloutText: {
      fontSize: isMobile ? '1rem' : '1.125rem',
      color: 'var(--color-gray-300)',
      lineHeight: '1.6',
      maxWidth: '800px',
      margin: '0 auto'
    },
    deploymentText: {
      fontSize: '1.125rem',
      lineHeight: '1.8',
      color: 'var(--color-gray-800)',
      marginBottom: '2rem'
    },
    ctaButton: {
      backgroundColor: 'var(--color-primary-teal)',
      color: 'var(--text-white)',
      padding: '1rem 2rem',
      borderRadius: '0.5rem',
      fontSize: '1.125rem',
      fontWeight: 'bold',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
      margin: '0 0.5rem'
    },
    ctaButtonSecondary: {
      backgroundColor: 'transparent',
      color: 'var(--text-white)',
      padding: '1rem 2rem',
      borderRadius: '0.5rem',
      fontSize: '1.125rem',
      fontWeight: 'bold',
      border: '2px solid var(--color-primary-teal)',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
      margin: '0 0.5rem'
    }
  };

  const roles = [
    {
      icon: '',
      title: 'Politicians & Diplomats',
      description: 'Secure negotiations, safe travel.'
    },
    {
      icon: '',
      title: 'Military & Defense',
      description: 'Secure ops in the field.'
    },
    {
      icon: '',
      title: 'Government Agencies',
      description: 'Deployable security at scale.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section style={{ ...styles.section, backgroundColor: 'var(--bg-secondary)' }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Hiroh: Your Mobile SCIF</h2>
          <p style={styles.sectionSubtitle}>
            It's not Software. It's Physics. Hiroh cuts the physical circuit, delivering Military-grade privacy, anywhere you go.
          </p>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button onClick={() => setCurrentPage('contact')} style={styles.ctaButton}>
              Request a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Section 1 – What is a Mobile SCIF? */}
      <section style={{ ...styles.section, backgroundColor: 'var(--bg-primary)' }}>
        <div style={styles.container}>
          <div style={styles.grid2Col}>
            <div>
              <img 
                src={`${process.env.PUBLIC_URL}/images/hiroh-phone-1.jpg`}
                alt="Hiroh phone close-up"
                style={styles.phoneImage}
              />
            </div>
            <div>
              <h3 style={styles.scifTitle}>When security is mission-critical.</h3>
              <p style={styles.scifText}>
                The Hiroh phone is designed to function as a Mobile SCIF (Sensitive Compartmented Information Facility),
                ensuring that classified communications, mission data, and sensitive conversations remain fully protected,
                even in hostile environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 – Role-Specific Benefits */}
      <section style={{ ...styles.section, backgroundColor: 'var(--bg-secondary)' }}>
        <div style={styles.container}>
          <h2 style={{ ...styles.sectionTitle, marginBottom: isMobile ? '3rem' : '4rem' }}>
            Role-Specific Benefits
          </h2>

          {/* 3 columns layout with roles */}
          <div style={styles.grid3Col}>
            {roles.map((role, index) => (
              <div key={index} style={styles.roleCard}>
                <div style={styles.roleIcon}>{role.icon}</div>
                <h3 style={styles.roleTitle}>{role.title}</h3>
                <p style={styles.roleDescription}>{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 – Technology Advantages */}
      <section style={{ ...styles.section, backgroundColor: 'var(--bg-primary)' }}>
        <div style={styles.container}>
          <div style={styles.grid2Col}>
            <div>
              <img 
                src={`${process.env.PUBLIC_URL}/images/hiroh-phone-3.jpg`}
                alt="Hiroh Kill Switch Circuit Cutoff diagram"
                style={styles.techImage}
              />
            </div>
            <div>
              <h3 style={styles.techTitle}>Unhackable by Design</h3>
              <p style={styles.techDescription}>
                Carry a field-ready secure device that prevents cyber infiltration, geo-tracking, and communications
                leaks during sensitive operations. Hiroh doesn't just protect you. It denies adversaries the ability
                to attack in the first place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 – Callout Banner */}
      <section style={{ ...styles.section, backgroundColor: 'var(--bg-secondary)' }}>
        <div style={styles.container}>
          <div style={styles.calloutSection}>
            <p style={styles.calloutQuote}>
              If the switch is off, no app or malware can turn it back on.
            </p>
            <p style={styles.calloutText}>
              With hardware-level kill switches that electronically disable the camera, microphone,
              GPS, Wi-Fi, and Bluetooth, using a Hiroh guarantees that no app, malware, spyware,
              or remote exploit can compromise your device. When these switches are activated,
              surveillance becomes impossible — period.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 – Deployment & Procurement */}
      <section style={{ ...styles.section, backgroundColor: 'var(--bg-primary)' }}>
        <div style={styles.container}>
          <div style={styles.grid2Col}>
            <div>
              <h3 style={styles.techTitle}>Deployment & Procurement</h3>
              <p style={styles.deploymentText}>
                Short text about scalable government/defense rollout.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <button onClick={() => setCurrentPage('contact')} style={styles.ctaButton}>
                Contact Defense Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GovtMilitaryExtras;