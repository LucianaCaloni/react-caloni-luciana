import React from 'react'
import "../ItemDetail/ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({item}) {
  return (
    
    <div className='detalle-style'>
      <img src={item.img} alt=""></img>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <p>${item.price}</p>
        
        <ItemCount stock={5} initial={1} />
        
    </div>
    
  )
}

export default ItemDetail