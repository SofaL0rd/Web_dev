import ProductDetail from "../ProductList/ProductDetail";
import ProductContext from "../ProductContext";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useContext } from "react";
import './Products.css';


function Products() {
    const exchangeRate = 0.02649;
    const { products, addProduct } = useContext(ProductContext);
    return (
        <div className="product-list">
            <TransitionGroup>
            {products.map((product) => (
                <CSSTransition key={product.id} classNames="product" timeout={500}>
                    <ProductDetail id={product.id} name={product.name} price={product.price} description={product.description} exchangeRate={exchangeRate} />
                </CSSTransition>
            ))}
            </TransitionGroup>
            <button onClick={addProduct} className="addProduct">Додати новий товар</button>

        </div>
    );
}

export default Products;