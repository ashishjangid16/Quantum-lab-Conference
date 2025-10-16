import React from "react";
import "./MarqueeBanner.css";

const MarqueeBanner = () => {
  const text = "Welcome to Indo-Italy Joint Workshop 2025 (18-19 Nov). Register by 10/11/2025. Shortlisted candidates will be notified by 12/11/2025. Selected participants must pay the fee by 10/11/2025. ";

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
