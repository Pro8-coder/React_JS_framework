import React from "react";
import { Link } from "react-router-dom";
import SpecialOffer from "./SpecialOffer";
import ProductItem1 from "../../../components/ProductItems/ProductItem1";
import ProductItem2 from "../../../components/ProductItems/ProductItem2";
import ProductItem3 from "../../../components/ProductItems/ProductItem3";
import ProductItem4 from "../../../components/ProductItems/ProductItem4";
import ProductItem5 from "../../../components/ProductItems/ProductItem5";
import ProductItem6 from "../../../components/ProductItems/ProductItem6";
import Women from "../../../img/women.svg";
import Men from "../../../img/men.svg";
import Kids from "../../../img/kids.svg";
import Accesories from "../../../img/accesories.svg";

const MidSection = () => {
  return (
    <section className="mid">
      <article className="offer">
        <SpecialOffer category="women" imageSrc={Women} offerText="30% OFF" />
        <SpecialOffer category="men" imageSrc={Men} offerText="HOT DEAL" />
        <SpecialOffer
          category="kids"
          imageSrc={Kids}
          offerText="NEW ARRIVALS"
        />
        <SpecialOffer
          category="accesories"
          imageSrc={Accesories}
          offerText="LUXIROUS & TRENDY"
          isLast={true}
        />
      </article>
      <div class="product_container">
        <h3 class="product_title">Fetured Items</h3>
        <p class="product_text">
          Shop for items based on what we featured in this week
        </p>
      </div>
      <article className="product_list">
        <ProductItem1 />
        <ProductItem2 />
        <ProductItem3 />
        <ProductItem4 />
        <ProductItem5 />
        <ProductItem6 />
      </article>
      <Link
        to="/catalogPage"
        className="product_button"
        onClick={() => window.scrollTo(0, 0)}
      >
        Browse All Product
      </Link>
    </section>
  );
};

export default MidSection;
