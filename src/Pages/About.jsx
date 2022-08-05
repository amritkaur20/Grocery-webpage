import React from "react";
import pic from "../images/mobile.png"
import pic2 from "../images/apple.png"
import pic3 from "../images/android.png"
import "../Css/About.css"
function About(){
    return(
        <div className="ab_container">
        <div className="ab_sub">
        <img  src={pic} className="ab_pic"></img>
        <section>
        <h3 className="ab_h">About Us</h3>
        <h2 className="content_title">Who We Are</h2>
        <hr/>
        <p>
        Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S.
        and other countries. App Store is a service mark of Apple Inc. Google Play is a
        trademark of Google Inc. Terms apply.
    </p>
    <div>
    <a href="">
    <img src={pic2} className="img-fluid"/>
</a>
<a href="">
    <img src={pic3} className="img-fluid"/>
</a>
</div>
        </section>
        
        </div>
        
        
        </div>
    )
}
export default About