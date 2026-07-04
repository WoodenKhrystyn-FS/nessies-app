import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { trackEvent } from "../utils/analytics";
import Gallery from "../Components/Gallery";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Helmet>
        <title>Three Little Ladies Bakery</title>
        <meta
          name="description"
          content="Freshly baked goods made with love and passion."
        />
        <meta
          name="keywords"
          content="bakery Indiana, fresh, homemade, treats, cookies, cupcakes, cakes"
        />
        <meta property="og:title" content="Three Little Ladies Bakery" />
        <meta
          property="og:description"
          content="Freshly baked goods made with love and passion."
        />
      </Helmet>
      <section className="hero-section" style={homeStyles.heroSection}>
        <h1 className="welcome-message" style={homeStyles.welcomeMessage}>
          Welcome to Three Little Ladies Bakery
        </h1>

        <p style={homeStyles.tagline}>
          Freshly baked goods made with love and passion. From our oven to your
          table!
        </p>
        <p style={homeStyles.tagline}>
          Homemade treats for every occasion, including custom orders.
        </p>

        <button
          style={homeStyles.button}
          onClick={() => {
            trackEvent("CTA", "click", "Order Now Button", "Home Hero Section");
            navigate("/order-goodie");

            window.location.href = "/order-goodie";
          }}
        >
          Order Now
        </button>
      </section>

      <section className="about-section" style={homeStyles.aboutSection}>
        <h2>About Three Little Ladies Bakery</h2>
        <p>
          At Three Little Ladies Bakery, we believe in the magic of homemade
          treats. Our bakers pour their heart and soul into every batch, using
          only the finest ingredients to create delectable pastries, cakes, and
          breads.
        </p>
      </section>

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

      <section className="gallery-section" style={homeStyles.gallerySection}>
        <h2>Gallery</h2>
        <Gallery />
      </section>

      <section className="cta-section" style={homeStyles.ctaSection}>
        <h2>Have a Custom Order?</h2>
        <p>
          Need cookies, cupcakes, cakes, or treats for your next event? We'd
          love to hear from you!
        </p>
        <button
          style={homeStyles.ctaButton}
          onClick={() => {
            trackEvent(
              "CTA",
              "click",
              "Contact Us Button",
              "Home Hero Section",
            );
            window.location.href = "/contact";
          }}
        >
          Contact Us
        </button>
      </section>
    </div>
  );
}

export default Home;

const homeStyles = {
  heroSection: {
    textAlign: "center",
    padding: "5rem 2rem",
    maxWidth: "900px",
    margin: "0 auto",
  },
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
  aboutSection: {
    padding: "5rem 2rem",
    textAlign: "center",
    backgroundColor: "#fff8f2",
    maxWidth: "800px",
    margin: "40px auto",
    borderRadius: "10px",
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
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.15)",
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
    cursor: "pointer",
  },
  gallery: {
    maxWidth: "800px",
    margin: "0 auto",
    marginTop: "3rem",
    marginBottom: "3rem",
  },
};
