import React, { useState } from "react"
import { ethers, BigNumber } from "ethers"
import strawPoll from "./StrawPoll.json"
import IntroBar from "./components/IntroBar"
import DataBar from "./components/DataBar"
import ProposalBar from "./components/ProposalBar"

import "./MainDash.css"
// import { useMoralis } from "react-moralis"

const strawPollAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
function MainDash() {
    // const { enableWeb3 } = useMoralis()//a function that we get from hook useMoralis

    return (
        <div className="mainDashContainer">
            <div className="introBarContainer"><IntroBar/></div>
            <div className="dataBarContainer"><DataBar/></div>
            <div className="proposalBarContainer"><ProposalBar/></div>
        </div>
    )
}

export default MainDash
