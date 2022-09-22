import "./App.css"
import SideNav from "./components/SideNav"
import MainDash from "./components/MainDash"
import Proposal from "./pages/Proposal.jsx"
import { MoralisProvider } from "react-moralis"
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

    function HomePage() {
        return (
            <div className="container">
                <SideNav className="sideContainer" />
                <MainDash className="mainContainer" />
            </div>)
    }

    function ProposalPage() {
        return (
            <div className="container">
                <SideNav className="sideContainer" />
                <Proposal url="testing..." className="proposalContainer" />
            </div>)
    }

    return (
        <MoralisProvider >

            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/proposal" element={<ProposalPage />} />
                </Routes>
            </BrowserRouter>
        </MoralisProvider>

    )



}

export default App

