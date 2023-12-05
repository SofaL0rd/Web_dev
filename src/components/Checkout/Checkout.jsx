import React from "react";
import { useContext } from "react";
import CartContext from "../CartContext";
import './Checkout.css';

function Checkout() {
    const { items } = useContext(CartContext);
    return (
        <div className="checkout">
            <h1>Checkout</h1>
            <div className="shopping_bag">
                {items.map((item) => (
                    <div>
                        <h2> {item.name}</h2>
                        <h3>Ціна: {item.price} грн</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Checkout;