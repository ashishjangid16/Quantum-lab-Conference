import React from "react";
import "./intro.css";
import sensorImage from "../assets/sensor1.png";
import sensorImage2 from "../assets/sensor2.png";   
import smstImage from "../assets/SMST-IMAGE.png";

const TextComponent = () => (
  <div className="textbox">

    {/* -------- ABOUT THE WORKSHOP -------- */}
    <div className="intro-section">
      <h2 className="intro-header">About the Workshop</h2>

      <div className="intro-row">
        <div className="intro-text left-align">

          <p>
            This Indo-Japan workshop brings together leading researchers, scientists, and industry experts from India
            and Japan to discuss cutting-edge developments in emergent quantum materials. This workshop will offer
            an opportunity to emphasise the research tradition and the trends of adapting the research fundamentals in
            today’s world.
          </p>

          <p>
            This workshop will offer an opportunity to emphasise the research
            tradition and the trends of adapting the research fundamentals in
            today’s world.
          </p>

          <p><strong>Major themes of the workshop include:</strong></p>

          <ul className="theme-list">
            <li>Quantum materials and applications</li>
            <li>Materials for sensors & quantum devices</li>
            <li>Quantum Technology</li>
            <li>Magnetism and Sprintronics</li>
            <li>Superconducting Materials</li>
          </ul>

          <p>
            Join us at the historic IIT BHU campus in Varanasi for engaging talks,
            panel discussions, and networking.
          </p>

        </div>

        {/* Image container */}
        <div className="intro-image-column">
          <img
            src={sensorImage}
            alt="Conference Sensor 1"
            className="intro-img"
          />
          <img
            src={sensorImage2}
            alt="Conference Sensor 2"
            className="intro-img"
          />
        </div>

      </div>
    </div>

    {/* -------- ABOUT THE DEPARTMENT -------- */}
    <div className="intro-section">
      <h2 className="intro-header">About the Department</h2>

      <div className="intro-row">
        <img
          src={smstImage}
          alt="SMST Department"
          className="intro-img"
        />

        <div className="intro-text left-align">
          <p>
            The School offers a two-year M.Tech. degree programme with an annual
            intake of 16 students and has produced over 130 M.Techs so far. Graduates are employed in premier R&amp;D organizations, industry,
            and teaching institutions. From the session 2005–06, the School initiated a five-year Dual Degree M.Tech. programme and also runs a successful Ph.D. programme. Nearly twenty-five Ph.D. candidates have completed their work under the supervision of faculty members of the School.
          </p>
        </div>
      </div>
    </div>

  </div>
);

export default TextComponent;
