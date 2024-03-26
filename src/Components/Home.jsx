import React from "react";
import image1 from "./image/Line 1.png";

function Home() {
  return (
    <div className="home_content">
      <div className="home_left">
        <h2>Look Catch</h2>
        <span>The Ride</span>
      </div>
      <div className="home_right">
        <p>Business Box</p>
        <p>Become a driver </p>
      </div>
      <img src={image1} alt="" className="home_Image" />
    </div>
  );
}

export default Home;
