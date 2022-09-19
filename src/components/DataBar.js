import React, { useEffect, useState } from "react"
import "./DataBar.css"
import DataCard from "./DataCard"
import { useMoralis, useWeb3Contract } from "react-moralis"
import abi from "../abi.json"

function DataBar() {
    const [topAddr, setTopAddr] = useState()
    const [topName, setTopName] = useState("")
    const [card, setCard] = useState([])

    const { isWeb3Enabled } = useMoralis()

    const { runContractFunction: topContract } = useWeb3Contract({
        abi: abi,
        contractAddress: "0x5F5A7557EBB0C8dC9507D13944eD0b7F61dEd58C",
        functionName: "topContract",
        params: {},
    })
    useEffect(() => {
        async function updateUi() {
            const topCont = await topContract()
            const topA = await topCont.uri
            const topN = await topCont.name
            setCard([])
            console.log()
            // await topCont.uri
            console.log(topCont.name)
            setTopName(topN)
            setTopAddr(topA)
            console.log(topName)
            setCard((oldArray) => [
                ...oldArray,
                <DataCard
                    Title={"This Weeks Top Proposal"}
                    Data={topN}
                    TopContractAddress={topA}
                />,
            ])
        }
        updateUi()
    }, [isWeb3Enabled])
    return (
        <div className="dataBarContainer">
            <div className="tempContainer">
                {card}
                {/* <DataCard
                    Title={"This Weeks Top Proposal"}
                    Data={topName}
                    Link={"http:/ex...s.com"}
                    TopContractAddress = {topAddr}
                /> */}
                {/* <DataCard Title={"Price of GLMR"} Data={"$ 0.52"} />
                <DataCard
                    Title={"Next Burn"}
                    Data={"4 Days"}
                    Circle={"4/7 in circle form"}
                />
                <DataCard
                    Title={"Last Weeks Top Proposal"}
                    Data={"0xd34w...45fd"}
                    Link={"http:/ex...s.com"}
                /> */}
            </div>
        </div>
    )
}

export default DataBar
