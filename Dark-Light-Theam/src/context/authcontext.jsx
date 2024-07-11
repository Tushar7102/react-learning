import { createContext, useState } from "react";


//create
export const authcontext=createContext()

export function Authcontextproviderfunction({children}){
    const[auth,setauth]=useState(false)

    const loginfunction=()=>{
        setauth(true)
    }
    const logoutfunction=()=>{
        setauth(false)
    }
    return(
        <authcontext.Provider value={{auth,loginfunction,logoutfunction}}>{children}</authcontext.Provider>
    )
}