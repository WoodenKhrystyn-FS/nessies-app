import React from "react";
import Button from "../Components/Button";

function Contact() {
  console.log("Contact page loaded");
  //alert("Contact page loaded");

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>
        If you have any questions pertaining to an order or goodie, feel free to
        reach out!
      </p>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Type Name" />
        <br />
        <label>Email:</label>
        <input type="email" placeholder="Type Email" />
        <br />

        <label>Message:</label>
        <textarea placeholder="Type Message"></textarea>
        <br></br>
      </form>

      <br></br>
      <Button />
    </div>
  );
}

export default Contact;
