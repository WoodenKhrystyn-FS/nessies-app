import React from "react";
import Button from "./Button";

const MenuForm = () => {
  return (
    <div>
      <div className="treat">
        <select>
          Treat Type:
          <option>--Choose an Treat--</option>
          <option>Cupcakes</option>
          <option>Cookies</option>
          <option>Cakes</option>
          <option>Brownies</option>
          <option>Bread</option>
        </select>
      </div>
      <div className="cake">
        <select>
          Cake Base:
          <option>--Choose an Cake--</option>
          <option>Vanilla</option>
          <option>Chocolate</option>
          <option>Red Velvet</option>
          <option>Lemon</option>
          <option>Carrot</option>
        </select>
      </div>
      <div className="frosting">
        <select>
          Frosting:
          <option>--Choose a Frosting--</option>
          <option>Vanilla Buttercream</option>
          <option>Chocolate Ganache</option>
          <option>Cream Cheese</option>
          <option>Lemon Glaze</option>
          <option>Strawberry Frosting</option>
        </select>
      </div>
      <div className="size">
        <select>
          Size:
          <option>--Choose a Size--</option>
          <option>6 inch</option>
          <option>8 inch</option>
          <option>10 inch</option>
          <option>12 inch</option>
        </select>
      </div>
      <br></br>
      <Button />
    </div>
  );
};

export default MenuForm;
