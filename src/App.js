// import Module1 from './components/Modules/Module1';
// import Module2 from './components/Modules/Module2';
// import Module3 from './components/Modules/Module3';
// import Module4 from './components/Modules/Module4';
// import Module5 from './components/Modules/Module5';
// import Module6 from './components/Modules/Module6';
// import Module7 from './components/Modules/Module7';

// import Grid1 from './components/Grids/Grid1';
// import Grid2 from './components/Grids/Grid2';

// import Section1 from "./components/StartProjectPage/Section1";
// import Section2 from "./components/StartProjectPage/Section2";
// import Section3 from "./components/StartProjectPage/Section3";
// import Section4 from "./components/StartProjectPage/Section4";
// import Section5 from "./components/StartProjectPage/Section5";
// import Section6 from "./components/StartProjectPage/Section6";
// import Section7 from "./components/StartProjectPage/Section7";
// import Section8 from "./components/StartProjectPage/Section8";

// import Form1 from "./components/Forms/Form1"
// import Form2 from "./components/Forms/Form2"

// import GridImage1 from "./components/GridImage/GridImage1";

import ReactCardSlider from "./components/Carousel/ReactCardSlider"
import Data from "./data.js" 

import {Sticky} from "./components/Discover/Sticky"

function App() {
  return (
    <div className="App">
    <ReactCardSlider slides={Data}/>
    <Sticky />
    </div>
  );
}

export default App;
