import Avatar from "./Avatar";
import Bio from "./Bio";
const Profile = () => {
    return (
        <div>
            {/*Using Avatar component */}
            <Avatar imageurl="/Images/profile.jpg"/>
            <Bio name="Sandhya Pillai" bio="A Passionate web Developer "/>
        </div>
    )
}
export default Profile