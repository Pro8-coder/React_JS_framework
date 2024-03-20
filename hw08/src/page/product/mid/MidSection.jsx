import React from "react";
import ProductDescription from "./ProductDescription";
import ProductItem4 from "../../../components/ProductItems/ProductItem4";
import ProductItem3 from "../../../components/ProductItems/ProductItem3";
import ProductItem6 from "../../../components/ProductItems/ProductItem6";

const MidSection = () => {
  return (
    <section className="mid">
      <ProductDescription />
      <article className="product_list">
        <ProductItem4 />
        <ProductItem3 />
        <ProductItem6 />
      </article>
    </section>
  );
};

export default MidSection;
