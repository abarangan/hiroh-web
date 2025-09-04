import React from 'react';
import Button from '../../ui/Button';

const TakeBackPrivacySection = ({ isMobile }) => {
  const styles = {
    container: {
      position: 'relative',
      backgroundColor: 'var(--bg-dark)',
      color: 'var(--text-white)',
      padding: 0,
      minHeight: isMobile ? '60vh' : '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      overflow: 'hidden'
    },
    backgroundImage: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 0,
      filter: 'brightness(0.45) contrast(1.1)'
    },
    content: {
      position: 'relative', 
      zIndex: 1, 
      padding: isMobile ? '1rem' : '2rem', 
      maxWidth: '900px'
    },
    title: {
      fontSize: isMobile ? '2.5rem' : '3.5rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem'
    },
    subtitle: {
      fontSize: isMobile ? '1.1rem' : '1.5rem',
      marginBottom: isMobile ? '2rem' : '2.5rem',
      lineHeight: '1.6',
      color: 'var(--text-white-90)'
    },
    buttonContainer: {
      display: 'flex', 
      gap: isMobile ? '1rem' : '2rem', 
      padding: isMobile ? '0 1rem' : '0',
      justifyContent: 'center',
      maxWidth: isMobile ? '100%' : '400px', 
      margin: '0 auto'
    }
  };

  return (
    <section style={styles.container}>
      <img
        src={`${process.env.PUBLIC_URL}/images/hiroh-phone-3.jpg`}
        alt="HIROH Phone"
        style={styles.backgroundImage}
      />

      <div style={styles.content}>
        <h2 style={{...styles.title, color: 'var(--text-white)'}}>
          Take Back Your Privacy
        </h2>
        <p style={styles.subtitle}>
          Join thousands of privacy-conscious individuals who refuse to compromise their digital freedom.
        </p>
        <div style={styles.buttonContainer}>
          <Button
            variant="white"
            onClick={() => console.log('Shop Now clicked')}
          >
            Shop Now
          </Button>
          <Button
            variant="outlineWhite"
            onClick={() => console.log('Learn More clicked')}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TakeBackPrivacySection;
