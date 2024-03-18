import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <div className="empty"></div>
      <Navigation />
    </header>
  );
};

export default Header;
