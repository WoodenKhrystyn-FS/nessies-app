import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../App.css";

import brownies from "../IMAGES/brownies.jpeg";
import redVelvetCupcakes from "../IMAGES/RedVelvetCupcakes.jpg";
import chocolateChipCookies from "../IMAGES/ChocolateChipCookies.webp";
import vanillaCake from "../IMAGES/VanillaCake.jpg";

const images = [
  {
    original: brownies,
    thumbnail: brownies,
  },
  {
    original: redVelvetCupcakes,
    thumbnail: redVelvetCupcakes,
  },
  {
    original: chocolateChipCookies,
    thumbnail: chocolateChipCookies,
  },
  {
    original: vanillaCake,
    thumbnail: vanillaCake,
  },
];

function Gallery() {
  return (
    <div className="galleryContainer" style={galleryStyles.galleryContainer}>
      <ImageGallery
        items={images}
        showFullscreenButton={true}
        showPlayButton={true}
      />
    </div>
  );
}
export default Gallery;

const galleryStyles = {
  galleryContainer: {
    width: "40%",
    maxWidth: "900px",
    margin: "0px auto",
    padding: " 0px 20px",
  },
};
