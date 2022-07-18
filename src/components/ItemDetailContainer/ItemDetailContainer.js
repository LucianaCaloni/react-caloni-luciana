import React, { useState, useEffect } from "react";

import ItemDetail from "../ItemDetail/ItemDetail";
import "../ItemDetailContainer/ItemDetailContainer.css";
import RiseLoader from "react-spinners/RiseLoader";
import { useParams } from "react-router-dom";
import { traerUnProducto } from "../services/firebase";

export default function ItemDetailContainer(props) {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  

  useEffect(() => {
  
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
            size="30px"
          />
        ) : (
          <ItemDetail item={product} />
        )}
      </div>
     
    </>
  );
}
