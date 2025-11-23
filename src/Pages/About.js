import React from "react";
import owner from "../IMAGES/owner.jpg";

function About() {
  return (
    <div>
      <h2>About </h2>
      <p>
        First, lets introduce the owner of Nessie's Bakery, Lillian V. Tender.
        Starting out in her kitchen she created the most delight baked goodies
        with much love and perfection. Her passion for baking and making people
        happy with her treats drove her to open Nessie's Bakery in 2024. Since
        then, Nessie's Bakery has been a staple in the local community, known
        for its delicious cupcakes, cookies, cakes, and more.
      </p>
      <p>
        At Nessie's Bakery, we believe in using only the finest ingredients to
        create our delectable treats. From classic flavors to unique and
        innovative creations, our menu offers something for everyone. Whether
        you're celebrating a special occasion or simply indulging in a sweet
        craving, Nessie's Bakery is here to satisfy your dessert desires.
      </p>
      <p>
        Thank you for choosing Nessie's Bakery, where every bite is a taste of
        happiness!
      </p>

      <div>
        <img
          src={owner}
          alt="Lillian V. Tender, Owner of Nessie's Bakery"
          style={{ width: "300px", height: "400px", borderRadius: "10px" }}
        />
      </div>
    </div>
  );
}

export default About;
