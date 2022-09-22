import React from "react"
import Modal from "@mui/material/Modal"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { useWeb3Contract } from "react-moralis"
import abi from "../abi.json"
import contractAddressData from "../constants/contractAddress.json"
import "./Modal.css"
import MDEditor from "@uiw/react-md-editor"
import axios from "axios"
import dataConst from "../constants/data.json"

function ModalTab({ open, handleClose }) {
    const [address, setAddress] = React.useState("")
    const [textUrl, setTextUrl] = React.useState("testing..")
    const [markDownValue, setMarkDownValue] = React.useState(
        "type proposal here ...."
    )
    const testData = "hi there"
    const contractAddress = contractAddressData.contractAddress
    const { runContractFunction: addProposal } = useWeb3Contract({
        abi: abi,
        contractAddress: contractAddress,
        functionName: "addProposal",
        params: { _uri: textUrl, _proposer: address, _name: "hi there" },
    })

    const handleClick = async () => {
        console.log(address)
        console.log(markDownValue)
        console.log("entered...")

        try {
            const resJson = await axios({
                method: "post",
                url: "https://api.pinata.cloud/pinning/pinJsonToIPFS",
                data: { address: address, markDownData: markDownValue },
                headers: {
                    pinata_api_key: dataConst.pinataApi,
                    pinata_secret_api_key: dataConst.pinataApiSecret,
                },
            })

            console.log("final ", `ipfs://${resJson.data.IpfsHash}`)
            setTextUrl(`ipfs://${resJson.data.IpfsHash}`)
            await addProposal()
            console.log("proposal added... refresh...")
        } catch {}
    }

    const handleAddressChange = (event) => {
        setAddress(event.target.value)
    }

    return (
        <Modal open={open} onClose={handleClose}>
            <div className="modalStyleContainer">
                <Box
                    className="boxStyleContainer"
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-name"
                        label="Proposer's Address"
                        value={address}
                        onChange={handleAddressChange}
                        sx={{
                            width: { sm: 400, md: 600 },
                            margin: { sm: 2, md: 2 },
                        }}
                    />
                    <MDEditor
                        value={markDownValue}
                        onChange={setMarkDownValue}
                        className="editorContainer"
                    ></MDEditor>

                    <div onClick={handleClick}>Submit</div>
                    {textUrl}
                </Box>
            </div>
        </Modal>
    )
}

export default ModalTab
