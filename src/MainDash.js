import React, { useState } from "react"
import { ethers, BigNumber } from "ethers"
import strawPoll from "./StrawPoll.json"
import { useMoralis } from "react-moralis"

const strawPollAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
function MainDash() {
  const { enableWeb3 } = useMoralis()//a function that we get from hook useMoralis
  
    return <div>MainDash</div>
}

export default MainDash
