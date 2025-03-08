import Component3 from "./Component3"

const Component2=({age})=>{
  return(
    <div>
        <h1>
        Component2
        </h1>
    <Component3 userAge={age}></Component3>
    </div>
  )
}
export default Component2