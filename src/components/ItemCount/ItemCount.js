import "./ItemCount.css";
import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [cant, setCount] = useState(initial);
  function suma() {
    if (cant < stock) {
      setCount(cant + 1);
    } else {
      alert("Llegaste al limite maximo de productos")
    }
  }

  function resta() {
    if (cant > initial) {
      setCount(cant - 1);
    }
  }

  return (
    <div className="contador" >
      <button  className= "hover:bg-teal-100 text-2xl contador-num"onClick={resta}>-</button>
      <span className= " text-2xl contador-num">{cant}</span>
      <button className= "hover:bg-teal-100 text-2xl contador-num" onClick={suma}>+</button>
      <br />
      <button onClick={()=>onAdd(cant)} className= "text-2xl contador-button hover:bg-teal-100">Add to cart</button>
    </div>
  );
}

export default ItemCount;
