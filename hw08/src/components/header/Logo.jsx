import React from "react";
import Search from "./Search";
import logo from "../../img/logo.svg";

const Logo = () => {
  return (
    <div className="header_logo">
      <a className="logo_link" href="/">
        <img src={logo} alt="logo" className="logo" />
      </a>
      {/* eslint-disable-next-line */}
      <a className="search_link" href="#">
        <Search />
      </a>
    </div>
  );
};

export default Logo;
