import React from "react";

import "./NavButton.css";
import logo from "../../../assets/logo/m24.png";

const NavButton = ({ navClick, hideNavButton }) => {
  return (
    <div
      className={hideNavButton ? `hide-nav-button` : `show-nav-button`}
      onClick={navClick}
    >
      <img src={logo} alt='M-logo' className='logo' />
    </div>
  );
};

export default NavButton;
