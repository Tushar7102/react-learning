import { createContext, useState } from "react"

export const Authcontext=createContext()

export const Authcontextproviderfunction=({children})=>{
    const[isauth,setauth]=useState(false)
    const login=(value)=>{
        setauth(value)
    }
    const logout=()=>{
        setauth(false)
    }
    return <Authcontext.Provider value={{login,logout,isauth}}>{children}</Authcontext.Provider>
}