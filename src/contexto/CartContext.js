import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const addToCart = (item, cantidad) => {
    if(isInCart(item.id)){
      const idToAdd = item.id
      let itemToAdd = cart.find(eachItem=> eachItem.id===idToAdd)
      itemToAdd.cantidad += cantidad;
      let newCart =cart.filter (eachItem => eachItem.id !== item.id);
      setCart([...newCart, { ...itemToAdd}]);

    }else{
      setCart([...cart, { ...item, cantidad }]);
    }
    
  };
  const removeItemFromCart =(id)=>{
    let newCart =cart.filter (item => item.id !== id);
    setCart (newCart);
    

  };
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };
  function qntyInCart() {
    
    let total = 0
    cart.forEach((item) => (total = total + item.cantidad));
    return total;
  }
  function totalPriceCart() {
    let total = 0;
    cart.forEach((item) => (total = total + (item.cantidad * item.price)));
    return total;
  }
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        isInCart,
        clearCart,
        qntyInCart,
        removeItemFromCart,
        totalPriceCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
