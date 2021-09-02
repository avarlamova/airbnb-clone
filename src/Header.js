import React from "react";

function Header() {
  return (
    <div className="header">
      <img
        className="header--logo"
        alt="airbnb logo"
        src="https://banner2.cleanpng.com/20180605/oot/kisspng-airbnb-logo-coupon-privately-held-company-airbnb-logo-5b167f0c6a7270.541603821528200972436.jpg"
      ></img>

      <div className="header--search">
        <input type="text" />
        <SearchIcon />
      </div>
    </div>
  );
}

export default Header;
