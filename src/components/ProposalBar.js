import React, { useState, useEffect } from "react"
import "./ProposalBar.css"
import ProposalCard from "./ProposalCard"
import { useMoralis, useWeb3Contract } from "react-moralis"
import abi from "../abi.json"
import contractAddressData from "../constants/contractAddress.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faCircle } from "@fortawesome/free-solid-svg-icons"
import ModalTab from "./Modal"

import { ApiPromise, WsProvider } from "@polkadot/api"

function ProposalBar({userAddr}) {
    const [proposals, setProposals] = useState([])
    const [open, setOpen] = React.useState(false)
    const contractAddress = contractAddressData.contractAddress
    const temp = []
    const { chainId, isWeb3Enabled } = useMoralis()
    // console.log(contractAddress.contractAddress)
    const { runContractFunction: viewAllProposals } = useWeb3Contract({
        abi: abi,
        contractAddress: contractAddress,
        functionName: "viewAllProposals",
        params: {},
    })
    // console.log(open)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    useEffect(() => {
        async function updateUi() {
            const temp = await viewAllProposals()
            // const api = await ApiPromise.create();
            // const wsProvider = new WsProvider("wss://rpc.polkadot.io")
            // const api = await ApiPromise.create({ provider: wsProvider })
            // const txHash = api.tx.system
            //     .remarkWithEvent("anighma")
            //     .method.hash.toHex()
            // await console.log(open);

            setProposals([])
            if (isWeb3Enabled)
                for (var i = 0; i < temp.length; i++) {
                    const {
                        name,
                        uri,
                        proposer,
                        upVotes,
                        downVotes,
                    } = await temp[i]
                    const upvotes = parseInt(upVotes)
                    const downvotes = parseInt(downVotes)
                    // console.log(api.tx.system.remarkWithEvent('anighma').method.hash.toHex())

                    // console.log(`${txHash}`)

                    setProposals((oldArray) => [
                        ...oldArray,
                        <ProposalCard
                            name={name}
                            uri={uri}
                            proposer={proposer}
                            upvote={upvotes}
                            downvote={downvotes}
                        />,
                    ])
                }
        }
        updateUi()
    }, [isWeb3Enabled])

    for (var i = 0; i < temp.length; i++) {
        setProposals((oldArray) => [...oldArray, <ProposalCard />])
    }
    return (
        <div className="proposalBarContainer">
            <div className="titleProposalContainer">
                <div className="titleProposalTopContainer">
                    Latest Proposals
                </div>
                <div onClick={handleOpen} className="addProposalContainer">
                    <div className="addProposalButtonContainer">Add Proposal</div>
                    <FontAwesomeIcon
                        icon={faPlus}
                        width={16}
                        className="plusContainer"
                    />
                </div>
            </div>
            <ModalTab userAddr={ userAddr} open={open} handleClose={handleClose} />
            <div className="proposalCardsContainer">{proposals}</div>
            
        </div>
    )
}

export default ProposalBar
