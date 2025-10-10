import "./Title.css";

export default function Title() {
  return (
    <div className="title-container">
      <div className="title-main">
        <span className="title-bold">INDO-ITALY JOINT WORKSHOP</span><br />
        <span className="title-on">ON</span><br />
        <span className="title-bold">EMERGENT MAGNETIC STORAGE DEVICES AND SENSORS</span>
      </div>
      <div className="title-details">
        <span className="title-date">18-19 November, 2025</span><br />
        <span className="title-institute"><strong>School of Materials Science and Technology</strong></span><br />
        <span className="title-institute"><strong>Indian Institute of Technology (BHU), Varanasi</strong></span>
      </div>
      <div className="title-contact">
        <span className="title-contact-person">Dr. Shrawan Mishra (shrawan.mst@iitbhu.ac.in)</span><br />
        <span className="title-contact-phone">+91-9129113336</span>
      </div>
     <a
  className="title-brochure-btn"
  href="/Soft Yellow And Pink Illustrative Business Event Rundown Flyer.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  Download Conference Brochure
</a>
    </div>
  );
}
