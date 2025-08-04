import "./Navbar.css"
import logo  from "../../../assets/flower-logo.jpg"
import {Link} from "react-router-dom";
export function Navbar() {
    return (
        <div className="nav-container">
            <div className= "logo-content">
                <img src={logo} alt="flower-logo" className="logo-img"/>
            </div>
            <div className="nav-link-content">
                <ul>
                <li><Link to= "/">Home</Link></li>
                    <li><Link to = "/about">About</Link></li>
                    <li><Link to= "/contact/">Contact</Link></li>
                </ul>
                <button className="sign-in">Sign In</button>
            </div>
        </div>
    );
}