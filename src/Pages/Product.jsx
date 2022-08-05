import React from "react";
import "../Css/Product.css";
import ppic from "../images/dn-1.jpeg";
import ppic2 from "../images/dn-2.jpeg";
import ppic3 from "../images/dn-3.jpeg";
import ppic4 from "../images/dn-4.jpeg";
import ppic5 from "../images/dn-5.jpeg";
import ppic6 from "../images/dn-6.jpeg";
import ppic7 from "../images/dn-7.jpeg";
import ppic8 from "../images/dn-8.jpeg";
import ppic9 from "../images/dn-9.jpeg";
import ppic10 from "../images/dn-10.jpeg";
import ppic11 from "../images/dn-11.jpeg";
import ppic12 from "../images/dn-12.jpeg";


function Product() {
    return (
        <div className="p_con">
            <h1 className="p_title">Product Categories</h1>
            <hr className="p_hr" />
            <div className="p_head">
                <span>Daily Needs</span>
                <span>Fashion</span>
                <span>Gadgets</span>
                <span>Furniture</span>
            </div>
            <div className="grid-container">
                <div className="card">
                    <div className="image">
                        <img className="p_pic" src={ppic} />
                    </div>
                    <h3 className="p_name">Calfornia Almonds

                        ₹ 400.00
                    </h3>
                </div>
                <div className="card">
                    <div className="image">
                        <img className="p_pic" src={ppic2} />
                    </div>
                    <h3 className="p_name">Calfornia Almonds

                        ₹ 400.00
                    </h3>
                </div>
                <div className="card">
                    <div className="image">
                        <img className="p_pic" src={ppic3} />
                    </div>
                    <h3 className="p_name">Calfornia Almonds

                        ₹ 400.00
                    </h3>
                </div>
                <div className="card">
                    <div className="image">
                        <img className="p_pic" src={ppic4} />
                    </div>
                    <h3 className="p_name">Calfornia Almonds

                        ₹ 400.00
                    </h3>
                </div>
                <div className="card">
                    <div className="image">
                        <img className="p_pic" src={ppic5} />
                    </div>
                    <h3 className="p_name">Calfornia Almonds

                        ₹ 400.00
                    </h3>
                </div>
                <div className="card">
                    <div className="image">
                        <img className="p_pic" src={ppic6} />
                    </div>
                    <h3 className="p_name">Calfornia Almonds

                        ₹ 400.00
                    </h3>
                </div>
                <div className="card">
                    <div className="image">
                        <img className="p_pic" src={ppic7} />
                    </div>
                    <h3 className="p_name">Calfornia Almonds

                        ₹ 400.00
                    </h3>
                </div>
                <div className="card">
                    <div className="image">
                        <img className="p_pic" src={ppic8} />
                    </div>
                    <h3 className="p_name">Calfornia Almonds

                        ₹ 400.00
                    </h3>
                </div>  <div className="card">
                    <div className="image">
                        <img className="p_pic" src={ppic9} />
                    </div>
                    <h3 className="p_name">Calfornia Almonds

                        ₹ 400.00
                    </h3>
                </div>
                <div className="card">
                    <div className="image">
                        <img className="p_pic" src={ppic10} />
                    </div>
                    <h3 className="p_name">Calfornia Almonds  ₹ 400.00
                    </h3>
                </div>
                <div className="card">
                    <div className="image">
                        <img className="p_pic" src={ppic11} />
                    </div>
                    <h3 className="p_name">Calfornia Almonds  ₹ 400.00
                    </h3>
                </div>
                <div className="card">
                    <div className="image">
                        <img className="p_pic" src={ppic12} />
                    </div>
                    <h3 className="p_name">Calfornia Almonds ₹ 400.00
                    </h3>

                </div>
                
            </div>

            <buttton className="p_btn">View All Products</buttton>
        </div>
    )
}
export default Product