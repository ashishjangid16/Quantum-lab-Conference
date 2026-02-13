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
            <li>Recent breakthroughs in quantum materials</li>
            <li>Quantum Sensing & Devices</li>
            <li>Indo-Japan academic and industrial collaborations</li>
          </ul>
        </div>
      </div>
    </section>
  );
}