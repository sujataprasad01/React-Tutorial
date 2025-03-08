import { useState } from "react"

const ToggleButton=()=>{
const [initialState, setInitialState]=useState("On")
const toggleText=()=>{
    setInitialState(before =>(before==="On"?"Off":"On"));
}
return (
    <button onClick={toggleText}>{initialState}</button>
)
}
export default ToggleButton




