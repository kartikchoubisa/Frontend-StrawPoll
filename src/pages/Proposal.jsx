import React from "react"
import Discussion from "../components/Discussion"
import { useState, useEffect } from "react"
import { useMoralis, useWeb3Contract } from "react-moralis"
import abi from "../abi.json"
import contractAddressData from "../constants/contractAddress.json"
import axios from "axios"
import dataConst from "../constants/data.json"
import "./Proposal.css"
import MDEditor from "@uiw/react-md-editor"

function Proposal({ url }) {
    const [proposalDetails, setProposalDetails] = useState({
        uri: "",
        name: "",
        proposer: 0,
        upVotes: 0,
        downVotes: 0,
        markDownData: "",
    })
    const { Moralis, enableWeb3, isWeb3Enabled } = useMoralis()

    const contractAddress = contractAddressData.contractAddress
    const { runContractFunction: proposalDetail } = useWeb3Contract({
        abi: abi,
        contractAddress: contractAddress,
        functionName: "proposalDetail",
        // update to use uri from component
        params: { _uri: "xyz" },
    })

    async function updateProposalDetailsFromContract() {
        try {
            const result = await proposalDetail()
            console.log(`data from contract`, result)
            let { uri, name, upVotes, downVotes, proposer } = result //upvotes, downvotes are BigNumber objs
            //bigint to integer
            upVotes = parseInt(upVotes)
            downVotes = parseInt(downVotes)
            console.log(uri, name, upVotes, downVotes, proposer)
            setProposalDetails((state) => ({
                ...state,
                uri,
                name,
                upVotes,
                downVotes,
                proposer,
            }))
        } catch (error) {
            console.log(`testFetch error`, error)
            console.log("check if web3 is enabled")
        }
    }

    async function updateProposalDetailsFromIPFS() {
        // TODO: use URL parameter form parent compnent (for now hardcoded)
        url =
            "https://gateway.pinata.cloud/ipfs/QmbKN3R7j8ya4DWcKHwuUR2EjiT91pSPc7pwDXaqytGcrn"
        try {
            const response = await axios({
                method: "get",
                url: url,
            })

            const { address, markDownData } = await response.data
            console.log("data from IPFS", { address, markDownData })
            setProposalDetails((state) => ({
                ...state,
                markDownData,
            }))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log("web3 enabled? ", isWeb3Enabled)

        // get proposal info from contract
        if (isWeb3Enabled) {
            updateProposalDetailsFromContract()
            updateProposalDetailsFromIPFS()
        } else if (typeof window !== "undefined") {
            if (window.localStorage.getItem("connected")) {
                enableWeb3()
                console.log("enabled web3")
            }
        }

        // TODO:  get proposal content using url from IPFS
    }, [isWeb3Enabled])

    return (
        <div className="proposalContainer">
            <div className="proposalHeading">
                <div className="proposalName">
                    <h1>{proposalDetails.name}</h1>
                </div>
                <div className="proposalAuthor">
                    <div>by {proposalDetails.proposer}</div>
                </div>
            </div>
            <div className="ProposalBody">
            <div>
                {/* TODO: render markup */}
                <MDEditor.Markdown
                    source={proposalDetails.markDownData}
                    style={{ whiteSpace: "pre-wrap", backgroundColor:"white", color:"black" }}
                    className="proposalContent"
                />
                
            </div>
            <div id="rectangle"></div>
            </div>
            <div className="proposalFooter">
                <div className="proposalUpVotes">
                    Upvotes: {proposalDetails.upVotes}
                </div>
                <div className="proposalDownVotes">
                    Downvotes: {proposalDetails.downVotes}
                </div>
            </div>

            <div class="solid"></div>
            
            <div className="proposalDiscussion">
                <Discussion url={url} />
            </div>

            {/* <div>uri: {proposalDetails.uri}</div>
                <div>name: {proposalDetails.name}</div>
                <div>proposer: {proposalDetails.proposer}</div>
                <div>upvotes: {proposalDetails.upVotes}</div>
                <div>downvotes: {proposalDetails.downVotes}</div>
                <div>markdown: {proposalDetails.markDownData}</div> */}
        </div>
    )
}

export default Proposal
