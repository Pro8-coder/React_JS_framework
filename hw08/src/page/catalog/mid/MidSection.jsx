import React from "react";
import ProductFilter from "./ProductFilter";
import ProductOptions from "./ProductOptions";
import ProductItem1 from "../../../components/ProductItems/ProductItem1";
import ProductItem7 from "../../../components/ProductItems/ProductItem7";
import ProductItem3 from "../../../components/ProductItems/ProductItem3";
import ProductItem4 from "../../../components/ProductItems/ProductItem4";
import ProductItem8 from "../../../components/ProductItems/ProductItem8";
import ProductItem9 from "../../../components/ProductItems/ProductItem9";
import ProductItem10 from "../../../components/ProductItems/ProductItem10";
import ProductItem11 from "../../../components/ProductItems/ProductItem11";
import ProductItem12 from "../../../components/ProductItems/ProductItem12";

const MidSection = () => {
  return (
    <section className="mid">
      <div className="product_settings">
        <ProductFilter />
        <ProductOptions />
      </div>
      <article className="product_list">
        <ProductItem1 />
        <ProductItem7 />
        <ProductItem3 />
        <ProductItem4 />
        <ProductItem8 />
        <ProductItem9 />
        <ProductItem10 />
        <ProductItem11 />
        <ProductItem12 />
      </article>
    </section>
  );
};

export default MidSection;
