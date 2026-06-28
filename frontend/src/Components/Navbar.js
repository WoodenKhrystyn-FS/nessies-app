import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../IMAGES/Logo.png";

function Navbar() {
  return (
    <div className="navbar" style={navbarStyles.navbar}>
      <img
        className="Logo"
        src={Logo}
        alt="Three Little Ladies Bakery Logo"
        style={navbarStyles.Logo}
      />
      <div className="links" style={navbarStyles.links}>
        <NavLink to="/" end style={navLinkStyle}>
          Home
        </NavLink>
        <NavLink to="/about" style={navLinkStyle}>
          About Us
        </NavLink>
        <NavLink to="/order-goodie" style={navLinkStyle}>
          Order Goodies
        </NavLink>
        <NavLink to="/contact" style={navLinkStyle}>
          Contact Us
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;

const navLinkStyle = ({ isActive }) => ({
  color: isActive ? "#d97706" : "#111827",
  textDecoration: "none",
  fontWeight: 600,
});

const navbarStyles = {
  navbar: {
    backgroundColor: "#f8f8f8",
    padding: "10px 20px",
    borderBottom: "1px solid #e7e7e7",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  links: {
    listStyleType: "none",
    margin: 5,
    padding: 10,
    overflow: "hidden",
    display: "flex",
    gap: "25px",
    justifyContent: "center",
  },
  Logo: {
    height: "60px",
    marginRight: "1rem",
  },
};
