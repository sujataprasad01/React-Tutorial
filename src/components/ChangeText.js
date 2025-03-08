import { useState } from "react"

const ChangeText =()=>{
    const [buttonText, setButtonText]= useState("Take a shot")

const handleclick=()=>{
    setButtonText("Goal")
}
return(
    <button onCLick={handleclick}>
        {buttonText}
        </button>
)
}
export default ChangeText