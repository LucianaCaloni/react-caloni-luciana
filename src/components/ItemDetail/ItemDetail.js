import React, { useState } from 'react'
import "../ItemDetail/ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';


function ItemDetail({item}) {
  const [cantd, setCantd]=useState(0);

  const onAdd =(cantidad)=>{
    setCantd(cantidad);

  }
  return (
    
    <div className='detalle-style'>
      <img src={item.img} alt=""></img>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <p>${item.price}</p>
        {cantd=== 0 ? (
         <ItemCount stock={5} initial={1} onAdd={onAdd} />
         ): (<Link to="/cart">To Cart</Link>

        )}
        
        {/* <ItemCount stock={5} initial={1} onAdd={onAdd} />
        <Link to='/cart'>To Cart</Link> */}
    </div>
    
  )
}

export default ItemDetail