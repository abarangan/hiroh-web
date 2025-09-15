import React from 'react';

const ComparisonTable = ({ isMobile }) => {
  const comparisonData = [
    {
      feature: 'RAM',
      hiroh: '16GB',
      competitor: '8–12GB'
    },
    {
      feature: 'Storage',
      hiroh: '512GB + 2TB expandable',
      competitor: 'Max 1TB, no expansion'
    },
    {
      feature: 'Privacy Features',
      hiroh: 'Hardware kill switch',
      competitor: 'Software controls only'
    },
    {
      feature: 'Data Collection',
      hiroh: 'Zero tracking',
      competitor: 'Extensive data mining'

    }
  ];

  const styles = {
    table: {
      width: '100%', 
      maxWidth: '900px', 
      margin: '0 auto', 
      backgroundColor: 'var(--bg-white)', 
      borderRadius: '1rem', 
      overflow: 'hidden', 
      boxShadow: '0 10px 30px var(--color-black-10)',
      fontSize: isMobile ? '0.875rem' : '1rem'
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
          <th style={styles.headerCellCenter}>HIROH</th>
          <th style={styles.headerCellCenter}>Apple/Samsung</th>
        </tr>
      </thead>
      <tbody>
        {comparisonData.map((row, index) => (
          <tr key={index} style={index % 2 === 0 ? styles.row : styles.rowAlt}>
            <td style={styles.cell}>{row.feature}</td>
            <td style={styles.hirohValue}>{row.hiroh}</td>
            <td style={styles.competitorValue}>{row.competitor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ComparisonTable;
