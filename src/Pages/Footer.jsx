import React from "react"
import "../Css/Footer.css"
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import pic2 from "../images/apple.png"
import pic3 from "../images/android.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from "../images/logo.png"

function Footer() {
    return (
        <div className="f_bg">
            <p className="f_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, tempore?</p>
            <p className="f_info"><CallIcon/> +91-8588807388</p>
            <p className="f_info"><EmailIcon/> infor@dataifor.in</p>
            <div className="f_icon">
            <FacebookIcon className="f_iconn"/>
            <TwitterIcon className="f_iconn"/>
            <InstagramIcon className="f_iconn"/>
            </div>
            <div className="f_con">
                <div className="f_sub">
                    <h4 className="f_head">
                        Product Links
                    </h4>
                    <ul className="f_cat">
                        <li>
                            <a href="https://mochakapp.com/index.php">
                                All Categories
                            </a>
                        </li>
                        <li>
                            <a href="https://mochakapp.com/index.php">
                                All Brands
                            </a>
                        </li>
                        <li>
                            <a href="https://mochakapp.com/index.php">
                                All Furnitures
                            </a>
                        </li>
                        <li>
                            <a href="https://mochakapp.com/index.php">
                                Daily Needs
                            </a>
                        </li>
                        <li>
                            <a href="https://mochakapp.com/index.php">
                                Fashion
                            </a>
                        </li>
                        <li>
                            <a href="https://mochakapp.com/index.php">
                                Gadgets
                            </a>
                        </li>
                        <li>
                            <a href="https://mochakapp.com/index.php">
                                Fast Foods
                            </a>
                        </li>
                        <li>
                            <a href="https://mochakapp.com/index.php">
                                Dry Fruits
                            </a>
                        </li>
                        <li>
                            <a href="https://mochakapp.com/index.php">
                                Dairy Products
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="f_con">
                <div className="f_sub">
                    <h4 className="ff_head">
                        Policy
                    </h4>
                    <ul className="f_pol">
                        <li>
                            <a href="https://mochakapp.com/index.php">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="https://mochakapp.com/index.php">
                                Shopping Policy
                            </a>
                        </li>
                        <li>
                            <a href="https://mochakapp.com/index.php">
                                Sale &amp; Purchase Policy
                            </a>
                        </li>
                        <li>
                            <a href="https://mochakapp.com/index.php">
                                Exchange Policy
                            </a>
                        </li>
                        <li>
                            <a href="https://mochakapp.com/index.php">
                                App &amp; Web Policy
                            </a>
                        </li>
                        <li>
                            <a href="https://mochakapp.com/index.php">
                                Data Policy
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="f_div">
    <a href="">
    <img src={pic2} className="imgg-fluid"/>
</a>
<a href="">
    <img src={pic3} className="imgg-fluid"/>
</a>
</div>
<hr className="f_hr"/>
<img src={logo} className="f_logo"/>
            <section className="f_foot">
                <p className="f_footsub">
                    ©Copyright 2022 by Ripples Engineering Pvt. Ltd. All rights reserved. || Designed &amp; maintained by
                    Frantic Technologies
                </p>
            </section>
        </div>

    )
}
export default Footer;