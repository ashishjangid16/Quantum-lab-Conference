import React from "react";
import "./speaker.css";
import ImageDisplay from "./speaker_image";
import IIT_BHU from "../assets/IIT-BHU.png";
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
        <div className="IIT-BHU-bg">
                            <img src={IIT_BHU} alt="IIT-BHU" className="IIT-BHU-img" />
                          </div>
      <h1 className="speakers-header"> SPEAKERS </h1>
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