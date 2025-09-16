import { Bold } from "lucide-react";
import React from "react";

const EOSPage = ({ isMobile, setCurrentPage }) => {
  const styles = {
    section: {
      position: "relative",
    },
    heroContainer: {
      paddingTop: isMobile ? "2rem" : "0",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
    },
    sectionTitle: {
      textAlign: "center",
      color: "var(--text-primary)",
    },
    sectionSubtitle: {
      fontSize: isMobile ? "1rem" : "1.25rem",
      textAlign: "center",
      color: "var(--color-gray-300)",
      maxWidth: isMobile ? "100%" : "800px",
      margin: "0 auto",
      marginBottom: isMobile ? "2rem" : "3rem",
      lineHeight: isMobile ? "1.5" : "1.6",
    },
    sectionSubtitleBlack: {
      fontSize: isMobile ? "1.125rem" : "1.5rem",
      color: "var(--text-primary)",
      maxWidth: isMobile ? "100%" : "800px",
      margin: "0 auto",
      marginBottom: isMobile ? "2rem" : "3rem",
      lineHeight: isMobile ? "1.5" : "1.6",
    },
    heroSection: {
      backgroundColor: "var(--bg-secondary)",
    },
    heroContent: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: isMobile ? "2rem" : "4rem",
      alignItems: "center",
    },
    heroText: {
      color: "var(--text-white)",
      textAlign: isMobile ? "center" : "left",
      order:  isMobile ? 2 : 1,
    },
    heroImage: {
      textAlign: "center",
      order:  isMobile ? 1 : 2,
      position: isMobile ? "relative" : "static",
    },
    heroImageContainer: {
      position: "relative",
      display: "inline-block",
      maxWidth: isMobile ? "calc(100% - 4rem)" : "500px",
    },
    heroImageOverlay: {
      position: "absolute",
      bottom: 0,
      left: "-2rem",
      right: "-2rem",
      height: "50%",
      background: "linear-gradient(to top, var(--bg-secondary) 0%, transparent 100%)",
      pointerEvents: "none",
    },
    heroTitle: {
      marginBottom: isMobile ? "1rem" : "1.5rem",
      lineHeight: isMobile ? "1.2" : "1.1",
      color: "var(--text-white)",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
    },
    heroSubtitle: {
      fontSize: isMobile ? "1rem" : "1.5rem",
      marginBottom: isMobile ? "1.5rem" : "2rem",
      lineHeight: isMobile ? "1.4" : "1.5",
      color: "var(--text-white)",
      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
      maxWidth: isMobile ? "100%" : "900px",
      margin: isMobile ? "0 0 1.5rem 0" : "0 auto 2rem auto",
    },
    heroSubtitleOverlay: {
      fontSize: "1.5rem",
      lineHeight: "1.3",
      color: "var(--text-white)",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
      margin: 0,
    },
    grid2Col: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? "2rem" : "4rem",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    grid3Col: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
      gap: isMobile ? "1.5rem" : "3rem",
      marginBottom: isMobile ? "2rem" : "3rem",
    },
    featureCard: {
      backgroundColor: "var(--color-white-05)",
      padding: isMobile ? "1.5rem" : "2rem",
      borderRadius: "1rem",
      textAlign: "center",
      border: "1px solid var(--color-gray-600)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    featureTitle: {
      fontSize: isMobile ? "1.125rem" : "1.25rem",
      fontWeight: "bold",
      color: "var(--text-white)",
      marginBottom: isMobile ? "0.75rem" : "1rem",
      lineHeight: isMobile ? "1.3" : "1.2",
    },
    featureDescription: {
      fontSize: isMobile ? "0.9rem" : "1rem",
      color: "var(--color-gray-300)",
      lineHeight: isMobile ? "1.5" : "1.6",
      flex: 1,
    },
    imageSection: {
      textAlign: "center",
      flex: isMobile ? "none" : "1",
      minWidth: isMobile ? "100%" : "300px",
    },
    image: {
      maxWidth: "100%",
      height: "auto",
      borderRadius: "1rem",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    },
    widgetsImage: {
      maxWidth: isMobile ? "70%" : "100%",
      height: "auto",
      borderRadius: "1rem",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
      marginBottom: isMobile ? "0.75rem" : "1rem",
    },
    privacyImage: {
      maxWidth: isMobile ? "80%" : "75%",
      height: "auto",
      borderRadius: "1rem",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
      marginBottom: isMobile ? "0.75rem" : "1rem",
    },
    imageCaption: {
      fontSize: isMobile ? "0.8rem" : "0.9rem",
      color: "var(--color-gray-400)",
      fontStyle: "italic",
      marginTop: isMobile ? "0.5rem" : "0",
    },
    highlightBox: {
      backgroundColor: "var(--color-primary-teal)",
      padding: isMobile ? "1.5rem" : "2rem",
      borderRadius: "1rem",
      textAlign: "center",
      margin: isMobile ? "2rem 0" : "3rem 0",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    },
    highlightTitle: {
      fontSize: isMobile ? "1.25rem" : "1.5rem",
      fontWeight: "bold",
      color: "var(--text-white)",
      marginBottom: isMobile ? "0.75rem" : "1rem",
      lineHeight: isMobile ? "1.3" : "1.2",
    },
    highlightText: {
      fontSize: isMobile ? "1rem" : "1.125rem",
      color: "var(--text-white)",
      lineHeight: isMobile ? "1.5" : "1.6",
    },
    ctaButton: {
      backgroundColor: "var(--color-primary-teal)",
      color: "var(--text-white)",
      padding: isMobile ? "0.875rem 1.5rem" : "1rem 2rem",
      borderRadius: "0.5rem",
      fontSize: isMobile ? "1rem" : "1.125rem",
      fontWeight: "bold",
      border: "none",
      cursor: "pointer",
      display: "inline-block",
      textDecoration: "none",
      transition: "background-color 0.3s ease",
      textAlign: "center",
      minWidth: isMobile ? "200px" : "auto",
    },
  };

  const keyFeatures = [
    {
      title: 'Fully "DeGoogled"',
      description:
        "Complete removal of Google services and tracking. No Google apps, services, or data collection accessing your personal information.",
    },
    {
      title: "Open Source & Auditable",
      description:
        "Academic recognition from researchers at University of Edinburgh and Trinity College Dublin. Open source means verifiable privacy.",
    },
    {
      title: "Android App Compatibility",
      description:
        "Works with all your favorite Android apps. Privacy shouldn't mean sacrificing your digital experience.",
    },
    {
      title: "Privacy-Enhanced Services",
      description:
        "Includes ethical search engine, email platform, cloud storage, and other online tools in a privacy-enhanced environment.",
    },
    {
      title: "App Privacy Scoring",
      description:
        "Instantly see which trackers are in apps, required permissions, and privacy scores to make informed decisions.",
    },
    {
      title: "Advanced Privacy Controls",
      description:
        "Choose whether to accept tracking, hide your IP address or geolocation, and enjoy ad-free browsing with built-in ad blocker.",
    },
  ];

  const privacyFeatures = [
    {
      title: "Murena Find Search",
      description: "Ethical search engine replacing Google default search everywhere in the OS.",
    },
    {
      title: "microG Services",
      description: "Google Services replaced with privacy-focused microG implementation.",
    },
    {
      title: "Independent Infrastructure",
      description: "No Google servers for connectivity checks, time protocol, or DNS. Uses BeaconDB for geolocation.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section" style={styles.heroSection}>
        <div style={styles.heroContainer}>
          <div style={styles.heroContent}>
            <div style={styles.heroImage}>
              <div style={styles.heroImageContainer}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/Hiroh+Launcher6.png`}
                  alt="Hiroh phone with /e/OS interface"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "1rem",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                    display: "block",
                  }}
                />
                {isMobile && (
                  <>
                    <div style={styles.heroImageOverlay} />
                    <div style={{
                      position: "absolute",
                      bottom: "1rem",
                      left: "-2rem",
                      right: "-2rem",
                      zIndex: 2,
                    }}>
                      <h1 style={{
                        ...styles.heroTitle,
                        marginBottom: "0.5rem",
                        textAlign: "center",
                      }}>
                        The HIROH Phone Ships with /e/OS
                      </h1>
                      <p style={styles.heroSubtitleOverlay}>
                        A complete, fully "deGoogled" mobile operating system that prioritizes your privacy.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
            {!isMobile && (
              <div style={styles.heroText}>
                <h1 style={styles.heroTitle}>The HIROH Phone Ships with /e/OS</h1>
                <p style={styles.heroSubtitle}>
                  A complete, fully "deGoogled" mobile operating system that prioritizes your privacy without compromising
                  ease of use. Open source, auditable, and designed for the privacy-conscious user.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What is /e/OS Section */}
      <section className="section" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div style={styles.container}>
          <div style={styles.grid2Col}>
            <div style={{ flex: isMobile ? "none" : "1", minWidth: isMobile ? "100%" : "400px" }}>
              <h2 style={{color: "var(--text-primary)" }}>What is /e/OS?</h2>
              <p style={styles.sectionSubtitleBlack}>
                /e/OS is an open-source mobile operating system paired with carefully selected applications, forming a
                privacy-enabled system for your smartphone.
              </p>
              <h3 style={{ color: "var(--text-primary)", textAlign: "left", fontWeight: "bold" }}>
                Open Source Means Auditable Privacy
              </h3>
              <p style={{ color: "var(--text-primary)", textAlign:  "left", fontSize: "1rem", lineHeight: "1.6" }}>
                /e/OS has received{" "}
                <a
                  href="https://www.tcd.ie/news_events/articles/study-reveals-scale-of-data-sharing-from-android-mobile-phones/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--color-primary-teal)",
                    textDecoration: "underline",
                    fontWeight: "500",
                  }}>
                  academic recognition
                </a>{" "}
                from researchers at the University of Edinburgh and Trinity College of Dublin.
              </p>
            </div>
            <div style={styles.imageSection}>
              <img
                src={`${process.env.PUBLIC_URL}/images/Hiroh+Launcher8.png`}
                alt="Hiroh phone with /e/OS launcher interface"
                style={styles.image}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="section" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div style={styles.container}>
          <h2 style={{color: "var(--text-white)", textAlign: "center" }}>Key Features of /e/OS</h2>
          <p style={styles.sectionSubtitle}>
            Discover the powerful privacy-focused features that make /e/OS the perfect operating system for HIROH
            phones.
          </p>

          <div style={styles.grid3Col}>
            {keyFeatures.map((feature, index) => (
              <div key={index} style={styles.featureCard}>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Controls Section */}
      <section className="section" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div style={styles.container}>
          <h2 style={{ color: "var(--text-primary)", textAlign: "center" }}>Advanced Privacy Controls</h2>
          <p style={{ color: "var(--text-primary)", textAlign: "center", fontSize: "1.25rem", lineHeight: "1.6", marginBottom: "2rem" }}>
            Take control of your digital privacy with powerful built-in tools and settings.
          </p>

          <div style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "2rem" : "3rem",
            alignItems: "center",
            marginBottom: isMobile ? "2rem" : "3rem",
          }}>
            <div style={{
              ...styles.imageSection,
              flex: isMobile ? "none" : "0 0 auto",
              minWidth: isMobile ? "100%" : "300px",
              maxWidth: isMobile ? "100%" : "400px",
            }}>
              <img
                src={`${process.env.PUBLIC_URL}/images/OS-ADV-PRIV1.png`}
                alt="Advanced privacy settings in /e/OS"
                style={styles.privacyImage}
              />
              <p style={{ ...styles.imageCaption, color: "var(--text-primary)" }}>Advanced Privacy Settings</p>
            </div>
            <div style={{
              flex: isMobile ? "none" : "1",
              minWidth: 0,
            }}>
              <h3 style={{ 
                ...styles.featureTitle, 
                color: "var(--text-primary)", 
                textAlign: isMobile ? "center" : "left",
                fontSize: isMobile ? "1.25rem" : "1.5rem",
                marginBottom: isMobile ? "1rem" : "1.5rem",
              }}>
                Escape Digital Surveillance
              </h3>
              <p style={{ 
                ...styles.featureDescription, 
                color: "var(--text-primary)", 
                textAlign: isMobile ? "center" : "left",
                fontSize: isMobile ? "1rem" : "1.125rem",
                lineHeight: isMobile ? "1.5" : "1.6",
              }}>
                The Advanced Privacy widget lets you choose whether to accept tracking, hide your IP address or
                geolocation when needed. Combined with the built-in ad blocker, enjoy a digital life with very few or no
                ads in applications and on the web.
              </p>
            </div>
          </div>

          <div style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "2rem" : "3rem",
            alignItems: "center",
          }}>
            <div style={{
              flex: isMobile ? "none" : "1",
              minWidth: 0,
              order: isMobile ? 2 : 1,
            }}>
              <h3 style={{ 
                ...styles.featureTitle, 
                color: "var(--text-primary)", 
                textAlign: isMobile ? "center" : "left",
                fontSize: isMobile ? "1.25rem" : "1.5rem",
                marginBottom: isMobile ? "1rem" : "1.5rem",
              }}>
                App Privacy Scoring
              </h3>
              <p style={{ 
                ...styles.featureDescription, 
                color: "var(--text-primary)", 
                textAlign: isMobile ? "center" : "left",
                fontSize: isMobile ? "1rem" : "1.125rem",
                lineHeight: isMobile ? "1.5" : "1.6",
              }}>
                /e/OS can decipher app code to show you which and how many trackers are present, plus the number of
                permissions required. With an easy-to-read scoring system, you can see which apps are safe and which
                should be avoided.
              </p>
            </div>
            <div style={{
              ...styles.imageSection,
              flex: isMobile ? "none" : "0 0 auto",
              minWidth: isMobile ? "100%" : "300px",
              maxWidth: isMobile ? "100%" : "400px",
              order: isMobile ? 1 : 2,
            }}>
              <img
                src={`${process.env.PUBLIC_URL}/images/OS-ADV-PRIV2.png`}
                alt="App privacy analysis in /e/OS"
                style={styles.privacyImage}
              />
              <p style={{ ...styles.imageCaption, color: "var(--text-primary)" }}>App Privacy Analysis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Widgets and Customization Section */}
      <section className="section" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div style={styles.container}>
          <h2 style={{ color: "var(--text-white)", textAlign: "center" }}>Customizable Interface</h2>
          <p style={styles.sectionSubtitle}>
            /e/OS comes with a beautiful, customizable interface designed for daily use.
          </p>

          <div style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "2rem" : "4rem",
            alignItems:  "center" ,
          }}>
            <div style={{
              ...styles.imageSection,
              flex: isMobile ? "none" : "0 0 auto",
              minWidth: isMobile ? "100%" : "100px",
              maxWidth: isMobile ? "100%" : "300px",
            }}>
              <img
                src={`${process.env.PUBLIC_URL}/images/OS-widgets.png`}
                alt="Customizable widgets and interface in /e/OS"
                style={styles.widgetsImage}
              />
            </div>

            <div style={{
              flex: isMobile ? "none" : "1",
              marginBottom: 0,
              display: "flex",
              flexDirection: "column",
              gap: isMobile ? "1.5rem" : "2rem",
              minWidth: 0,
            }}>
              {privacyFeatures.map((feature, index) => (
                <div key={index} style={{
                  ...styles.featureCard,
                  marginBottom: 0,
                }}>
                  <h3 style={styles.featureTitle}>{feature.title}</h3>
                  <p style={styles.featureDescription}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div style={styles.container}>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ color: "var(--text-primary)", textAlign: "center" }}>Experience Privacy-First Mobile Computing</h2>
            <p style={{ color: "var(--text-primary)", textAlign: "center",fontSize: "1.25rem", lineHeight: "1.6",marginBottom: "2rem" }}>
              The HIROH phone with /e/OS delivers enterprise-grade privacy in a consumer-friendly package.
            </p>
            <a href="https://e.foundation/e-os/" target="_blank" rel="noopener noreferrer" style={styles.ctaButton}>
              Learn More About /e/OS
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default EOSPage;
