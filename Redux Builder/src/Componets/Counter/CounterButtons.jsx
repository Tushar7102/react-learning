import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleAdd, handleReduce } from '../../Redux/Counter/Action'

function CounterButtons() {
    const { counter } = useSelector((Store) => Store.CounterReducer)
    const dispatch = useDispatch()
    return (
        <div style={{margin:"20px 0px"}}>
                    <button className='count-Btn-Add' onClick={() => { dispatch(handleAdd()) }}>ADD</button>
            <button className='count-Btn' disabled={counter == 0} onClick={() => { dispatch(handleReduce()) }}>REDUCE</button>
        </div>
    )
}

export default CounterButtons