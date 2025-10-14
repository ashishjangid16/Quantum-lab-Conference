import React from "react";
import "./Accommodation.css";

const Accommodation = () => {
  return (
    <section className="accommodation-container">
      <div className="accommodation-hero">
        <div className="accommodation-header">ACCOMMODATION</div>
      </div>

      <div className="accommodation-content">
        <div className="accommodation-card">
          <h3>Accommodation Details</h3>

          <ul>
            <li>
              Faculty members and researchers will be provided accommodation at the{" "}
              <strong>
                Gandhi Technology Alumni Centre, Indian Institute of Technology (BHU), Varanasi
              </strong>
              , on a payment basis. The centre offers comfortable and well-maintained rooms within
              the campus premises, ensuring easy access to all event venues.
            </li>
          </ul>

          <p>
            <a
              href="https://www.iitbhu.ac.in/cf/gtac"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit IIT(BHU) Guest House (GTAC) page
            </a>
          </p>

          <ul>
            <li>
              Students will be provided accommodation in the institute hostels at a subsidized fee.
              Hostel facilities ensure a safe and convenient stay within the IIT (BHU) campus.
            </li>
          </ul>

          <h3>Facilities Provided:</h3>
          <ul>
            <li>Furnished rooms with attached bathrooms</li>
            <li>24-hour electricity and Wi-Fi connectivity</li>
            <li>Air-conditioning and hot water facilities</li>
            <li>Dining facility with breakfast and dinner</li>
            <li>Common lounge area and front desk service</li>
          </ul>

          <h3>Contact for Accommodation:</h3>
          <p>
            For any queries regarding accommodation arrangements, please contact:
            <br />
            <strong>Email:</strong> jii2025.events@itbhu.ac.in <br />
            <strong>Phone:</strong> +91-9129113336
          </p>
        </div>

        <div className="accommodation-card">
          <h3>
            <strong>Bank Details :</strong>
          </h3>
          <table className="bank-details-table">
            <tbody>
              <tr>
                <td>
                  <strong>Name of Account :</strong>
                </td>
                <td>IIT(BHU)-Main Account (Institute Development Fund)</td>
              </tr>
              <tr>
                <td>
                  <strong>Account Number :</strong>
                </td>
                <td>32778803937</td>
              </tr>
              <tr>
                <td>
                  <strong>Account Type :</strong>
                </td>
                <td>Current Account</td>
              </tr>
              <tr>
                <td>
                  <strong>Account Holder Name :</strong>
                </td>
                <td>The Registrar, IIT(BHU)</td>
              </tr>
              <tr>
                <td>
                  <strong>Name of Bank & Address :</strong>
                </td>
                <td>
                  State Bank of India, IT-BHU Branch (Branch Code - 11445)
                  <br />
                  IIT(BHU) Campus, Varanasi – 221005
                  <br />
                  Ph. No.: 0542-2369181
                </td>
              </tr>
              <tr>
                <td>
                  <strong>IFSC Code :</strong>
                </td>
                <td>SBIN0011445</td>
              </tr>
            </tbody>
          </table>

          {/* Additional Contacts Section */}
          <div className="additional-contact">
            <h3>For Any Query Contact:</h3>
            <p>
              <strong>Shivam Pandey</strong>
              <br />
              <strong>Email:</strong> shivampandey.rs.mst24@itbhu.ac.in
              <br />
              <strong>Phone:</strong> +91-6394790647
            </p>
            <p>
              <strong>Shubham Kumar Gupta</strong>
              <br />
              <strong>Email:</strong> shubhamkumargupta.rs.mst24@itbhu.ac.in
              <br />
              <strong>Phone:</strong> +91-8318434197
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
