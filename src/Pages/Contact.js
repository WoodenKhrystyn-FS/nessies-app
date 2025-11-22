import React from "react";
import Button from "../Components/Button";

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>
        If you have any questions pertaining to an order or goodie, feel free to
        reach out!
      </p>
      <input type="text" placeholder="Type Name" />
      <br />
      <input type="email" placeholder="Type Email" />
      <br />

      <textarea placeholder="Type xMessage"></textarea>
      <br></br>
      <Button />
    </div>
  );
}

export default Contact;
