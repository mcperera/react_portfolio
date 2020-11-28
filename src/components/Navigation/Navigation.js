import React, { useState } from "react";

import NavButton from "./NavButton/NavButton";
import NavItem from "./NavItems/NavItem";

import "./Navigation.css";

const navItems = [
  {
    id: 1,
    itemName: "Home",
    icon: "fas fa-home",
    pathName: "/",
  },
  {
    id: 2,
    itemName: "About",
    icon: "far fa-question-circle",
    pathName: "/about",
  },
  {
    id: 3,
    itemName: "Skills",
    icon: "fas fa-file-code",
    pathName: "/skills",
  },
];

const Navigation = () => {
  const [showNav, setShowNav] = useState(false);
  const handleClick = () => {
    setShowNav((preState) => {
      return !preState;
    });
  };

  const navItem = navItems.map((item) => {
    return <NavItem key={item.id} pathName={item.pathName} icon={item.icon} />;
  });

  return (
    <>
      <NavButton navClick={handleClick} hideNavButton={showNav} />
      <div className={showNav ? `showNavigationBox` : `hideNavigationBox`}>
        <div className='close' onClick={handleClick}></div>
        <div className='nav-items'>{navItem}</div>
      </div>
    </>
  );
};

export default Navigation;
