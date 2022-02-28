
import {Home} from "./components/home"
import {Routes,Route} from "react-router-dom"
import {LandingPage} from "./components/ravi/landingPage";
import {StartProject} from "./components/startProject";
import {StartForm} from "./components/startform";
import {StartForm2} from "./components/startform2";
import {Payment} from "./components/payment";
import {Login2} from "./components/login";
import {Login} from "./pages/Login"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path ="/detail" element={<LandingPage/>}></Route>
      <Route path ="/startproject" element={<StartProject/>}></Route>
      <Route path ="/form" element={<StartForm/>}></Route>
      <Route path ="/form2" element={<StartForm2/>}></Route>
      <Route path ="/payment" element={<Payment/>}></Route>
      <Route path ="/login" element={<Login/>}></Route>
    </Routes>
  );
}
export default App;
