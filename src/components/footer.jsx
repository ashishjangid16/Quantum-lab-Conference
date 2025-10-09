import React from "react";
import "./footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-section address">
      <h2>Address</h2>
      <div className="footer-item">
        <span className="footer-icon">📍</span>
        <span>
          SCHOOL OF MATERIAL SCIENCE AND TECHNOLOGY , IIT(BHU) Varanasi
        </span>
      </div>
      <div className="footer-item">
        <span className="footer-icon">📞</span>
        <span>+91-9129113336</span>
      </div>
      <div className="footer-item">
        <span className="footer-icon">📧</span>
        <span>smst2025@itbhu.ac.in</span>
      </div>
      <div className="footer-copyright">
        © <a href="https://icfcm2024.com" target="_blank" rel="noopener noreferrer">INDO_ITALY 2025</a>, All Right Reserved.
      </div>
    </div>
    <div className="footer-section committees">
      <h2>Committees</h2>
      <div><a href="#advisory">Advisory Committee</a></div>
      <div><a href="#organizing">Organizing Committee</a></div>
      <div><a href="#other">Other Committee</a></div>
    </div>
    <div className="footer-section links">
      <h2>Quick Links</h2>
      <div><a href="#home">Home</a></div>
      <div><a href="#about-dept">About Department</a></div>
      <div><a href="#iit-bhu">IIT(BHU)</a></div>
    </div>
    <div className="footer-designedby">
      Designed By&nbsp;
      <a href="https://www.sagaciousesystems.com/" target="_blank" rel="noopener noreferrer">
        Sagacious Esystems
      </a>
    </div>
    <button className="scroll-top-btn" title="Scroll to top">↑</button>
  </footer>
);

export default Footer;
