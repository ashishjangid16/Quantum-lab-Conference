import React from "react";
import "./speaker.css";
import ImageDisplay from "./speaker_image";
const speakers = 
[
  {
    name: "Prof. Alessandro Magni",
    imageSrc: require("../assets/speaker/speaker 1.png"),
  },
  {
    name: "Prof. Michaela Kuepferling",
    imageSrc: require("../assets/speaker/speaker 2.png"),
  },
  {
    name: "Prof. Vittorio Basso",
    imageSrc: require("../assets/speaker/speaker 3.png"),
  },
];


export default function Speakers() {
  return (
    <div className="speakers-container">
      <div className="speakers-header">SPEAKERS</div>
      <div className="speaker-grid">
        {speakers.map((member, index) => (
          <div key={index} className="speaker-member">
            <ImageDisplay imageObj={member} />
          </div>
        ))}
      </div>
    </div>
  );
}