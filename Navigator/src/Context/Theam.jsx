import { createContext, useState } from "react";

export const TheamContext=createContext()


export const Contextproviderfunction=({children})=>{
    const[light,setlight]=useState("light")
    
    const theamset=()=>{
        setlight(light=="light"?"dark":"light")
    }
   return <TheamContext.Provider value={{light,theamset}}>{children}</TheamContext.Provider> 
}