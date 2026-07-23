import React, { useEffect, useState } from "react";
import SEO from "../Components/SEO";
import GoodieCard from "../Components/GoodieCard";
import GoodieForm from "../Components/GoodieForm";
import API_BASE_URL from "../utils/api";
import "../Styles/OrderGoodies.css";

function OrderGoodies() {
  const [goodies, setGoodies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGoodie, setSelectedGoodie] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [error, setError] = useState("");
  const formRef = React.useRef(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/goodies`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch goodies");
        }
        return res.json();
      })
      .then((data) => {
        setGoodies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error in fetching goodies:", err);
        setError(
          "We're having trouble fetching goodies. Please try again later.",
        );
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-state" role="status" aria-live="polite">
        <h2>🍰 Fresh treats are coming out of the oven...</h2>
        <p>Loading today's available bakery favorites.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-state">
        <h2>Oops!</h2>

        <p>{error}</p>

        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }
  if (!loading && goodies.length === 0) {
    return (
      <div className="empty-state">
        <h2>🍪 Our display case is empty right now!</h2>
        <p>Please check back soon for freshly baked goodies.</p>
      </div>
    );
  }

  const filteredGoodies =
    selectedCategory === "All"
      ? goodies
      : goodies.filter((goodie) => goodie.category === selectedCategory);

  return (
    <div>
      <SEO>
        <title>Order Goodies - Three Little Ladies Bakery</title>
        <meta
          name="description"
          content="Order freshly baked goodies from Three Little Ladies Bakery, including cupcakes, cookies, and cakes."
        />
        <meta
          name="keywords"
          content="order, bakery, goodies, cupcakes, cookies, cakes"
        />
        <meta
          property="og:title"
          content="Order Goodies - Three Little Ladies Bakery"
        />
        <meta
          property="og:description"
          content="Order freshly baked goodies from Three Little Ladies Bakery, including cupcakes, cookies, and cakes."
        />
      </SEO>
      <header className="order-header">
        <h1>Freshly Baked Just for You!</h1>

        <p>
          Browse our homemade bakery favorites and customize a perfect dessert.
          Whether you're celebrating a birthday, baby shower, wedding or just
          simply have a sweet tooth, we're ready to bake for you!
        </p>

        <p className="order-subtitle">
          Select a bakery item below to begin your custom order requests
        </p>
      </header>

      <section className="order-page">
        <h2>Browse our Bakery Favorites</h2>

        <h3>How Does Ordering Work?</h3>
        <ul>
          <li>1. Look through the available bakery items</li>
          <li>2. Select "Customize & Order</li>
          <li>3. Complete the custom order request form</li>
          <li>
            4. TLLB will contact you withing 24-48 hours to confirm order
            details, pricing and pickup date
          </li>
        </ul>
        <br />
        <h3>Custom Order Info</h3>
        <ul>
          <li>* Required Minimum 72- hour notice for custom cakes</li>
          <li>* Pickup ONLY</li>
          <li>* Pricing varies based on size and customization</li>
          <li>* Holiday availability may be limited</li>
        </ul>

        <p>Choose one of our featured desserts to begin custom order.</p>
        <div className="category-filters" style={gridStyles.filters}>
          {[
            "All",
            "🍰 Cakes",
            "🧁 Cupcakes",
            "🍪 Cookies",
            "🍫 Brownies",
            "🥐 Breakfast",
            "🍮 Desserts",
          ].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                ...gridStyles.filterButton,
                backgroundColor:
                  selectedCategory === category ? "#8b5e34" : "#fff",
                color: selectedCategory === category ? "#fff" : "#333",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <section className="goodie-grid" style={gridStyles.goodieGrid}>
          {filteredGoodies.map((goodie) => (
            <GoodieCard
              key={goodie.id}
              goodie={goodie}
              onOrder={(goodie) => {
                setSelectedGoodie(goodie);

                setTimeout(() => {
                  formRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }, 100);
              }}
            />
          ))}
        </section>
        <section
          ref={formRef}
          className={selectedGoodie ? "form-visible" : "form-hidden"}
        >
          {selectedGoodie && (
            <>
              <hr className="order-divider" />
              <h2 className="customer-order-title">Customize Your Order</h2>
              <GoodieForm goodie={selectedGoodie} />
            </>
          )}
        </section>
      </section>
    </div>
  );
}

export default OrderGoodies;

const gridStyles = {
  goodieGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  filters: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "12px",
    margin: "20px 0",
  },
  filterButton: {
    padding: "10px 18px",
    borderRadius: "30px",
    border: "1px solid #d9a066",
    cursor: "pointer",
    transition: "0.3s ease",
  },
};
