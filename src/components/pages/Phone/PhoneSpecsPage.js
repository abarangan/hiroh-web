import React from 'react';
import ComparisonTable from './ComparisonTable';
import DetailedSpecsSection from './DetailedSpecsSection';
import GovtMilitaryExtras from './GovtMilitaryExtras';

const PhoneSpecsPage = ({ isMobile, selectedSegment }) => {
  return (
    <>
      <section
        style={{
          position: 'relative',
          paddingTop: '120px',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'var(--text-white)',
          backgroundImage: `
      linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.3) 100%),
      url(${process.env.PUBLIC_URL}/images/hiroh-phone-12.jpg)
    `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div style={{ padding: '2rem', borderRadius: '1rem', marginBottom: '20rem' }}>
          <h1 style={{ color: 'var(--text-white)' }}>The HIROH Phone</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-white)' }}>
            Currently viewing:{' '}
            <strong>
              {selectedSegment === 'govt-military'
                ? 'Government & Military'
                : selectedSegment === 'business'
                  ? 'Business'
                  : selectedSegment === 'journalists'
                    ? 'Journalists'
                    : 'Individuals'}
            </strong>{' '}
            specifications
          </p>
        </div>
      </section>

      {selectedSegment === 'govt-military' && <GovtMilitaryExtras isMobile={isMobile} />}

      {/* Comparison Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-primary)', paddingRight: '0',paddingLeft: '0' }}>
        <div>
          <h2 style={{textAlign: 'center',color: 'var(--text-primary)', marginBottom: '1rem'}}>How We Compare</h2>
          <p style={{ fontSize: '1.25rem', textAlign: 'center', color: 'var(--text-gray)', margin: isMobile ? '0 auto 2rem' : '0 auto 4rem', lineHeight: '1.6' }}>
            See how HIROH stacks up against flagship competitors.
          </p>

          <div style={{ overflowX: 'auto', padding: '0 1rem', paddingBottom: '2rem' }}>
            <ComparisonTable isMobile={isMobile} />
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-white)'}}>
        <div>
          <DetailedSpecsSection isMobile={isMobile} />
        </div>
      </section>
    </>
  );
};

export default PhoneSpecsPage;