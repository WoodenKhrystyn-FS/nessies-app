import React, { useEffect, useState } from "react";
import GoodieCard from "../Components/GoodieCard";

function OrderGoodies() {
  const [goodies, setGoodies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/goodies")
      .then((res) => res.json())
      .then((data) => {
        setGoodies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error in fetching goodies:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading goodies...</div>;
  }
  if (!loading && goodies.length === 0) {
    return <div>No goodies available at the moment.</div>;
  }

  return (
    <div>
      <h2>Order Goodies</h2>
      <p>Choose from items below!</p>

      <div className="goodie-grid" style={gridStyles.goodieGrid}>
        {goodies.map((goodie) => (
          <GoodieCard key={goodie.id} {...goodie} />
        ))}
      </div>
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
