import React, { useState, useEffect, useRef } from "react";

const Carousel = ({ products }) => {
  const itemsPerPage = 9;
  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const myRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const displayedItems = products.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === totalPages - 1 ? 0 : prevPage + 1
    );
    focusCarousel();
  };

  const prevPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? totalPages - 1 : prevPage - 1
    );
    focusCarousel();
  };

  const focusCarousel = () => {
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div ref={myRef} className="carousel">
      <article className="product_list">
        {displayedItems.map((product) => product.component)}{" "}
      </article>
      <div className="product_carousel_box">
        <button onClick={prevPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
