import React from "react";
import "./intro.css";
import sensorImage from "../assets/sensor.png";
import smstImage from "../assets/SMST-IMAGE.png";

const TextComponent = () => (
  <div className="textbox">
    <div className="intro-section">
      <h2 className="intro-header">About the Conference</h2>
      <div className="intro-row">
        <div className="intro-text left-align">
         This joint Indo-Italy workshop brings together leading researchers, scientists, and industry experts from India and Italy to discuss cutting-edge developments in emergent magnetic storage devices and sensors. With a focus on sustainable technologies, the event will cover advancements in magnetic memory, spin-based electronics, and sensor applications for IoT, healthcare, and data storage. Attendees will gain insights into collaborative research opportunities between the two nations, fostering innovation in materials science and nanotechnology. Join us at the historic IIT BHU campus in Varanasi for two days of engaging talks, panel discussions, and networking.
        </div>
        <img src={sensorImage} alt="Conference Sensor" className="intro-img" />
      </div>
    </div>
    <div className="intro-section">
      <h2 className="intro-header">About the Department</h2>
      <div className="intro-row">
        <img src={smstImage} alt="SMST Department" className="intro-img" />
        <div className="intro-text left-align">
          School offers a two year M.Tech. degree programme with an annual intake of 16 students and has produced over 130 M.Techs. so far. These students are generally employed in premier R & D organizations, industry and teaching institutions. From the session 2005-06, the school has initiated a new 5 year Dual degree M.Tech. Programme. School runs a very successful Ph.D. degree programme also. Nearly twenty five Ph.D candidates have completed work under the supervision of the faculty members of the School.
        </div>
      </div>
    </div>
  </div>
);

export default TextComponent;
