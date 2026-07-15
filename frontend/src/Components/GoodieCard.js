import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

function GoodieCard({ onOrder, goodie }) {
  const { id, name, price, description, category, available, image } = goodie;
  return (
    <div>
      <div className="goodie-card" style={cardStyles.GoodieCard}>
        <img
          src={image || "/Logo.png"}
          alt={name || "Bakery Goodie"}
          style={cardStyles.image}
        />
        <div style={{ padding: "0.5rem" }}>
          <h3>{name}</h3>
          <div style={cardStyles.rating}>⭐⭐⭐⭐⭐ Custom Favorite</div>
          <p style={cardStyles.price}>
            Price: ${(Number(price) || 0).toFixed(2)}
          </p>
          <p style={cardStyles.description}>{description}</p>
        </div>
        <p style={cardStyles.category}>
          <span className="badge">{category}</span>
        </p>
        <p
          className={available ? "available" : "unavailable"}
          style={{
            ...cardStyles.availability,
            color: available ? "green" : "red",
          }}
        >
          {available ? "🧁 Made Fresh" : "Sold Out"}
        </p>
      </div>

      <Button text="Customize & Order" onClick={() => onOrder(goodie)} />
    </div>
  );
}

GoodieCard.propTypes = {
  goodie: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    description: PropTypes.string,
    category: PropTypes.string,
    available: PropTypes.bool,
    image: PropTypes.string,
    onOrder: PropTypes.func,
  }).isRequired,
  onOrder: PropTypes.func.isRequired,
};

export default GoodieCard;

const cardStyles = {
  GoodieCard: {
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderTopLeftRadius: "14px",
    borderTopRightRadius: "14px",
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
  rating: {
    color: "#D9A066",
    fontWeight: "600",
    marginBottom: "10px",
  },
  badge: {
    display: "inline-block",
    background: "#F5E7D0",
    color: "#6B4226",
    padding: "6px 12xp",
    borderRadius: "20px",
    fontSize: "0.8rem",
    fontWeight: "600",
    marginTop: "10px",
  },
};
