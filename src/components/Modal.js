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

function ModalTab({ userAddr, open, handleClose }) {
    const [title, setTitle] = React.useState("")
    const [textUrl, setTextUrl] = React.useState("")
    const [markDownValue, setMarkDownValue] = React.useState(
        "type proposal here ...."
    )
    const testData = "hi there"
    const contractAddress = contractAddressData.contractAddress
    const { runContractFunction: addProposal } = useWeb3Contract({
        abi: abi,
        contractAddress: contractAddress,
        functionName: "addProposal",
        params: { _uri: textUrl, _proposer: userAddr, _name: title },
    })

    const handleClick = async () => {
        console.log(userAddr)
        console.log(markDownValue)
        console.log("entered...")

        try {
            const resJson = await axios({
                method: "post",
                url: "https://api.pinata.cloud/pinning/pinJsonToIPFS",
                data: { address: userAddr, markDownData: markDownValue },
                headers: {
                    pinata_api_key: dataConst.pinataApi,
                    pinata_secret_api_key: dataConst.pinataApiSecret,
                },
            })

            const temp = await resJson.data.IpfsHash
            console.log("final ", `ipfs://${temp}`)
            setTextUrl(`ipfs://${temp}`)
            if (textUrl.length > 0) await addProposal()
            else {
                console.log("bhai yeh kya kar raha hai")
            }
            console.log("proposal added... refresh...")
        } catch {}
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            radius="10px"
            className="modalContainer"
            
        >
            <div className="modalStyleContainer">
                <Box
                    className="boxStyleContainer"
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <div className="modalHeadMessage1">Have a new idea?</div>
                    {/* <div className="modalHeadMessage2">Let everyone know </div> */}
                    <div className="proposerAddressContainer">
                        <div>Proposer's Address :</div> <div>{userAddr}</div>
                    </div>
                    <TextField
                        id="outlined-name"
                        label="Proposal's Title"
                        value={title}
                        onChange={handleTitleChange}
                        sx={{
                            bgcolor: "white",
                            marginTop: "16px",
                            marginBottom: "16px",
                            width: { sm: 800 },
                        }}
                    />
                    <MDEditor
                        value={markDownValue}
                        onChange={setMarkDownValue}
                        className="editorContainer"
                    ></MDEditor>
                    <div className="buttonModalContainer" onClick={handleClick}>Submit</div>
                    
                    {textUrl}
                </Box>
            </div>
        </Modal>
    )
}

export default ModalTab
