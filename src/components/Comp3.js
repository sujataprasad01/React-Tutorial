import { useContext } from "react";
import { userContext } from "./Comp1";

const Comp3=()=>{
    const {role}=useContext(userContext)
    return(
        <div>
            <h2>User role</h2>
            <h4>Role of user is {role}</h4>
        </div>
    )

}

export default Comp3