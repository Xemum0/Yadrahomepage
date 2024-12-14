import React from "react";

const PercentageContainer = ({percentage,color})=>{

    return (
        <div style={{width:"100%",height:"8px",borderRadius:"9999px",backgroundColor:"#cfd2d4"}}>
            <div style={{width:`${percentage}%`,height:"100%",backgroundColor:color,borderRadius:"9999px"}}>
            </div>
        </div>
    )
}

export default PercentageContainer