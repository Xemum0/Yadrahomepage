import React from "react";
import './infosComponent.css'

var InfosComponent = ({icon,info})=>{
    return(
        <div className="infosComponent">
            <div className="logo">
                {icon}
            </div>
            <div className="infos">
                {info}
            </div>
        </div>
    );
}

export default InfosComponent