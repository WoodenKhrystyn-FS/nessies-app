import React from "react";
import Button from "../Components/Button";

function Contact() {
  console.log("Contact page loaded");
  //alert("Contact page loaded");

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
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

      
     
        <Button onClick={() => alert("Contact form submitted!")} text="Submit Contact Form" />
    </div>
  );
}

export default Contact;
