import "./MainContent.css"
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/home/Home.tsx";
import {About} from "../../pages/about/About.tsx";
import {Contact} from "../../pages/contact/Contact.tsx";

export function MainContent() {
    return (
        <div className="main-container">
            {/*<h1>This is Main Content</h1>*/}

            <Routes>
                <Route path="/*" element={<Home/>}/>
                <Route path= "/about" element={<About/>}/>
                <Route path = "/contact" element={<Contact/>}/>
            </Routes>


        </div>
    );
}