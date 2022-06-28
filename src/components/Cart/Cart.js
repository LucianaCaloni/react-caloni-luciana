import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexto/CartContext";

const Cart = () => {
  const {prueba, Cart} = useContext(CartContext);
 

  return (
    <div>
      Componente vacio llamado Cart
      <div>
        <button onClick={prueba}>Click</button>
      </div>
    </div>
  );
};
export default Cart;
