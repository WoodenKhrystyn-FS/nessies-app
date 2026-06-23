import React from "react";
import image from "../IMAGES/brownies.jpeg";
import { useNavigate } from "react-router-dom";
import GoodieForm from "./GoodieForm";
import Button from "./Button";

function GoodieCard({ id, name, price, image }) {
  return (
    <div>
      <div key={id} className="goodie-card" style={cardStyles.GoodieCard}>
        <img src={image} alt={name} style={cardStyles.image} />
        <div>
          <h3>{name}</h3>
          <p style={cardStyles.price}>Price: ${price.toFixed(2)}</p>
          <p style={cardStyles.description}>{description}</p>
        </div>
        <p style={cardStyles.category}>Category: {category}</p>
        <p style={cardStyles.availability}>
          {available ? "Available" : "Out of Stock"}
        </p>
      </div>

      {/* Disabling buttons until the proper functionality is implemented */}

      {/* <Button text="Create goodie" onClick={() => navigate(`/goodies/${id}/create`)} />
      <Button text="Checkout Goodies" onClick={() => navigate(`${GoodieForm}`)} />
      <Button text="Add to Cart" onClick={() => navigate("/cart")} />
      <Button text="View Details" onClick={() => navigate(`/goodies/${id}`)} /> */}
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
