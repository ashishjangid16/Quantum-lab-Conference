import React from "react";
import "./organisers.css";
import ImageDisplay from "./committee_image";

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
    name: "Prof. Shrawan Kumar Mishra",
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
    name: "Prof. Gautam Anand",
    imageSrc: require("../assets/committee/Prof_Gautam_Anand.jpg"),
  },
];

export default function Organisers() {
  return (
    <section className="organisers-container">
      <div className="organisers-hero">
        <div className="organisers-header">COMMITTEE</div>
      </div>

      <div className="organisers-content">
        <div className="organisers-card">
          {(() => {
            const patron = {
              name: "Dr. Amit Patra (Director, IIT BHU)",
              imageSrc: require("../assets/committee/IIT BHU DIRECTOR.jpg"),
            };
            return (
              <div className="committee-grid">
                <div
                  className="committee-member"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <h2 style={{ textDecoration: "underline" }}>Patron</h2>
                  <ImageDisplay imageObj={patron} />
                </div>
              </div>
            );
          })()}

          {(() => {
            const convenor = committeeMembers.find((m) =>
              m.name.toLowerCase().includes("shrawan kumar mishra")
            );
            const treasurer = committeeMembers.find((m) =>
              m.name.toLowerCase().includes("gautam anand")
            );

            return (
              <div className="committee-grid">
                {convenor && (
                  <div
                    className="committee-member"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <h2 style={{ textDecoration: "underline" }}>Convenor</h2>
                    <ImageDisplay imageObj={convenor} />
                  </div>
                )}
                {treasurer && (
                  <div
                    className="committee-member"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <h2 style={{ textDecoration: "underline" }}>Treasurer</h2>
                    <ImageDisplay imageObj={treasurer} />
                  </div>
                )}
              </div>
            );
          })()}

          {/* Header: Organising Committee */}
          <div className="organisers-subheader" style={{display:"flex",justifyContent:"center"}}>
            <h2 style={{ textDecoration: "underline" }}>ORGANISING COMMITTEE</h2>
          </div>

          {/* Remaining members */}
          <div className="committee-grid">
            {committeeMembers
              .filter((m) => {
                const n = m.name.toLowerCase();
                return !(
                  n.includes("shrawan kumar mishra") ||
                  n.includes("gautam anand")
                );
              })
              .map((member, index) => (
                <div key={index} className="committee-member">
                  <ImageDisplay imageObj={member} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
