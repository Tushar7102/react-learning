import React from 'react'

function Card(image,price,title,category) {
  return (
    <div>
      <img src={image}></img>
      <h3>{title}</h3>
      <p>{price}</p>
      <p>{category}</p>
    </div>
  )
}

