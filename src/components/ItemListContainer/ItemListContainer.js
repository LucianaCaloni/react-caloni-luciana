import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";

import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProduct, getFromCategory } from "../services/firebase";

export default function ItemListContainer(props) {
  const [prod, setProd] = useState([]);
  const { categoryId } = useParams();
 

  useEffect(() => {
  
    if (categoryId) {
    getFromCategory (categoryId)
    .then((res)=>{
      setProd(res);
    })
    }else{
    getProduct()
    .then((res) => {
    setProd(res);
      });
    }
  }, [categoryId]);

  return (
    <>
      <div className="titulo-pagina">
        <p>{props.gretting}</p>
        
      </div>

      <div>
        <ItemList items={prod} />
        
      </div>
    </>
  );
}
