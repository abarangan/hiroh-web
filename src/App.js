import React, { useState, useEffect } from 'react';
import Header from './components/shere/Header';
import Footer from './components/shere/Footer';
import HomePage from './components/pages/Home/HomePage';
import PhoneSpecsPage from './components/pages/Phone/PhoneSpecsPage';
import ContactPage from './components/pages/Contact/ContactPage';
import AboutPage from './components/pages/About/AboutPage';
import EOSPage from './components/pages/EOS/EOSPage';

const HIROHWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedSegment, setSelectedSegment] = useState('individuals');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} setSelectedSegment={setSelectedSegment} isMobile={isMobile} />

      {/* Page Content */}
      {currentPage === 'home' && <HomePage isMobile={isMobile} setCurrentPage={setCurrentPage} />}
      {currentPage === 'phone' && <PhoneSpecsPage isMobile={isMobile} selectedSegment={selectedSegment} setCurrentPage={setCurrentPage} />}
      {currentPage === 'eos' && <EOSPage isMobile={isMobile} setCurrentPage={setCurrentPage} />}
      {currentPage === 'about' && <AboutPage isMobile={isMobile} />}
      {currentPage === 'contact' && <ContactPage />}
      
      <Footer />
    </div>
  );
};

export default HIROHWebsite;