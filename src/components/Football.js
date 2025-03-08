const Football=()=>{

    const shoot=(a, b)=>{
        alert(`${a}  ${b.type} was trigerred`)
    }
    return(
        <button onClick={
            (event)=>shoot("Goal!!!", event)
        }>Take a shoot
        </button>
    )
}

export default Football