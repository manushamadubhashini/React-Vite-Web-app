import "./Home.css"
import Image from "../../../assets/flowe.jpg"
export function Home() {
    return (
        <div className="home-container">
            <img src={Image} alt="" className="home-img"/>
        </div>
    );
}