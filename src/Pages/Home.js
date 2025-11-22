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
      <h1 className="welcome-message">Welcome to Nessie's Bakery</h1>
       <div>
        <ImageGallery className="gallery" items={images} />
      </div>
    </div>
  );
}

export default Home;
