import React from 'react';

const KeyFeaturesSection = ({ isMobile }) => {
  const features = [
    {
      title: 'Privacy First',
      description: 'Electronically disable camera and microphone, second switch for GPS, Wi-Fi, Bluetooth. You control who sees you and who hears you.'
    },
    {
      title: 'Power & Performance',
      description: '16GB RAM + 512GB storage, 108MP triple back camera and 32MP selfie cam.'
    },
    {
      title: 'Stunning Display',
      description: '6.67" AMOLED screen, 120Hz refresh, 600 nits with peak 1800 nits brightness.'
    },
    {
      title: 'Encrypted SD Storage',
      description: 'Add up to 2TB for everything that matters.'
    }
  ];

  const styles = {
    container: {
      display: isMobile ? 'flex' : 'grid',
      flexWrap: isMobile ? 'wrap' : 'none',
      justifyContent: 'center',
      alignItems: isMobile ? 'center' : 'normal',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      gap: isMobile ? '1rem' : '2rem',
      marginBottom: isMobile ? '.8rem' : '4rem',
    },
    card: {
      textAlign: 'center', 
      padding: '2rem', 
      backgroundColor: 'var(--bg-white)', 
      borderRadius: '1rem', 
      boxShadow: '0 10px 30px var(--color-black-10)',
      width: isMobile ? '100%' : 'auto',
    },
    title: {
      fontSize: '1.25rem', 
      fontWeight: 'bold', 
      color: 'var(--text-primary)', 
      marginBottom: '1rem'
    },
    description: {
      color: 'var(--text-gray)', 
      lineHeight: '1.5'
    }
  };

  return (
    <section className="section">
      <div style={styles.container}>
        {features.map((card, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.title}>
              {card.title}
            </h3>
            <p style={styles.description}>
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeaturesSection;
