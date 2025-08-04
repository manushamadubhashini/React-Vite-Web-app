import './App.css'
import {BrowserRouter} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout.tsx";

function App() {

  return (
    <div className="app">
        <BrowserRouter>
            <DefaultLayout/>

        </BrowserRouter>

    </div>
  )
}

export default App
