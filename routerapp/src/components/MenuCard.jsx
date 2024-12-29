import React from "react";
import "./menu.css";
import { useNavigate } from "react-router-dom";

const MenuCard = ({ title, image, description, price, brand, id }) => {
  const navigate = useNavigate();

  return (
    <div className="menuCard">
      <img className="cardImg" src={image} alt={title} />
      <h4>{title.slice(0, 20)}...</h4>
      <h6>{description.slice(0, 25)}...</h6>
      <h6>{brand}</h6>
      <p>$ {price}</p>
      <button className="btnC" onClick={() => navigate(`/menu/${id}`)}>
        Go Details Page
      </button>
    </div>
  );
};

export default MenuCard;
