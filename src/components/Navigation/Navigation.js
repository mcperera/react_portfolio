import React, { useState, useEffect } from "react";

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
  {
    id: 4,
    itemName: "Work",
    icon: "fas fa-images",
    pathName: "/work",
  },
];

const Navigation = () => {
  const [showNav, setShowNav] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(window.screen.width);

  const handleClick = () => {
    setShowNav((preState) => {
      return !preState;
    });
  };

  const checkCurrentWidth = () => {
    const width = window.screen.width;
    setCurrentWidth(width);
  };

  useEffect(() => {
    window.addEventListener("resize", checkCurrentWidth);
    return () => window.removeEventListener("resize", checkCurrentWidth);
  }, []);

  const navItem = navItems.map((item) => {
    return <NavItem key={item.id} pathName={item.pathName} icon={item.icon} />;
  });

  return (
    <>
      <NavButton
        handleClick={handleClick}
        hideNavButton={showNav}
        setShowNav={setShowNav}
      />
      <div
        className={showNav ? `showNavigationBox` : `hideNavigationBox`}
        onMouseLeave={() => setShowNav(false)}
        onMouseEnter={() => setShowNav(true)}>
        {currentWidth <= 600 ? (
          <div className="close" onClick={handleClick}></div>
        ) : null}
        <div className="nav-items">{navItem}</div>
      </div>
    </>
  );
};

export default Navigation;
