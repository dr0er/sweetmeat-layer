// import React, { useState } from "react";
// // import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import { FaBars } from "react-icons/fa";

// const Navbar = ({ toggle }) => {
//   const [move, setMove] = useState(false);

//   const moveNavbar = () => {
//     if (window.scrollY >= window.innerHeight) {
//       setMove(true);
//     } else {
//       setMove(false);
//     }
//   };
//   window.addEventListener("scroll", moveNavbar);

//   return (
//     <nav className={`navbar ${move ? "move" : ""}`}>
//       <Link className="navlink" to="/">
//         <div className="desktop">Sweetmeats & Desserts</div>
//       </Link>
//       <div className="navicon" onClick={toggle}>
//         <FaBars className="icon"></FaBars>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ toggle }) => {
  return (
    <nav className="navbar">
      <div className="navlink" onClick={toggle}>
        <FaBars className="icon"></FaBars>
      </div>
      <Link className="navlink" to="/">
        <div className="desktop">Sweetmeats & Desserts</div>
      </Link>
    </nav>
  );
};

export default Navbar;
