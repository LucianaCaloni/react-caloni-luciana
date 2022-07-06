import React, { useState, useEffect } from "react";
// import { products } from "../../mocks/products";
import ItemDetail from "../ItemDetail/ItemDetail";
import "../ItemDetailContainer/ItemDetailContainer.css";
import RiseLoader from "react-spinners/RiseLoader";
import { useParams } from "react-router-dom";
import { traerUnProducto } from "../services/firebase";

export default function ItemDetailContainer(props) {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  // console.log("parametro", id);

  useEffect(() => {
    //firebase//////////////////////////////////////////////
    // const getProduct = new Promise((res, rej) => {
    //   setTimeout(() => {
    //     let idNum = parseInt(id);
    //     const itemFound = products.find((detail) => {
    //       return detail.id === idNum;
    //     });
    //     res(itemFound);
    //     // res(products[itemNUmber]);
    //   }, 2000);
    // });
    traerUnProducto (id)
    .then((res) => {
      setProduct(res);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <>
      <div>
        <p className="detalle-prod text-center">{props.gretting}</p>
        {isLoading ? (
          <RiseLoader
            className="container mx-auto mt-10 text-center"
            color="#f3f0f2"
            size="20"
          />
        ) : (
          <ItemDetail item={product} />
        )}
      </div>
    </>
  );
}
