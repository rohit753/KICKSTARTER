
import {createContext,useState} from "react";
export const CartContext = createContext();
export const CartContextProvider = ({children})=>{
	const [item,setItem] = useState({});
	const handleCartUpdate = (val)=>{
		setItem(val)
	}
	return(<>
	<CartContext.Provider value={{item,handleCartUpdate}} >
		{children}
	</CartContext.Provider>
	</>)
}