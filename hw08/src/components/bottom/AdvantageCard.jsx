import React from "react";

const AdvantageCard = ({ title, imageSrc, text, isLast }) => {
  const viewBox = isLast ? "0 0 40 40" : "0 0 46 32";

  return (
    <figure className="advantage">
      <svg
        className="advantage_img_box"
        xmlns="http://www.w3.org/2000/svg"
        width="46"
        height="32"
        viewBox={viewBox}
        fill="none"
      >
        <path d={imageSrc} />
      </svg>
      <h3 className="advantage_subtitle">{title}</h3>
      <p className="advantage_text">{text}</p>
    </figure>
  );
};

export default AdvantageCard;
