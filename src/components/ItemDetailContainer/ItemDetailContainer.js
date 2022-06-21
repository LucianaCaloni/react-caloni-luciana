import React, { useState, useEffect } from "react";
import { products } from "../../mocks/products";
import ItemDetail from "../ItemDetail/ItemDetail";
import "../ItemDetailContainer/ItemDetailContainer.css";

import { useParams } from "react-router-dom";

export default function ItemDetailContainer(props) {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  console.log("parametro", id);

  useEffect(() => {
    const getProduct = new Promise((res, rej) => {
      setTimeout(() => {
        let idNum = parseInt(id);
        const itemFound = products.find((detail) => {
          return detail.id === idNum;
        });
        res(itemFound);
        // res(products[itemNUmber]);
      }, 2000);
    });
    getProduct.then((res) => {
      setProduct(res);
    });
  }, [id]);

  return (
    <>
      <div>
        <p className="detalle-prod text-center">{props.gretting}</p>

        <ItemDetail item={product} />
        
      </div>
    </>
  );
}
