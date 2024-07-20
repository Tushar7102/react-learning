import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TheamContext } from '../Context/Theam'

function Product() {
    const {light}=useContext(TheamContext)
    const[productdata,setproductdata]=useState([])
   const fetch=()=>{
    axios.get("http://localhost:3000/product")
.then((res)=>{
    setproductdata(res.data)
})
.catch((err)=>(console.log(err)))
   }
   useEffect(()=>{
    fetch()
   },[])

  return (
    <div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", alignItems:"center" , color:light=="light"?"black":"white"}}>
      {productdata.map((el)=>(
          <div key={el.id} style={{textAlign:"center"}}>
          <Link to={`/description/${el.id}`}>
            <img src={el.image} width={200} height={200}></img>
            <h1>$ {el.price}</h1>
            <h3>{el.title}</h3>
            <p>{el.category}</p>
            </Link>
          </div>
      ))}
    </div>
    </div>
  )
}

export default Product
