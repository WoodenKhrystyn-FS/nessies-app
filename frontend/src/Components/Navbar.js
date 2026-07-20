import React from "react";
import { trackEvent } from "../utils/analytics";
import { NavLink } from "react-router-dom";
import Logo from "../IMAGES/Logo.png";

function Navbar() {
  return (
    <div
      className="navbar"
      style={navbarStyles.navbar}
      aria-label="Main Navigation"
    >
      <img
        className="Logo"
        src={Logo}
        alt="Three Little Ladies Bakery Logo"
        style={navbarStyles.Logo}
      />
      <div className="links" style={navbarStyles.links}>
        <NavLink
          to="/"
          end
          style={navLinkStyle}
          onClick={() => {
            trackEvent("Navigation", "click", "Home Link", "Navbar");
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={navLinkStyle}
          onClick={() => {
            trackEvent("Navigation", "click", "About Us Link", "Navbar");
          }}
        >
          About Us
        </NavLink>
        <NavLink
          to="/order-goodie"
          style={navLinkStyle}
          onClick={() => {
            trackEvent("Navigation", "click", "Order Goodies Link", "Navbar");
          }}
        >
          Order Goodies
        </NavLink>
        <NavLink
          to="/contact"
          style={navLinkStyle}
          onClick={() => {
            trackEvent("Navigation", "click", "Contact Us Link", "Navbar");
          }}
        >
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
