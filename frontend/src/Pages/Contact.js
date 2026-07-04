import React from "react";
import { Helmet } from "react-helmet-async";
import Button from "../Components/Button";

function Contact() {
  console.log("Contact page loaded");

  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact Three Little Ladies Bakery</title>
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

      <p>
        We want to hear from you! Have questions about an order or menu item,
        fill out the form below and allow response within 24 hours.
      </p>
      <form>
        <label>First Name:</label>
        <input type="text" placeholder="Type First Name" />
        <br />
        <label>Surname:</label>
        <input type="text" placeholder="Type Surname" />
        <br />
        <label>Email:</label>
        <input type="email" placeholder="Type Email" />
        <br />

        <label>Message:</label>
        <textarea placeholder="Type Message"></textarea>
        <br></br>
      </form>

      <Button
        onClick={() => alert("Contact form submitted!")}
        text="Submit Contact Form"
      />
    </div>
  );
}

export default Contact;
