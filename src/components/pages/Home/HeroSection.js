import React from 'react';
import Button from '../../ui/Button';

const HeroSection = ({ setCurrentPage,isMobile }) => {
  const styles = {
    hero: {
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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
      padding: isMobile ? '0 2rem' : '0',
      marginTop: isMobile ? 'calc(60px + 1rem)' : '11rem',
      position: 'relative',
      zIndex: 2,
      width: '100%',
      maxWidth: isMobile ? '100%' : '1200px',
      textAlign: 'center'
    },
    heroTitle: {
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
    heroTags: {
      display: 'flex',
      gap: isMobile ? '0.6rem' : '3rem',
      justifyContent: 'center',
      alignItems: 'center',
      margin: isMobile ? '1rem 0' : '2rem 0',
      marginBottom: isMobile ? '3rem' : '4rem',
      fontSize: isMobile ? '1.2rem' : '1.5rem',
      color: 'var(--text-white)',
      fontWeight: '600',
      textShadow: '0 2px 6px var(--color-black-60)',
    },
    buttonContainer: {
      display: 'flex', 
      gap: isMobile ? '1rem' : '2rem', 
      justifyContent: 'center',
      maxWidth: isMobile ? '100%' : '400px', 
      margin: '0 auto'
    }
  };

  return (
    <section style={styles.hero}>
      <div style={styles.heroOverlay}></div>

      <div
        style={{
          ...styles.heroContent,
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          paddingBottom: '4rem',
        }}
      >
        <h1 style={styles.heroTitle}>
          Your Everyday Phone<br />Is Also<br />
          Your Private Phone
        </h1>

        <div style={styles.heroTags}>
          <span>PREMIUM</span>
          <span>CONVENIENT</span>
          <span>PRIVATE</span>
        </div>

        <div style={styles.buttonContainer}>
          <Button
            variant="filled"
            onClick={() => setCurrentPage('phone')}
          >
            Shop Now
          </Button>
          <Button
            variant="outline"
            onClick={() => setCurrentPage('phone')}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
