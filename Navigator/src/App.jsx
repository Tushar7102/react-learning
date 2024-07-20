import { useContext, useState } from 'react'
import './App.css'
import { Allroutes } from './routes/Allrouts'
import Navbar from './componet/Navbar'
import { TheamContext } from './Context/Theam'

function App() {
  const{light}=useContext(TheamContext)

  return (
    <div style={{backgroundColor:light=="light"?"white":"black", color:light=="light"?"black":"white"}}>
    <Navbar/>
      <Allroutes />
    </div>
  )
}

export default App
