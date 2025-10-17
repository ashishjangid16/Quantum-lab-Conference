import React from "react";
import "./speaker.css";
import ImageDisplay from "./speaker_image";

const speakers = [
  {
    name: "Dr. Alessandro Magni",
    imageSrc: require("../assets/speaker/speaker 1.png"),
  },
  {
    name: "Dr. Michaela Kuepferling",
    imageSrc: require("../assets/speaker/speaker 2.png"),
  },
  {
    name: "Dr. Vittorio Basso",
    imageSrc: require("../assets/speaker/speaker 3.png"),
  },
  {
    name: "Dr. Thirupathaiah Setti",
    imageSrc: require("../assets/speaker/speaker 4.png"),
    link: "https://bose.res.in/faculty/fac_new/setti.html.20190514",
  },
  {
    name: "Dr. Rohit Medwal",
    imageSrc: require("../assets/speaker/speaker 5.png"),
    link: "https://www.iitk.ac.in/new/rohit-medwal",
  },
   {
    name: "Dr. Jyoti Ranjan Mohanty",
    imageSrc: require("../assets/speaker/speaker 6.png"),
    link: "https://people.iith.ac.in/jmohanty/ ",
  },
];

export default function Speakers() {
  return (
    <section className="speakers-container">
      <div className="speakers-hero">
        <div className="speakers-header">SPEAKERS</div>
      </div>

      <div className="speakers-content">
        <div className="speakers-card">
          <div className="speaker-grid">
            {speakers.map((member, index) => (
              <div key={index} className="speaker-member">
                <ImageDisplay imageObj={member} />
                <div className="speaker-name">{member.name}</div>
                {member.link && (
                  <div className="speaker-link">
                    (<a
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Profile Link
                    </a>)
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
