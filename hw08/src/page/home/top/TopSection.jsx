import React from "react";
import TopImg from "../../../img/top_img.svg";
import Vector from "../../../img/vector.svg";

const TopSection = () => {
  return (
    <section className="top">
      <img src={TopImg} alt="img" className="top_img" />
      <article className="top_right">
        <div className="top_right_brend">
          <img src={Vector} alt="brend" className="vector" />
          <h1>
            <span className="top_right_the-brand">THE BRAND</span>
            <span className="top_right_of-luxerious">
              {`\n`}
              OF LUXERIOUS
              <span className="top_right_fashion"> FASHION</span>
            </span>
          </h1>
        </div>
      </article>
    </section>
  );
};

export default TopSection;
