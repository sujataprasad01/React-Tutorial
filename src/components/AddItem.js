import { useState } from "react"

const AddItem=()=>{
    const [items, setItems]=useState(["Item 1", "Item 2", "Item 3"])
    const addArrayItem=()=>{
        setItems([...items, `Item ${items.length+1}`])
    }
    return (
<div>
    <ul>.
        {items.map(
            (item, index)=>(
                <li key={index}>{item}</li>
            )
        )
        }
    </ul>
    <button onClick={addArrayItem}>Add Item</button>
</div>
    )
}

export default AddItem