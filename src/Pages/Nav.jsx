import React from "react";
import "../Css/Nav.css"
import logo from "../images/logo.png"


function Nav(){
   
    return(
     
        <div className="n_nav">
        <div className="n_container">
        <img src={logo} className="main"/>
        <div className="sub-head">
        <span className="nav_head" >Home</span>
        <span className="nav_head" >Categories</span>
        <span className="nav_head">Brands</span>
        <span className="nav_head">Career</span>
        <span className="nav_head">Contact Us</span>
        <button className="nav_btn">Download App</button>
        </div>
        </div>
        </div>
    )
}
export default Nav