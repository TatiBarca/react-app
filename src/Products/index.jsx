import { Category } from "Category";
import React, { useEffect, useState } from "react";
import s from './style.module.css';
import { CartContext } from "CardContext";
import { useContext } from "react";

export const Product = (name, price, category) => {

    let [products, setProducts] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:3001/api/products';

        const fetchNum = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/products');
                const json = await response.json();
                console.log(json);
                setProducts(json);
            } catch (error) {
                console.log('error', error);
            }
        }
        fetchNum();
    }, []);
    // const {items} = useContext(CartContext);
    const { addToCart } = useContext(CartContext);


    return (
        <div>

            <table>
                <tr>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </table>
            {products.map((details) => {
                return (
                    <table>
                        <tr>
                            <td>{details.category.name}</td>
                            <td>{details.name}</td>
                            <td>${details.price}</td>
                            <td><button>-</button>
                                <button>Select</button>
                                <button onClick={() => addToCart(name, price, category)}>+</button></td>
                        </tr>
                    </table>
                )
            })}
        </div>
    )
}