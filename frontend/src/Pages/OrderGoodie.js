import React, { useEffect, useState } from "react";
import SEO from "../Components/SEO";
import GoodieCard from "../Components/GoodieCard";
import GoodieForm from "../Components/GoodieForm";
import API_BASE_URL from "../utils/api";

function OrderGoodies() {
  const [goodies, setGoodies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGoodie, setSelectedGoodie] = useState(null);
  const [error, setError] = useState("");

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

  if (!loading && goodies.length === 0) {
    return (
      <div>
        <h2>No goodies available today.</h2>
        <p>Please check back later!</p>
      </div>
    );
  }
  if (loading) {
    return <h2>Loading goodies...</h2>;
  }

  if (error) {
    return (
      <div>
        <h2 className="error">{error}</h2>
      </div>
    );
  }

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

      <p>Choose from items below!</p>

      <div className="goodie-grid" style={gridStyles.goodieGrid}>
        {goodies.map((goodie) => (
          <GoodieCard
            key={goodie.id}
            goodie={goodie}
            onOrder={setSelectedGoodie}
          />
        ))}
      </div>
      {selectedGoodie && <GoodieForm goodie={selectedGoodie} />}
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
};
