import React, { useContext } from 'react'
import { Themcontext } from '../context/Theamcontext'

function Navbar() {
    const {them} =useContext(Themcontext)
  return (
    <div>
      <h1>Navbar</h1>
      <h3>The Them is {them}</h3>
    </div>
  )
}

export default Navbar
