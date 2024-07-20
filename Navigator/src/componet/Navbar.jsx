import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Authcontext } from '../Context/Authcontext'
import { TheamContext } from '../Context/Theam'

function Navbar() {
    const {light,theamset}=useContext(TheamContext)
    const {logout}=useContext(Authcontext)
  return (
    <div style={{display:"flex", justifyContent:"space-around"}}>
      <Link to="/">Home</Link>
      <Link to="/Product">Product</Link>
      <Link to="/Login">Login</Link>
      <button onClick={logout}>Logout</button>
      <button onClick={theamset}>{light}</button>
    </div>
  )
}

export default Navbar
