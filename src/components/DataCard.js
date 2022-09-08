import React from "react"
// import { Doughnut } from "react-chartjs-2"
import "./DataCard.css"

function DataCard({ Title, Data, Circle, Link }) {
    // const data = {
    //     datasets: [
    //         {
    //             data: [{ Circle }, 7],
    //             borderColor: ["rgba(255,206,86,0.2)"],
    //             backgroundColor: [
    //                 "rgba(232,99,132,1)",
    //                 "rgba(232,211,6,1)",
    //                 "rgba(54,162,235,1)",
    //                 "rgba(255,159,64,1)",
    //                 "rgba(153,102,255,1)",
    //             ],
    //             pointBackgroundColor: "rgba(255,206,86,0.2)",
    //         },
    //     ],
    // }
    // const options = {
    //     plugins: {
    //         title: {
    //             display: true,
    //             text: "Doughnut Chart",
    //             color: "blue",
    //             font: {
    //                 size: 34,
    //             },
    //             padding: {
    //                 top: 30,
    //                 bottom: 30,
    //             },
    //             responsive: true,
    //             animation: {
    //                 animateScale: true,
    //             },
    //         },
    //     },
    // }
    return (
        <div className="dataCardContainer">
            <div className="titleContainer">{Title}</div>
            <div className="dataContainer">{Data}</div>
            <div className="extraContainer">
                <div className="circleContainer">
                    {/* <Doughnut data={data} options={options} /> */}{Circle}
                </div>
                <div className="linkContainer">{Link}</div>
            </div>
        </div>
    )
}

export default DataCard
