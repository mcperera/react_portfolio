import React, { useState, useEffect } from "react";

import "./NavButton.css";
import logo from "../../../assets/logo/m512.png";

const NavButton = ({ handleClick, hideNavButton }) => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    let time = 5000;
    if (showLogo) {
      time = 5000;
    } else {
      time = 1000;
    }
    const changer = setInterval(() => {
      setShowLogo((preState) => {
        return !preState;
      });
    }, time);
    return () => clearInterval(changer);
  }, [showLogo]);

  return (
    <div
      className={hideNavButton ? `hide-nav-button` : `show-nav-button`}
      onClick={handleClick}>
      {showLogo ? (
        <img src={logo} alt="M-logo" className="logo" />
      ) : (
        <i className="fas fa-bars ham-icon"></i>
      )}
    </div>
  );
};

export default NavButton;
