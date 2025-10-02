import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { init } from '@plausible-analytics/tracker';
import Header from './components/shere/Header';
import Footer from './components/shere/Footer';
import HomePage from './components/pages/Home/HomePage';
import PhoneSpecsPage from './components/pages/Phone/PhoneSpecsPage';
import ContactPage from './components/pages/Contact/ContactPage';
import AboutPage from './components/pages/About/AboutPage';
import EOSPage from './components/pages/EOS/EOSPage';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Don't scroll to top if there's a hash (anchor link)
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.search]);

  return null;
};

const AppLayout = ({ isMobile }) => (
  <>
    <ScrollToTop />
    <Header isMobile={isMobile} />
    <Routes>
      <Route path="/" element={<HomePage isMobile={isMobile} />} />
      <Route path="/phone" element={<PhoneSpecsPage isMobile={isMobile} />} />
      <Route path="/phone/:segment" element={<PhoneSpecsPage isMobile={isMobile} />} />
      <Route path="/eos" element={<EOSPage isMobile={isMobile} />} />
      <Route path="/about" element={<AboutPage isMobile={isMobile} />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    <Footer />
  </>
);

const HIROHWebsite = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    if (!window.plausibleInitialized) {
      init({
        domain: 'hiroh.io'
      });
      window.plausibleInitialized = true;
    }
  }, []);

  return (
    <Router>
      <AppLayout isMobile={isMobile} />
    </Router>
  );
};

export default HIROHWebsite;