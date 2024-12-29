import React, { useState, useEffect } from "react";
import MenuCard from "./MenuCard";
import { GetProduct } from "../api/getRequest";
import "./menu.css";

const Menu = () => {
  const [data, setData] = useState([]);

  const handleData = async () => {
    const res = await GetProduct();
    setData(res.products);
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Products</h1>

      {data?.length === 0 ? (
        <div className="flex" style={{ height:"70vh" }}>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="menuList">
          {data?.map((menuItem) => {
            return (
              <MenuCard
                key={menuItem.id}
                id={menuItem.id}
                title={menuItem.title}
                image={menuItem.images[0]}
                description={menuItem.description}
                price={menuItem.price}
                brand={menuItem.brand}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Menu;
