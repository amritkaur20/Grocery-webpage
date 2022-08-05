
import React from "react"
import { Carousel , CarouselItem  } from 'react-bootstrap';
import img from "../images/banner-2.jpeg"
import img2 from "../images/banner-3.jpeg"
import img3 from "../images/banner-1.jpeg"

function Slider(){
    return(
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{ height:"38rem" , marginTop:"-4rem"}}
     
      src={img}
     
    />
    <Carousel.Caption>
      <h1
      style={ {
        fontSize: "30px",
        fontWeight: "900",
        color:"#febe00"
    }}
    >Mochak App For All Your Need</h1>
      <h2 style={{
        marginBottom: "6rem",
        fontFamily: "Cursive", 
        fontSize: "70px",
        fontWeight: "900",
        color: "#fff",
      
    }}>Start Fresh Everday</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{ height:"38rem" , marginTop:"-4rem" ,}}
      src={img2}
   
    />
    <Carousel.Caption>
    <h1
      style={ {
        fontSize: "30px",
        fontWeight: "900",
        color:"#febe00"
    }}
    >Mochak App For All Your Need</h1>
      <h2 style={{
        marginBottom: "6rem",
        fontFamily: "Cursive", 
        fontSize: "70px",
        fontWeight: "900",
        color: "whitesmoke"
    }}>Start Fresh Everday</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{ height:"38rem" , marginTop:"-4rem" ,}}
      src={img3}
     
    />
    <Carousel.Caption>
    <h1
    style={ {
      fontSize: "30px",
      fontWeight: "900",
      color:"#febe00"
  }}
  >Mochak App For All Your Need</h1>
    <h2 style={{
      marginBottom: "6rem",
      fontFamily:  "Cursive", 
      fontSize: "70px",
      fontWeight: "900",
      color: "#fff"
  }}>Start Fresh Everday</h2>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}
export default Slider
