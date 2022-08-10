import React from "react";
import {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([]);

    const addToCart = (name, price , category) => {
        setItems ((prevState) => [ ...prevState, {name, price, category}])
    }
    return (
        <CartContext.Provider value={{items, addToCart}}>{children}</CartContext.Provider>
    )
}