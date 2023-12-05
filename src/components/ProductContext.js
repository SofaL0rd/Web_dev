import { createContext, useState } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([
        { id: 1, name: 'Товар 1', price: 100, description: "Some description", },
        { id: 2, name: 'Товар 2', price: 150, description: "Another description", },
        { id: 3, name: 'Товар 3', price: 200, description: "Different description", },

    ]);
    const productWithId1 = products.find((product) => product.id === 1);
    
    // const addProduct = (id,name, price) => {
    //     setItems((prevState)=>[...prevState,{id,name,price}])
    // }


    return (
        <ProductContext.Provider value={{ products }} >{children}</ProductContext.Provider>
    );
}

export default ProductContext