import React from 'react'
import { useSelector } from 'react-redux'

export function CounterValue() {
  const { counter } = useSelector((Store) => Store.CounterReducer)
  // console.log(counter)
  return (
    <div>
      <h1>Counter</h1>
      <h1>{counter}</h1>
    </div>
  )
}