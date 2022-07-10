import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexto/CartContext";
import { Link } from "react-router-dom";
import {buyOrder} from "../services/firebase"
import CartForm from "./CartForm";

function CartView() {
  const { cart, removeItemFromCart, clearCart, totalPriceCart } =
    useContext(CartContext);


  if (cart.length === 0) {
    return (
      <>
        <h1 className="text-center font-semibold text-sky-800 text-3xl tracking-wide bg-cyan-300 ">
          Aun no ingresaste items
        </h1>
        <div className="text-fuchsia-500 text-center text-5xl mt-6">
          <Link to="/">
            <i class="fa-solid fa-house-chimney"></i>
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className="">
      {cart.map((item) => (
        <div className="container px-5 py-24 mx-auto flex-row sm:flex-nowrap flex-wrap">
          <div className=" bg-orange-100 bg-auto text-center rounded-sm">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <h2>{item.description}</h2>
            <h2 className="text-sky-500 text-lg font-semibold">
              ${item.price}
            </h2>
            <p className="text-indigo-400 text-lg font-semibold">
              Cantidad de unidades : {item.cantidad}
            </p>
            <button
              className="bg-red-400 m-2 p-2 hover:bg-fuchsia-400 rounded-lg"
              onClick={() => removeItemFromCart(item.id)}
            >
              Eliminar del carrito
            </button>
            <>
              <p>
                Subtotal:{" "}
                <span className="text-indigo-400 text-lg font-semibold">
                  {" "}
                  ${item.price * item.cantidad}
                </span>
              </p>
            </>
          </div>
        </div>
      ))}
      <div className=" container mx-auto  flex-row sm:flex-nowrap flex-wrap text-center  space-x-5 bg-cyan-500">
        <button className="text-lg font-semibold">
          Total a pagar: ${totalPriceCart()}
        </button>
        {/* <button className="bg-neutral-200 m-2 p-2 hover:bg-gray-300 rounded-lg" onClick={handleBuyOrder}>
          Finalizar compra
        </button>
        <button className="bg-red-600 m-2 p-2 hover:bg-red-200 rounded-lg">
          Cancelar compra
        </button> */}
        <CartForm cart={cart} totalPriceCart={totalPriceCart} clearCart={clearCart} buyOrder= {buyOrder}/>
        <button
          className="bg-amber-400 m-2 p-2 hover:bg-orange-100 rounded-lg"
          onClick={clearCart}
        >
          Vaciar carrito
        </button>
      </div>
    </div>
  );
}
export default CartView;
