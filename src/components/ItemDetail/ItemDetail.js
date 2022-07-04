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
    <div className="detalle-style">
      <img src={item.img} alt=""></img>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>${item.price}</p>
      
      {cantd === 0 ? (
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
      ) : (
        <Link className="text-white bg-amber-400 rounded p-2 m-3" to="/cart">
          To Cart
        </Link>
      )}
      {isInCart(item.id) && (
        <button onClick={()=>removeItemFromCart(item.id)} className="text-white bg-red-600 rounded p-2">Remove</button>
      )}

      
    </div>
  );
}

export default ItemDetail;
