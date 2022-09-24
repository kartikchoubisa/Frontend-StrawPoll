import React from "react"
import { ReactSVG } from 'react-svg'

import { multiavatar } from "@multiavatar/multiavatar"
import { useEffect } from "react"
import axios from "axios"

function ProfilePicture() {

    // const [profilePicture, setProfilePicture] = React.useState("")

    // async function generateProfilePicture(address) {
    //     let avatarId = "Binx Bond"
    //     const res = await axios.get("https://api.multiavatar.com/" + JSON.stringify(avatarId))
    //     const svg = res.data
    //     console.log("svg of profile pic", svg)
    //     setProfilePicture(svg)
    //     // return svg
    // }

    // useEffect(() => {
    //     generateProfilePicture()
    // }, [])

    return <div>
        <img src="https://api.multiavatar.com/BinxBond.svg" />
    </div>
}

export default ProfilePicture
