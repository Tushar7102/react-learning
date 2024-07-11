import { useContext, useState } from 'react'
import './App.css'
import Navbar from './componets/Navbar'
import Midsection from './componets/Midsection'
import { Themcontext } from './context/Theamcontext'
import { IoMoon } from "react-icons/io5";
import { FaSun } from "react-icons/fa";

function App() {
 const {setthemfunction , them} =useContext(Themcontext)
//  console.log(dataset)

  return (
    <>
<div style={{backgroundColor:them=="light"?"white":"black"  ,color:them=="light"?"black":"white", padding:"20px 50px 50px 50px"}}>
  <Navbar />
  <Midsection />
</div>
<button style={{backgroundColor:them=="light"?"white":"black"  ,color:them=="light"?"black":"white", outline:"none", border:"none", margin:"20px 0px", padding:"5px 10px 2px 10px", fontSize:"20px"}} onClick={setthemfunction}>
  <h3 style={{margin:"0px"}}> {them=="light"? <IoMoon />: <FaSun />}</h3>
</button>
    </>
  )
}

export default App
