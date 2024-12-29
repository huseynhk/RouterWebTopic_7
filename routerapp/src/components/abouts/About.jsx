import React from "react";
import AboutCompany from "./AboutCompany";
import AboutProducts from "./AboutProducts";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Port from "../../assets/port.jpg";
import "../menu.css";

const About = () => {
  const location = useLocation();
  return (
    <div className="about">
      <h1 style={{marginTop:"-18px"}}>Learn About Us</h1>
      <div
        className="aboutTop"
        style={{
          backgroundImage: `url(${Port})`,
          height: "60vh",
          marginTop: "12px",
          marginBottom: "24px",
        }}
      ></div>
      <div className="flex">
        <Link
          to="company"
          className={location.pathname === "/about/company" ? "active" : ""}
        >
          About Company
        </Link>
        <Link
          to="product"
          className={location.pathname === "/about/product" ? "active" : ""}
        >
          About Products
        </Link>
      </div>

      <div>
        <Routes>
          <Route path="company" element={<AboutCompany />} />
          <Route path="product" element={<AboutProducts />} />
        </Routes>
      </div>
    </div>
  );
};

export default About;
