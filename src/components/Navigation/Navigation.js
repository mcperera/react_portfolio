import React, { useState } from "react";

import NavButton from "./NavButton";

import "./Navigation.css";

const Navigation = () => {
  const [showNav, setShowNav] = useState(false);
  const handleClick = () => {
    setShowNav((preState) => {
      return !preState;
    });
  };

  return (
    <>
      <NavButton navClick={handleClick} hideNavButton={showNav} />
      <div className={showNav ? `showNavigationBox` : `hideNavigationBox`}>
        <div className='close' onClick={handleClick}></div>
      </div>
    </>
  );
};

export default Navigation;
