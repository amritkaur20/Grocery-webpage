import React from "react";
import "../Css/Customer.css"
import { Rating, TextField } from "@mui/material";

function Customer(){
    return(
        <div className="pp_con">
        <h1 className="p_title">Customer Reviews</h1>
        <hr className="p_hr" />

        <aside>
        <h1 className="pg_h">Comments</h1>
        <img className="p_img" src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2019/08/Beautiful-Girl-Attitude-images-wallpaper-hd.gif"></img>
        <TextField id="standard-basic" label="Add a comment" sx={{ marginTop: "1rem" }} variant="standard" />

        <div className="pg_box">
            <img className="p_img2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH0lIawSz9z-XDX4oowfKwg1DFZHwwibl5YFPwJk9cDFEUiTGoLJRk64u6fdymp6-o57g&usqp=CAU"></img>
            <h3 className="heading">Heena</h3>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} sx={{ marginLeft: "0rem", marginTop: "-4rem"}} />
            <p className="pg_a">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
        <div className="pg_box">
            <img className="p_img2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH0lIawSz9z-XDX4oowfKwg1DFZHwwibl5YFPwJk9cDFEUiTGoLJRk64u6fdymp6-o57g&usqp=CAU"></img>
            <h3 className="heading">Shreya</h3>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} sx={{ marginLeft: "0rem", marginTop: "-4rem"}} />
            <p className="pg_a">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
    </aside>
    <form>
    <h1 className="c_title">Feel Free to Contact Us</h1>
    <label className="c_head">Enter Name</label>
    <input  className="c_area" type="text" placeholder="Enter Name"/>
    <label className="c_head">Enter Email</label>
    <input className="c_area"  type="text" placeholder="Enter Email"/>
    <label className="c_head">Enter Mobile</label>
    <input className="c_area"  type="text" placeholder="Enter Mobile"/>
    <br/>
    <label className="c_head">Enter Query</label>
    <textarea className="c_text" rows="4" cols="50" placeholder="Enter Query"/>
    <input className="c_btnn" type="submit" value="Submit"/>

    </form>

        </div>
        
    )
}
export default Customer;