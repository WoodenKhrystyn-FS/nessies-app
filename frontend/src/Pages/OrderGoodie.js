import React, { use, useEffect, useState } from "react";
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

  return (
    <div>
      <h2>Order Goodies</h2>
      <p>Choose from items below!</p>

      <div className="goodie-grid">
        {goodies.map((goodie) => (
          <GoodieCard goodie={goodie} />
        ))}
        <GoodieCard goodies={goodies} />
      </div>
    </div>
  );
}

export default OrderGoodies;
