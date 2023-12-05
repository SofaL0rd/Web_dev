import ProductDetail from "../ProductList/ProductDetail";
import ProductContext from "../ProductContext";
import { useContext } from "react";

function Products() {
    const exchangeRate = 0.02649;
    const { products } = useContext(ProductContext);
    return (
        <div className="product-list">
            {products.map((product) => (
                <li key={product.id}>
                    <ProductDetail id={product.id} name={product.name} price={product.price} description={product.description} exchangeRate={exchangeRate} />
                </li>
            ))}
        </div>
    );
}

export default Products;