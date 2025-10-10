import React from "react";
import "./Theme.css";
import IIT_BHU from "../assets/IIT-BHU.png";

export default function Theme() {
  return (
    <div className="theme-container">
        <div className="IIT-BHU-bg">
                    <img src={IIT_BHU} alt="IIT-BHU" className="IIT-BHU-img" />
                  </div>
      <div className="theme-header">THEME</div>
      <div className="theme-content">
        <ol className="theme-list">
          <li>To explore recent breakthroughs in magnetic storage technologies like MRAM and spin-orbit torque devices.</li>
          <li>To discuss sensor innovations for environmental monitoring, biomedical applications, and smart systems.</li>
          <li>To promote Indo-Italian academic and industrial collaborations in emergent materials research.</li>
        </ol>
      </div>
    </div>
  );
}
