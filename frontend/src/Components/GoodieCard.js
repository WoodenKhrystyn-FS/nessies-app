import React from "react";
import image from "../IMAGES/brownies.jpeg";
import Button from "./Button";

function GoodieCard({ id, name, price, image }) {
  return (
    <div>
      <div key={id} className="goodie-card" style={cardStyles.GoodieCard}>
        <img src={image} alt={name} style={cardStyles.image} />
        <h3>{name}</h3>
        <p style={cardStyles.price}>Price: ${price.toFixed(2)}</p>
      </div>
      <Button text="Checkout Goodies" />
      <Button text="Add to Cart" />
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
    height: "200px",
  },
  price: {
    fontWeight: "bold",
  },
};
