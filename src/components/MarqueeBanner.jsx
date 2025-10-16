import React from "react";
import "./MarqueeBanner.css";

const MarqueeBanner = () => {
  const text = "Welcome to the Indo-Italy Joint Workshop 2025 (18–19 November)! Register by 10/11/2025 and be part of an exciting exchange of knowledge, ideas, and innovation.";

  return (
    <div className="marquee-container">
      <div className="marquee">
        <span>{text}</span>
        <span>{text}</span> {/* duplicate text for continuous effect */}
      </div>
    </div>
  );
};

export default MarqueeBanner;
