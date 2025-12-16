
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/CartContext";
import "./Cart.css";
import { Item } from "../Item/Item";


export const Cart=() => {
     const {cart, clearCart, total, deleteIttem, checkout} = useCartContext();

    return (
        <section classname="item-list-container">
            <h2>Carrito de compras</h2>

        {cart.length ? (
            cart.map((prod) => (
            <Item key={prod.id} {...prod}>
                <span> Cantidad: {prod.quantity} </span>
                <button  className="btn" onClick={()=> deleteIttem(prod.id)}> 
                Eliminar
                </button>
            </Item>
            ))
        ) : (
           <p> tu carrito esta vacio</p>
        )}

        {cart.length ? <div className="btn-container">
            <div className="total-pagar">
                <p> total a pagar : ${total()}</p>}
            </div>
            <button className="btn" onClick={checkout}>
                finalizar compra 
            </button>
            <button className="btn" onClick={clearCart}>
                 vaciar carrito 
            </button>
        </div> ) : (
            <Link className="btn" to="/">
                volver al inicio
            </Link>
        )}
        </section>
};
};