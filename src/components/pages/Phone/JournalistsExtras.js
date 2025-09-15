import React from 'react';

const JournalistsExtras = ({ isMobile, setCurrentPage }) => {
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
      maxWidth: '800px',
      margin: '0 auto',
      marginBottom: isMobile ? '2rem' : '3rem'
    },
    grid3Col: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: isMobile ? '2rem' : '3rem',
      marginBottom: '3rem'
    },
    grid2Col: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      gap: isMobile ? '2rem' : '4rem',
      alignItems: 'center',
      marginBottom: '3rem'
    },
    threatCard: {
      backgroundColor: 'var(--color-white-05)',
      padding: '2rem',
      borderRadius: '1rem',
      textAlign: 'center',
      border: '1px solid var(--color-gray-600)'
    },
    threatTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: 'var(--text-white)',
      marginBottom: '1rem'
    },
    threatDescription: {
      fontSize: '1rem',
      color: 'var(--color-gray-300)',
      lineHeight: '1.6'
    },
    protectionImage: {
      width: '100%',
      maxWidth: '500px',
      height: 'auto',
      borderRadius: '1rem',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
    },
    protectionText: {
      fontSize: '1.125rem',
      lineHeight: '1.8',
      color: 'var(--text-white)'
    },
    protectionFeature: {
      marginBottom: '2rem',
      padding: '2rem',
      backgroundColor: 'var(--color-white-08)',
      borderRadius: '1rem',
      borderLeft: '4px solid var(--color-primary-teal)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
    },
    featureTitle: {
      fontSize: '1.125rem',
      fontWeight: 'bold',
      color: 'var(--text-white)',
      marginBottom: '0.5rem'
    },
    featureDescription: {
      fontSize: '1rem',
      color: 'var(--color-gray-800)',
      lineHeight: '1.6'
    },
    scenarioCard: {
      backgroundColor: 'var(--color-white-05)',
      padding: '2rem',
      borderRadius: '1rem',
      border: '1px solid var(--color-gray-600)',
      minWidth: '300px',
      marginRight: '1rem'
    },
    scenarioTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: 'var(--text-white)',
      marginBottom: '1rem'
    },
    scenarioDescription: {
      fontSize: '1rem',
      color: 'var(--color-gray-300)',
      lineHeight: '1.6'
    },
    scenariosContainer: {
      display: 'flex',
      overflowX: 'auto',
      padding: '1rem 0',
      gap: '1rem'
    },
    comparisonTable: {
      width: '100%',
      maxWidth: '900px',
      margin: '0 auto',
      backgroundColor: 'var(--bg-white)',
      borderRadius: '1rem',
      overflow: 'hidden',
      boxShadow: '0 10px 30px var(--color-black-10)',
      fontSize: isMobile ? '0.875rem' : '1rem'
    },
    tableHeader: {
      backgroundColor: 'var(--bg-secondary)'
    },
    tableHeaderCell: {
      padding: isMobile ? '0.75rem 0.5rem' : '1.5rem',
      color: 'var(--text-white)',
      textAlign: 'center',
      fontWeight: '600'
    },
    tableRow: {
      borderBottom: '1px solid var(--color-gray-200)'
    },
    tableRowAlt: {
      borderBottom: '1px solid var(--color-gray-200)',
      backgroundColor: 'var(--color-gray-100)'
    },
    tableCell: {
      padding: isMobile ? '0.75rem 0.5rem' : '1.25rem',
      color: 'var(--color-gray-700)',
      fontWeight: '500',
      textAlign: 'center'
    },
    hirohValue: {
      padding: isMobile ? '0.75rem 0.25rem' : '1.25rem',
      textAlign: 'center',
      color: 'var(--color-primary-teal)',
      fontWeight: 'bold'
    },
    testimonialCard: {
      backgroundColor: 'var(--color-white-05)',
      padding: '2rem',
      borderRadius: '1rem',
      border: '1px solid var(--color-gray-600)',
      textAlign: 'center',
      margin: '0 1rem'
    },
    testimonialQuote: {
      fontSize: '1.125rem',
      fontStyle: 'italic',
      color: 'var(--text-white)',
      marginBottom: '1rem',
      lineHeight: '1.6'
    },
    testimonialAuthor: {
      fontSize: '1rem',
      color: 'var(--color-primary-teal)',
      fontWeight: 'bold'
    },
    ctaSection: {
      backgroundColor: 'var(--color-primary-teal)',
      padding: isMobile ? '3rem 2rem' : '4rem 3rem',
      borderRadius: '1rem',
      textAlign: 'center',
      margin: '3rem 0'
    },
    ctaTitle: {
      fontSize: isMobile ? '2rem' : '2.5rem',
      fontWeight: 'bold',
      color: 'var(--text-white)',
      marginBottom: '1rem'
    },
    ctaSubtitle: {
      fontSize: isMobile ? '1.125rem' : '1.25rem',
      color: 'var(--text-white)',
      marginBottom: '2rem',
      opacity: 0.9
    },
    ctaButton: {
      backgroundColor: 'var(--text-white)',
      color: 'var(--color-primary-teal)',
      padding: '1rem 2rem',
      borderRadius: '0.5rem',
      fontSize: '1.125rem',
      fontWeight: 'bold',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
      margin: '0 0.5rem'
    }
  };

  const threats = [
    {
      title: 'Digital Surveillance',
      description: 'Governments, corporations, and bad actors track calls, texts, and apps.'
    },
    {
      title: 'Source Exposure',
      description: 'Spyware can activate cameras and microphones, compromising sources.'
    },
    {
      title: 'Data Seizures',
      description: 'Confiscated phones are easy to exploit without hardware protection.'
    }
  ];

  const scenarios = [
    {
      title: 'Investigative Reporters at Home',
      description: 'Protect against domestic surveillance, digital subpoenas, and corporate tracking.'
    },
    {
      title: 'Field Reporters in Conflict Zones',
      description: 'Stay secure in hostile environments where governments target the press.'
    },
    {
      title: 'Whistleblower Interviews',
      description: 'Guarantee confidentiality with sources who risk everything to speak.'
    },
    {
      title: 'Border Crossings',
      description: 'Prevent forced device scans from compromising sensitive data.'
    }
  ];

  const comparisonData = [
    { feature: 'Camera/Mic Access', regular: 'Hackable', encrypted: 'Hackable', hiroh: 'Physically Disabled' },
    { feature: 'GPS Tracking', regular: 'Always on', encrypted: 'Sometimes masked', hiroh: 'One-Tap Off' },
    { feature: 'Data Seizure Defense', regular: 'Vulnerable', encrypted: 'Vulnerable', hiroh: 'Hardware Protection' },
    { feature: 'Source Safety', regular: 'Compromised', encrypted: 'Risk of leaks', hiroh: 'Tamper-Proof' }
  ];

  const testimonials = [
    {
      quote: "Hiroh lets me interview sources without fear of spyware listening in.",
      author: "Investigative journalist, EU"
    },
    {
      quote: "Crossing hostile borders with Hiroh gives me peace of mind.",
      author: "Conflict reporter, Middle East"
    }
  ];

  return (
    <>
      {/* The Threats Journalists Face */}
      <section style={{ ...styles.section, backgroundColor: 'var(--bg-secondary)' }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>The Threats Journalists Face</h2>
          <p style={styles.sectionSubtitle}>
            Modern journalism faces unprecedented digital threats that compromise sources and stories.
          </p>
          
          <div style={styles.grid3Col}>
            {threats.map((threat, index) => (
              <div key={index} style={styles.threatCard}>
                <h3 style={styles.threatTitle}>{threat.title}</h3>
                <p style={styles.threatDescription}>{threat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiroh's Protection */}
      <section style={{ ...styles.section, backgroundColor: 'var(--bg-primary)' }}>
        <div style={styles.container}>
          <h2 style={{ ...styles.sectionTitle, color: 'var(--text-primary)' }}>
            Your Shield Against Spyware, Malware, and Tracking
          </h2>
          
          <div style={styles.grid2Col}>
            <div>
              <img 
                src={`${process.env.PUBLIC_URL}/images/hiroh-phone-1.jpg`} 
                alt="Hiroh Phone with Kill Switch toggles"
                style={styles.protectionImage}
              />
            </div>
            <div>
              <div style={styles.protectionFeature}>
                <h3 style={styles.featureTitle}>Kill Switch</h3>
                <p style={styles.featureDescription}>
                  Physically disables mic and camera. Not mute. Not software. Cut at the circuit.
                </p>
              </div>
              <div style={styles.protectionFeature}>
                <h3 style={styles.featureTitle}>Privacy Mode</h3>
                <p style={styles.featureDescription}>
                  One button shuts down GPS, Wi-Fi, Bluetooth, and cell signals. You vanish.
                </p>
              </div>
              <div style={styles.protectionFeature}>
                <h3 style={styles.featureTitle}>Mobile SCIF</h3>
                <p style={styles.featureDescription}>
                  Sensitive Compartmented Information Facility in your pocket. Safe conversations, even in hostile environments.
                </p>
              </div>
              <div style={styles.protectionFeature}>
                <h3 style={styles.featureTitle}>Tamper-Proof Engineering</h3>
                <p style={styles.featureDescription}>
                  Secure chipsets, hardened OS, unhackable hardware toggles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section style={{ ...styles.section, backgroundColor: 'var(--bg-secondary)' }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Real-World Scenarios</h2>
          <p style={styles.sectionSubtitle}>
            See how Hiroh protects journalists in critical situations.
          </p>
          
          <div style={styles.scenariosContainer}>
            {scenarios.map((scenario, index) => (
              <div key={index} style={styles.scenarioCard}>
                <h3 style={styles.scenarioTitle}>{scenario.title}</h3>
                <p style={styles.scenarioDescription}>{scenario.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hiroh is Different */}
      <section style={{ ...styles.section, backgroundColor: 'var(--bg-primary)' }}>
        <div style={styles.container}>
          <h2 style={{ ...styles.sectionTitle, color: 'var(--text-primary)' }}>
            Why Hiroh is Different
          </h2>
          
          <table style={styles.comparisonTable}>
            <thead style={styles.tableHeader}>
              <tr>
                <th style={styles.tableHeaderCell}>Feature</th>
                <th style={styles.tableHeaderCell}>Regular Phones</th>
                <th style={styles.tableHeaderCell}>"Encrypted" Apps</th>
                <th style={styles.tableHeaderCell}>Hiroh</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} style={index % 2 === 0 ? styles.tableRow : styles.tableRowAlt}>
                  <td style={styles.tableCell}>{row.feature}</td>
                  <td style={styles.tableCell}>{row.regular}</td>
                  <td style={styles.tableCell}>{row.encrypted}</td>
                  <td style={styles.hirohValue}>{row.hiroh}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ ...styles.section, backgroundColor: 'var(--bg-secondary)' }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>What Journalists Say</h2>
          
          <div style={{ display: 'flex', overflowX: 'auto', padding: '1rem 0' }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} style={styles.testimonialCard}>
                <p style={styles.testimonialQuote}>"{testimonial.quote}"</p>
                <p style={styles.testimonialAuthor}>— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ ...styles.section, backgroundColor: 'var(--bg-primary)' }}>
        <div style={styles.container}>
          <div style={styles.ctaSection}>
            <h2 style={styles.ctaTitle}>Protect Your Sources. Protect Yourself.</h2>
            <p style={styles.ctaSubtitle}>
              Hiroh is the first phone designed for journalists, by privacy experts. Make surveillance impossible.
            </p>
            <button onClick={() => setCurrentPage('contact')} style={styles.ctaButton}>
              Request a Demo
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default JournalistsExtras;
