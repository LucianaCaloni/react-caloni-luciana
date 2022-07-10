import React, { useState } from 'react'

function CartForm({cart, totalPriceCart, clearCart, buyOrder} ) {
    const [buyer, setBuyer]= useState({
        name: "",
        phone: "",
        email: ""
    },

    )
    const handleChange = (e)=>{
        
        const field = e.target.name;
        const value= e.target.value;

        setBuyer({
            ...buyer,
            [field]: value,
        })

    }



    function handleBuyOrder(e){
        e.preventDefault();
        const dataOrder={
          buyer,
          items: cart,
          total : totalPriceCart()
        }
        buyOrder (dataOrder).then ((orderDataCreated)=>{
          clearCart();
          console.log(orderDataCreated.id);
        });
        
      
        }
  return (
    <form>
        <label htmlFor="name">Usuario</label>
        <input onChange={handleChange} name='name'></input>

        <label htmlFor="phone">Telefono</label>
        <input onChange={handleChange}  name='phone'></input>

        <label htmlFor="email">Email</label>
        <input onChange={handleChange} name='email'></input>

        <button className="bg-neutral-200 m-2 p-2 hover:bg-gray-300 rounded-lg" onClick={handleBuyOrder}>Finalizar compra</button>
    </form>
  )
}

export default CartForm