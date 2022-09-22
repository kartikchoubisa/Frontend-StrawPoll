import "./App.css"
import SideNav from "./SideNav.js"
import MainDash from "./MainDash.js"
import Proposal from "./pages/Proposal.jsx"
import { MoralisProvider } from "react-moralis"
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

    function Layout() {
        return (
            <div className="container">
                <SideNav className="sideContainer" />
            </div>)
    }

    return (
        <MoralisProvider >

            <BrowserRouter>

                <Routes>
                    {/* <Route path="/" element={<Layout/>} > */}
                    {/* <Route index element = { <MainDash />} /> */}
                    {/* <Route path="proposal1" element = {<Proposal />} /> */}
                    {/* </Route> */}
                    <Route path="/" element={<Proposal url={"url"} />} />


                </Routes>
            </BrowserRouter>
        </MoralisProvider>

    )



}

export default App

