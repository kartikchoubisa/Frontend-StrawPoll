import React from "react"
import Discussion from "../components/Discussion"
import { useState, useEffect } from "react"
import { useMoralis, useWeb3Contract } from "react-moralis";
import abi from "../abi.json"
import contractAddressData from "../constants/contractAddress.json"


 

function Proposal({ url }) {
    const [content, setContent] = useState("")
    const contractAddress = contractAddressData.contractAddress
    const { runContractFunction: proposalDetail } = useWeb3Contract({
        abi: abi,
        contractAddress: contractAddress,
        functionName: "proposalDetail",
        params: {_uri: "testing..."},
    })
    async function testFetch() {
        const result = await proposalDetail()
        console.log(`testFetch result: ${result}`)
    }
    useEffect(() => {
        testFetch()
        // TODO:  get proposal content using url from IPFS
    }, [])

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
