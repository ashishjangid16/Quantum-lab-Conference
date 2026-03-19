import "./Title.css";
import brochurePdf from "../assets/Conference.pdf";

export default function Title() {
  return (
    <div className="title-container">
      <div className="title-main">
        <span className="title-bold">IIT(BHU)-NIMS JOINT WORKSHOP</span><br />
        <span className="title-on">ON</span><br />
        <span className="title-bold">TRENDS IN QUANTUM MATERIALS</span>
      </div>
      <div className="title-details">
        <span className="title-date"> <strong> 24 March, 2026 | Dev & Vardhana Goswami Lecture Hall Complex</strong> </span><br />
        <span className="title-institute"><strong>School of Materials Science and Technology</strong></span><br />
        <span className="title-institute"><strong>Indian Institute of Technology (BHU), Varanasi</strong></span>
      </div>
      <div className="title-contact">
        <span className="title-contact-person"><strong>Dr. Shrawan Mishra</strong></span><br />
        <span className="title-contact-phone"><strong>+91-9129113336</strong></span><br />
        <span className="title-contact-email"><strong>Email: <a href="mailto:tqm2026.events@itbhu.ac.in">tqm2026.events@itbhu.ac.in</a></strong></span>
      </div>
      <a
        className="title-brochure-btn"
        href={brochurePdf}
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Workshop Brochure
      </a>
    </div>
  );
}
