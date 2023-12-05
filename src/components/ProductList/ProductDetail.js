import React, { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import './ProductDetail.css';
import { Link, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../CartContext';
import ProductPage from '../ProductPage/ProductPage';

function ProductDetail(props) {

    
    const { addToCart } = useContext(CartContext);
    return (
        <div className='product-detail'>
            <Link to={`/products/${props.id}`}>{props.name}</Link>
            <Routes>
                <Route path={`/products/${props.id}`} element={<ProductPage/>} />
            </Routes>
            <p className='price'>Ціна: ${(props.price * props.exchangeRate).toFixed(2)} USD або {props.price} грн</p>
            <p className='desc'>{props.description}</p>
            <button className='addCart' type='button' onClick={()=>addToCart(props.id,props.name,props.price)}>Додати в корзину <IoMdAdd /></button>

        </div>
    );
}

export default ProductDetail;
