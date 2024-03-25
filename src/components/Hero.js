import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Hero.css";
import Sidebar from "./Sidebar";

const Hero = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className="container">
      <Navbar toggle={toggle}></Navbar>
      <Sidebar show={show} toggle={toggle}></Sidebar>
      <div className="content">
        <div className="contentItems">
          <h1 className="navHead">Delicious and visually stunning desserts</h1>
          <p>
            Cherished by the community for more than eighty years, our
            establishment is renowned for our irresistible DeAngelis donuts ice
            cream and delectable array of cakes. Indulge in our extensive menu,
            served from dawn till dusk and beyond. Immerse yourself in the
            vibrant atmosphere, complemented by our lively bar and weekend
            entertainment offerings.
          </p>
          <div className="btn">Schedule now</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
