import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function GoodieCard({
  id = 0,
  name = "Unknown Goodie",
  price = 0,
  description = "No description available",
  category = "Uncategorized",
  available = false,
  image,
  onOrder,
  goodie = { id, name, price, description, category, available, image },
}) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="goodie-card" style={cardStyles.GoodieCard}>
        <img
          src={goodie.image || "/Logo.png"}
          alt={goodie.name || "Bakery Goodie"}
          style={cardStyles.image}
        />
        <div>
          <h3>{name}</h3>
          <p style={cardStyles.price}>
            Price: ${(Number(goodie.price) || 0).toFixed(2)}
          </p>
          <p style={cardStyles.description}>{description}</p>
        </div>
        <p style={cardStyles.category}>Category: {category}</p>
        <p style={cardStyles.availability}>
          {available ? "Available" : "Out of Stock"}
        </p>
      </div>

      <Button
        text="Order Now"
        onClick={() =>
          onOrder({ id, name, price, description, category, image })
        }
      />
      <Button text="Add to Cart" onClick={() => navigate("/cart")} />
    </div>
  );
}

GoodieCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  description: PropTypes.string,
  category: PropTypes.string,
  available: PropTypes.bool,
  image: PropTypes.string,
  onOrder: PropTypes.func,
};

export default GoodieCard;

const cardStyles = {
  GoodieCard: {
    background: "#fff",
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s",
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
