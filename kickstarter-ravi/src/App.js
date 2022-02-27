/* eslint-disable no-unused-vars */

import './App.css';
import { AiFillAlert } from "react-icons/ai";
import { BsFillBarChartLineFill } from "react-icons/bs";
import {Navbar} from "./components/ravi/navbar"
import {Header} from "./components/ravi/header"
import {Footer} from "./components/ravi/footer"
import {CartItem} from "./components/ravi/cartitem"
import{LandingPage} from "./components/ravi/landingPage"
import{Routes,Route} from "react-router-dom"
function App() {
  return (
    // <div>
    //   <Navbar/>
    //   <Header/>
      
    //   <CartItem/>
    //   {/* <LandingPage/> */}
    //   <Footer/>
    // </div>
    <Routes>
      <Route path ="/" element={<CartItem/>} ></Route>
      <Route  path ="/detail" element={<LandingPage/>} ></Route>
    </Routes>
  );
}

export default App;
