import React from "react";
import image1 from "./image/New folder/Rectangle 335.png";
import image2 from "./image/New folder/Rectangle 332.png";
import image3 from "./image/New folder/Rectangle 334.png";
import image4 from "./image/New folder/Rectangle 336.png";
import image5 from "./image/New folder/Group 585(1).png";
import image6 from "./image/New folder/Rectangle 337.png";
import image7 from "./image/New folder/Rectangle 333(1).png";
import image8 from "./image/New folder/Rectangle 338.png";
import img1 from "./image/Line 11.png";
import img2 from "./image/Line 12.png";
import img3 from "./image/Line 14.png";
import img4 from "./image/images Line/line.png";
export default function MenuSection() {
  return (
    <>
      <div className="menu_Container">
        {/* <img src={img1} alt="..." className="line_one" />
        <img src={img2} alt="..." className="line_two" />
        <img src={img3} alt="..." className="line_three" />
        <img src={img4} alt="..." className="line_five" /> */}

        {/* //////////////////////////////// */}

        <div className="top_Container">
          <div className="card">
            <img src={image2} alt="" className="manu_image1" />
            <div className="img">
              <h3>Airport </h3>
              <h3>Transfers</h3>
              <img src={image1} alt="..." className="manu_image2" />
            </div>
          </div>
          <div className="card cart_1">
            <img src={image3} alt="" className="manu_image3" />
            <div className="img">
              <h3>Hotel </h3>
              <h3>Transport</h3>
              <img src={image4} alt="..." className="manu_image4" />
            </div>
          </div>
        </div>
        {/* /////////////////// */}
        <div className="buttom_Container">
          <div className="card">
            <img src={image5} alt="" className="manu_image5" />
            <div className="img">
              <h3>Events </h3>
              <img src={image6} alt="..." className="manu_image6" />
            </div>
          </div>

          <div className="card card2">
            <img src={image7} alt="" className="manu_image7" />
            <div className="img">
              <h3>Executive </h3>
              <h3>Travel</h3>
              <img src={image8} alt="..." className="manu_image8" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
