import React, { useState } from "react";
import Swal from "sweetalert2";
import { buyOrder } from "../services/firebase";


function CartForm({ cart, totalPriceCart, clearCart}) {
  
  

  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const ValForm = () => {
    if (
      (buyer.user === "") |
      (buyer.phone === "") |
      (buyer.email === "") |
      (buyer.msj === "")
    ) {
      return true;
    }
  };
  
  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    setBuyer({...buyer, [field]: value,});
  };

  function handleBuyOrder(e) {
    e.preventDefault();
    const dataOrder = {
      buyer,
      items: cart,
      total: totalPriceCart(),
    };

    buyOrder(dataOrder).then((orderDataCreated) => {
      clearCart();
      

      Swal.fire(
        "Tu compra ha sido realizada con éxito! Tu numero de orden es "+orderDataCreated.id,
        "Nos pondremos en contacto via email para continuar con la compra revisa tu casilla de correo ",
        
        "success"
      )
     .then(() => {
        return (window.location.href = "/");
      });
    });
  }



  return (
  <>
    
      <form action=""className=" container mx-auto flex flex-col sm:flex-nowrap flex-wrap items-center text-center  space-x-5 bg-blue-200">
        
        <label htmlFor="name" className="text-2xl">Usuario</label>
        <input className="rounded-md" onChange={handleChange} name="name" type="text" required/>
        

        <label htmlFor="phone" className="text-2xl">Telefono</label>
        <input className="rounded-md" onChange={handleChange}  name="phone" type="phone" required/>
        
       

        <label htmlFor="email" className="text-2xl">E-mail</label>
        <input className="rounded-md" onChange={handleChange} name="email" type="email" required/>
        
        

        <button type="submit" className="rounded-lg hover:bg-violet-300 bg-red-300 m-2 p-2 text-2xl" onClick={handleBuyOrder} disabled={ValForm()}> Finalizar compra</button>
      </form>
  </>
    
  );
}

export default CartForm;
