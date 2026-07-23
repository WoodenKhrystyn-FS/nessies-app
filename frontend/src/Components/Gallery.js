import React from "react";
import { trackEvent } from "../utils/analytics";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../App.css";

import brownies from "../IMAGES/brownies.webp";
import redVelvetCupcakes from "../IMAGES/RedVelvetCupcakes.webp";
import chocolateChipCookies from "../IMAGES/ChocolateChipCookies.webp";
import vanillaCake from "../IMAGES/VanillaCake.webp";

const images = [
  {
    original: brownies,
    thumbnail: brownies,
    description: "Chocolate Brownies",
  },
  {
    original: redVelvetCupcakes,
    thumbnail: redVelvetCupcakes,
    description: "Red Velvet Cupcakes",
  },
  {
    original: chocolateChipCookies,
    thumbnail: chocolateChipCookies,
    description: "Chocolate Chip Cookies",
  },
  {
    original: vanillaCake,
    thumbnail: vanillaCake,
    description: "Vanilla Cake",
  },
];

function Gallery() {
  return (
    <div className="galleryContainer" style={galleryStyles.galleryContainer}>
      <ImageGallery
        onClick={() => {
          trackEvent("Gallery", "click", "Image Clicked", "Gallery Section");
        }}
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
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    maxWidth: "900px",
    margin: "0 auto",
    borderRadius: "12px",
    objectFit: "cover",
  },
};
