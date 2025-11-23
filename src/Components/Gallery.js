import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import bread from "../IMAGES/bread.jpeg";
import brownies from "../IMAGES/brownies.jpeg";
import redVelvetCupcakes from "../IMAGES/RedVelvetCupcakes.jpg";
import chocolateChipCookies from "../IMAGES/ChocolateChipCookies.webp";

const images = [
  {
    original: bread,
    thumbnail: bread,
  },
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
  }
];

function Gallery() {
  return (
    <ImageGallery
      items={images}
      showFullscreenButton={true}
      showPlayButton={true}
    />
  );
}
export default Gallery;
