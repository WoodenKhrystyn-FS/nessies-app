import React from "react";
import businessInfo from "../utils/businessInfo";
import { Helmet } from "react-helmet-async";
import Button from "../Components/Button";

function Contact() {
  console.log("Contact page loaded");

  return (
    <div className="contact-container">
      <Helmet>
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
      </Helmet>

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
        <label>First Name:</label>
        <input
          aria-label="First Name"
          type="text"
          placeholder="Enter First Name"
        />
        <br />
        <label>Surname:</label>
        <input aria-label="Surname" type="text" placeholder="Enter Surname" />
        <br />
        <label>Email:</label>
        <input aria-label="Email" type="email" placeholder="Enter Email" />
        <br />

        <label>Message:</label>
        <textarea
          aria-label="Message"
          placeholder="Enter your message here..."
        ></textarea>
        <br></br>
      </form>

      <Button
        aria-label="Submit Contact Form"
        onClick={() =>
          alert(
            "Thank you for your message and we will get back to you within 24 hours!",
          )
        }
        text="Submit Contact Form"
      />
    </div>
  );
}

export default Contact;
