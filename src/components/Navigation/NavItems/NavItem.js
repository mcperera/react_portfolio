import React from "react";
import { Link } from "react-router-dom";
import "./NavItem.css";

const NavItem = ({ navLink, icon }) => {
  return (
    <Link to={navLink} className='link'>
      <div className='nav-item-box'>{icon}</div>
    </Link>
  );
};

export default NavItem;
