import { useContext } from "react";
import { userContext } from "./Comp1";
import Comp3 from "./Comp3";
const Comp2=()=>{

    const {user}=useContext(userContext)
    return(
        <div>
            <h4>{user} is a Passionate tech Enthusiast</h4>
            <Comp3></Comp3>
        </div>
    )
}

export default Comp2