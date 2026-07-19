import React, { useState } from "react";
import businessInfo from "../utils/businessInfo";
//import { Helmet } from "react-helmet-async";
import SEO from "../Components/SEO";
import Button from "../Components/Button";
import "../Styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone enter a message.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log(formData);

    setSubmitted(true);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });

    setErrors({});
  };

  console.log("Contact page loaded");

  return (
    <div className="contact-container">
      <SEO>
        <title>Contact Us | Three Little Ladies Bakery</title>
        <meta
          name="description"
          content="Get in touch with Three Little Ladies Bakery for inquiries and orders."
        />
        <meta
          name="keywords"
          content="contact, bakery, inquiries, orders, Three Little Ladies Bakery"
        />
        <meta
          property="og:title"
          content="Contact Three Little Ladies Bakery"
        />
        <meta
          property="og:description"
          content="Get in touch with Three Little Ladies Bakery for inquiries and orders."
        />
      </SEO>

      <h1>Contact Us</h1>

      <p>
        Planning a wedding, birthday, or special event? We would love to hear
        from you! Please fill out the form below and we will get back to you as
        soon as possible.
      </p>
      <div className="contact-content">
        <div className="contact-form-card">
          <div className="contact-details">
            <div className="business-info">
              <h2>Contact Information</h2>
              <p>
                📞
                <strong>Phone:</strong>{" "}
                <a
                  href={businessInfo.phoneLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {businessInfo.phone}
                </a>
              </p>
              <p>
                📧
                <strong>Email:</strong> info@threelittledames.bakery
              </p>
              <p>
                🏠
                <strong>Address:</strong> 123 Bakery Street, Indianapolis, IN
                12345
              </p>
              <p>📍 Serving Central Indiana</p>

              <p>
                <a
                  href="https://maps.google.com/?q=Indiana"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Service Area
                </a>
              </p>
            </div>
            <div className="business-hours">
              <h2>Business Hours</h2>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {submitted && (
        <div className="success-message">
          🎉 Thank you! Your message has been received. We'll respond within 24
          hours.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({
              ...formData,
              firstName: e.target.value,
            })
          }
          placeholder="Enter First Name"
        />
        {errors.firstName && (
          <small className="error">{errors.firstName}</small>
        )}

        <br />

        <label>Last Name:</label>
        <input
          type="text"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({
              ...formData,
              lastName: e.target.value,
            })
          }
          placeholder="Enter Last Name"
        />
        {errors.lastName && <small className="error">{errors.lastName}</small>}

        <br />
        <label>Email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
          placeholder="Enter Email"
        />
        {errors.email && <small className="error">{errors.email}</small>}

        <br />
        <lable>Phone:</lable>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) =>
            setFormData({
              ...formData,
              phone: e.target.value,
            })
          }
          placeholder="(123) 456-7890"
        />

        <br />

        <label>Message:</label>
        <textarea
          value={formData.message}
          maxLength={500}
          onChange={(e) =>
            setFormData({
              ...formData,
              message: e.target.value,
            })
          }
          placeholder="Tell us about your event..."
        />
        <div className="character-count">{formData.message.length}/500</div>
        {errors.message && <small className="error">{errors.message}</small>}
      </form>

      <Button
        type="submit"
        text="Send Message"
        onClick={() =>
          alert(
            "Thank you for your message and we will get back to you within 24 hours!",
          )
        }
      />
    </div>
  );
}

export default Contact;
