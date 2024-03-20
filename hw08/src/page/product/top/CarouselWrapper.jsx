import React, { useState } from "react";
import CarouselItem from "./CarouselItem";
import ProductSlide from "../../../img/product_slide.svg";
import Product4 from "../../../img/product4.svg";
import Product3 from "../../../img/product3.svg";
import Product6 from "../../../img/product6.svg";

const CarouselWrapper = () => {
  const images = [
    { id: 1, src: ProductSlide, alt: "ProductSlide" },
    { id: 2, src: Product4, alt: "Product 4" },
    { id: 3, src: Product3, alt: "Product 3" },
    { id: 4, src: Product6, alt: "Product 6" },
  ];
  const [currentItem, setCurrentItem] = useState(0);

  const nextItem = () => {
    setCurrentItem((currentItem + 1) % images.length);
  };

  const prevItem = () => {
    setCurrentItem((currentItem - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <div className="carousel_wrapper">
        <CarouselItem itemData={images[currentItem]} />{" "}
        <button className="arrow arrow_prev" onClick={prevItem}>
          <svg
            className="arrow_img"
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
          >
            <path d="M21.6998 7.7499L13.9498 15.4999L21.6998 23.2499L20.1498 26.3499L9.2998 15.4999L20.1498 4.6499L21.6998 7.7499Z" />
          </svg>
        </button>{" "}
        <button className="arrow arrow_next" onClick={nextItem}>
          <svg
            className="arrow_img"
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
          >
            <path d="M21.6998 7.7499L13.9498 15.4999L21.6998 23.2499L20.1498 26.3499L9.2998 15.4999L20.1498 4.6499L21.6998 7.7499Z" />
          </svg>
        </button>{" "}
      </div>
    </div>
  );
};

export default CarouselWrapper;
