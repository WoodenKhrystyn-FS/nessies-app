import React from "react";
//import businessInfo from "../utils/businessInfo";
import { useNavigate } from "react-router-dom";
//import { Helmet } from "react-helmet-async";
import SEO from "../Components/SEO";
import owner from "../IMAGES/tllb_owner.jpeg";
import Button from "../Components/Button";

function About() {
  const navigate = useNavigate();

  return (
    <div>
      <SEO>
        <title>About Three Little Ladies Bakery</title>
        <meta
          name="description"
          content="Contact Three Little Ladies Bakery to learn more about our story, passion for baking, and the delicious treats we create."
        />
        <meta
          name="keywords"
          content="bakery, about, story, Three Little Ladies Bakery"
        />
        <meta property="og:title" content="About Three Little Ladies Bakery" />
        <meta
          property="og:description"
          content="Learn more about Three Little Ladies Bakery and our passion for baking delicious treats."
        />
        <meta
          property="og:url"
          content="https://threelittlesistersbakery.com/about"
        />
        <meta property="og:site_name" content="Three Little Ladies Bakery" />
      </SEO>

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

      <section>
        <h2>Ready to Serve You</h2>

        <p>
          Whether you're planning a wedding, birthday, or special event, we are
          here to make your celebration even sweeter. Contact us today to
          discuss your order and let us create a memorable experience for you
          and your guests.
        </p>
        <Button
          aria-label="Contact Us"
          onClick={() => navigate("/contact")}
          text="Contact Us"
        />
      </section>
    </div>
  );
}

export default About;
