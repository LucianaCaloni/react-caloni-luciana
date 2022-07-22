import React, { useContext, useState } from "react";
import "../ItemDetail/ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexto/CartContext";

function ItemDetail({ item }) {
  const { addToCart, isInCart,removeItemFromCart } = useContext(CartContext);

  const [cantd, setCantd] = useState(0);

  const onAdd = (cantidad) => {
    setCantd(cantidad);
    addToCart(item, cantidad);
  };
  return (
    <div className="shadow-xl detalle-style">
      <img className="rounded-lg mt-3 hover:contrast-50  " src={item.img} alt=""></img>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <span className="text-lg text-violet-700 font-semibold">${item.price}</span>
      
      {cantd === 0 ? (
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
      ) : (
        <Link className="text-2xl text-white bg-amber-400 rounded p-2 m-3" to="/cart">
          To Cart
        </Link>
      )}
      {isInCart(item.id) && (
        <button onClick={()=>removeItemFromCart(item.id)} className="text-2xl text-white bg-red-600 rounded p-2">Remove</button>
      )}

      
    </div>
  );
}

export default ItemDetail;
