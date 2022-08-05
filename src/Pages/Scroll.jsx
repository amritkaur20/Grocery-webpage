import React from "react";
import scroll from "../images/banner-3.jpeg"
import pic from "../images/android-white.png"
import pic2 from "../images/apple-white.png"
import "../Css/Scroll.css"


function Scroll(){
    return(
        <div>
<img src={scroll} className="s_pic"/>

<h2 className="s_head">
Investing for your savings
</h2>
<p className="s_pa">
An Application for saving, spending and investing for the Best price &amp; Best product
</p>
<div className="s_div">
<a href="">
<img src={pic} className="s-fluid"/>
</a>
<a href="">
<img src={pic2} className="s-fluid"/>
</a>
</div>
        </div>
    )
}
export default Scroll