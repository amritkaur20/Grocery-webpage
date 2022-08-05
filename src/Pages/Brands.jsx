import React from "react";
import "../Css/Brands.css";
import bpic from "../images/br-1.jpeg";
import bpic2 from "../images/br-2.jpeg";
import bpic3 from "../images/br-3.jpeg";
import bpic4 from "../images/br-4.jpeg";
import bpic5 from "../images/br-5.jpeg";
import bpic6 from "../images/br-6.jpeg";
import bpic7 from "../images/br-7.jpeg";
import bpic8 from "../images/br-8.jpeg";

function Brands(){
    return(
        <div>
        <h1 className="p_title">Brands</h1>
        <hr className="p_hr" />
        <div className="b_con">
        <img src={bpic} className="b_pic"/>
        <img src={bpic2} className="b_pic"/>
        <img src={bpic3} className="b_pic"/>
        <img src={bpic4} className="b_pic"/>
        <img src={bpic5} className="b_pic"/>
        <img src={bpic6} className="b_pic"/>
        <img src={bpic7} className="b_pic"/>
        <img src={bpic8} className="b_pic"/>
        </div>
        <buttton className="b_btn">View All Products</buttton>
        </div>
    )
}
export default Brands