import React from "react"
import "./Landing.css"
import image from "../assets/Image.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faGithub,
    faFacebook,
    faTwitter,
    faDiscord,
} from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useMoralis } from "react-moralis"

function Landing() {
    const { enableWeb3, isWeb3EnableLoading } = useMoralis()
    useEffect(() => {}, [])

    return (
        <div className="landingContainer">
            <div className="navContainer">
                <div className="logoNavContainer">StrawPoll</div>
                <Link
                    to="/"
                    onClick={async () => {
                        await enableWeb3()
                        if (typeof window !== "undefined") {
                            window.localStorage.setItem("connected", "injected")
                        }
                    }}
                    className="buttonNavContainer"
                    disable={isWeb3EnableLoading}
                >
                    Connect to Metamask
                </Link>
            </div>
            <div className="mainLandingContainer">
                <div className="headingLandingContainer">
                    <div className="heading1Container">Straw Poll</div>
                    <div className="heading2Container">
                        A democratised and accesible precursor to governance{" "}
                    </div>
                    <div className="socialContainer">
                        <div className="githubContainer">
                            <FontAwesomeIcon
                                icon={faGithub}
                                color="black"
                                width={24}
                            />
                        </div>
                        <div className="discordContainer">
                            <FontAwesomeIcon
                                icon={faTwitter}
                                color="black"
                                width={24}
                            />
                        </div>
                        <div className="twitterContainer">
                            <FontAwesomeIcon
                                icon={faDiscord}
                                color="black"
                                width={24}
                            />
                        </div>
                        <div className="facebookContainer">
                            <FontAwesomeIcon
                                icon={faFacebook}
                                color="black"
                                width={24}
                            />
                        </div>
                    </div>
                </div>
                <div className="photoLandingContainer">
                    <img src={image} height={600} width={600} alt="Logo" />
                </div>
            </div>
        </div>
    )
}

export default Landing
