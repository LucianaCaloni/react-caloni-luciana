import React from 'react'
import "../Item/Item.css";

const Item = ({item}) => {
    
     console.log(item);
  return (
    <div className='productos-card'>
        <div className='productos-card__img'>
            <img className='products-img' src={item.img} alt="asd"/>
        </div>
        <div className='productos-card__txt'>
            <h2>{item.name}</h2>
            <h2>{item.price}</h2>
        </div>
    </div>
  )
}

export default Item;