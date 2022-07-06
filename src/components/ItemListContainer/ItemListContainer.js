import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";
// import { products } from "../../mocks/products";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProduct, getFromCategory } from "../services/firebase";

export default function ItemListContainer(props) {
  const [prod, setProd] = useState([]);
  const { categoryId } = useParams();
  //firestore//
  // getItems().then( respuesta => console.log(respuesta));
  ////

  useEffect(() => {
    //firestore y borro promesa////////////////////////

    // const getProduct = new Promise((res, rej) => {
    //   setTimeout(() => {
    //     if (categoryId === undefined) 
    //        res(products);
    //     else{
    //       const itemsFound= products.filter( detail =>{
    //         return detail.category===categoryId;
    //       })
    //       res(itemsFound);
    //     }
    //   }, 2000);
    // });
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
        {/* <ItemCount stock={5} initial={1} /> */}
      </div>

      <div>
        <ItemList items={prod} />
        
      </div>
    </>
  );
}
