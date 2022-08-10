import React from "react";
import s from './style.module.css';
import { useContext } from "react";
import { CartContext } from "CardContext";

export const Category = () => {
    const { items } = useContext(CartContext);

    return (
        
        <table>
            <tr>
                <th>Category</th>
                <th>Name</th>
                {/* <th>Quantity</th> */}
                <th>Price</th>
                {/* <th>Actions</th> */}
            </tr>
        
            {items.map((item) => {
                return(
                    <table>
                <tr>
                    <td>{item.category}</td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    {/* <td>sum</td>
                    <td><button>-</button><button>Select</button><button>+</button></td> */}
                </tr>
            </table>
                )
            })
    }
            
        </table >
    )
                }
