import { useState} from "react";

const Form=()=>{
    const [ inputValue, setInputValue]=useState("")
    const handleChange=(event)=>{
    setInputValue(event.target.value)
    }
    return(
        <div>
            <form>
                <h2><b>Form</b></h2>
                <input 
                value={inputValue} onChange={handleChange} placeholder="Type Something..."
                >
                </input>
            </form>
            <p>You Typed : {inputValue}</p>
        </div>
    )
}

export default Form