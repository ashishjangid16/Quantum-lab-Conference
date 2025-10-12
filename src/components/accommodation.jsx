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
          <h2>IIT BHU Guest House</h2>
          <p className="address">
            📍 Lanka Gate, Varanasi, Uttar Pradesh – 221005
          </p>

          <p className="details">
            Accommodation for participants and invited guests will be arranged at
            the IIT (BHU) Guest House located near the main Lanka Gate. The guest
            house provides a comfortable and peaceful environment within the
            campus, ensuring easy access to all event venues.
          </p>

          <h3>Facilities Provided:</h3>
          <ul>
            <li>Fully furnished rooms with attached bathrooms</li>
            <li>24-hour electricity and Wi-Fi connectivity</li>
            <li>Air-conditioning and hot water facilities</li>
            <li>Dining facility with breakfast and dinner</li>
            <li>Common lounge area and front desk service</li>
          </ul>

          <h3>Check-in & Check-out:</h3>
          <p>
            Check-in: <strong>2:00 PM</strong> &nbsp; | &nbsp; Check-out:{" "}
            <strong>11:00 AM</strong>
          </p>

          <h3>Contact for Accommodation:</h3>
          <p>
            For any queries regarding accommodation arrangements, please contact:
            <br />
            <strong>Email:</strong> accommodation@iitbhu.ac.in <br />
            <strong>Phone:</strong> +91 542 6700000
          </p>
        </div>
      </div>
    </section>
  );
};

export default Accommodation;