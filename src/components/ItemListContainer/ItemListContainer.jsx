import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = () => {
const  [products, setProducts] = useState([])

useEffect(() => {
    fetch("/data/products.json")
    .then((res) => {
        if (!res.ok) {
            throw new Error("Hubo un problema al buscar el producto");
        }
        return res.json();
    })
    .then((data) => {
        setProducts(data);
    })
    .catch((err) => {
        console.error(err);
    });
}, [])


    return (
        <section>
            <h1>Bienvenidos</h1>
            <ItemList list = {products}/>
        </section>
    );
    };