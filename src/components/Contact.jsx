import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact-hero">
        <div className="contact-header">CONTACT US</div>
      </div>
      
      <div className="contact-content">
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

       

          <p className="thanks">We look forward to hearing from you!</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;