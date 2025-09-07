import React from 'react';

const EverydayUseSection = ({ isMobile }) => {
  const useCases = [
    {
      title: 'For Work',
      features: [
        'All productivity apps supported',
        '512GB storage for documents',
        'Flagship performance'
      ]
    },
    {
      title: 'For Life',
      features: [
        'Media streaming & gaming',
        'Social apps compatible',
        'Premium camera system'
      ]
    },
    {
      title: 'For Freedom',
      features: [
        'Easily toggle secure mode',
        'Private conversations',
        'Anonymous browsing'
      ]
    }
  ];

  const styles = {
    section: {
      backgroundImage: isMobile 
        ? 'none'
        : `
          linear-gradient(135deg, var(--color-black-50) 0%, var(--color-black-30) 100%),
          url(${process.env.PUBLIC_URL}/images/hiroh-phone-13.jpg)
        `,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'var(--text-white)',
      paddingTop: isMobile ? '0' : ''
    },
    imageContainer: {
      backgroundImage: `
        linear-gradient(to bottom, 
          transparent 0%,
          transparent 60%,
          var(--color-white) 100%
        ),
        linear-gradient(135deg, var(--color-black-50) 0%, var(--color-black-30) 100%),
        url(${process.env.PUBLIC_URL}/images/hiroh-phone-13.jpg)
      `,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 0',
      margin: '0 -1rem',
      minHeight: '60vh'
    },
    gradientContainer: {
      marginTop: '-7rem',
    },
    subtitle: {
      fontSize: '1.25rem', 
      textAlign: 'center', 
      color: 'var(--text-white-90)', 
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
      padding: isMobile ? '0 1rem' : '0',
      position: isMobile ? 'relative' : 'static',
      zIndex: isMobile ? 1 : 'auto'
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
      color: 'var(--text-primary)',
      textAlign: 'center'
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
    <section 
      className="section"
      style={styles.section}
    >
      {isMobile ? (
        <>
          <div style={styles.imageContainer}>
            <div style={{ padding: '2rem 1rem' }}>
              <h2 className="section-title" style={{ textAlign: 'center', color: 'var(--text-white)' }}>From Everyday Phone to Privacy Phone in One Click</h2>
              <p style={{...styles.subtitle, color: 'var(--text-white-90)'}}>
                Seamlessly transition between your everyday needs and complete privacy protection.
              </p>
            </div>
          </div>
          <div style={styles.gradientContainer}>
            <div style={{ padding: '2rem 1rem' }}>
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
            </div>
          </div>
        </>
      ) : (
        <div>
          <h2 className="section-title" style={{ textAlign: 'center', color: 'var(--text-white)' }}>From Everyday Phone to Privacy Phone in One Click</h2>
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
        </div>
      )}
    </section>
  );
};

export default EverydayUseSection;
