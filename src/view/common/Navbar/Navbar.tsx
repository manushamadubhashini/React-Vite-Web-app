import "./Navbar.css"
import logo  from "../../../assets/flower-logo.jpg"
export function Navbar() {
    return (
        <div className="nav-container">
            <div className= "logo-content">
                <img src={logo} alt="flower-logo" className="logo-img"/>
            </div>
            <div className="nav-link-content">
                <ul>
                <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <button className="sign-in">Sign In</button>
            </div>
        </div>
    );
}