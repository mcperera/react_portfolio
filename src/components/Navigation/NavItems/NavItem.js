import React from "react";
import { Link } from "react-router-dom";
import "./NavItem.css";

const NavItem = ({ navLink }) => {
  return (
    <Link to={navLink} className='link'>
      <div className='nav-item-box'>*</div>
    </Link>
  );
};

export default NavItem;
