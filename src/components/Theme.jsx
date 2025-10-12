import React from "react";
import "./Theme.css";

export default function Theme() {
  return (
    <section className="theme-container">
      <div className="theme-hero">
        <div className="theme-header">THEME</div>
      </div>
      
      <div className="theme-content">
        <div className="theme-card">
          <ul className="theme-list">
            <li>To explore recent breakthroughs in magnetic storage technologies like MRAM and spin-orbit torque devices.</li>
            <li>To discuss sensor innovations for environmental monitoring, biomedical applications, and smart systems.</li>
            <li>To promote Indo-Italian academic and industrial collaborations in emergent materials research.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}