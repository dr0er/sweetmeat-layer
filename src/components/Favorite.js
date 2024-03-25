import React from "react";
import "./Favorite.css";
import Slide from "react-reveal/Reveal";
import favorite from "../images/favourite.jpg";

const Favorite = ({ id }) => {
  return (
    <div className="favContainer" id={id}>
      <h2>Our favorite</h2>

      <div className="favContent">
        <Slide left>
          <img src={favorite} className="favImage" alt="cake" />
        </Slide>
        <Slide right>
          <div className="textContent">
            <p>
              Combining strawberries, cream, and a hint of balsamic for an added
              kick, this cake pays homage to the timeless strawberry pairings.
              It's akin to a collection of classic strawberry favorites,
              reminiscent of a greatest hits album, yet far more delectable!
            </p>
          </div>
        </Slide>
      </div>
      <button className="favBtn">Order Now</button>
    </div>
  );
};

export default Favorite;
