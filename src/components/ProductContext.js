import { createContext, useState } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([
        { id: 1, name: 'Товар 1', price: 100, description: "Some description", },
        { id: 2, name: 'Товар 2', price: 150, description: "Another description", },
        { id: 3, name: 'Товар 3', price: 200, description: "Different description", },

    ]);

    const addProduct = () => {
        const newProduct = {
            id: products.length + 1,
            name: `Товар ${products.length + 1}`,
            price: 0,
            description: 'New product description',
        };

        setProducts([...products, newProduct]);
    }
 

    return (
        <ProductContext.Provider value={{ products, addProduct }} >{children}</ProductContext.Provider>
    );
}

export default ProductContext