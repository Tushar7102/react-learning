import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Authcontext } from '../Context/Authcontext'

function Private({children}) {
    const {login,isauth}=useContext(Authcontext)
    if(!isauth)
    {
        return <Navigate to={"/Login"}/>
    }
  return children
}

export default Private
