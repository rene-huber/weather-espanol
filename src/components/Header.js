import React from "react";
import Icon from "../assests/logo-clima.png"

const Header = () => {
  return (
    <section className="top-banner">
      <div className="container">
        <center>
          <img
            src={Icon}
            alt="Bank logo"
            className="nav__logo"
            id="logo"
          />
         
        </center>
      </div>
    </section>
  );
};

export default Header;
