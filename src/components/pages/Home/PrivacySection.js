import React from 'react';

const PrivacySection = (isMobile) => {
  const privacyFeatures = [
    {
      title: 'Convenience',
      description: 'Be in Privacy mode, and still have all the convenience you\'re used to.'
    },
    {
      title: 'Keep Your Apps',
      description: 'Don\'t sacrifice apps to be private, just click the switch and enjoy them without selling out your privacy.'
    },
    {
      title: 'Everything Encrypted',
      description: 'Your files, photos, and conversations stay encrypted.'
    },
    {
      title: 'Browsing With Privacy',
      description: 'Private browsing and communication tools included.'
    },
    {
      title: 'Local Data Control',
      description: 'You own your information - no cloud dependency.'
    },
    {
      title: 'Privacy Lockdown Mode',
      description: 'One-click "Privacy Lockdown Mode" for instant protection.'
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-white)', marginTop: '-1rem' }}>
      <div>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-white)' }}>
          You Don't Have To Change Your Habits to Stay Private
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: isMobile ? '1rem' : '2rem', 
          maxWidth: '1000px', 
          margin: '0 auto', 
          padding: isMobile ? '0' : '0rem 2rem'
        }}>
          {privacyFeatures.map((card, index) => (
            <div key={index} style={{ 
              backgroundColor: 'var(--color-white-10)', 
              padding: '2rem', 
              borderRadius: '1rem', 
              border: '1px solid var(--color-white-10)' 
            }}>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 'bold', 
                marginBottom: '1rem', 
                color: 'var(--text-white)' 
              }}>
                {card.title}
              </h3>
              <p style={{ 
                color: 'var(--color-gray-300)', 
                lineHeight: '1.6' 
              }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
