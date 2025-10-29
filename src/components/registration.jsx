import React from "react";
import "./registration.css";
import qrcode from "../assets/qrcode.png";

const BankDetails = () => {
  return (
    <div className="registration-card">
      <div className="registration-subheader"><strong>Bank Details :</strong></div>
      <table className="bank-details-table">
        <tbody>
          <tr>
            <td><strong> Name of Account :</strong></td>
            <td>IIT(BHU)-Main Account (Institute Development Fund)</td>
          </tr>
          <tr>
            <td><strong> Account Number :</strong></td>
            <td>32778803937</td>
          </tr>
          <tr>
            <td><strong> Account Type :</strong></td>
            <td>Current Account</td>
          </tr>
          <tr>
            <td><strong> Account Holder Name :</strong></td>
            <td>The Registrar, IIT(BHU)</td>
          </tr>
          <tr>
            <td><strong> Name of Bank & Address :</strong></td>
            <td>
              State Bank of India, IT-BHU Branch (Branch Code- 11445)
              <br />
              IIT(BHU), Campus, Varanasi-221 005
              <br />
              Ph. No.: 0542-2369181
            </td>
          </tr>
          <tr>
            <td><strong> IFSC Code :</strong></td>
            <td>SBIN0011445</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Registration = () => {
  return (
    <section className="registration-container">
      <div className="registration-hero">
        <div className="registration-header">REGISTRATION</div>
      </div>
      
      <div className="registration-content">
        <div className="registration-card">
           <div className="registration-subheader"><strong>Registration Form:</strong></div>

          <a
            className="registration-link"
            href="https://docs.google.com/forms/d/1vgSVLZKzLkce49mNdntoek0VRFdWNzXO7h9J5pPgC-w/edit?pli=1 "
            target="_blank"
            rel="noopener noreferrer"
          >
            https://docs.google.com/forms/d/1vgSVLZKzLkce49mNdntoek0VRFdWNzXO7h9J5pPgC-w/edit?pli=1 
          </a>
          <img src={qrcode} alt="qrcode" />
          <ul className="registration-list">
            <li>Register online by 10/11/2025</li>
            <li>Selections are based on research relevance</li>
            <li>Shortlisted candidates will be notified by 12/11/2025</li>
            <li>Selected participants must pay the fee by 10/11/2025</li>
            <li>Seats are limited (only 75 participants)</li>
            <b>Workshop fees:</b>
            <li>₹3500 (early-career researchers/faculty)</li>
            <li><span style={{ textDecoration: 'line-through' }}>₹2500</span>  ₹1500 (PhD scholars)</li>
            <li><span style={{ textDecoration: 'line-through' }}>₹1500</span>  ₹1000 (Master's students)</li>
          </ul>
        </div>

        {/* Bank details component */}
        <BankDetails />
      </div>
    </section>
  );
};

export default Registration;