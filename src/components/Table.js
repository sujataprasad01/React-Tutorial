import { useState, useEffect } from "react";
const Table=()=>{

    const [count, setCount]=useState([0])
    const [calculation, setCalculation]=useState([0])

    useEffect(()=>{
        setCalculation(count.map((count)=>count*2));
      },[count]);
    
      const handleChange =()=>{
        setCount((c) =>[...c, c.length]);
      };

      return (
        <div>
          <button onClick={handleChange}>Press Here</button>
          {count.map((b,index)=>(
            <p key={index}>
              Multiplication: {b}*2={calculation[index]}
            </p>
          ))}
        </div>
    )
}

export default Table