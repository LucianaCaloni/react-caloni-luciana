import React from "react";
import Item from "../Item/Item";
import "../ItemList/ItemList.css"

const ItemList = ({ items }) => {
  return (
    
    <div className="card-prod">
      {items.map((item) => {
        return <Item item={item} />;
      })}
    </div>
  );
};

export default ItemList;
