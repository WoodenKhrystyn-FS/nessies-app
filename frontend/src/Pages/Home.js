import React from "react";
import Gallery from "../Components/Gallery";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section>
        <h1 className="welcome-message" style={homeStyles.welcomeMessage}>
          {" "}
          Three Little Ladies Bakery
        </h1>

        <p styles={homeStyles.tagline}>Homemade treats made with love</p>

        <button
          style={homeStyles.button}
          onClick={() => (window.location.href = "/order-goodie")}
        >
          Order Goodies
        </button>
      </section>

      {/* About Section */}
      <section style={homeStyles.aboutSection}>
        <h2>About Us</h2>
        <p>
          Welcome to Three Little Ladies Bakery! We are passionate about
          creating delicious homemade treats that bring joy to every bite. Our
          bakery is dedicated to using the finest ingredients and traditional
        </p>
      </section>

      {/* Products Section */}
      <section style={homeStyles.productsSection}>
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
      <section style={homeStyles.gallerySection}>
        <h2>Gallery</h2>
        <Gallery />
      </section>

      {/* CTA - Contact Section */}
      <section style={homeStyles.ctaSection}>
        <h2>Reach Out!</h2>
        <p>Have questions or want to place a custom order? Reach out to us!</p>
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
    fontSize: "36px",
    margin: "20px 0",
  },
  tagline: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#ff6f61",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  aboutSection: {
    padding: "40px 20px",
    textAlign: "center",
  },
  productsSection: {
    padding: "40px 20px",
    textAlign: "center",
  },
  productsGrid: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  productCard: {
    width: "250px",
    marginBottom: "20px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  gallerySection: {
    padding: "40px 20px",
    textAlign: "center",
  },
  ctaSection: {
    padding: "50px 20px",
    textAlign: "center",
  },
  ctaButton: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  gallery: {
    maxWidth: "800px",
    margin: "0 auto",
  },
};
