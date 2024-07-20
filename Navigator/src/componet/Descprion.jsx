import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Descprion() {
    const[singlepagedata,setsinglepagedata]=useState([])
    const params=useParams();3
    const descfunction=()=>{
        axios.get(`http://localhost:3000/product/${params.id}`)
        .then((res)=>{setsinglepagedata(res.data)})
        .catch((err)=>{console.log(err)})

    }
    useEffect(()=>{
        descfunction()
    },[])
  return (
    <div style={{textAlign:"center"}}>
      <h1>Description Page</h1>
      <div>
            <h1>{singlepagedata.id}</h1>
            <img style={{ width: "200px", height: "200px" }} src={singlepagedata.image} alt="" />
            <h1>$ {singlepagedata.price}</h1>
            <h5>{singlepagedata.title}</h5>
            <h6>{singlepagedata.category}</h6>
            <p>{singlepagedata.description}</p>
          </div>
    </div>
  )
}

export default Descprion
