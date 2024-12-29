import React from "react";
import Logo from "../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navBar">
        <div className="main">
          <img
            className="logo"
            src={Logo}
            alt=""
            onClick={() => navigate("/")}
          />

          <div>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
            <Link
              to="/about"
              className={location.pathname.startsWith("/about") ? "active" : ""}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
            <Link
              to="/menu"
              className={location.pathname === "/menu" ? "active" : ""}
            >
              Menu
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
