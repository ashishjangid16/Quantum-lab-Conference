import React from "react";
import "./registration.css";
import qrcode from "../assets/qrcode.png";
import IIT_BHU from "../assets/IIT-BHU.png";


const Registration = () => {
  return (
    <div className="registration-container">

      <div className="IIT-BHU-bg">
                          <img src={IIT_BHU} alt="IIT-BHU" className="IIT-BHU-img" />
                        </div>
      <div className="registration-header">REGISTRATION</div>
      <div className="registration-content">
        <a
          className="registration-link"
          href="https://forms.gle/bdx3nxQ8WaiSqW6VA"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://forms.gle/bdx3nxQ8WaiSqW6VA
        </a>
        <img src={qrcode} alt="qrcode" />
        <ul className="registration-list">
          <li>
            <strong>Register online by 10/11/2025</strong>
          </li>
          <li>Selections are based on research relevance.</li>
          <li>Shortlisted candidates will be notified by 12/11/2025.</li>
          <li>Selected participants must pay the fee by 10/11/2025.</li>
          <li>Seats are limited to 75 participants.</li>
          <li>
            <strong>Workshop fees:</strong>
          </li>
          <li>₹2000 (for early-career researchers)</li>
          <li>₹1500 (for PhD scholars)</li>
          <li>₹1000 (for Master’s students)</li>
          <li>
            Accommodation will be provided on a payment basis (booking deadlines
            30/10/2025)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Registration;
