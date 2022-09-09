import React from "react"
import "./ProposalBar.css"
import ProposalCard from "./ProposalCard"

function ProposalBar() {
    const rows = []
    for (var i = 0; i < 5; i++) {
        rows.push(<ProposalCard/>);
    }

    return (
        <div className="proposalBarContainer">
            <div className="titleProposalContainer">Latest Activities</div>
            <div className="proposalCardsContainer">{rows})</div>
        </div>
    )
}

export default ProposalBar
