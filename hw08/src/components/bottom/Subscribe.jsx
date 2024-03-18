import React from "react";
import SubscribeSVG from "../../img/subscribe.svg";

const Subscribe = () => {
  return (
    <article className="subscribe_background">
      <div className="bottom_left">
        <img src={SubscribeSVG} alt="subscribe" />
        <p className="bottom_left_text">
          “Vestibulum quis porttitor dui! Quisque viverra nunc mi,{" "}
          <span className="bottom_left_a-pulvinar">
            a pulvinar purus condimentum“
          </span>
        </p>
      </div>
      <div className="bottom_right">
        <p className="subscribe_text">
          <span className="subscribe">SUBSCRIBE</span>
          <br /> FOR OUR NEWSLETTER AND PROMOTION
        </p>
        <form className="email_form" action="#">
          <input
            className="email"
            required
            type="email"
            placeholder="Enter Your Email"
          />
          <button className="subscribe_button">Subscribe</button>
        </form>
      </div>
    </article>
  );
};

export default Subscribe;
