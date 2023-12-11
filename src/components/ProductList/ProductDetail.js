import { IoMdAdd } from "react-icons/io";
import ProductDetailCSS from './ProductDetail.module.css';
import { Link, } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../CartContext';

function ProductDetail(props) {

    
    const { addToCart } = useContext(CartContext);
    return (
        <div className={ProductDetailCSS.product_detail}>
            <Link to={`/products/${props.id}`}>{props.name}</Link>
            <p className={ProductDetailCSS.price}>Ціна: ${(props.price * props.exchangeRate).toFixed(2)} USD або {props.price} грн</p>
            <p className={ProductDetailCSS.desc}>{props.description}</p>
            <button className={ProductDetailCSS.addCart} type='button' onClick={()=>addToCart(props.id,props.name,props.price)}>Додати в корзину <IoMdAdd /></button>

        </div>
    );
}

export default ProductDetail;
