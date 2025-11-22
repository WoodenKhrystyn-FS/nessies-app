import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App" style={appStyles.AppWithPadding}>
      <header className="Header" style={appStyles.Header}>
        <p>Local Indy Bakery with Delicious Goodies</p>
      </header>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="footer" style={appStyles.footer}>
        <p style={appStyles.p}>© 2025 Nessie's Bakery. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

const appStyles = {
  App: {
    textAlign: "center",
    backgroundColor: "white",
  },
  AppWithPadding: {
    textAlign: "center",
    backgroundColor: "white",
    paddingBottom: "60px", // Adjust this value to match the footer's height
  },
  Header: {
    backgroundColor: "black",
    minHeight: "5rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "24px",
  },

  footer: {
    backgroundColor: "grey",
    color: "white",
    padding: "10px",
    position: "fixed",
    bottom: 0,
    width: "100%",
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "bold",
  },
  h1: {
    color: "white",
    fontSize: "36px",
    margin: "20px 0",
  },
  p: {
    margin: "0",
    fontSize: "16px",
  },
};
