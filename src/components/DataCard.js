import React,{useState} from "react"
import "./DataCard.css"
import { useMoralis} from "react-moralis"


function DataCard({ Title, Data,TopContractAddress, Circle, Link }) {
    const { isWeb3Enabled } = useMoralis()
    const [title, setTitle] = useState(Title)
    const [data,setData] = useState(Data)
    const [topContractAddr,setTopContractAddr] = useState(TopContractAddress)
    // const [title,setTitle] = useState()
    // const [title,setTitle] = useState()
    
    return (
        <div className="dataCardContainer">
            <div className="titleContainer">{title}</div>
            
            {data ? (<div className="dataContainer">{Data.slice(0,18)}...</div>) : (<div className="dataContainer"></div>)}
            
            <hr className="lineContainer"
                style={{
                    background: "#FAFAFA",
                    color: "#FAFAFA",
                    borderColor: "#FAFAFA",
                    height: "1px",
                    margin:0
                }}
            />
            <div className="extraContainer">
                {/* {topContractAddr ? (<div >{topContractAddr.slice(0, 18)}...</div>) : (<div></div>)} */}
            {topContractAddr ? (<div className="viewMoreContainer">View More</div>):(<div></div>)}
                
                {/* <div className="extraContainer">{TopContractAddress}</div> */}
                {/* <div className="linkContainer">{Link}</div> */}
            </div>
        </div>
    )
}

export default DataCard
