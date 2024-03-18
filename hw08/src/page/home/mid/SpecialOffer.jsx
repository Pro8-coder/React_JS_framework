import React from "react";
import Blackout from "../../../img/blackout.svg";
import BlackoutBig from "../../../img/blackout_big.svg";

const SpecialOffer = ({ category, imageSrc, offerText, isLast }) => {
  const offerBoxClass = isLast ? "box big" : "box";
  const backgroundImage = isLast ? BlackoutBig : Blackout;
  const endText = isLast
    ? category.toUpperCase()
    : `FOR ${category.toUpperCase()}`;

  return (
    <div className={offerBoxClass}>
      <img src={backgroundImage} alt="#" className="bg_img" />
      <img src={imageSrc} alt={`${category}`} className="offer_img" />
      <h2 className="text_in_img">
        <span className="start">{offerText}</span>
        <span className="end">
          {`\n`}
          {endText}
        </span>
      </h2>
    </div>
  );
};

export default SpecialOffer;
