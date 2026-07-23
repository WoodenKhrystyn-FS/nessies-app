import React from "react";
//import businessInfo from "../utils/businessInfo";
import { useNavigate } from "react-router-dom";
//import { Helmet } from "react-helmet-async";
import SEO from "../Components/SEO";
import owner from "../IMAGES/tllb_owner.jpg";
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

      <h1>Welcome!</h1>

      <p>
        At Three Little Ladies Bakery, every dessert is made with care,
        creativity and passion for bringing people together. While this website
        was developed for a capstone project, it represents the vision of a
        welcoming neighborhood bakery that specializes in handcrated desserts
        for every celebatory event.
      </p>

      <h2>Our Story</h2>

      <p>
        <strong>Three Little Ladies Bakery</strong> was inspired by family,
        tradition and a love for homemade desserts. The name comes from
        me(Khrystyn Wooden- Website Creator) and my younger sisters (Taylor and
        Doris) whose shared love of family gatherings and sweets inspired the
        bakery's identity. The heart behing the bakery comes from my aunt,
        (Lillian V. Tender) who's a pssionate home baker and enjoys baking for
        her family and friends. Whether its cupcakes, pound cakes, cookies or
        experimenting a new recipe, she loves to bring joy to her family
        together through her baking treats. This website was developed as a
        capstone project to showcase her baking passion and to also imagine what{" "}
        <strong>Three Little Ladies Bakery</strong> could potentially become as
        a small business serving Central Indiana.
      </p>

      <h2>What TLLB Offers</h2>

      <p>Our specialities are:</p>
      <ul>
        <li>Custom cakes</li>
        <li>Wedding Cakes</li>
        <li>Cupcakes</li>
        <li>Homemade Cookies</li>
        <li>Brownies</li>
        <li>Seasonal desserts</li>
        <li>Special Occasion Catering</li>
      </ul>

      <h2>Why Choose TLLB</h2>
      <strong>
        <p>Why Choose Three Little Ladies Bakery?</p>
      </strong>

      <ul>
        <li>Fresh Ingredients</li>
        <li>Homemade Recipes</li>
        <li>Personalized custom orders</li>
        <li>Friendly customer service</li>
        <li>Serving families throughout Central Indiana</li>
      </ul>

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
      <p>Lillian V. Tender, Baker/Owner of Three Little Ladies Bakery</p>

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
