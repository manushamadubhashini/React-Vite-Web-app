import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout.tsx";
import {Login} from "./view/pages/login/Login.tsx";

function App() {

  return (
    <div className="app">
        <BrowserRouter>
           <Routes>
               <Route path="/*" element={<DefaultLayout />}></Route>
               <Route path="/login" element={<Login />}></Route>
           </Routes>

        </BrowserRouter>

    </div>
  )
}

export default App
