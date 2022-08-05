
import './App.css';
import Nav from './Pages/Nav';
import Slider from './Pages/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Pages/About';
import Works from "./Pages/Works"
import Product from './Pages/Product';
import Brands from './Pages/Brands';
import Dry from './Pages/Dry';
import Company from './Pages/Company';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Customer from './Pages/Customer';
import Footer from './Pages/Footer';
import Scroll from './Pages/Scroll';
import {
  
 Routes,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Nav/>
     <Slider/>
     <About/>
  <Works/>
  <Product/>
  <Scroll/>
  <Brands/>
  <Dry/>
  <Company/>
  <Customer/>
  <Footer/>
  
  <Routes>
   <Route path="/categories" element={<Product/>} />
   <Route path="/brands" element={<Brands/>} />
   <Route path="/contact" element={<Customer/>} />

  

   </Routes>
     
    </div>
  );
}

export default App;
