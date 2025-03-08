import { useState} from "react"
import Component2 from "./Component2";

const Component1=()=>{
  const [userName, setUserName]=useState("Sujata");
  const [userAge, setUserAge]=useState(20);

  return(
    <div>
        <h1>
            Hello {userName}
        </h1>
        <Component2 age={userAge}></Component2>
    </div>
  )

}
export default Component1