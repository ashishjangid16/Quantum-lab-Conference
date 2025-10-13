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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}