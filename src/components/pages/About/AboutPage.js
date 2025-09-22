import React from 'react';

const AboutPage = ({ isMobile }) => {
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    content: {
      color: 'var(--text-white)',
      fontSize: '1.25rem',
      lineHeight: '1.8',
      maxWidth: '800px',
      margin: '0 auto',
      marginBottom: '2rem',
      marginTop:'3rem'
    },
    subtitle: {
      color: 'var(--text-white)',
      fontSize: '1.5rem',
      lineHeight: '1.6',
      textAlign: 'center',
      marginBottom: '3rem',
      fontWeight: '300'
    },
    missionSection: {
      backgroundColor: 'var(--color-white-03)',
      borderRadius: '1rem',
      padding: '3rem',
      maxWidth: '900px',
      margin: '0 auto',
      marginTop: '2rem',
    },
    sectionDivider: {
      height: '1px',
      background: 'linear-gradient(90deg, transparent, var(--color-gray-600), transparent)',
      margin: '4rem 0',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    missionSectionTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      textAlign: 'center',
      color: 'var(--text-white)',
    },
    missionSectionSubtitle: {
      fontSize: '1.25rem',
      lineHeight: '1.8',
      textAlign: 'center',
      color: 'var(--color-gray-200)'
    },
    missionSectionContent: {
      fontSize: '1.25rem',
      lineHeight: '1.8',
      textAlign: 'center',
      color: 'var(--color-gray-300)'
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/hiroh-phone-4.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Overlay for text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.4) 100%)',
          pointerEvents: 'none'
        }}></div>

        {/* Hero Content */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          color: 'var(--text-white)',
          maxWidth: '800px',
          padding: '0 2rem',
          marginTop: isMobile ? '8rem' : '20rem'
        }}>
          <h1 style={{
            fontWeight: 'bold',
            marginBottom: '2rem',
            lineHeight: '1.1',
            color: 'var(--text-white)',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
          }}>
            About HIROH
          </h1>
          <p style={{
            fontSize: isMobile ? '1.25rem' : '1.5rem',
            lineHeight: '1.4',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
            marginBottom: '1rem'
          }}>
            At Hiroh, privacy isn't a feature. <br />It's the foundation of everything we build.
          </p>

        </div>
      </section>

      {/* Main Content Section */}
      <section className='section' style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div style={styles.container}>
          <div style={styles.content}>
            <p style={{ ...styles.content, fontSize: '2rem' }}>
              We are pioneers in secure communications with a long history of innovation, driven by two simple principles:
            </p>

            <p style={{ ...styles.content, marginLeft: '3rem' }}>
              <strong>1. True privacy must be considered and enforced at the hardware level.</strong> Software alone is too easily exploited — and the incentives to do so are too great.
            </p>

            <p style={{ ...styles.content, marginLeft: '3rem' }}>
              <strong>2. Security and Privacy technologies must be convenient or they will either be ignored or improperly used.</strong> (Shout out to everyone carrying a secure work phone in one pocket and a standard iPhone or Samsung in the other.)
            </p>
          </div>
        </div>
      </section>

      {/* Innovation and Mission Section with Different Background */}
      <section className='section' style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div style={styles.container}>
          <div style={styles.content}>
            <p style={{ ...styles.content, fontSize: '2rem', color: 'var(--text-gray)', marginBottom: '5rem' }}>
              This is the future of personal technology: flagship performance, with uncompromising privacy built into the DNA of the hardware itself.
            </p>
            <h2 style={{ color: 'var(--text-primary)', fontSize: '2rem', marginTop: '2rem' }}>
              Our Legacy of Innovation
            </h2>

            <p style={{ ...styles.content, color: 'var(--text-gray)', marginTop: '0' }}>
              Years before encrypted messaging became mainstream, in 2014 some members of the Hiroh team developed one of the first end-to-end encrypted text apps for iOS, proving that privacy and usability could coexist. Since then, our engineers and founders have developed a series of groundbreaking privacy products in telecommunications, earning more than two dozen patents and international recognition — including the IAPP/HPE Innovation Award, administered by the International Association of Privacy Professionals, the world's largest privacy organization. Past winners include IBM, Microsoft, Stanford University, VMware, and Oculus, underscoring the global significance of this honor.
            </p>

            <p style={{ ...styles.content, color: 'var(--text-gray)' }}>
              Along the way, we learned many lessons regarding convenience and ease of use that led to our decision to launch Hiroh.
            </p>

            <h2 style={{ color: 'var(--text-primary)', fontSize: '2rem', marginTop: '3rem' }}>
              Everyday Security, For Everyone
            </h2>

            <p style={{ ...styles.content, color: 'var(--text-gray)', marginTop: '0' }}>
              Our products are built for those who cannot afford compromise — heads of state, executives safeguarding sensitive data, journalists operating in high-risk environments, parents protecting their children, and everyday users tired of being tracked and sold. Privacy should not be a luxury; it should be built into the devices we use every day. In order to inspire daily use, these devices need to be developed with a focus on human-centered design.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className='section' style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div style={styles.container}>
          <div style={styles.content}>

            <h2 style={{ color: 'var(--text-white)', fontSize: '2rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
              Our Founders
            </h2>

            {/* Victor Cocchia */}
            <div style={{ marginBottom: '4rem' }}>
              <div style={{
                float: 'left',
                marginRight: '2rem',
                marginBottom: '1rem',
                width: isMobile ? '120px' : '150px',
                height: isMobile ? '120px' : '150px',
                borderRadius: '50%',
                border: '3px solid var(--color-primary-teal)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                overflow: 'hidden',
                backgroundColor: 'var(--color-gray-200)'
              }}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/cocchia_web.jpg`}
                  alt="Victor Cocchia, CEO"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
              <h3 style={{ color: 'var(--text-white)', fontSize: '1.5rem', marginBottom: '0.25rem' }}>
                Victor Cocchia, CEO
              </h3>
              <p style={{ ...styles.content, marginTop: '0' }}>
                Victor is a seasoned entrepreneur and global technologist with deep expertise in privacy-focused communications. He has led multiple ventures in secure technology with a proven record in privacy-first communications. He leads Hiroh with the vision of making strong privacy protections both powerful and accessible for everyday users. His leadership combines technical insight with a passion for digital rights and freedom of information. Victor has over 20 patents related to mobile security, privacy and technology, is the winner of multiple awards for his work as both the Founder of a privacy based B2B and B2G product, and has written numerous articles on privacy. Prior to the security and privacy space, Cocchia led companies in the aerospace industry and was a pioneer in digital video technology.  An Army veteran and Columbia University man, Victor combines global business experience with a passion for digital rights and freedom of information.
              </p>
              <div style={{ clear: 'both' }}></div>
            </div>

            {/* Alexander Barangan */}
            <div style={{ marginBottom: '4rem' }}>
              <div style={{
                float: 'left',
                marginRight: '2rem',
                marginBottom: '1rem',
                width: isMobile ? '120px' : '150px',
                height: isMobile ? '120px' : '150px',
                borderRadius: '50%',
                border: '3px solid var(--color-primary-teal)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                overflow: 'hidden',
                backgroundColor: 'var(--color-gray-200)'
              }}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/barangan_web.jpg`}
                  alt="Alexander Barangan, CTO"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
              <h3 style={{ color: 'var(--text-white)', fontSize: '1.5rem', marginBottom: '0.25rem' }}>
                Alexander Barangan, CTO
              </h3>
              <p style={{ ...styles.content, marginTop: '0' }}>
                Alexander is an engineer and inventor who has been developing hardware devices for the consumer, financial, and government markets out of Santa Cruz, CA for over 20 years. With numerous patents and award-winning innovations to his name, he has helped pioneer security and privacy solutions, including novel biometric authentication systems and the development of the industry's first mobile privacy switch together with Victor Cocchia at a previous venture. Alexander has been involved in local hacker collectives, taught numerous courses on cryptography, ethical hacking, and encrypted communications, and he's even been to a few key signing parties. His leadership ensures Hiroh products deliver both uncompromising security and premium performance.
              </p>
              <div style={{ clear: 'both' }}></div>
            </div>

            {/* Section Divider */}
            <div style={styles.sectionDivider}></div>
          </div>

        {/* Panopticon Image with Mission Overlay */}
        <section style={{
          position: 'relative',
          padding: '0',
          margin: '0',
          height: '60vh',
          overflow: 'hidden'
        }}>
          <img
            src={`${process.env.PUBLIC_URL}/images/panopticon.jpg`}
            alt="The Panopticon - Symbol of surveillance and control"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />

          {/* Mission Statement Overlay */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderRadius: '1rem',
            padding: '2rem',
            maxWidth: '600px',
            width: '90%',
            textAlign: 'center',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: 'var(--text-primary)'
            }}>
              Our Mission
            </h2>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: '1.6',
              color: 'var(--text-black-60)',
              margin: 0
            }}>
              To give people back control over their digital lives by building technology that
              prioritizes privacy, transparency, and user freedom without sacrificing performance or
              design.
            </p>
          </div>
        </section>

          {/* Company Information */}
          <div style={{ ...styles.content, textAlign: 'center' }}>
            <p style={styles.content}>
              Hiroh is a wholly owned subsidiary of Avarana Technologies. We are a distributed team of engineers and technologists passionate about accessible privacy and security, though we call Austin, Texas home.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
