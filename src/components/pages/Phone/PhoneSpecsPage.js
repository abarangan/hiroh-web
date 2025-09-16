import React, { useState } from 'react';
import ComparisonTable from './ComparisonTable';
import DetailedSpecsSection from './DetailedSpecsSection';
import GovtMilitaryExtras from './GovtMilitaryExtras';
import JournalistsExtras from './JournalistsExtras';
import BusinessExtras from './BusinessExtras';
import VideoModal from '../../ui/VideoModal';

const PhoneSpecsPage = ({ isMobile, selectedSegment, setCurrentPage }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Function to get the appropriate hero image based on selected segment
  const getHeroImage = (segment) => {
    switch (segment) {
      case 'journalists':
        return 'letters-1920.jpg';
      case 'govt-military':
        return 'hiroh-phone-8.jpg'; // Using a different phone image for govt/military
      case 'business':
        return 'hiroh-business-web.jpg';
      case 'individuals':
      default:
        return 'hiroh-coffee-desk.jpg';
    }
  };

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
      linear-gradient(135deg, var(--color-black-50) 0%, var(--color-black-30) 100%),
      url(${process.env.PUBLIC_URL}/images/${getHeroImage(selectedSegment)})
    `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div style={{ padding: '2rem', borderRadius: '1rem', marginBottom: '20rem' }}>
          <h1 style={{ color: 'var(--text-white)' }}>
            {selectedSegment === 'journalists'
              ? 'Journalism Without Fear.'
              : selectedSegment === 'business'
                ? (
                  <>
                    Business Without Borders.<br />
                    Privacy Without Compromise.
                  </>
                )
                : selectedSegment === 'govt-military'
                  ? 'Hiroh: Your Mobile SCIF'
                  : selectedSegment === 'individuals'
                    ? 'The HIROH Phone'
                    : 'The HIROH Phone'
            }
          </h1>
          <p style={{ fontSize: '1.5rem', color: 'var(--text-white)' }}>
            {selectedSegment === 'journalists' ? (
              <>
                Whether you're investigating corruption at home or reporting from conflict zones abroad,
                Hiroh ensures your conversations, sources, and data remain untouchable.
              </>
            ) : selectedSegment === 'business' ? (
              <>
                From Wall Street to Beijing, Hiroh protects your conversations, financial data, and intellectual property against the world's most advanced surveillance threats.
              </>
            ) : selectedSegment === 'govt-military' ? (
              <>
                Hiroh delivers Military-grade privacy anywhere you go.
              </>
            ) : selectedSegment === 'individuals' ? (
              <>
                Privacy by design. Security by default. Take back control of your digital life.
              </>
            ) : (
              <>
                {' '}
                <strong>
                  {selectedSegment === 'govt-military'
                            ? 'For Government & Military'
                            : selectedSegment === 'business'
                              ? 'For Business'
                              : selectedSegment === 'journalists'
                                ? 'For Journalists'
                                : ''}
                        </strong>{' '}
              </>
            )}
          </p>
          {selectedSegment === 'journalists' && (
            <button
              onClick={() => setCurrentPage('contact')}
              style={{
                backgroundColor: 'var(--color-primary-teal)',
                color: 'var(--text-white)',
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                fontSize: '1.125rem',
                fontWeight: 'bold',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-block',
                marginTop: '2rem'
              }}
            >
              Protect Your Work
            </button>
          )}
          {selectedSegment === 'individuals' && (
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              <button
                onClick={() => setCurrentPage('contact')}
                style={{
                  backgroundColor: 'var(--color-primary-teal)',
                  color: 'var(--text-white)',
                  padding: '1rem 2rem',
                  borderRadius: '0.5rem',
                  fontSize: '1.125rem',
                  fontWeight: 'bold',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-block'
                }}
              >
                Shop Now
              </button>
              <button
                onClick={() => setIsVideoModalOpen(true)}
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--text-white)',
                  padding: '1rem 2rem',
                  borderRadius: '0.5rem',
                  fontSize: '1.125rem',
                  fontWeight: 'bold',
                  border: '2px solid var(--text-white)',
                  cursor: 'pointer',
                  display: 'inline-block'
                }}
              >
                Play Video
              </button>
            </div>
          )}
        </div>
      </section>

      {selectedSegment === 'govt-military' && <GovtMilitaryExtras isMobile={isMobile} setCurrentPage={setCurrentPage} />}
      {selectedSegment === 'journalists' && <JournalistsExtras isMobile={isMobile} setCurrentPage={setCurrentPage} />}
      {selectedSegment === 'business' && <BusinessExtras isMobile={isMobile} setCurrentPage={setCurrentPage} />}

      {/* Common Content for All Segments */}
      {/* Section 1 - What Makes The HIROH Different? */}
      <section className="section" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 style={{ textAlign: 'center', color: 'var(--text-primary)', marginBottom: '2rem', fontSize: isMobile ? '2rem' : '2.5rem' }}>
            What Makes The HIROH Different?
          </h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'var(--text-gray)', marginBottom: '1.5rem' }}>
              It's not software that is keeping you safe.
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-gray)' }}>
              Unlike software toggles, Hiroh disables the cameras and microphones at the circuit-level.
              Once disabled with the switch, the circuits cannot be enabled by hackers, ensuring absolute privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - Image of phone with dimensions */}
      <section style={{
        backgroundColor: 'var(--bg-secondary)',
        color: 'var(--text-white)',
        padding: '0',
        position: 'relative',
        width: '100%'  // Ensure full width
      }}>
        <img
          src={`${process.env.PUBLIC_URL}/images/hiroh-dimensions.jpg`}
          alt="Hiroh phone with dimensions"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block'
          }}
        />
        {/* Gentle gradient overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.1) 100%)',
          pointerEvents: 'none'
        }}></div>
      </section>

      {/* Section 3 - Take Back Control of Your Digital Life */}
      <section style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        backgroundImage: `linear-gradient(135deg, var(--color-black-50) 0%, var(--color-black-30) 100%), url(${process.env.PUBLIC_URL}/images/hiroh-cafe.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        padding: isMobile ? '8rem 0' : '12rem 0',
        minHeight: isMobile ? '60vh' : '80vh'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 style={{ textAlign: 'center', color: 'var(--text-white)', marginBottom: '2rem', fontSize: isMobile ? '2rem' : '2.5rem' }}>
            Take Back Control of Your Digital Life
          </h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'var(--text-white)', marginBottom: '1.5rem' }}>
              The Hiroh Phone ships with the e/OS operating system standard, or can be ordered with Android 16.
            </p>
          </div>
        </div>
      </section>

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

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoSrc={`${process.env.PUBLIC_URL}/images/hiroh_security-switch.mp4`}
      />
    </>
  );
};

export default PhoneSpecsPage;