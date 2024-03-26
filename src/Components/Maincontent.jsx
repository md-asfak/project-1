import React from "react";
import image from "./image/img01.png";
import image1 from "./image/img02.png";
import img3 from "./image/Line 3.png";
import img4 from "./image/Rectangle 330.png";
import img5 from "./image/Line 10.png";

function Maincontent() {
  return (
    <>
      <div className="main_container">
        <div className="main_header">
          <p>Simplicity. Seamless.</p>
          <h2>Your Journey</h2>
        </div>

        <div className="content_section">
          <div className="left-content">
            <div className="style_content">
              <h2>Business box</h2>
              <img src={img4} alt="" />
              <img src={img3} alt="" />
              <span>Coming soon</span>
            </div>

            <p>We understand time, that’s why we keep it</p>
            <h3>simple</h3>
          </div>
          <div className="right-content">
            <img className="mainImg" src={image} alt="" />
            <img className="mainImg2" src={image1} alt="" />
          </div>
        </div>
        <div className="list">
          <ul>
            <li>Mobile/Web App</li>
            <li>Account Managers</li>
            <li>Staff Management </li>
            <li>Budget Control</li>
            <li>24/7 Support </li>
          </ul>
          <img src={img5} alt="" />
        </div>
      </div>
    </>
  );
}

export default Maincontent;
