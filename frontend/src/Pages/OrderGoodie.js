import React, { useEffect, useState } from "react";
import SEO from "../Components/SEO";
import GoodieCard from "../Components/GoodieCard";
import GoodieForm from "../Components/GoodieForm";

function OrderGoodies() {
  const [goodies, setGoodies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGoodie, setSelectedGoodie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/goodies")
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
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading goodies...</div>;
  }
  if (error) {
    return <h2>Error: {error.message}</h2>;
  }
  if (!loading && goodies.length === 0) {
    return <h2>No goodies available at the moment.</h2>;
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
          <GoodieCard key={goodie.id} {...goodie} onOrder={setSelectedGoodie} />
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
