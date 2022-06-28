import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);


  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const addToCart=(item, cantidad)=>{
    if (isInCart(item.id)) {
      console.log('Ya esta en el carrito');
      
    }else{
      setCart([...cart,{...item,cantidad}]); 

    }
   ;
    
  }
 const isInCart=(id)=>{
  return cart.some((prod)=>prod.id===id)
 }
 
 const clearCart=()=>{
  setCart([]);
 }

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      { children}
    </CartContext.Provider>
  );
};
