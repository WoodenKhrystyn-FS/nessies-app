import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function GoodieCard({
  id,
  name,
  price,
  description,
  category,
  available,
  image,
}) {
  const navigate = useNavigate();

  console.log("Price in GoodieCard:", {
    id,
    name,
    price,
    description,
  });

  return (
    <div className="goodie-card" style={cardStyles.GoodieCard}>
      <img src={image} alt={name} style={cardStyles.image} />
      <div>
        <h3>{name}</h3>
        <p style={cardStyles.price}>Price: ${Number(price || 0).toFixed(2)}</p>
        <p style={cardStyles.description}>{description}</p>
      </div>
      <p style={cardStyles.category}>Category: {category}</p>
      <p style={cardStyles.availability}>
        {available ? "Available" : "Out of Stock"}
      </p>

      <Button text="Checkout Goodies" onClick={() => navigate("/checkout")} />
      <Button text="Add to Cart" onClick={() => navigate("/cart")} />
    </div>
  );
}
export default GoodieCard;

const cardStyles = {
  GoodieCard: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#fff",
  },
  image: {
    width: "200px",
    height: "180px",
  },
  price: {
    fontWeight: "bold",
  },
  description: {
    fontStyle: "italic",
  },
  category: {
    textTransform: "uppercase",
    color: "#555",
  },
  availability: {
    fontWeight: "bold",
    color: "green",
  },
};
