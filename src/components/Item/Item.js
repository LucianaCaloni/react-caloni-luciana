import React from "react";
import "../Item/Item.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  
  const urlDetail = `/item/${item.id}`;
  return (
    <div className="h-auto w-full">
      <div className="shadow-xl productos-card__img">
        <img className="md:w-80 md:h-80 rounded-lg mt-2 hover:contrast-50 hover:scale-75 duration-1000 object-cover products-img" src={item.img} alt="asd" />
        <div className=" productos-card__txt">
          <h2>{item.name}</h2>
          <h2 className="text-sky-400  font-semibold" >${item.price}</h2>
          <Link to={urlDetail}>
            <button  className="button-style transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-100 duration-300">Ver detalle</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
