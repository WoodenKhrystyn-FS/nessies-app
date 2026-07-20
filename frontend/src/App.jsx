import React from "react";
import API_BASE_URL from "./utils/api";
import Navbar from "./Components/Navbar";
import StructuredData from "./Components/StructuredData";
import Home from "./Pages/Home";
import About from "./Pages/About";
import OrderGoodies from "./Pages/OrderGoodie";
import Contact from "./Pages/Contact";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
  return (
    <div style={appStyles.AppGrid}>
      <header style={appStyles.Header}>Three Little Ladies Bakery</header>

      <StructuredData />
      <a href="#main-content" className="skip-link">
        Skip to Main Content
      </a>
      <Navbar />

      <main style={appStyles.main} id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/order-goodie" element={<OrderGoodies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

const appStyles = {
  AppGrid: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  },
  Header: {
    backgroundColor: "#111827",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    fontSize: "2rem",
    fontWeight: "700",
    padding: "1rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    letterSpacing: ".04rem",
  },
  backendMessage: {
    backgroundColor: "#ede9fe",
    color: "#5b21b6",
    padding: ".6rem 1.2rem",
    margin: "1rem auto",
    borderRadius: "999px",
    width: "fit-content",
    fontSize: "1rem",
  },

  main: {
    flex: 1,
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "1.6rem",
  },
};
