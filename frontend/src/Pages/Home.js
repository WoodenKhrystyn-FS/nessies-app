import React from "react";
import Gallery from "../Components/Gallery";

function Home() {
  return (
    <div className="home-container">
      <section style={homeStyles.hero}>
        <h1 className="welcome-message" style={homeStyles.welcomeMessage}>
          Three Little Ladies Bakery
        </h1>

        <p style={homeStyles.tagline}>
          Freshly baked goods made with love and passion. From our oven to your
          table!
        </p>

        <button
          onClick={() => (window.location.href = "/menu")}
          style={homeStyles.button}
        >
          View Our Menu
        </button>
      </section>

      <section style={homeStyles.aboutSection}>
        <h2>Homemade Greatness </h2>
        <p>
          At Three Little Ladies Bakery, we believe in the magic of homemade
          treats. Our bakers pour their heart and soul into every batch, using
          only the finest ingredients to create delectable pastries, cakes, and
          breads.
        </p>
      </section>

      <section>
        <Gallery />
      </section>
    </div>
  );
}

export default Home;

const homeStyles = {
  hero: {
    textAlign: "center",
    padding: "50px 20px",
  },
  welcomeMessage: {
    fontSize: "48px",
    margin: "10px 0",
  },
  tagline: {
    fontSize: "24px",
    margin: "20px 0",
  },
  aboutSection: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
  },

  button: {
    backgroundColor: "#FF6B6B",
    color: "white",
    border: "none",
    padding: "15px 30px",
    fontSize: "18px",
    cursor: "pointer",
  },
  gallery: {
    maxWidth: "800px",
    margin: "0 auto",
  },
};
