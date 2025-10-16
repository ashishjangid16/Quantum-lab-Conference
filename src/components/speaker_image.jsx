import React from "react";
import "./committee_image.css";

const ImageDisplay = ({ imageObj }) => {
  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="w-40 h-40 rounded-full border-4 border-dotted border-sky-400 flex items-center justify-center overflow-hidden">
        <img
          src={imageObj.imageSrc}
          className="member_image"
          alt={imageObj.name}
        />
      </div>
    </div>
  );
};

export default ImageDisplay;
