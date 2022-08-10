import React from "react";
import { Link } from "react-router-dom";
import s from'./Nav.module.css';
import { useContext } from "react";
import { CartContext } from "CardContext";

export const Nav = () => {
    const {items} = useContext(CartContext);

    return(
        <div>
            <div className={s.nav}>
                <Link to='/product'>Products</Link>
                <div><span>Shop Bag{items.length}</span></div>
                <Link to='/category'>Categories</Link>
            </div>
        </div>
        
    )
}