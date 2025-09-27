import React from 'react';
import HeroSection from './HeroSection';
import KeyFeaturesSection from './KeyFeaturesSection';
import PrivacySection from './PrivacySection';
import EverydayUseSection from './EverydayUseSection';
import FAQSection from './FAQSection';
import FinallySection from './FinallySection';
import TakeBackPrivacySection from './TakeBackPrivacySection';

const HomePage = ({ isMobile }) => {
  const styles = {
    imageSection: {
      position: 'relative',
      minHeight: isMobile ? '50vh' : '100vh',
      backgroundImage: `url(${process.env.PUBLIC_URL}/images/hiroh-phone-9.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    imageOverlay: {
      position: 'absolute',
      inset: 0,
    },
    imageContent: {
      position: 'relative',
      zIndex: 1,
    },
  };
  return (
    <>
      <HeroSection isMobile={isMobile} />
      <KeyFeaturesSection isMobile={isMobile} />
      
      <section style={styles.imageSection}>
        <div style={styles.imageOverlay} />
        <div style={styles.imageContent}>
        </div>
      </section>
      <PrivacySection isMobile={isMobile} />
      <EverydayUseSection isMobile={isMobile} />
      <FAQSection isMobile={isMobile} />
      <FinallySection isMobile={isMobile} />
      <TakeBackPrivacySection isMobile={isMobile} />
    </>
  );
};

export default HomePage;
