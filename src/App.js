import "./App.css"
import SideNav from "./SideNav.js"
import MainDash from "./MainDash.js"
// import { MoralisProvider } from "react-moralis"

function App() {
    return (
        // <MoralisProvider initializeOnMount={false}>
            <div className="container">
                <SideNav className="sideContainer" />
                <MainDash className="mainContainer" />
            </div>
        // </MoralisProvider>
    )
}

export default App
