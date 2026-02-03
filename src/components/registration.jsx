import React from "react";
import "./registration.css";
import qrcode from "../assets/qrcode.png";

const BankDetails = () => {
  return (
    <div className="registration-card">
      <div className="registration-subheader">
        <strong>Bank Details :</strong>
      </div>

      <table className="bank-details-table">
        <tbody>
          <tr>
            <td><strong>Name of Account :</strong></td>
            <td>IIT(BHU)-Main Account (Institute Development Fund)</td>
          </tr>
          <tr>
            <td><strong>Account Number :</strong></td>
            <td>32778803937</td>
          </tr>
          <tr>
            <td><strong>Account Type :</strong></td>
            <td>Current Account</td>
          </tr>
          <tr>
            <td><strong>Account Holder Name :</strong></td>
            <td>The Registrar, IIT(BHU)</td>
          </tr>
          <tr>
            <td><strong>Name of Bank & Address :</strong></td>
            <td>
              State Bank of India, IT-BHU Branch (Branch Code-11445)
              <br />
              IIT(BHU), Campus, Varanasi-221005
              <br />
              Ph. No.: 0542-2369181
            </td>
          </tr>
          <tr>
            <td><strong>IFSC Code :</strong></td>
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
          <div className="registration-subheader">
            <strong>Registration Form:</strong>
          </div>

          <a
            className="registration-link"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeHD3Wh7mGNw06L6n3n0auCHIE9-MdDRUMQVDwZK3Oa3hsy2Q/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://docs.google.com/forms/d/1vgSVLZKzLkce49mNdntoek0VRFdWNzXO7h9J5pPgC-w
          </a>

        
          <img
            src={qrcode}
            alt="QR Code for Registration"
            className="qr-code"
          />

          <ul className="registration-list">
            <li>Register online by 10/03/2026</li>
            <li>Selections are based on research relevance</li>
            <li>Shortlisted candidates will be notified by 15/03/2026</li>
            <li>Selected participants must pay the fee by 08/03/2026</li>
            <li>Seats are limited (only 75 participants)</li>

            <strong>Workshop fees:</strong>
            <li>₹1000 (early-career researchers/faculty)</li>
            <li>₹500 (PhD scholars & Master’s students)</li>
            <li>
              Accommodation will be provided on payment basis
              (booking deadline: 01/03/2026)
            </li>
          </ul>
        </div>

        <BankDetails />
      </div>
    </section>
  );
};

export default Registration;
