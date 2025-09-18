import React from 'react';

const DetailedSpecsSection = ({ isMobile }) => {
  const specsData = {
    performance: {
      title: 'Performance',
      items: [
        { label: 'RAM', value: '16GB' },
        { label: 'Internal Storage', value: '512GB' },
        { label: 'Expandable Storage', value: 'Up to 2TB' },
        { label: 'Processor', value: 'MediaTek Dimensity 8300' },
        { label: 'Operating System', value: 'e/OS' }
      ]
    },
    camera: {
      title: 'Camera',
      items: [
        { label: 'Rear Main', value: 'Samsung 108MP' },
        { label: 'Wide Angle', value: 'Sony 13MP' },
        { label: 'Macro', value: '2MP' },
        { label: 'Front', value: 'Sony 32MP' }
      ]
    },
    display: {
      title: 'Display',
      items: [
        { label: 'Size', value: '6.67" AMOLED' },
        { label: 'Refresh Rate', value: '120Hz' },
        { label: 'Brightness', value: '1200 nits (1800 peak)' },
        { label: 'Resolution', value: '2712 x 1220' },
        { label: 'Protection', value: 'Gorilla Glass Victus' }
      ]
    },
    security: {
      title: 'Security & Privacy',
      items: [
        { label: 'Encrypted Storage', value: '2TB SD Slot' },
        { label: 'Privacy Mode', value: 'Secure Sandbox' },
        { label: 'Biometric', value: 'Fingerprint' },
        { label: 'Tracking', value: 'Zero Data Harvesting' }
      ]
    },
    battery: {
      title: 'Battery',
      items: [
        { label: 'Capacity', value: '5000mAh High Density' },
        { label: 'Fast Charging', value: '33W' }
      ]
    },
    connectivity: {
      title: 'Connectivity',
      items: [
        { label: 'Network', value: '5G Enabled' },
        { label: 'WiFi', value: 'WiFi 6' },
        { label: 'Bluetooth', value: '5.2' },
        { label: 'Port', value: 'USB-C' }
      ]
    }
  };

  const styles = {
    container: {
      backgroundColor: 'var(--bg-white)',
      borderRadius: '1rem',
      boxShadow: 'var(--shadow-light)',
      padding: isMobile ? '2rem' : '3rem',
    },
    title: {
      fontSize: isMobile ? '1.5rem' : '2rem',
      fontWeight: 'bold',
      marginBottom: isMobile ? '2rem' : '3rem',
      color: 'var(--text-primary)',
      borderBottom: '3px solid var(--color-primary-teal)',
      paddingBottom: '1rem'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: isMobile ? '2rem' : '3rem'
    },
    section: {
      marginBottom: isMobile ? '1.5rem' : '0'
    },
    sectionTitle: {
      fontSize: isMobile ? '1.1rem' : '1.25rem',
      fontWeight: '600',
      color: 'var(--color-primary-teal)',
      marginBottom: isMobile ? '1rem' : '1.5rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    specList: {
      margin: 0
    },
    specItem: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0.75rem 0',
      borderBottom: '1px solid var(--color-gray-200)',
      gap: '1rem'
    },
    specLabel: {
      color: 'var(--text-gray)',
      fontWeight: '500'
    },
    specValue: {
      color: 'var(--text-primary)',
      fontWeight: '600',
      margin: 0,
      textAlign: 'right'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        Detailed Specifications
      </h2>

      <div style={styles.grid}>
        {Object.entries(specsData).map(([key, section]) => (
          <div key={key} style={styles.section}>
            <h3 style={styles.sectionTitle}>
              {section.title}
            </h3>
            <dl style={styles.specList}>
              {section.items.map((item, index) => (
                <div key={index} style={styles.specItem}>
                  <dt style={styles.specLabel}>{item.label}</dt>
                  <dd style={styles.specValue}>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailedSpecsSection;
