import React from "react";
import Button from "./Button";

const MenuForm = () => {
  return (
    <div>
      <div className="treat">
        <select>
          Treat of Choice:
          <option>--Please choose an option--</option>
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
          <option>--Please choose an option--</option>
          <option>Vanilla</option>
          <option>Chocolate</option>
          <option>Red Velvet</option>
          <option>Lemon</option>
        </select>
      </div>
      <div className="frosting">
        <select>
          Frosting:
          <option>--Please choose an option--</option>
          <option>Vanilla Buttercream</option>
          <option>Chocolate Ganache</option>
          <option>Cream Cheese</option>
          <option>Lemon Glaze</option>
        </select>
      </div>
      <br></br>
      <Button />
    </div>
  );
};

export default MenuForm;
