import React from 'react';

const Footer = ({ styles }) => {
  return (
    <footer style={styles.footer}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
        <img
          src={`${process.env.PUBLIC_URL}/images/hiroh-inner-t.png`}
          alt="HIROH Symbol"
          style={{ height: '30px', width: 'auto' }}
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/hiroh-logo-t.png`}
          alt="HIROH"
          style={{ height: '30px', width: 'auto' }}
        />
      </div>
      <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
        Inventors of the Kill Switch. Makers of the Privacy Phone.
      </p>
      <p style={{ color: 'var(--color-gray-400)' }}>© 2025 HIROH. Your phone. Your control.</p>
    </footer>
  );
};

export default Footer;
