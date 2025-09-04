import React from 'react';

const FinallySection = ({ isMobile }) => {
  const features = [
    {
      title: 'Zero Surveillance',
      description: 'No behavioral tracking, no location harvesting, no digital fingerprinting.'
    },
    {
      title: 'End-to-End Encryption',
      description: 'Military-grade encryption. Your keys, your data—never ours.'
    },
    {
      title: 'Open Source Security',
      description: 'Protocols open to audit by independent researchers.'
    }
  ];

  const styles = {
    container: {
      padding: isMobile ? '3rem 1rem' : '6rem 2rem', 
      backgroundColor: 'var(--color-gray-100)'
    },
    content: {
      maxWidth: '1200px',
      margin: '0 auto',
      boxSizing: 'border-box'
    },
    title: {
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '1.5rem',
      color: 'var(--text-primary)'
    },
    subtitle: {
      textAlign: 'center',
      fontSize: isMobile ? '1rem' : '1.25rem',
      color: 'var(--text-secondary)',
      maxWidth: '900px',
      margin: isMobile ? '0 auto 2rem' : '0 auto 4rem', 
      lineHeight: '1.6'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: isMobile ? '1rem' : '2rem',
      marginBottom: '1rem'
    },
    card: {
      textAlign: 'center',
      padding: isMobile ? '1.5rem' : '2rem',
      backgroundColor: 'var(--bg-white)',
      borderRadius: '1rem',
      boxShadow: '0 10px 30px var(--color-black-10)'
    },
    cardTitle: {
      fontSize: isMobile ? '1.1rem' : '1.25rem',
      fontWeight: 'bold',
      color: 'var(--text-primary)',
      marginBottom: '0.5rem'
    },
    cardDescription: {
      fontSize: isMobile ? '0.9rem' : '0.95rem',
      color: 'var(--text-secondary)',
      lineHeight: '1.5'
    }
  };

  return (
    <section style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.title}>
          Finally, a Phone That Puts You First
        </h2>

        <p style={styles.subtitle}>
          In a world where your data is constantly harvested, we chose a different path.
          Zero tracking. Zero data collection. Maximum security.
        </p>

        <div style={styles.grid}>
          {features.map((card, index) => (
            <div key={index} style={styles.card}>
              <h3 style={styles.cardTitle}>
                {card.title}
              </h3>
              <p style={styles.cardDescription}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinallySection;
