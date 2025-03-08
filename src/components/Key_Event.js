import { useState } from "react"

const KeyCounter=()=>{
const [keyCount, setKeyCount]=useState(0)

const handleKeyPress=()=>{
    setKeyCount((count)=>count+1)
}
return(
    <div tabIndex={0} onKeyPress={handleKeyPress}>
        <p>Press any key increase the counter</p>
     <p>Key press Count : {keyCount}</p>
    </div>
)
}

export default KeyCounter