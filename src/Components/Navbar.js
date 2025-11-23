import React from "react";
import { Link } from "react-router-dom";
import Logo from "../IMAGES/Logo.png";

function Navbar() {
  return (
    <div className="navbar" style={navbarStyles.navbar}>
      <img
        className="Logo"
        src={Logo}
        alt="3 Lil Ladies Baked Goods Logo"
        style={navbarStyles.Logo}
      />
      <div className="links" style={navbarStyles.links}>
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
    padding: "10px 0",
    borderBottom: "1px solid #e7e7e7",
    fontSize: "20px",
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
    marginRight: "1020px",
    
  },
};
