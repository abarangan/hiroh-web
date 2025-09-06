import React from 'react';
import Accordion from '../../ui/Accordion';

const FAQSection = ({ isMobile }) => {
  const faqs = [
    {
      q: 'Is HIROH compatible with my carrier?',
      a: 'Yes, HIROH works with all major carriers worldwide. It supports 5G, 4G LTE, and includes dual SIM capability.'
    },
    {
      q: 'Can I install my own apps?',
      a: 'Absolutely! HIROH runs the e/OS operating system for a fully "deGoogled" Android-based experience, giving you access to millions of apps while maintaining your privacy.'
    },
    {
      q: 'How does privacy mode work?',
      a: 'Our hardware kill switches physically disconnect cameras, microphones at the circuit level. No software can override this.'
    },
    {
      q: 'What happens if I lose my phone?',
      a: 'All data is encrypted by default. Remote wipe capabilities and secure boot ensure your information stays protected.'
    },
    {
      q: 'Is my data stored in the cloud?',
      a: 'No. HIROH prioritizes local storage and gives you complete control. Cloud backup is optional and always encrypted end-to-end.'
    }
  ];

  const styles = {
    container: {
      backgroundColor: 'var(--bg-secondary)', 
      padding: isMobile ? '2rem 0' : '4rem 0'
    },
    content: {
      maxWidth: '800px', 
      margin: '0 auto',
      padding: isMobile ? '0 1rem' : '0'
    }
  };

  return (
    <section style={styles.container}>
      <h2 style={{ 
        ...styles.content,
        fontSize: isMobile ? '2rem' : '3.5rem',
        fontWeight: 'bold', 
        textAlign: 'center', 
        marginBottom: isMobile ? '2rem' : '3rem',
        color: 'var(--text-white)'
      }}>
        Frequently Asked Questions
      </h2>

      <div style={styles.content}>
        <Accordion items={faqs} isMobile={isMobile} />
      </div>
    </section>
  );
};

export default FAQSection;
