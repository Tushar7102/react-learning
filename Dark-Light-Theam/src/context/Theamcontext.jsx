import { createContext, useState } from "react";

//create
export const Themcontext =createContext()

//provider
export function Themcontextproviderfuncntion({children}){
const[them,setthem]=useState("light")

const setthemfunction=()=>{
    setthem(them==="light"?"dark":"light")
}
    return (
        <Themcontext.Provider value={{them,setthemfunction}}>{children}</Themcontext.Provider>
    )
}