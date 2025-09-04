import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: 'var(--color-black)',
      color: 'var(--text-white)',
      padding: '4rem 2rem',
      textAlign: 'center'
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
        <img
          src={`${process.env.PUBLIC_URL}/images/hiroh-inner-t.png`}
          alt="HIROH Symbol"
          style={{ height: '22px', width: 'auto' }}
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/hiroh-logo-t.png`}
          alt="HIROH"
          style={{ height: '22px', width: 'auto' }}
        />
      </div>
      <p style={{ fontSize: '1rem', marginBottom: '3rem' }}>
        Inventors of the Kill Switch. Makers of the Privacy Phone.
      </p>
      <p style={{ color: 'var(--color-gray-400)' }}>© 2025 HIROH. Your phone. Your control.</p>
    </footer>
  );
};

export default Footer;

