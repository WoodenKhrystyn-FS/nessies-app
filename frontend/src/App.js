import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import OrderGoodies from "./Pages/OrderGoodie";
import Contact from "./Pages/Contact";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [backendMessage, setBackendMessage] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/goodies")
      .then((res) => res.json())
      .then((data) => setBackendMessage(data.message));
  }, []);
  return (
    <div style={appStyles.AppGrid}>
      <header style={appStyles.Header}>Three Little Ladies Bakery</header>
      {backendMessage && (
        <div style={appStyles.backendMessage}>{backendMessage}</div>
      )}

      <Navbar />

      <main style={appStyles.main}>
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
    backgroundColor: "#9D75CB",
    opacity: "0.80",
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  },
  Header: {
    backgroundColor: "#111827",
    height: "3.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    fontSize: "1.3rem",
    fontWeight: 500,
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
