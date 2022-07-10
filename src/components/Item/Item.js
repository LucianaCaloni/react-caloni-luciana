import React from "react";
import "../Item/Item.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  
  const urlDetail = `/item/${item.id}`;
  return (
    <div className="h-auto w-full">
      <div className="productos-card__img">
        <img className="products-img" src={item.img} alt="asd" />
        <div className="productos-card__txt">
          <h2>{item.name}</h2>
          <h2>${item.price}</h2>
          <Link to={urlDetail}>
            <button className="button-style">Ver detalle</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
