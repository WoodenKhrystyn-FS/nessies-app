import React from "react";
import owner from "../IMAGES/tllb_owner.jpeg.heic";

function About() {
  return (
    <div>
      <h2>About Us</h2>
      <p>
        First, lets introduce the owner of Three Little Ladies Bakery, Lillian
        V. Tender. Starting out in her kitchen she created the most delight
        baked goodies with much love and perfection. Her passion for baking and
        making people happy with her treats drove her to open Three Little
        Ladies Bakery in 2024 - named from her "three little nieces" who
        inspired her. Since then, Three Little Ladies Bakery has been a staple
        in the local community, known for its delicious cupcakes, cookies,
        cakes, and more.
      </p>
      <p>
        At Three Little Ladies Bakery, we believe in using only the finest
        ingredients to create our delectable treats. From classic flavors to
        unique and innovative creations, our menu offers something for everyone.
        Whether you're celebrating a special occasion or simply indulging in a
        sweet craving, Three Little Ladies Bakery is here to satisfy your
        dessert desires.
      </p>
      <p>
        Thank you for choosing Three Little Ladies Bakery, where every bite is a
        taste of happiness!
      </p>

      <div>
        <img
          src={owner}
          alt="Lillian V. Tender, Owner of Three Little Ladies Bakery"
          style={{ width: "300px", height: "400px", borderRadius: "10px" }}
        />
      </div>
      <br />
      <p>Lillian V. Tender, Owner of Three Little Ladies Bakery</p>
    </div>
  );
}

export default About;
