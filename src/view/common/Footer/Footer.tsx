import "./Footer.css"
import logo from "../../../assets/flower-logo.jpg"
export function Footer() {
    return (
        <div className="footer">
            <p className="copyright">Copyright © 2025</p>
            <img src={logo} alt="" className="icon"/>
        </div>
    );
}