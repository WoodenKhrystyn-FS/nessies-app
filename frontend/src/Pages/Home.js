import React from "react";
import Gallery from "../Components/Gallery";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section" style={homeStyles.heroSection}>
        <h1 className="welcome-message" style={homeStyles.welcomeMessage}>
          {" "}
          Welcome to Three Little Ladies Bakery! Where homemade treats are baked
          with love! Browse our selection of goodies and discover your new
          favorite treat.
        </h1>
        <p style={homeStyles.tagline}>Homemade Treats for Every Occasion</p>
        <p style={homeStyles.tagline}>
          Freshly baked cupcakes, cookies, and more! Even custom orders are
          welcome!
        </p>
        <button
          style={homeStyles.button}
          onClick={() => (window.location.href = "/order-goodie")}
        >
          Order Now
        </button>
      </section>
      {/* About Section */}
      <section className="about-section" style={homeStyles.aboutSection}>
        <h2>About Three Little Ladies Bakery</h2>
        <p>
          Family owned and operated, Three Little Ladies Bakery is dedicated to
          creating delicious, homemade treats for every occasion. From classic
          cookies to custom cakes, we take pride in our baked goods and strive
          to make every customer feel like part of our family.
        </p>
        <p></p>
      </section>
      {/* Products Section */}
      <section className="products-section" style={homeStyles.productsSection}>
        <h2>Customer Faves</h2>
        <div style={homeStyles.productsGrid}>
          <div style={homeStyles.productCard}>
            <h3>Chocolate Chip Cookies</h3>
            <p>Classic cookies with gooey chocolate chips.</p>
          </div>
          <div style={homeStyles.productCard}>
            <h3>Red Velvet Cupcakes</h3>
            <p>Moist red velvet cupcakes with cream cheese frosting.</p>
          </div>
          <div style={homeStyles.productCard}>
            <h3>Lemon Bars</h3>
            <p>Tangy lemon bars with a buttery crust.</p>
          </div>
        </div>
      </section>
      {/* Gallery Section */}
      <section className="gallery-section" style={homeStyles.gallerySection}>
        <h2>Gallery</h2>
        <Gallery />
      </section>
      {/* CTA - Contact Section */}
      <section className="cta-section" s style={homeStyles.ctaSection}>
        <h2>Have a Custom Order?</h2>
        <p>
          Need cookies, cupcakes, cakes or treats for your next event? We'd love
          to hear from you!
        </p>
        <button
          style={homeStyles.ctaButton}
          onClick={() => (window.location.href = "/contact")}
        >
          Contact Us
        </button>
      </section>
    </div>
  );
}

export default Home;

const homeStyles = {
  welcomeMessage: {
    fontSize: "3.2rem",
    lineHeight: "1.2",
    fontWeight: "700",
    marginBottom: "1.5rem",
    color: "#1f2937",
  },
  tagline: {
    fontSize: "1.25rem",
    marginBottom: "1rem",
    color: "#555",
  },
  button: {
    padding: "14px 32px",
    fontSize: "18px",
    backgroundColor: "#d97706",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: ".3s",
  },
  heroSection: {
    textAlign: "center",
    padding: " 5rem 2rem",
    maxWidth: "900px",
    margin: "0 auto",
  },
  aboutSection: {
    padding: "5rem 2rem",
    textAlign: "center",
    backgroundColor: "#fff8f2",
  },
  productsSection: {
    padding: "5rem 2rem",
    textAlign: "center",
    background: "#ffffff",
  },
  productsGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap",
  },
  productCard: {
    width: "280px",
    padding: "2rem",
    borderRadius: "15px",
    backgroundColor: "#fff",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.8)",
    margin: "1rem",
  },
  gallerySection: {
    padding: "5rem 2rem",
    textAlign: "center",
    background: "#faf4ee",
  },
  ctaSection: {
    padding: "5rem 2rem",
    textAlign: "center",
    background: "#fff8f2",
  },
  ctaButton: {
    padding: "14px 32px",
    fontSize: "18px",
    backgroundColor: "#16a34a",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
  },
  gallery: {
    maxWidth: "800px",
    margin: "0 auto",
    marginTop: "3rem",
    marginBottom: "3rem",
  },
};
