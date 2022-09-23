import React from "react"
import "./SideNav.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faFacebook,faTwitter,faDiscord } from "@fortawesome/free-brands-svg-icons"


function SideNav() {
    return (
        <div className="sideNavContainer">
            <div className="logoContainer">Polkassembly</div>
            <div className="sideOptionsContainer">
                <div className="optionContainer">Dashboard</div>
                <div className="optionUnselectedContainer">My Proposal</div>
                <div className="optionUnselectedContainer">Settings</div>

            </div>
            <div className="socialContainer">
                <div className="githubContainer"><FontAwesomeIcon icon={faGithub} /></div>
                <div className="discordContainer"><FontAwesomeIcon icon={faTwitter} /></div>
                <div className="twitterContainer"><FontAwesomeIcon icon={faDiscord} /></div>
                <div className="facebookContainer"><FontAwesomeIcon icon={faFacebook} /></div>
            </div>
        </div>
    )
}
export default SideNav
