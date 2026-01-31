import React from "react";
import image from "../IMAGES/brownies.jpeg";
import Button from "./Button";

function GoodieCard({ id, name, price, image }) {
  return (
    <div>
      <div key={id} className="goodie-card" style={cardStyles.GoodieCard}>
        <img src={image} alt={name} style={cardStyles.image} />
        <h3>{name}</h3>
        <p>Price: ${price}</p>
      </div>
      <button>
        <Button />
        Checkout for Goodies
      </button>
      <br />
      <button>
        <Button />
        Go to Cart
      </button>
    </div>
  );
}
export default GoodieCard;

const cardStyles = {
  GoodieCard: {
    border: "1px solid #ccc",
  },
  image: {
    width: "200px",
    height: "200px",
  },
};
