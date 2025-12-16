import { useState } from "react";
import { CartContext } from "./CartContext";


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const exists=(id)=>{
        const exist = cart.some((p)=> p.id === id);
        return exist;
    };

    const addItem=(item)=>{
        if (exists(item.id)){
            /*alert ("El producto ya se encuentra en el carrito");
            return;*/
            const updatedCart = cart.map((prod) => {
                if (prod.id === item.id) {
                    return { ...prod, quantity: prod.quantity + item.quantity };
                } else {
                    return prod;
                }

            });

            setCart(updatedCart);
            alert(`Agregado al carrito`);
        }   else{
            setCart([...cart, item]);
            alert(`${item.name} agregado al carrito`);
        }
    };  

    const deleteIttem = (id) => {
        const filtered = cart.filter((prod) => prod.id !== id);
        setCart (filtered);
        alert ("Producto eliminado del carrito");
    }
        
        
    const clearCart = () => {
        setCart([]);
    };






    const getTotalItems = () => {
       /* if (cart.length) {
            return cart.length;
        }*/
       const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
       return totalItems;
    };   

    const total = () => {
        const total = cart.reduce((acc, item) => acc + p.price * p.quantity, 0);

        return Math.round(total * 100) / 100;
    };


    const checkout = () => {
        const ok = confirm("¿Desea finalizar la compra?");
        if (ok) {
            clearCart();
            alert("Gracias por su compra");
        }

    const values = {
        cart, 
        addItem,
        clearCart,
        getTotalItems,
        deleteIttem,
        total,
        checkout,
    };


    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};