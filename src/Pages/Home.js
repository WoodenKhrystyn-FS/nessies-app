import React from "react";
import Gallery from "../Components/Gallery";

function Home() {
  return (
    <div className="home-container">
      <h1 className="welcome-message" style={homeStyles.welcomeMessage}>Welcome to Nessie's Bakery</h1>
      <Gallery/>
    </div>
  );
}

export default Home;

const homeStyles = {
  welcomeMessage: {
    fontSize: "36px",
    margin: "20px 0",
  },
  gallery: {
    maxWidth: "800px",
    margin: "0 auto",
  }
};  