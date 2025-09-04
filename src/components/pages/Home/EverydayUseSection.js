import React from 'react';

const EverydayUseSection = ({ isMobile }) => {
  const useCases = [
    {
      title: 'Business-Ready',
      features: [
        'All productivity apps supported',
        '512GB storage for documents',
        'Flagship performance'
      ]
    },
    {
      title: 'Personal-Life Friendly',
      features: [
        'Media streaming & gaming',
        'Social apps compatible',
        'Premium camera system'
      ]
    },
    {
      title: 'Privacy On-Demand',
      features: [
        'Toggle secure mode for banking',
        'Private conversations',
        'Anonymous browsing'
      ]
    }
  ];

  const styles = {
    subtitle: {
      fontSize: '1.25rem', 
      textAlign: 'center', 
      color: 'var(--text-secondary)', 
      maxWidth: '800px', 
      margin: isMobile ? '0 auto 2rem' : '0 auto 4rem', 
      lineHeight: '1.6',
      padding: isMobile ? '0 1rem' : '0'
    },
    container: {
      display: 'grid', 
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
      gap: isMobile ? '1rem' : '2rem', 
      maxWidth: '1200px', 
      margin: '0 auto',
      padding: isMobile ? '0 1rem' : '0'
    },
    card: {
      backgroundColor: 'var(--bg-white)', 
      padding: isMobile ? '2rem' : '2.5rem', 
      borderRadius: '1rem', 
      boxShadow: '0 10px 30px var(--color-black-10)'
    },
    title: {
      fontSize: isMobile ? '1.5rem' : '1.75rem', 
      fontWeight: 'bold', 
      marginBottom: '1.5rem', 
      color: 'var(--text-primary)'
    },
    featureList: {
      listStyle: 'none', 
      padding: 0
    },
    featureItem: {
      marginBottom: '1rem', 
      color: 'var(--color-gray-700)',
      fontSize: isMobile ? '0.9rem' : '1rem'
    }
  };

  return (
    <section className="section">
      <h2 className="section-title" style={{ textAlign: 'center' }}>From Everyday Phone to Privacy Phone in One Click</h2>
      <p style={styles.subtitle}>
        Seamlessly transition between your everyday needs and complete privacy protection.
      </p>

      <div style={styles.container}>
        {useCases.map((card, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.title}>
              {card.title}
            </h3>
            <ul style={styles.featureList}>
              {card.features.map((feature, featureIndex) => (
                <li key={featureIndex} style={styles.featureItem}>
                  ✓ {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EverydayUseSection;
