import React from "react";
import "./intro.css";
import sensorImage from "../assets/sensor.png";
import smstImage from "../assets/SMST-IMAGE.png";

const TextComponent = () => (
  <div className="textbox">

    {/* -------- ABOUT THE WORKSHOP -------- */}
    <div className="intro-section">
      <h2 className="intro-header">About the Workshop</h2>

      <div className="intro-row">
        <div className="intro-text left-align">

          <p>
            This Indo-Japan workshop brings together leading researchers,
            scientists, and industry experts from India and Japan to discuss
            cutting-edge developments in emergent quantum materials.
          </p>

          <p>
            This workshop will offer an opportunity to emphasise the research
            tradition and the trends of adapting the research fundamentals in
            today’s world.
          </p>

          <p><strong>Major themes of the conference include:</strong></p>

          <ul className="theme-list">
            <li>Electronic materials for sensors</li>
            <li>Neuromorphic devices</li>
            <li>Electrical and photonic materials and devices</li>
            <li>Magnetic, spintronics and superconducting materials</li>
            <li>Materials for energy and environment</li>
            <li>Ion–matter interactions and their applications</li>
            <li>Structured materials and alloys</li>
            <li>Quantum materials and applications</li>
          </ul>

          <p>
            Join us at the historic IIT BHU campus in Varanasi for engaging talks,
            panel discussions, and networking.
          </p>

        </div>

        <img
          src={sensorImage}
          alt="Conference Sensor"
          className="intro-img"
        />
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
