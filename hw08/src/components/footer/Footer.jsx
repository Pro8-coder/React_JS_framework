import React from "react";
import Facebook from "../../img/facebook.svg";
import Instagram from "../../img/instagram.svg";
import Pinterest from "../../img/pinterest.svg";
import Twitter from "../../img/twitter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="rights_reserved">© 2022 Brand All Rights Reserved.</p>
      <div className="social_media">
        <a className="social_link" href="https://www.facebook.com">
          <div className="social_box">
            <img className="social" src={Facebook} alt="facebook" />
          </div>
        </a>
        <a className="social_link" href="https://www.instagram.com">
          <div className="social_box">
            <img className="social" src={Instagram} alt="instagram" />
          </div>
        </a>
        <a className="social_link" href="https://www.pinterest.com">
          <div className="social_box">
            <img className="social" src={Pinterest} alt="pinterest" />
          </div>
        </a>
        <a className="social_link" href="https://twitter.com">
          <div className="social_box">
            <img className="social" src={Twitter} alt="twitter" />
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
