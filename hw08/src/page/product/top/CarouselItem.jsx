import React from "react";

const CarouselItem = ({ itemData }) => {
  const { id, src, alt } = itemData;

  return (
    <div className={`carousel_item item${id}`}>
      <div className="carousel_box">
        <img className="carousel_img" src={src} alt={alt} />
      </div>
    </div>
  );
};

export default CarouselItem;
