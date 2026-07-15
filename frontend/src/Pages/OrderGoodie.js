import React, { useEffect, useState } from "react";
import SEO from "../Components/SEO";
import GoodieCard from "../Components/GoodieCard";
import GoodieForm from "../Components/GoodieForm";
import API_BASE_URL from "../utils/api";

function OrderGoodies() {
  const [goodies, setGoodies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGoodie, setSelectedGoodie] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
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
      <div>
        <h2>Preparing today's goodies...</h2>
        <p>Please wait while we prepare your favorites!</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2 className="error">{error}</h2>
      </div>
    );
  }
  if (!loading && goodies.length === 0) {
    return (
      <div>
        <h2>No goodies available today.</h2>
        <p>Please check back later!</p>
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

      <h1>Order Freshly Baked Goodies!</h1>

      <p>
        Browse our selection of freshly baked goodies and start a custom order!
      </p>

      <section className="order-page">
        <h1>Available Goodies</h1>

        <p>Browse our selection of freshly baked goodies</p>
        <div className="category-filters" style={gridStyles.filters}>
          {[
            "All",
            "Cakes",
            "Cupcakes",
            "Cookies",
            "Brownies",
            "Breakfast",
            "Desserts",
          ].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                ...gridStyles.filterButton,
                backgroundColor:
                  selectedCategory === category ? "#d9a066" : "#fff",
                color: selectedCategory === category ? "#fff" : "#333",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="goodie-grid" style={gridStyles.goodieGrid}>
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
        </div>
        <div ref={formRef}>
          {selectedGoodie && <GoodieForm goodie={selectedGoodie} />}
        </div>
      </section>
    </div>
  );
}

export default OrderGoodies;

const gridStyles = {
  goodieGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
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
