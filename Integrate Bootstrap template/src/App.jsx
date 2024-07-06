import { useState } from 'react'
import './App.css'
import Bootstap from './Componets/Bootstap'
import Darkmodes from './Componets/Darkmodes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
      <Bootstap />
      </div>
    </>
  )
}

export default App
