import React from "react";
import "../Css/Works.css"
import wpic from "../images/app-1.png"
import wpic2 from "../images/app-2.png"
import wpic3 from "../images/app-3.png"
import wpic4 from "../images/app-4.png"
import wpic5 from "../images/app-5.png"

function Works(){
    return(
        <div>
        <h1 className="w_title">How it Works</h1>
        <hr className="w_hr"/>
        <div className="w_img">
        <img src={wpic} className="w_pic"/>
        <img src={wpic2} className="w_pic"/>
        <img src={wpic3} className="w_pic"/>
        <img src={wpic4} className="w_pic"/>
        <img src={wpic5} className="w_pic"/>
        </div>
        
        </div>
    )
}
export default Works