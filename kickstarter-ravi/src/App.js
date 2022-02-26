/* eslint-disable no-unused-vars */

import './App.css';
import { AiFillAlert } from "react-icons/ai";
import { BsFillBarChartLineFill } from "react-icons/bs";
import {Navbar} from "./components/ravi/navbar"
import {Header} from "./components/ravi/header"
import {Footer} from "./components/ravi/footer"
import {CartItem} from "./components/ravi/cartitem"
import{LandingPage} from "./components/ravi/landingPage"
function App() {
  return (
    <div>
      <Navbar/>
      {/* <Header/>
      <Footer/>
      <CartItem/> */}
      <LandingPage/>
    </div>
  );
}

export default App;
