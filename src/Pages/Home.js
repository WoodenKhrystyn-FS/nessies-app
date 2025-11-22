import React from "react";


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