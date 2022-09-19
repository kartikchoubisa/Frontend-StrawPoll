import React from "react"
import Modal from "@mui/material/Modal"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import "./Modal.css"
import MDEditor from "@uiw/react-md-editor"

function ModalTab({ open, handleClose }) {
    const [name, setName] = React.useState("")
    const [markDownValue, setMarkDownValue] = React.useState(
        "type proposal here ...."
    )

    const handleClick = () => {
        
    }
    const handleNameChange = (event) => {
        setName(event.target.value)
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
                        value={name}
                        onChange={handleNameChange}
                        sx={{
                            width: { sm: 400, md: 600 },
                            margin: { sm: 2, md: 2 },
                        }}
                    />
                    <MDEditor
                        value={markDownValue}
                        onChange={setMarkDownValue}
                        className="editorContainer"
                    />
                    <button onClick={handleClick}>Submit</button>
                </Box>
            </div>
        </Modal>
    )
}

export default ModalTab
