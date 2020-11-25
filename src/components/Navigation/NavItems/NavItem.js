import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavItem.css";

const NavItem = ({ pathName, icon }) => {
  let location = useLocation();

  return (
    <Link to={pathName} className='link'>
      <div
        className={
          pathName === location.pathname ? `active-nav-item` : `nav-item`
        }
      >
        {icon}
      </div>
    </Link>
  );
};

export default NavItem;
