
import {Navbar} from './ravi/navbar'
import {Header} from "./ravi/header"
import {Footer} from "./ravi/footer"
import {CartItem} from "./ravi/cartitem";
import Module1 from "./Modules/Module1";
import Module2 from "./Modules/Module2";
import Module3 from "./Modules/Module3";
import Grid1 from "./Grids/Grid1";
import Module4 from "./Modules/Module4";
import Grid2 from "./Grids/Grid2";
import Module5 from "./Modules/Module5";
import Module6 from "./Modules/Module6";
import Module7 from "./Modules/Module7";
export const Home = ()=>{
	return (<>
	<Navbar />
	<Header/>
	<CartItem/>
	<Module1/>
	<h1>carausel</h1>
	<Module2/>
	<div>form</div>
	<h1>carausel</h1>
	<Module3/>
	<h1>carausel</h1>
	<Module4/>
	<Grid1/>
	<Module5/>
	<h1>carausel</h1>
	<Module6/>
	<h2>image section 1</h2>
	<h2>image section 2</h2>
	<Module7/>
	<Grid2/>
	<Footer/>
	</>)
}