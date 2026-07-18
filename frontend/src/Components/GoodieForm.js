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

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  if (submitted) {
    return (
      <div className="order-success" role="status" aria-live="polite">
        <h2>Thank You!</h2>

        <p>Your order request has been received.</p>

        <p>We'll contact you within 24-48 hours to confirm your order.</p>

        <Button
          text="Submit Another Order"
          onClick={() => {
            setSubmitted(false);

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
          }}
        />
      </div>
    );
  }

  const validateForm = () => {
    const newErrors = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = "Name is required";
    }

    if (!formData.customerEmail.trim()) {
      newErrors.customerEmail = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.customerEmail)) {
      newErrors.customerEmail = "Please enter a valid email address.";
    }

    if (!formData.customerPhone.trim()) {
      newErrors.customerPhone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.customerPhone)) {
      newErrors.customerPhone = "Please enter a 10 digit phone number.";
    }

    if (!formData.treatType.trim()) {
      newErrors.treatType = "Please select a treat type";
    }

    if (!formData.flavor.trim()) {
      newErrors.flavor = "Please select a flavor";
    }

    if (!formData.frosting.trim()) {
      newErrors.frosting = "Please select a frosting";
    }

    if (formData.quantity < 1 || formData.quantity > 24) {
      newErrors.quantity = "Quantity must be between 1 and 24";
    }

    if (!formData.pickupDate) {
      newErrors.pickupDate = "Please choose a pickup date";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    console.log("Form submitted:", formData);

    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form className=" goodie-form goodie-form-card">
      <h3 className="section-title">Customer Information</h3>
      <section>
        <label htmlFor="customerName">Name</label>

        <input
          type="text"
          id="customerName"
          name="customerName"
          required
          value={formData.customerName}
          onChange={(e) =>
            setFormData({ ...formData, customerName: e.target.value })
          }
        />
        {errors.customerName && (
          <p className="form-error">{errors.customerName}</p>
        )}

        <label htmlFor="customerEmail">Email</label>

        <input
          type="email"
          id="customerEmail"
          name="customerEmail"
          required
          placeholder="name@email.com"
          value={formData.customerEmail}
          onChange={(e) =>
            setFormData({ ...formData, customerEmail: e.target.value })
          }
        />
        {errors.customerEmail && (
          <p className="form-error" aria-live="polite">
            {errors.customerEmail}
          </p>
        )}

        <label htmlFor="customerPhone">Phone</label>

        <input
          type="tel"
          required
          id="customerPhone"
          name="customerPhone"
          pattern="[0-9]{10}"
          placeholder="3172345678"
          value={formData.customerPhone}
          onChange={(e) =>
            setFormData({ ...formData, customerPhone: e.target.value })
          }
        />
        {errors.customerPhone && (
          <p className="form-error">{errors.customerPhone}</p>
        )}
      </section>

      <h2>Customize Your Order</h2>

      <p className="form-subtitle">
        Complete the form below and we' ll contact you within 24-48 hours to
        confirm your customer bakery order
      </p>
      <div>
        <img
          src={goodie.image || "/Logo.png"}
          alt={`${goodie.name} bakery item`}
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

      <section>
        <h3>Order Details</h3>
        <label htmlFor="treatType">Treat Type</label>
        <select
          id="treatType"
          name="treatType"
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
        {errors.treatType && <p className="form-error">{errors.treatType}</p>}

        <label htmlFor="flavor">Flavor</label>
        <select
          id="flavor"
          name="flavor"
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
        {errors.frosting && <p className="form-error">{errors.frosting}</p>}

        <label htmlFor="frosting">Frosting Choice</label>
        <select
          id="frosting"
          name="frosting"
          value={formData.frosting}
          required
          onChange={(e) =>
            setFormData({ ...formData, frosting: e.target.value })
          }
        >
          Frosting:
          <option>--Choose Frosting--</option>
          <option>Vanilla Buttercream</option>
          <option>Chocolate Ganache</option>
          <option>Cream Cheese</option>
          <option>Lemon Glaze</option>
          <option>Strawberry Frosting</option>
        </select>
        {errors.frosting && <p className="form-error">{errors.frosting}</p>}

        <label htmlFor="quantity">Quantity Needed</label>
        <div className="quantity">
          <input
            id="quantity"
            name="quantity"
            type="number"
            min="1"
            max="24"
            required
            placeholder="min: 1, max:24"
            value={formData.quantity}
            onChange={(e) =>
              setFormData({ ...formData, quantity: e.target.value })
            }
          />
          {errors.quantity && <p className="form-error">{errors.quantity}</p>}
        </div>

        <label htmlFor="date">Preferred Pickup Date</label>
        <input
          type="date"
          required
          id="date"
          name="date"
          min={today}
          value={formData.pickupDate}
          onChange={(e) =>
            setFormData({ ...formData, pickupDate: e.target.value })
          }
        />
        {errors.pickupDate && <p className="form-error">{errors.pickupDate}</p>}
      </section>

      <section>
        <div className="notes">
          <textarea
            maxLength="500"
            placeholder="Enter any special instructions..."
            value={formData.notes}
            onChange={(e) =>
              setFormData({ ...formData, notes: e.target.value })
            }
            required
          />
          <p>
            {500 - formData.notes.length}
            characters remaining
          </p>
        </div>
      </section>

      <section>
        <Button
          onClick={handleSubmit}
          type="submit"
          disable={isSubmitting}
          text={isSubmitting ? "Submitting..." : "Submit Order Request"}
        />
      </section>
    </form>
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
