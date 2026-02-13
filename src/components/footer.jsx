import React from "react";
import "./footer.css";

const Footer = () => {
  // Add scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-section address">
        <h2>Address</h2>
        <div className="footer-item">
          <span className="footer-icon">📍</span>
          <span>
            SCHOOL OF MATERIAL SCIENCE AND TECHNOLOGY , IIT(BHU) Varanasi ( 221005 )
          </span>
        </div>
        <div className="footer-item">
          <span className="footer-icon">📞</span>
          <span>+91-9129113336</span>
        </div>
        <div className="footer-item">
          <span className="footer-icon">📧</span>
          <a href="mailto:tqm2026.events@itbhu.ac.in" className="footer-mail">
             tqm2026.events@itbhu.ac.in
          </a>
        </div>
      </div>

      <div className="footer-section links">
        <h2>Quick Links</h2>
        <div><a href="/">Home</a></div>
        <div><a href="https://www.iitbhu.ac.in/dept/mst" target="_blank" rel="noopener noreferrer">About Department</a></div>
        <div><a href="https://iitbhu.ac.in" target="_blank" rel="noopener noreferrer">IIT(BHU)</a></div>
      </div>

      <button className="scroll-top-btn" onClick={scrollToTop} title="Scroll to top">↑</button>
    </footer>
  );
};

export default Footer;
