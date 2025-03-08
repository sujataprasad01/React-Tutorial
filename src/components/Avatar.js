const Avatar =({ imageurl }) =>
    {
        return <div>
            <img src={imageurl} alt="User Avatar"
            height="200px" width="200px"
            style={{borderRadius:"100px"}}>
            </img>
        </div>
    }
    export default Avatar