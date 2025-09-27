import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ComparisonTable from './ComparisonTable';
import DetailedSpecsSection from './DetailedSpecsSection';
import GovtMilitaryExtras from './GovtMilitaryExtras';
import JournalistsExtras from './JournalistsExtras';
import BusinessExtras from './BusinessExtras';
import VideoModal from '../../ui/VideoModal';
import Button from '../../ui/Button';

const VALID_SEGMENTS = ['govt-military', 'journalists', 'business', 'individuals'];

const PhoneSpecsPage = ({ isMobile }) => {
  const { segment } = useParams();
  const navigate = useNavigate();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const currentSegment = VALID_SEGMENTS.includes(segment) ? segment : 'individuals';

  useEffect(() => {
    if (segment && !VALID_SEGMENTS.includes(segment)) {
      navigate('/phone', { replace: true });
    }
  }, [segment, navigate]);

  // Segment configuration data
  const segmentConfig = {
    journalists: {
      heroImage: 'letters-1920.jpg',
      title: 'Journalism Without Fear.',
      description: 'Whether you\'re investigating corruption at home or reporting from conflict zones abroad, HIROH ensures your conversations, sources, and data remain untouchable.',
      button: {
        text: 'Protect Your Work',
        onClick: () => navigate('/contact'),
        style: 'primary'
      }
    },
    business: {
      heroImage: 'hiroh-business-web.jpg',
      title: (
        <>
          Business Without Borders.<br />
          Privacy Without Compromise.
        </>
      ),
      description: 'From Wall Street to Beijing, HIROH protects your conversations, financial data, and intellectual property against the world\'s most advanced surveillance threats.',
      button: null
    },
    'govt-military': {
      heroImage: 'hiroh-in-hand-web.jpg',
      title: 'HIROH: Your Mobile SCIF',
      description: 'HIROH delivers Military-grade privacy anywhere you go.',
      button: null
    },
    individuals: {
      heroImage: 'hiroh-coffee-desk.jpg',
      title: 'The HIROH Phone',
      description: 'Privacy by design. Security by default. Take back control of your digital life.',
      button: {
        type: 'dual',
        primary: {
          text: 'Shop Now',
          onClick: () => window.open('https://murena.com/shop/smartphones/brand-new/hiroh-phone-powered-by-murena-pre-sale/', '_blank'),
          style: 'primary'
        },
        secondary: {
          text: 'Play Video',
          onClick: () => setIsVideoModalOpen(true),
          style: 'secondary'
        }
      }
    }
  };

  // Function to get the appropriate hero image based on selected segment
  const getHeroImage = (segment) => {
    return segmentConfig[segment]?.heroImage || segmentConfig.individuals.heroImage;
  };

  // Get current segment configuration
  const currentConfig = segmentConfig[currentSegment] || segmentConfig.individuals;

  return (
    <>
      <section
        style={{
          position: 'relative',
          paddingTop: '120px',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'var(--text-white)',
          backgroundImage: `
      linear-gradient(135deg, var(--color-black-50) 0%, var(--color-black-30) 100%),
      url(${process.env.PUBLIC_URL}/images/${getHeroImage(currentSegment)})
    `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div style={{ padding: '2rem', borderRadius: '1rem' }}>
          <h1 style={{ color: 'var(--text-white)' }}>
            {currentConfig.title}
          </h1>
          <p style={{ fontSize: '1.5rem', color: 'var(--text-white)' }}>
            {currentConfig.description}
          </p>
          
          {/* Render buttons based on configuration */}
          {currentConfig.button && (
            <>
              {currentConfig.button.type === 'dual' ? (
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                  <Button
                    variant="filled"
                    onClick={currentConfig.button.primary.onClick}
                    style={{ width: 'auto', padding: '1rem 2rem', fontSize: '1.125rem' }}
                  >
                    {currentConfig.button.primary.text}
                  </Button>
                  <Button
                    variant="outlineWhite"
                    onClick={currentConfig.button.secondary.onClick}
                    style={{ width: 'auto', padding: '1rem 2rem', fontSize: '1.125rem' }}
                  >
                    {currentConfig.button.secondary.text}
                  </Button>
                </div>
              ) : (
                <div style={{ marginTop: '2rem' }}>
                  <Button
                    variant="filled"
                    onClick={currentConfig.button.onClick}
                    style={{ width: 'auto', padding: '1rem 2rem', fontSize: '1.125rem' }}
                  >
                    {currentConfig.button.text}
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {currentSegment === 'govt-military' && <GovtMilitaryExtras isMobile={isMobile} />}
      {currentSegment === 'journalists' && <JournalistsExtras isMobile={isMobile} />}
      {currentSegment === 'business' && <BusinessExtras isMobile={isMobile} />}

      {/* Common Content for All Segments */}
      {/* Section 1 - What Makes The HIROH Different? */}
      <section
        className="section"
        style={{
          backgroundColor: 'var(--bg-primary)',
          color: 'var(--text-primary)',
          paddingTop: isMobile ? '6rem' : '12rem',
          paddingBottom: isMobile ? '6rem' : '12rem'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 style={{ textAlign: 'center', color: 'var(--text-primary)', marginBottom: '2rem', fontSize: isMobile ? '2rem' : '2.5rem' }}>
            What Makes The HIROH Different?
          </h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'var(--text-gray)', marginBottom: '1.5rem' }}>
              It's not software that is keeping you safe.
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-gray)' }}>
              Unlike software toggles, HIROH disables the cameras and microphones at the circuit-level.
              Once disabled with the switch, the circuits cannot be enabled by hackers, ensuring absolute privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1B - Premium Materials Spotlight */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-white)' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1rem',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'center' : 'stretch',
            gap: isMobile ? '2rem' : '4rem'
          }}
        >
          <div
            style={{
              flex: '1',
              textAlign: isMobile ? 'center' : 'left',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minHeight: isMobile ? 'auto' : '600px'
            }}
          >
            <h2 style={{ fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '1.5rem', color: 'var(--text-white-90)' }}>
              Premium Look And Feel
            </h2>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.9', color: 'var(--text-white-90)' }}>
              For HIROH to be your everyday phone, it had to feel as exceptional as it performs. A 6.67&quot;
              flagship display, precision-machined aluminum frame, shatter-resistant glass back, and a 108MP
              main camera come together in a device that is ready for everything you do—while keeping your
              life private.
            </p>
          </div>

          <div
            style={{
              flex: isMobile ? 'auto' : '1.1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: isMobile ? 'auto' : '800px'
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/hiroh-poolside.jpg`}
              alt="HIROH phone with premium finish near poolside"
              style={{
                width: '100%',
                maxWidth: '100%',
                height: isMobile ? 'auto' : '100%',
                borderRadius: '1.75rem',
                boxShadow: '0 28px 50px rgba(0, 0, 0, 0.35)',
                objectFit: 'cover'
              }}
            />
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
          alt="HIROH phone with dimensions"
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
              The HIROH Phone ships with the e/OS operating system standard, or can be ordered with Android 16.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-primary)', paddingRight: '0',paddingLeft: '0' }}>
        <div>
          <h2 style={{textAlign: 'center',color: 'var(--text-primary)', marginBottom: '1rem'}}>How We Compare</h2>
          <p style={{ fontSize: '1.25rem', textAlign: 'center', color: 'var(--text-gray)', margin: isMobile ? '0 auto 2rem' : '0 auto 4rem', lineHeight: '1.6' }}>
            See how HIROH stacks up against competitors.
          </p>

          <div style={{ overflowX: 'auto', padding: '0 1rem', paddingBottom: '2rem' }}>
            <ComparisonTable isMobile={isMobile} />
          </div>
        </div>
      </section>

      {/* Full-size image section */}
      <section
        aria-label="HIROH phone in everyday life"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 0
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/hiroh-everyday-150.jpg`}
          alt="HIROH phone in everyday life"
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '100%',
            objectFit: isMobile ? 'cover' : 'contain'
          }}
        />
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