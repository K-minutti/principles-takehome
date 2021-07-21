import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="header-navbar">
      <NavLink to="/">
        <p id="Logo">
          Dogo <i className="fas fa-paw"></i>
        </p>
      </NavLink>
    </nav>
  );
};

export default Navbar;
