import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavItem.css";

const NavItem = ({ pathName, icon }) => {
  let location = useLocation();

  return (
    <Link
      to={pathName}
      className={pathName === location.pathname ? `active-link ` : `link`}
    >
      <div className='nav-item'>
        <i className={icon}></i>
      </div>
    </Link>
  );
};

export default NavItem;
