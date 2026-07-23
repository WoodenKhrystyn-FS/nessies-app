import React from "react";
import SEO from "../Components/SEO";
import { useNavigate } from "react-router-dom";
import { trackEvent } from "../utils/analytics";
import Gallery from "../Components/Gallery";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <SEO>
        <title>Three Little Ladies Bakery</title>
        <meta
          name="description"
          content="Freshly baked goods made with love and passion."
        />
        <meta
          name="keywords"
          content="bakery Indiana, fresh, homemade, treats, cookies, cupcakes, cakes"
        />
        <meta
          property="og:title"
          content="Three Little Ladies Bakery | Freshly Baked Treats"
        />
        <meta
          property="og:description"
          content="Family-owned bakery that serves delicious baked goods in Central Indiana."
        />
      </SEO>
      <section className="hero-section" style={homeStyles.heroSection}>
        <h1 className="welcome-message" style={homeStyles.welcomeMessage}>
          Welcome to Three Little Ladies Bakery
        </h1>

        <p style={homeStyles.tagline}>
          Freshly baked goods made with love and passion made from scratch for
          birthsays, weddings, showers, graduation and every special occasion.
        </p>
        <p style={homeStyles.subTagline}>
          Proudly serving Central Indiana with handmade desserts made with
          quality ingredients and homemade recipes.
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

      <section style={homeStyles.whySection}>
        <h2>Why Choose Three Little Ladies Bakery</h2>
        <div style={homeStyles.whyGrid}>
          <div style={homeStyles.whyCard}>
            🧁
            <h3>Fresh Ingredients</h3>
            <p>
              Every dessert is baked using quality ingredients for homemade
              flavor.
            </p>
          </div>

          <div style={homeStyles.whyCard}>
            🎂
            <h3>Custom Orders</h3>
            <p>Personalized desserts designed for every celebration.</p>
          </div>
          <div style={homeStyles.whyCard}>
            ❤️
            <h3>Made with Love</h3>
            <p>Every order is handcrafted with care and attention to detail.</p>
          </div>
          <div style={homeStyles.whyCard}>
            📍
            <h3>Serving Central Indiana</h3>
            <p>Proudly serving families throughout Central Indiana</p>
          </div>
        </div>
        <div></div>
      </section>

      <section className="products-section" style={homeStyles.productsSection}>
        <h2>Customer Faves</h2>
        <div style={homeStyles.productsGrid}>
          <div style={homeStyles.productCard}>
            {/* <img
              src="/IMAGES/ChocolateChipCookies.webp"
              alt="Chocolate Chip Cookies"
              style={homeStyles.productImage}
            /> */}
            <h3>Chocolate Chip Cookie Dozen</h3>

            <p>Classic cookies with gooey chocolate chips.</p>

            <strong>Starting at $18</strong>
          </div>

          <div style={homeStyles.productCard}>
            {/* <img
              src="/IMAGES/RedVelvetCupcakes.webp"
              alt="Red Velvet cupcakes"
              style={homeStyles.productImage}
            /> */}
            <h3>Customized Red Velvet Cupcakes Dozen</h3>
            <p>Moist red velvet cupcakes with cream cheese frosting.</p>
            <strong>Starting at $32</strong>
          </div>
          <div style={homeStyles.productCard}>
            {/* <img
              src="/IMAGES/brownies.webp"
              alt="Fudge Brownies"
              style={homeStyles.productImage}
            /> */}
            <h3>Custom Fudge Brownie Tray</h3>
            <p>Rich and fudgy brownies perfect for parties and gatherings</p>
            <strong>Starting at $24</strong>
          </div>
        </div>
      </section>

      <section className="gallery-section" style={homeStyles.gallerySection}>
        <h2>Gallery</h2>
        <Gallery />
      </section>

      <section style={homeStyles.testimonalSection}>
        <h2>What Our Customers Are Saying</h2>

        <div style={homeStyles.testimonalGrid}>
          <div style={homeStyles.testimonalCard}>
            ⭐⭐⭐⭐⭐
            <p>
              "The birthday cake exceeded our expectations! Beautiful and
              delicious."
            </p>
            <strong>Jane D.</strong>
          </div>
        </div>
        <br />
        <div style={homeStyles.testimonalGrid}>
          <div style={homeStyles.testimonalCard}>
            ⭐⭐⭐⭐⭐
            <p>
              "The cookies disappeared within minutes! Another order will made
              soon."
            </p>
            <strong>James D.</strong>
          </div>
        </div>
        <br />
        <div style={homeStyles.testimonalGrid}>
          <div style={homeStyles.testimonalCard}>
            ⭐⭐⭐⭐⭐
            <p>
              "Our wedding cupcakes were phenomenal. Most talked about dessert
              all night!"
            </p>
            <strong>Khrystyn W.</strong>
          </div>
        </div>
      </section>

      <section className="cta-section" style={homeStyles.ctaSection}>
        <h2>Ready to Make Your Celebration Extra Special?</h2>
        <p>
          Whether its celebrating a birthday, wedding, gradution or you just
          have a seet tooth, we want to hear from you and bake something
          special.
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

  subTagline: {
    fontSize: "1.25rem",
    marginBottom: "2rem",
    color: "#6b72bb",
  },

  productImage: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "15px",
  },

  whySection: {
    padding: "5rem 2rem",
    background: "#ffffff",
    textAlign: "center",
  },

  whyGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "25px",
    marginTop: "40px",
  },

  whyCard: {
    background: "#fff8f2",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgba(0,0,0,.08)",
  },
};
