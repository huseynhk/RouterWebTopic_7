import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Banner from "../assets/desktopcom.jpg"


const Home = () => {
  return (
    <div className="homeImg"
     style={{backgroundImage : `url(${Banner})`}} >
      <Link to="/menu">
        <button className="btn">Order</button>
      </Link>
    </div>
  );
};

export default Home;
