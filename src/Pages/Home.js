import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "/Images/bread.jpeg",
    thumbnail: "/Images/bread.jpeg",
  },
  {
    original: "/Images/brownies.jpeg",
    thumbnail: "/Images/brownies.jpeg",
  },
  {
    original: "/Images/RedVelvetCupcakes.jpg",
    thumbnail: "/Images/RedVelvetCupcakes.jpg",
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
