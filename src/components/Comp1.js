import { useState, createContext} from "react"
import Comp2 from "./Comp2";

export const userContext=createContext()

const Comp1=()=>{
  const [user, setUser]=useState("Sujata's");
  const [role, setRole]=useState("Developer");

  return(
    <userContext.Provider value={{user, role}}>
    <h2>Basic Information</h2>
    <h4>{`Hello ${user}`}</h4>
    <Comp2></Comp2>
    </userContext.Provider>
  )
}
export default Comp1