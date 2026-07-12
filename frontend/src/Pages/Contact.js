import React from "react";
import businessInfo from "../utils/businessInfo";
//import { Helmet } from "react-helmet-async";
import SEO from "../Components/SEO";
import Button from "../Components/Button";

function Contact() {
  console.log("Contact page loaded");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(
      "Form submitted! Thank you for reaching out. We will get back to you soon.",
    );
    console.log("Form submitted");
  };

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
          <strong>Address:</strong> 123 Bakery Street, Indianapolis, IN 12345
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

      <form>
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          aria-label="First Name"
          type="text"
          placeholder="Enter First Name"
        />
        <br />
        <label htmlFor="surname">Surname:</label>
        <input
          id="surname"
          aria-label="Surname"
          type="text"
          placeholder="Enter Surname"
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          aria-label="Email"
          type="email"
          placeholder="Enter Email"
        />
        <br />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          aria-label="Message"
          placeholder="Enter your message here..."
        ></textarea>
        <br></br>
      </form>

      <Button
        aria-label="Submit Contact Form"
        onClick={handleSubmit}
        text="Submit Contact Form"
      />
    </div>
  );
}

export default Contact;
