import React from "react";
import "./speaker.css";
import ImageDisplay from "./speaker_image";

const speakers = [
  {
    name: "Dr. Shinji Isogami",
    institute: "NIMS, Japan",
    imageSrc: require("../assets/speaker/speaker 1.png"),
    //link: "https://www.inrim.it/en",
  },
  {
    name: "Dr. Soumya Ranjan Rath",
    institute: "NIMS, Japan",
    imageSrc: require("../assets/speaker/speaker 2.png"),
    //link: "https://www.inrim.it/en",
  },
  // {
  //   name: "Dr. Vittorio Basso",
  //   institute: "INRiM",
  //   imageSrc: require("../assets/speaker/speaker 3.png"),
  //   link: "https://www.inrim.it/en",
  // },
  // {
  //   name: "Dr. Thirupathaiah Setti",
  //   institute: "S. N. Bose National Centre for Basic Sciences",
  //   imageSrc: require("../assets/speaker/speaker 4.png"),
  //   link: "https://bose.res.in/faculty/fac_new/setti.html.20190514",
  // },
  // {
  //   name: "Dr. Rohit Medwal",
  //   institute: "IIT Kanpur",
  //   imageSrc: require("../assets/speaker/speaker 5.png"),
  //   link: "https://www.iitk.ac.in/new/rohit-medwal",
  // },
  // {
  //   name: "Dr. Jyoti Ranjan Mohanty",
  //   institute: "IIT Hyderabad",
  //   imageSrc: require("../assets/speaker/speaker 6.png"),
  //   link: "https://people.iith.ac.in/jmohanty/",
  // },
  // {
  //   name: "Dr. Ritwik Mondal",
  //   institute: " IIT (ISM) Dhanbad",
  //   imageSrc: require("../assets/speaker/speaker 7.png"),
  //   link: "https://sites.google.com/view/ritwik-utsg/about-pi",
  // },
  // {
  //   name: "Dr. Vijay Raj Singh",
  //   institute: "Central University of South Bihar",
  //   imageSrc: require("../assets/speaker/speaker 8.png"),
  //   link: "https://cusb.irins.org/profile/109198",
  // },
  // {
  //   name: "Dr. Shivam Verma",
  //   institute: "IIT BHU",
  //   imageSrc: require("../assets/speaker/speaker 9.png"),
  //   link: "https://www.iitbhu.ac.in/dept/ece/people/shivamece",
  // },
  // {
  //   name: "Dr. Biswanath Bhoi",
  //   institute: "IIT BHU",
  //   imageSrc: require("../assets/speaker/speaker 10.png"),
  //   link: "https://iitbhu.ac.in/dept/phy/people/biswanathphy",
  // },
  // {
  //   name: "Prof. Sandip Chatterjee",
  //   institute: "IIT BHU",
  //   imageSrc: require("../assets/speaker/speaker 11.png"),
  //   link: "https://iitbhu.ac.in/dept/phy/people/schatterjiapp",
  // },
  // {
  //   name: "Dr. Dushyant Kumar",
  //   institute: "IIT Jodhpur",
  //   imageSrc: require("../assets/speaker/speaker 12.png"),
  //   link: "https://iitj.ac.in/People/Profile/d6be896f-eae8-404c-8127-044afcc600ff",
  // },
  // {
  //   name: "Dr. Himanshu Fulara",
  //   institute: "IIT Roorkee",
  //   imageSrc: require("../assets/speaker/speaker 13.png"),
  //   link: "https://www.iitr.ac.in/~PH/Himanshu_Fulara",
  // },
  // {
  //   name: "Dr. Rajeev Singh",
  //   institute: "IIT BHU",
  //   imageSrc: require("../assets/speaker/speaker 14.png"),
  //   link: "https://www.iitbhu.ac.in/dept/phy/people/rajeevsphy",
  // },
  // {
  //   name: "Prof. Soumik Mukhopadhyay",
  //   institute: "IIT Kanpur",
  //   imageSrc: require("../assets/speaker/speaker 15.png"),
  //   link: "https://www.iitk.ac.in/new/dr-soumik-mukhopadhyay",
  // },
  // {
  //   name: "Prof. Chandana Rath",
  //   institute: "IIT BHU",
  //   imageSrc: require("../assets/speaker/speaker 16.png"),
  //   link: "https://www.iitbhu.ac.in/dept/mst/people/crathmst",
  // },
  // {
  //   name: "Dr. Saurabh Kumar Srivastav",
  //   institute: "IIT BHU",
  //   imageSrc: require("../assets/speaker/speaker 17.png"),
  //   link: "https://scholar.google.com/citations?user=PaADPJwAAAAJ&hl=en",
  // },
  // {
  //   name: "Dr. Bhagavan Behera",
  //   institute: "CSIR-National Aerospace Laboratories",
  //   imageSrc: require("../assets/speaker/speaker 18.png"),
  //   link: "https://www.nal.res.in/en/bhagaban-behera-dr-1",
  // },
  // {
  //   name: "Dr. Sanjay Singh",
  //   institute: "IIT BHU",
  //   imageSrc: require("../assets/speaker/speaker 19.png"),
  //   link: "https://iitbhu.ac.in/dept/mst/people/ssinghmst",
  // },
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
                <div className="speaker-institute">{member.institute}</div>
                {member.link && (
                  <div className="speaker-link">
                    (<a href={member.link} target="_blank" rel="noopener noreferrer">
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
