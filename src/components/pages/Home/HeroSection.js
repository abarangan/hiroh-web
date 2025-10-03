import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import VideoModal from '../../ui/VideoModal';

const HeroSection = ({ isMobile }) => {
  const navigate = useNavigate();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const styles = {
    hero: {
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    },
    heroVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 0
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
      padding: isMobile ? '0 2rem 1.5rem 2rem' : '0 0 2rem 4rem',
      position: 'absolute',
      bottom: isMobile ? '3.5rem' : '0',
      left: 0,
      zIndex: 2,
      width: '100%',
      maxWidth: isMobile ? '100%' : '1000px',
      textAlign: isMobile ? 'center' : 'left'
    },
    heroTitle: {
      fontSize: 'clamp(2rem, 9vw, 9rem)',
      fontWeight: 'bold',
      color: 'var(--text-white)',
      marginBottom: '1.5rem',
      lineHeight: '1.1',
      textShadow: '1px 1px 1px var(--color-black-50)',
      whiteSpace: 'nowrap'
    },
    heroSubtitle: {
      fontSize: isMobile ? '1.25rem' : '1.75rem',
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
      justifyContent: 'flex-start',
      maxWidth: isMobile ? '100%' : '400px', 
      margin: '1rem 0 0 0'
    }
  };

  return (
    <section style={styles.hero}>
      <video
        style={styles.heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={`${process.env.PUBLIC_URL}/images/HIROH_BGLoop_WEB.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={styles.heroOverlay}></div>

      <div style={styles.heroContent}>
        <h1 style={styles.heroTitle}>
          PRIVACY HAS<br /> A NEW HIROH
        </h1>

        <div style={styles.buttonContainer}>
          <Button
            variant="filled"
            onClick={() => setIsVideoModalOpen(true)}
          >
            Play Video
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate('/phone#shop')}
          >
            Pre-Order Now
          </Button>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoSrc={`${process.env.PUBLIC_URL}/images/hiroh_security-switch.mp4`}
      />
    </section>
  );
};

export default HeroSection;
