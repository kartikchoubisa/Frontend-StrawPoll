import React from "react"
import "./IntroBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell } from "@fortawesome/free-solid-svg-icons"

function IntroBar() {
    return (
        <div className="introBarContainer">
            <div className="welcomeContainer">
                <div className="headingContainer">Hi, Skylar</div>
                <div className="descContainer">
                    Welcome, check the lastest proposals this week
                </div>
            </div>
            <div className="profileContainer">
                <div className="notifContainer">
                    <FontAwesomeIcon icon={faBell} />
                </div>
                <div className="profilePicContainer"></div>
            </div>
            <div className="connectButtonContainer">
                <div className="connectWalletContainer">Connect Wallet</div>
            </div>
        </div>
    )
}

export default IntroBar
