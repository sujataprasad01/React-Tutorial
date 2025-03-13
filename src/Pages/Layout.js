import { Link} from "react-router-dom"
import { Outlet } from "react-router-dom"
const Layout=()=>{
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
            </nav>
            <Outlet></Outlet>
            
        </div>
    )
}

export default Layout