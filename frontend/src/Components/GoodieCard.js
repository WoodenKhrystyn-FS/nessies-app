import React from "react";
import PropTypes from "prop-types";
//import image from "../IMAGES/brownies.jpeg";
import { useNavigate } from "react-router-dom";
//import GoodieForm from "./GoodieForm";
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

  return (
    <div>
      <div className="goodie-card" style={cardStyles.GoodieCard}>
        <img src={image} alt={name} style={cardStyles.image} />
        <div>
          <h3>{name}</h3>
          <p style={cardStyles.price}>
            Price: ${(Number(price) || 0).toFixed(2)}
          </p>
          <p style={cardStyles.description}>{description}</p>
        </div>
        <p style={cardStyles.category}>Category: {category}</p>
        <p style={cardStyles.availability}>
          {available ? "Available" : "Out of Stock"}
        </p>
      </div>
      <Button
        text="Create A Goodie"
        onClick={() => navigate(`/goodies/${id}/create`)}
      />
      <Button text="Checkout Goodies" onClick={() => navigate(`/checkout`)} />
      <Button text="Add to Goodie Cart" onClick={() => navigate("/cart")} />
      <Button
        text="Goodie Details"
        onClick={() => navigate(`/goodies/${id}`)}
      />
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
};

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
