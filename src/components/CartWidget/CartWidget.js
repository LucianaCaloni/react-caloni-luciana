import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexto/CartContext";

export default function CartWidget() {
  const {qntyInCart}= useContext (CartContext);
  return (
    
      <i class="fa-solid fa-cart-shopping">{qntyInCart () !== 0 && qntyInCart()}</i>

 );
}
