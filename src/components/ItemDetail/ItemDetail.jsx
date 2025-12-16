import './ItemDetail.css';

import { useCartContext } from "../../context/CartContext/useCartContext";
import { Item } from "../Item/Item";

export const ItemDetail=({detail})=>{
    const { addItem } = useCartContext();

    const handlAdd = (quantity) => {
        addItem({ ...detail, quantity });
    };

    return (
       <Item {...detail}>
        <Count btnText={"Agregar al carrito"} onConfirm={handlAdd} />
       </Item>
       /*  <button onClick={() => addItem(detail)}>
            Enviar al carrito      
            </button>}*/
         
    );
};