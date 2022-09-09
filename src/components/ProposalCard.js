import React from "react"
import "./ProposalCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faThumbsUp,
    faThumbsDown,
    faComment,
} from "@fortawesome/free-solid-svg-icons"

function ProposalCard() {
    return (
        <div className="proposalCardContainer">
            <div className="porposalCardDataContainer">
                <div className="proposalCircleContainer"></div>
                <div className="proposalAuthorDataContainer">
                    <div className="proposalTitleContainer">Proposal Title</div>
                    <div className="proposalAuthorContainer">
                        Proposal Author
                    </div>
                </div>
            </div>
            <div className="proposalReactionsContainer">
                <div className="proposalReactionContainer">
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <div>{12}</div>
                </div>
                <div className="proposalReactionContainer">
                    <FontAwesomeIcon icon={faThumbsDown} />
                    
                    <div>{13}</div>
                </div>
                <div className="proposalReactionContainer">
                    <FontAwesomeIcon icon={faComment} />
                    <div>{15}</div>
                </div>
            </div>
        </div>
    )
}

export default ProposalCard
