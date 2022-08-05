import React, { Component } from "react";
import Slider from "react-slick";
import cpic from "../images/com-1.jpeg"
import cpic2 from "../images/com-2.jpeg"
import cpic3 from "../images/com-3.jpeg"
import cpic4 from "../images/com-4.jpeg"
import cpic5 from "../images/com-5.jpeg"
import cpic6 from "../images/com-6.jpeg"
import cpic7 from "../images/com-7.jpeg"
import cpic8 from "../images/com-8.jpeg"
import "../Css/Company.css"


export default class Company extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="c_con">
        <h1 className="cc_title"> Top Companies</h1>
        <hr className="c_hr" />
        <Slider {...settings}>
          <div>
           <img src={cpic} className="c_pic"/>
          </div>
          <div>
          <img src={cpic2} className="c_pic"/>
          </div>
          <div>
          <img src={cpic3} className="c_pic"/>
          </div>
          <div>
          <img src={cpic4} className="c_pic"/>
          </div>
          <div>
          <img src={cpic5} className="c_pic"/>
          </div>
          <div>
          <img src={cpic6} className="c_pic"/>
          </div>
          <div>
          <img src={cpic7} className="c_pic"/>
          </div>
          <div>
          <img src={cpic8} className="c_pic"/>
          </div>
        </Slider>
      </div>
    );
  }
}