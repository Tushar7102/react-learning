import { useState } from 'react'
import './App.css'
import Them from './Componets/Them'
import { useSelector } from 'react-redux'
import CounterButtons from './Componets/Counter/CounterButtons'
import { CounterValue } from './Componets/Counter/CounterValue'

function App() {
  const theme = useSelector((store) => store.TheamReducer);

  return (
    <div className='main-wrapper'>
      <Them />
      <div className='Counter-wraper' style={{ backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }}>
      <CounterValue />
      <CounterButtons />
      </div>
    </div>
  )
}

export default App
