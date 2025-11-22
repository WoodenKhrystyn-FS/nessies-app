import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar" style={navbarStyles.navbar}>
      <div className="links" style={navbarStyles.ul}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;

const navbarStyles = {
  navbar: {
    backgroundColor: "#f8f8f8",
    padding: "10px 20px",
    borderBottom: "1px solid #e7e7e7",
    fontSize: "20px",
  },
  links: {
    listStyleType: "none",
    margin: 5,
    padding: 10,
    overflow: "hidden",
  },
};
