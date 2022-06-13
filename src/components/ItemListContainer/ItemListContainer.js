
import React, {useState, useEffect} from "react";
import "./ItemListContainer.css";
import ItemCount from "./ItemCount/ItemCount";
import {products} from "../../mocks/products";
import ItemList from "../ItemList/ItemList";



export default function ItemListContainer(props) {
  const [prod, setProd] = useState ([]);
  useEffect(()=>{
    const getProduct = new Promise((res, rej) => {
      setTimeout(() => {
        res(products);
      }, 2000);
    });
    getProduct
      .then((res)=>{
        setProd(res);
      }); 
      
    

  }, []);
  
  return (
    <>
    <div className="container">
      <p>{props.gretting}</p>
      <ItemCount stock={5} initial={1}/>
      
    </div>
    
    
    <div>
      <ItemList items={prod}/>
    </div>
    </>
   
  );
};
