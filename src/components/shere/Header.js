import React, { useState } from 'react';

const Header = ({ currentPage, setCurrentPage, setSelectedSegment, isMobile }) => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  console.log(isMobile);

  const styles = {
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      backgroundColor: 'var(--color-white-95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--color-gray-200)',
    },
    navContent: {
      maxWidth: isMobile ? '100%' : '1200px',
      padding: isMobile ? '0 1rem' : '1rem 2rem',
      height: isMobile ? '60px' : 'auto',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxSizing: 'border-box'
    },
    navLinks: {
      display: 'flex',
      gap: '2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    navLink: {
      color: 'var(--text-secondary)',
      backgroundColor: 'var(--color-transparent)',
      border: 'none',
      cursor: 'pointer',
      fontWeight: '500',
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      transition: 'color 0.2s',
      fontFamily: 'inherit'
    },
    navLinkActive: {
      color: 'var(--text-primary)'
    },
    submenu: {
      position: 'absolute',
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'var(--bg-white)',
      boxShadow: '0 10px 30px var(--color-black-15)',
      borderRadius: '0.75rem',
      padding: '0.5rem 0',
      minWidth: '220px',
      marginTop: '0',
      zIndex: 100,
      border: '1px solid var(--color-gray-200)'
    },
    submenuItem: {
      display: 'block',
      width: '100%',
      padding: '0.875rem 1.5rem',
      textAlign: 'left',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--color-gray-700)',
      fontSize: '0.925rem',
      fontFamily: 'inherit',
      transition: 'all 0.2s',
      borderLeft: '3px solid var(--color-transparent)'
    },
    hamburger: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '30px',
      height: '30px',
      cursor: 'pointer',
    },
    hamburgerLine: {
      width: '20px',
      height: '2px',
      backgroundColor: 'var(--color-gray-700)',
      margin: '2px 0',
      transition: 'all 0.3s ease'
    }
  };

  return (
    <>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <button
            onClick={() => setCurrentPage('home')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/hiroh-inner.png`}
              alt="HIROH Symbol"
              style={{ height: '24px', width: 'auto' }}
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/hiroh-logo.png`}
              alt="HIROH"
              style={{ height: '22px', width: 'auto' }}
            />
          </button>
          {/* Desktop Navigation - hide on mobile */}
          <ul style={{
            ...styles.navLinks,
            display: isMobile ? 'none' : 'flex'
          }}>
            <li>
              <button
                onClick={() => setCurrentPage('home')}
                style={{
                  ...styles.navLink,
                  ...(currentPage === 'home' ? styles.navLinkActive : {})
                }}
              >
                Home
              </button>
            </li>
            <li
              style={{ position: 'relative' }}
              onMouseEnter={() => setHoveredMenu('phone')}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button
                onClick={() => setCurrentPage('phone')}
                style={{
                  ...styles.navLink,
                  ...(currentPage === 'phone' ? styles.navLinkActive : {})
                }}
              >
                Phone
              </button>
              {hoveredMenu === 'phone' && (
                <div
                  style={styles.submenu}
                  onMouseEnter={() => setHoveredMenu('phone')}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  {[
                    { key: 'govt-military', label: 'Government and Military' },
                    { key: 'business', label: 'Business' },
                    { key: 'journalists', label: 'Journalists' },
                    { key: 'individuals', label: 'Individuals' }
                  ].map(item => (
                    <button
                      key={item.key}
                      onClick={() => {
                        setSelectedSegment(item.key);
                        setCurrentPage('phone');
                        setHoveredMenu(null);
                      }}
                      style={styles.submenuItem}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'var(--color-gray-100)';
                        e.target.style.borderLeftColor = 'var(--color-primary-teal)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'var(--color-transparent)';
                        e.target.style.borderLeftColor = 'var(--color-transparent)';
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('tech')}
                style={{
                  ...styles.navLink,
                  ...(currentPage === 'tech' ? styles.navLinkActive : {})
                }}
              >
                Technology
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('about')}
                style={{
                  ...styles.navLink,
                  ...(currentPage === 'about' ? styles.navLinkActive : {})
                }}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('contact')}
                style={{
                  ...styles.navLink,
                  ...(currentPage === 'contact' ? styles.navLinkActive : {})
                }}
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Mobile Hamburger Icon */}
          {isMobile && (
            <div
              style={styles.hamburger}
              onClick={() => {
                console.log('Hamburger clicked!');
                setMobileMenuOpen(!mobileMenuOpen);
              }}
            >
              <div style={{
                ...styles.hamburgerLine,
                transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
              }} />
              <div style={{
                ...styles.hamburgerLine,
                opacity: mobileMenuOpen ? 0 : 1
              }} />
              <div style={{
                ...styles.hamburgerLine,
                transform: mobileMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'
              }} />
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && isMobile && (
        <div 
        style={{
          position: 'fixed',
          top: '60px',
          left: 0,
          right: 0,
          backgroundColor: 'var(--color-white-98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--color-gray-200)',
          zIndex: 40,
          padding: '1rem 0'
        }}>
          <div style={{ padding: '0 2rem' }}>
            {/* Home */}
            <button
              onClick={() => {
                setCurrentPage('home');
                setMobileMenuOpen(false);
              }}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: currentPage === 'home' ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontSize: '1rem',
                fontWeight: currentPage === 'home' ? '600' : '500',
                padding: '1rem 0',
                borderBottom: '1px solid var(--color-gray-100)',
                fontFamily: 'inherit'
              }}
            >
              Home
            </button>

            {/* Phone Section with Expanded Submenu */}
            <div style={{ borderBottom: '1px solid var(--color-gray-100)' }}>
              <button
                onClick={() => {
                  setCurrentPage('phone');
                  setMobileMenuOpen(false);
                }}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: currentPage === 'phone' ? 'var(--text-primary)' : 'var(--text-secondary)',
                  fontSize: '1rem',
                  fontWeight: currentPage === 'phone' ? '600' : '500',
                  padding: '1rem 0',
                  fontFamily: 'inherit'
                }}
              >
                Phone
              </button>

              {/* Phone Submenu Items */}
              <div style={{ paddingLeft: '1rem' }}>
                {[
                  { key: 'govt-military', label: 'Government & Military' },
                  { key: 'business', label: 'Business' },
                  { key: 'journalists', label: 'Journalists' },
                  { key: 'individuals', label: 'Individuals' }
                ].map(item => (
                  <button
                    key={item.key}
                    onClick={() => {
                      setSelectedSegment(item.key);
                      setCurrentPage('phone');
                      setMobileMenuOpen(false);
                    }}
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      padding: '0.75rem 0',
                      borderBottom: '1px solid var(--color-gray-100)'
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Other Menu Items */}
            {[
              { key: 'tech', label: 'Technology' },
              { key: 'about', label: 'About' },
              { key: 'contact', label: 'Contact' }
            ].map(item => (
              <button
                key={item.key}
                onClick={() => {
                  setCurrentPage(item.key);
                  setMobileMenuOpen(false);
                }}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: currentPage === item.key ? 'var(--text-primary)' : 'var(--text-secondary)',
                  fontSize: '1rem',
                  fontWeight: currentPage === item.key ? '600' : '500',
                  padding: '1rem 0',
                  borderBottom: '1px solid var(--color-gray-100)',
                  fontFamily: 'inherit'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

