import React from "react";

import "./NavButton.css";

const NavButton = ({ navClick, hideNavButton }) => {
  return (
    <div
      className={hideNavButton ? `hide-nav-button` : `show-nav-button`}
      onClick={navClick}
    ></div>
  );
};

export default NavButton;
