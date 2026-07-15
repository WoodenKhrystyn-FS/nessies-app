import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import "../Styles/OrderGoodies.css";

const GoodieForm = ({ goodie }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    quantity: 1,
    treatType: "",
    flavor: "",
    frosting: "",
    pickupDate: "",
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert(
      "Thank you for submitting your order request! We will contact you withing 1-2 business days to confirm your order.",
    );

    setFormData({
      ...formData,
      customerName: "",
      customerEmail: "",
      customerPhone: "",
      treatType: "",
      flavor: "",
      frosting: "",
      quantity: 1,
      pickupDate: "",
      notes: "",
    });
  };

  return (
    <div className="goodie-form-card">
      <h3 className="section-title">Customer Information</h3>
      <label>Name</label>
      <form>
        <input
          type="text"
          required
          value={formData.customerName}
          onChange={(e) =>
            setFormData({ ...formData, customerName: e.target.value })
          }
        />
      </form>
      <label>Email</label>
      <form>
        <input
          type="email"
          required
          value={formData.customerEmail}
          onChange={(e) =>
            setFormData({ ...formData, customerEmail: e.target.value })
          }
        />
      </form>
      <label>Phone</label>
      <form>
        <input
          type="tel"
          required
          value={formData.customerPhone}
          onChange={(e) =>
            setFormData({ ...formData, customerPhone: e.target.value })
          }
        />
      </form>
      <h2>Customize Your Order</h2>

      <p className="form-subtitle">
        Complete the form below and we' ll contact you within 24-48 hours to
        confirm your customer bakery order
      </p>
      <div>
        <img
          src={goodie.image || "/Logo.png"}
          alt={goodie.name}
          className="goodie-preview"
        />
      </div>
      <div>
        <h3>{goodie.name}</h3>
        <p>{goodie.description}</p>
        <p>
          <strong> Starting Price:</strong>$ $
          {(Number(goodie.price) || 0).toFixed(2)}
        </p>
      </div>

      <h3>Order Details</h3>
      <label>Treat Type</label>
      <select
        value={formData.treatType}
        required
        onChange={(e) =>
          setFormData({ ...formData, treatType: e.target.value })
        }
      >
        Dessert Type:
        <option>--Choose Treat--</option>
        <option>Cupcakes</option>
        <option>Cookies</option>
        <option>Cakes</option>
        <option>Brownies</option>
        <option>Breakfast</option>
      </select>

      <label>Flavor</label>
      <select
        value={formData.flavor}
        required
        onChange={(e) => setFormData({ ...formData, flavor: e.target.value })}
      >
        Flavor:
        <option>--Choose Flavor--</option>
        <option>Vanilla</option>
        <option>Chocolate</option>
        <option>Red Velvet</option>
        <option>Lemon</option>
        <option>Carrot</option>
      </select>

      <label>Frosting Choice</label>
      <select
        value={formData.frosting}
        required
        onChange={(e) => setFormData({ ...formData, frosting: e.target.value })}
      >
        Frosting:
        <option>--Choose Frosting--</option>
        <option>Vanilla Buttercream</option>
        <option>Chocolate Ganache</option>
        <option>Cream Cheese</option>
        <option>Lemon Glaze</option>
        <option>Strawberry Frosting</option>
      </select>

      <label>Quantity Needed</label>
      <div className="quantity">
        <input
          type="number"
          min="1"
          value={formData.quantity}
          onChange={(e) =>
            setFormData({ ...formData, quantity: e.target.value })
          }
        />
      </div>

      <label>Preferred Pickup Date</label>
      <input
        type="date"
        required
        value={formData.pickupDate}
        onChange={(e) =>
          setFormData({ ...formData, pickupDate: e.target.value })
        }
      />

      <div className="notes">
        <textarea
          placeholder="Enter any special instructions..."
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          required
        />
      </div>
      <Button
        onClick={handleSubmit}
        type="submit"
        text="Submit Order Request"
        disabled={
          !formData.customerName ||
          !formData.customerEmail ||
          !formData.pickupDate
        }
      />
    </div>
  );
};

GoodieForm.propTypes = {
  goodie: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    image: PropTypes.string,
  }).isRequired,
};

export default GoodieForm;
