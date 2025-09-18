import React from 'react';

const ComparisonTable = ({ isMobile }) => {
  const comparisonData = [
    {
      feature: 'RAM',
      hiroh: '16GB',
      samsung: '12GB',
      purism: '4GB',
      purismLibrem: '3GB'
    },
    {
      feature: 'Storage',
      hiroh: '512GB + 2TB microSD encrypted',
      samsung: '512GB, no expansion',
      purism: '128GB + 1TB microSD',
      purismLibrem: '32GB + 1TB microSD'
    },
    {
      feature: 'Processor',
      hiroh: 'MediaTek Dimensity 8300, Octocore (3.5GHz)',
      samsung: 'Snapdragon 8 Elite, Octocore (3.5GHz)',
      purism: 'i.MX 8M Quad core (1.5GHz)',
      purismLibrem: 'i.MX 8M Quad core (1.5GHz)'
    },
    {
      feature: 'Screen',
      hiroh: '6.7" 1220x2712 AMOLED 120Hz refresh',
      samsung: '6.7" 1440x3120 AMOLED, 120Hz refresh',
      purism: '5.7" 720x1440 TFT LCD',
      purismLibrem: '5.7" 720x1440 TFT LCD'
    },
    {
      feature: 'Cameras',
      hiroh: '108MP + 13MP + 2MP Rear, 32MP Selfie',
      samsung: '50MP+ 12MP + 10MP Rear, 12MP Selfie ',
      purism: '13MP Rear, 8MP Selfie',
      purismLibrem: '13MP Rear, 8MP Selfie'
    },
    {
      feature: 'Operating System',
      hiroh: '/e/OS or Android 16, you choose',
      samsung: 'Android only',
      purism: 'PureOS (Linux) only',
      purismLibrem: 'PureOS (Linux) only'
    },
    {
      feature: 'Battery',
      hiroh: '5000mAh high density',
      samsung: '4900mAh',
      purism: '4500mAh',
      purismLibrem: '4500mAh'
    },
    {
      feature: 'Privacy Features',
      hiroh: 'Hardware kill switch, Fingerprint sensor',
      samsung: 'Fingerprint sensor, Face recognition',
      purism: 'Hardware kill switches, PureBoot',
      purismLibrem: 'Hardware kill switches, PureBoot'
    },
    {
      feature: 'Data Collection',
      hiroh: 'Zero tracking',
      samsung: 'Extensive data mining',
      purism: 'Trackers Disabled',
      purismLibrem: 'Trackers Disabled'
    },
    {
      feature: 'Price',
      hiroh: '$999 USD (Presale)',
      samsung: '$1,119 USD',
      purism: '$1,999 USD',
      purismLibrem: '$799 USD'
    }
  ];

  const styles = {
    table: {
      width: '100%', 
      maxWidth: '1200px',
      margin: '0 auto', 
      backgroundColor: 'var(--bg-white)', 
      borderRadius: '1rem', 
      overflow: 'hidden', 
      boxShadow: '0 10px 30px var(--color-black-10)',
      fontSize: isMobile ? '0.75rem' : '0.875rem'
    },
    header: {
      backgroundColor: 'var(--bg-secondary)'
    },
    headerCell: {
      padding: isMobile ? '0.75rem 0.5rem' : '1.5rem', 
      color: 'var(--text-white)', 
      textAlign: 'left', 
      fontWeight: '600'
    },
    headerCellCenter: {
      padding: isMobile ? '0.75rem 0.25rem' : '1.5rem', 
      color: 'var(--text-white)', 
      textAlign: 'center', 
      fontWeight: '600'
    },
    row: {
      borderBottom: '1px solid var(--color-gray-200)'
    },
    rowAlt: {
      borderBottom: '1px solid var(--color-gray-200)', 
      backgroundColor: 'var(--color-gray-100)'
    },
    cell: {
      padding: isMobile ? '0.75rem 0.5rem' : '1.25rem', 
      color: 'var(--color-gray-700)', 
      fontWeight: '500'
    },
    cellCenter: {
      padding: isMobile ? '0.75rem 0.25rem' : '1.25rem', 
      textAlign: 'center'
    },
    hirohValue: {
      padding: isMobile ? '0.75rem 0.25rem' : '1.25rem', 
      textAlign: 'center', 
      color: 'var(--color-primary-teal)', 
      fontWeight: 'bold'
    },
    competitorValue: {
      padding: isMobile ? '0.75rem 0.25rem' : '1.25rem', 
      textAlign: 'center', 
      color: 'var(--text-gray)'
    }
  };

  return (
    <table style={styles.table}>
      <thead>
        <tr style={styles.header}>
          <th style={styles.headerCell}>Feature</th>
          <th style={styles.headerCellCenter}>HIROH Phone</th>
          <th style={styles.headerCellCenter}>Samsung Galaxy S25+</th>
          <th style={styles.headerCellCenter}>Purism Liberty Phone</th>
          <th style={styles.headerCellCenter}>Purism Librem 5</th>
        </tr>
      </thead>
      <tbody>
        {comparisonData.map((row, index) => (
          <tr key={index} style={index % 2 === 0 ? styles.row : styles.rowAlt}>
            <td style={styles.cell}>{row.feature}</td>
            <td style={styles.hirohValue}>{row.hiroh}</td>
            <td style={styles.competitorValue}>{row.samsung}</td>
            <td style={styles.competitorValue}>{row.purism}</td>
            <td style={styles.competitorValue}>{row.purismLibrem}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ComparisonTable;
