import React from "react";

import "./NavButton.css";
import logo from "../../../assets/M.svg";

const NavButton = ({ navClick, hideNavButton }) => {
  return (
    <div
      className={hideNavButton ? `hide-nav-button` : `show-nav-button`}
      onClick={navClick}
    >
      <img src={logo} alt='M' className='logo' />
    </div>
  );
};

export default NavButton;
