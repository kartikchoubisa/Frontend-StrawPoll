import React from "react"
import Discussion from "../components/Discussion"
import { useState, useEffect } from "react"
import { useMoralis, useWeb3Contract } from "react-moralis";
import abi from "../abi.json"
import contractAddressData from "../constants/contractAddress.json"


 

function Proposal({ url }) {
    const [content, setContent] = useState("")
    const [proposalDetailsOnContract, setProposalDetailsOnContract] = useState([])
    const { Moralis, enableWeb3, isWeb3Enabled } = useMoralis()

    const contractAddress = contractAddressData.contractAddress
    const { runContractFunction: proposalDetail } = useWeb3Contract({
        abi: abi,
        contractAddress: contractAddress,
        functionName: "proposalDetail",
        // update to use uri from component
        params: {_uri: "xyz"},
    })

    async function updateProposalDetails() {
        try{
            const result = await proposalDetail()
            console.log(`testFetch result`, result)
            setProposalDetailsOnContract(result)

        } catch (error) {
            console.log(`testFetch error`, error)
            console.log("check if web3 is enabled")
        }
    }

    useEffect(() => {
        console.log("web3 enabled? ", isWeb3Enabled)

        // get proposal info from contract
        if (isWeb3Enabled) {
            updateProposalDetails()
        }
        else if (typeof window !== "undefined") {
            if (window.localStorage.getItem("connected")) {
                enableWeb3()
                console.log("enabled web3")
            }
        }

        // TODO:  get proposal content using url from IPFS
        

    }, [isWeb3Enabled])

    return (
        <div className="proposalContainer">
            <div>
                proposal
                {/* TODO : render markup  */}

            </div>

            <Discussion url={url} />
        </div>
    )
}

export default Proposal
