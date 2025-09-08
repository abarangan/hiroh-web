import React from 'react';

const BusinessExtras = ({ isMobile, setCurrentPage }) => {
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
    riskCard: {
      backgroundColor: 'var(--color-white-05)',
      padding: '2rem',
      borderRadius: '1rem',
      textAlign: 'center',
      border: '1px solid var(--color-gray-600)'
    },
    riskIcon: {
      fontSize: '3rem',
      marginBottom: '1rem',
      color: 'var(--color-primary-teal)'
    },
    riskTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: 'var(--text-white)',
      marginBottom: '1rem'
    },
    riskDescription: {
      fontSize: '1rem',
      color: 'var(--color-gray-300)',
      lineHeight: '1.6'
    },
    solutionImage: {
      width: '100%',
      maxWidth: '500px',
      height: 'auto',
      borderRadius: '1rem',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
    },
    solutionText: {
      fontSize: '1.125rem',
      lineHeight: '1.8',
      color: 'var(--text-white)'
    },
    solutionFeature: {
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
    benefitCard: {
      backgroundColor: 'var(--color-white-05)',
      padding: '2rem',
      borderRadius: '1rem',
      textAlign: 'center',
      border: '1px solid var(--color-gray-600)'
    },
    benefitIcon: {
      fontSize: '3rem',
      marginBottom: '1rem',
      color: 'var(--color-primary-teal)'
    },
    benefitTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: 'var(--text-white)',
      marginBottom: '1rem'
    },
    benefitDescription: {
      fontSize: '1rem',
      color: 'var(--color-gray-300)',
      lineHeight: '1.6'
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
      display: 'inline-block'
    }
  };

  const risks = [
    {
      icon: '',
      title: 'Corporate Espionage',
      description: 'Competitors and state actors target executives at home and during travel.'
    },
    {
      icon: '',
      title: 'Data Interception',
      description: 'Banking, insurance, and trade deals can be monitored or stolen.'
    },
    {
      icon: '',
      title: 'Device Compromise Abroad',
      description: 'In China, Russia, and other regions, malware can be forced onto devices at the network level. Every word can be heard, All your information exposed'
    }
  ];

  const scenarios = [
    {
      title: 'International Travel (China, Russia, Middle East)',
      description: 'Prevent forced surveillance, backdoor implants, and hidden malware installs.'
    },
    {
      title: 'Banking & Finance',
      description: 'Secure high-value transactions and private calls without interception.'
    },
    {
      title: 'Insurance & Legal',
      description: 'Protect sensitive client data and case details under attorney-client privilege.'
    },
    {
      title: 'Corporate Strategy Meetings',
      description: 'Confidential negotiations remain untouchable—even in high-risk countries.'
    }
  ];

  const comparisonData = [
    { feature: 'Mic/Camera Hacking', standard: 'Vulnerable', encrypted: 'Possible', hiroh: 'Physically Disabled' },
    { feature: 'GPS Tracking', standard: 'Always active', encrypted: 'Sometimes masked', hiroh: 'One-Tap Kill Switch' },
    { feature: 'Foreign Network Security', standard: 'Highly vulnerable', encrypted: 'App-dependent', hiroh: 'Hardware Protection + SCIF Mode' },
    { feature: 'Executive Protection', standard: 'Weak', encrypted: 'Partial', hiroh: 'Complete Device-Level Security' }
  ];

  const benefits = [
    {
      icon: '',
      title: 'Travel With Confidence',
      description: 'Use your phone in China, Russia, or anywhere—immune to spyware injection.'
    },
    {
      icon: '',
      title: 'Protect Corporate Secrets',
      description: 'Boardroom conversations and documents remain secure.'
    },
    {
      icon: '',
      title: 'Build Client Trust',
      description: 'Show customers and partners you take data security seriously.'
    }
  ];

  return (
    <>
      {/* The Risks to Global Business */}
      <section style={{ ...styles.section, backgroundColor: 'var(--bg-secondary)' }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>The Risks to Global Business</h2>
          <p style={{
            ...styles.sectionSubtitle,
            marginBottom: isMobile ? '3rem' : '4rem'
          }}>
            Modern business faces unprecedented digital threats that can compromise entire organizations.
          </p>
          
          <div style={styles.grid3Col}>
            {risks.map((risk, index) => (
              <div key={index} style={styles.riskCard}>
                <div style={styles.riskIcon}>{risk.icon}</div>
                <h3 style={styles.riskTitle}>{risk.title}</h3>
                <p style={styles.riskDescription}>{risk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiroh's Business Solution */}
      <section style={{ ...styles.section, backgroundColor: 'var(--bg-primary)' }}>
        <div style={styles.container}>
          <h2 style={{ ...styles.sectionTitle, color: 'var(--text-primary)' }}>
            Hiroh's Business Solution
          </h2>
          
          <div style={styles.grid2Col}>
            <div>
              <img 
                src={`${process.env.PUBLIC_URL}/images/hiroh-phone-2.jpg`} 
                alt="Business executive using Hiroh phone"
                style={styles.solutionImage}
              />
            </div>
            <div>
              <div style={styles.solutionFeature}>
                <h3 style={styles.featureTitle}>Mobile SCIF Security</h3>
                <p style={styles.featureDescription}>
                  Host negotiations without fear of eavesdropping.
                </p>
              </div>
              <div style={styles.solutionFeature}>
                <h3 style={styles.featureTitle}>Kill Switch</h3>
                <p style={styles.featureDescription}>
                  Physically disables mic and camera. Immune to spyware.
                </p>
              </div>
              <div style={styles.solutionFeature}>
                <h3 style={styles.featureTitle}>Connectivity Control</h3>
                <p style={styles.featureDescription}>
                  Shut down GPS, Wi-Fi, Bluetooth, and cellular to prevent tracking abroad.
                </p>
              </div>
              <div style={styles.solutionFeature}>
                <h3 style={styles.featureTitle}>Corporate-Grade Performance</h3>
                <p style={styles.featureDescription}>
                  16GB RAM, 512GB storage, 2TB expandable—enterprise speed, maximum security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Business Scenarios */}
      <section style={{ ...styles.section, backgroundColor: 'var(--bg-secondary)' }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Real-World Business Scenarios</h2>
          <p style={styles.sectionSubtitle}>
            See how Hiroh protects business operations in critical situations.
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

      {/* Comparison Table */}
      <section style={{ ...styles.section, backgroundColor: 'var(--bg-primary)' }}>
        <div style={styles.container}>
          <h2 style={{ ...styles.sectionTitle, color: 'var(--text-primary)' }}>
            Hiroh vs. Regular Smartphones
          </h2>
          
          <table style={styles.comparisonTable}>
            <thead style={styles.tableHeader}>
              <tr>
                <th style={styles.tableHeaderCell}>Feature</th>
                <th style={styles.tableHeaderCell}>Standard Phone</th>
                <th style={styles.tableHeaderCell}>Encrypted Apps</th>
                <th style={styles.tableHeaderCell}>Hiroh</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} style={index % 2 === 0 ? styles.tableRow : styles.tableRowAlt}>
                  <td style={styles.tableCell}>{row.feature}</td>
                  <td style={styles.tableCell}>{row.standard}</td>
                  <td style={styles.tableCell}>{row.encrypted}</td>
                  <td style={styles.hirohValue}>{row.hiroh}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Benefits for Business */}
      <section style={{ ...styles.section, backgroundColor: 'var(--bg-secondary)' }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Benefits for Business</h2>
          
          <div style={styles.grid3Col}>
            {benefits.map((benefit, index) => (
              <div key={index} style={styles.benefitCard}>
                <div style={styles.benefitIcon}>{benefit.icon}</div>
                <h3 style={styles.benefitTitle}>{benefit.title}</h3>
                <p style={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ ...styles.section, backgroundColor: 'var(--bg-primary)' }}>
        <div style={styles.container}>
          <div style={styles.ctaSection}>
            <h2 style={styles.ctaTitle}>Protect Your Business. Protect Your Future.</h2>
            <p style={styles.ctaSubtitle}>
              Hiroh is the ultimate business phone for executives, bankers, and global travelers. When reputation and billions are at stake, trust nothing less.
            </p>
            <button onClick={() => setCurrentPage('contact')} style={styles.ctaButton}>
              Inquiries
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessExtras;
