import "./App.css"
import SideNav from "./SideNav.js"
import MainDash from "./MainDash.js"

function App() {
    return (
        <div className="container">
            <SideNav className="sideContainer"/>
            <MainDash className="mainContainer" />
        </div>
    )
}

export default App
