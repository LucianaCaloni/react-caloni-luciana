import React from "react";
import Item from "../Item/Item";
// import "../ItemList/ItemList.css"

const ItemList = ({ items }) => {
  return (
    
    <div className="grid grid-cols-4 w-full ">
      {items.map((item) => {
        return <div key={item.id}>
          <Item item={item} />
          </div>;
      })}
    </div>
  );
};

export default ItemList;
