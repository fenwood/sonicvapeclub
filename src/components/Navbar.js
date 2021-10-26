import React, { useState } from "react";
import Logo from "../assets/svc_logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div>
      <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <a href="/">
            <img src={Logo} alt="sonic vape club logo" />
          </a>
          <div className="hiddenLinks">
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/collection"> Collection </Link>
              </li>
              <li>
                <Link to="/about"> About </Link>
              </li>
              <li>
                <Link to="/contact"> Whitelist </Link>
              </li>
              <li>
                <Link to="/roadmap"> Roadmap </Link>
              </li>
              <li>
                <Link to="/faq"> </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="rightSide">
          <Link to="/collection"> Collection </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Whitelist </Link>
          <Link to="/roadmap"> Roadmap </Link>
          <Link to="/faq"> FAQ </Link>
          <button onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
