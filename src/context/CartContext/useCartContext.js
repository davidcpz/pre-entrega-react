import { useContext } from "react";
import { CartContext } from "./CartContext";


export const useCartContext = () => useContext(CartContext);




/* tengo que ver porque esto no me funciona */
/* export const useCartContex = () => {
    return useContext(CartContex);
}; */