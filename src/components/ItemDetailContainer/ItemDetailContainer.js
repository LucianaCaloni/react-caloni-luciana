import React, { useState, useEffect } from "react";
import { products } from "../../mocks/products";
import ItemDetail from "../ItemDetail/ItemDetail";
// import "../../App.css";

export default function ItemDetailContainer(props) {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = new Promise((res, rej) => {
      setTimeout(() => {
        res(products[1]);
      }, 2000);
    });
    getProduct.then((res) => {
      setProduct(res);
    });
  }, []);

  return (
    <>
      <div className="container">
        <p>{props.gretting}</p>

        <ItemDetail item={product} />
      </div>
    </>
  );
}
