import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);

    const addToCart = (id,name, price) => {
        setItems((prevState)=>[...prevState,{id,name,price}])
    }
    return (
        <CartContext.Provider value={{ items, addToCart }} >{ children}</CartContext.Provider>
    );
}

export default CartContext