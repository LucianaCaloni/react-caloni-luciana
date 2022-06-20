import React from 'react'
import "../ItemDetail/ItemDetail.css"

function ItemDetail({item}) {
  return (
    
    <div className='detalle-style'>
      <img src={item.img}></img>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <p>$ {item.price}</p>
    </div>
    
  )
}

export default ItemDetail