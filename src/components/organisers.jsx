import React from "react";
import "./organisers.css";
import ImageDisplay from "./committee_image";
import IIT_BHU from "../assets/IIT-BHU.png";
const committeeMembers = [
  {
    name: "Prof. Rajiv Prakash",
    imageSrc: require("../assets/committee/Prof_Rajiv_Prakash.jpg"),
  },
  {
    name: "Prof. Pralay Maiti",
    imageSrc: require("../assets/committee/Prof_Pralay_Maiti.jpg"),
  },
  {
    name: "Prof. Chandana Rath",
    imageSrc: require("../assets/committee/Prof_Chandana_Rath.jpg"),
  },
  {
    name: "Prof. Akhilesh Kumar Singh",
    imageSrc: require("../assets/committee/Prof_Akhilesh_Kumar_Singh.jpg"),
  },
  {
    name: "Prof. Chandan Upadhyay (Coordinator, SMST)",
    imageSrc: require("../assets/committee/Prof_Chandan_Upadhyay.jpg"),
  },
  {
    name: "Prof. Bhola Nath Pal",
    imageSrc: require("../assets/committee/Prof_Bhola_Nath_Pal.jpg"),
  },
  {
    name: "Prof. Ashish Kumar Mishra",
    imageSrc: require("../assets/committee/Prof_Ashish_Kumar_Mishra.jpg"),
  },
  {
    name: "Prof. Shrawan Kumar Mishra (Convenor)",
    imageSrc: require("../assets/committee/Prof_Shrawan_Kumar_Mishra.jpg"),
  },
  {
    name: "Prof. Sanjay Singh",
    imageSrc: require("../assets/committee/Prof_Sanjay_Singh.jpg"),
  },
  {
    name: "Prof. Nikhil Kumar",
    imageSrc: require("../assets/committee/Prof_Nikhil_Kumar.jpg"),
  },
  {
    name: "Prof. Ravi Panwar",
    imageSrc: require("../assets/committee/Prof_Ravi_Panwar.jpg"),
  },
  {
    name: "Prof. Uday Sanker",
    imageSrc: require("../assets/committee/Prof_Uday_Sanker.jpg"),
  },
  {
    name: "Prof. Shivam Verma",
    imageSrc: require("../assets/committee/Prof_Shivam_Verma.jpg"),
  },
  {
    name: "Prof. Sandip Chatterji",
    imageSrc: require("../assets/committee/Prof_Sandip_Chatterji.jpg"),
  },
  {
    name: "Prof. Gautam Anand (Treasurer/Secretary)",
    imageSrc: require("../assets/committee/Prof_Gautam_Anand.jpg"),
  },
];

export default function Organisers() {
  return (
    <div className="organisers-container">
      <div className="IIT-BHU-bg">
                          <img src={IIT_BHU} alt="IIT-BHU" className="IIT-BHU-img" />
                        </div>
      <div className="organisers-header">ORGANIZERS</div>
      <div className="committee-grid">
        {committeeMembers.map((member, index) => (
          <div key={index} className="committee-member">
            <ImageDisplay imageObj={member} />
          </div>
        ))}
      </div>
    </div>
  );
}
