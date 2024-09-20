import { DECREMENT, INCREMENT } from "../ActionType"

export const handleAdd=()=>{
    return{type:INCREMENT,payload:1}
}
export const handleReduce=()=>{
    return{type:DECREMENT,payload:1}
}