import React from 'react'
const Dashboard = (props) => {
    return (
        <div>
            <h1>Hello ,{props.name}</h1>
            <p>You are {props.age} years olds.</p>
        </div>
    )
}
export default Dashboard