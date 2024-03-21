import React from "react";
import ProductFilter from "./ProductFilter";
import ProductOptions from "./ProductOptions";
import Carousel from "./Carousel";
import ProductItem1 from "../../../components/ProductItems/ProductItem1";
import ProductItem7 from "../../../components/ProductItems/ProductItem7";
import ProductItem3 from "../../../components/ProductItems/ProductItem3";
import ProductItem4 from "../../../components/ProductItems/ProductItem4";
import ProductItem8 from "../../../components/ProductItems/ProductItem8";
import ProductItem9 from "../../../components/ProductItems/ProductItem9";
import ProductItem10 from "../../../components/ProductItems/ProductItem10";
import ProductItem11 from "../../../components/ProductItems/ProductItem11";
import ProductItem12 from "../../../components/ProductItems/ProductItem12";
import ProductItem2 from "../../../components/ProductItems/ProductItem2";
import ProductItem5 from "../../../components/ProductItems/ProductItem5";
import ProductItem6 from "../../../components/ProductItems/ProductItem6";

const MidSection = () => {
  const products = [
    { id: 1, component: <ProductItem1 /> },
    { id: 1, component: <ProductItem7 /> },
    { id: 1, component: <ProductItem3 /> },
    { id: 1, component: <ProductItem4 /> },
    { id: 1, component: <ProductItem8 /> },
    { id: 1, component: <ProductItem9 /> },
    { id: 1, component: <ProductItem10 /> },
    { id: 1, component: <ProductItem11 /> },
    { id: 1, component: <ProductItem12 /> },
    { id: 2, component: <ProductItem2 /> },
    { id: 2, component: <ProductItem5 /> },
    { id: 2, component: <ProductItem6 /> },
  ];

  return (
    <section className="mid">
      <div className="product_settings">
        <ProductFilter />
        <ProductOptions />
      </div>
      <Carousel products={products} />
    </section>
  );
};

export default MidSection;
