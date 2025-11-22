import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "/IMAGES/bread.jpeg",
    thumbnail: "/IMAGES/bread.jpeg",
  },
  {
    original: "/IMAGES/brownies.jpeg",
    thumbnail: "/IMAGES/brownies.jpeg",
  },
  {
    original: "/IMAGES/RedVelvetCupcakes.jpg",
    thumbnail: "/IMAGES/RedVelvetCupcakes.jpg",
  },
];

function Home() {
  return (
    <div className="home-container">
      <h1 className="welcome-message" style={homeStyles.welcomeMessage}>Welcome to Nessie's Bakery</h1>
       <div>
        <ImageGallery className="gallery" items={images} style={homeStyles.gallery} />
      </div>
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