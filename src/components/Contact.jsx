import React from "react";
import "./Contact.css";
import IIT_BHU from "../assets/IIT-BHU.png";
const Contact = () => {
  return (
    <section className="contact-container">
         <div className="IIT-BHU-bg">
                                  <img src={IIT_BHU} alt="IIT-BHU" className="IIT-BHU-img" />
                                </div>
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-card">
        <p className="contact-intro">
          For any queries or assistance related to registration, accommodation,
          or conference details, feel free to contact us. Our organizing team
          will be happy to help you.
        </p>

        <h3>Primary Contact:</h3>
        <p className="contact-info">
          <strong>Dr. Shrawan Mishra</strong> <br />
          Department of Materials Science and Technology <br />
          Indian Institute of Technology (BHU), Varanasi <br />
          <strong>Email:</strong> shrawan.mst@iitbhu.ac.in <br />
          <strong>Phone:</strong> +91-9129113336
        </p>

        <h3>Additional Details:</h3>
        <ul>
          <li>Office Hours: 9:00 AM – 5:30 PM (Monday to Friday)</li>
          <li>Address: IIT BHU Main Campus, Lanka, Varanasi, Uttar Pradesh – 221005</li>
          <li>Conference Help Desk will be active during event days at the venue.</li>
        </ul>

        <p className="thanks">We look forward to hearing from you!</p>
      </div>
    </section>
  );
};

export default Contact;
