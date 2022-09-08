import React from "react"
import "./DataBar.css"
import DataCard from "./DataCard"

function DataBar() {
    return (
        <div className="dataBarContainer">
            <div className="tempContainer">
                <DataCard
                    Title={"This Weeks Top Proposal"}
                    Data={"0xd34w...45fd"}
                    Link={"http:/ex...s.com"}
                />
                <DataCard Title={"Price of GLMR"} Data={"$ 0.52"} />
                <DataCard
                    Title={"Next Burn"}
                    Data={"4 Days"}
                    Circle={"4/7 in circle form"}
                />
                <DataCard
                    Title={"Last Weeks Top Proposal"}
                    Data={"0xd34w...45fd"}
                    Link={"http:/ex...s.com"}
                />
            </div>
        </div>
    )
}

export default DataBar
