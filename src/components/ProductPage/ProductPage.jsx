import React, { useState } from "react";
import { useContext } from "react";
import ProductContext from "../ProductContext";
import './ProductPage.css';
import CartContext from "../CartContext";
import { IoMdAdd } from "react-icons/io";
import { useParams } from 'react-router-dom';


function ProductPage() {
    const { products } = useContext(ProductContext);
    const {id} = useParams();
    const  product  = products.find((item) => item.id === parseInt(id));
    const { addToCart } = useContext(CartContext);
    console.log(products);
    console.log(id);
    console.log(product);


    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');

    const handleCommentSubmit = (e) => {
        if (commentText !== '') {
            e.preventDefault();
            setComments([...comments, commentText]);
            alert(`Ваш відгук: "${commentText}" додано успішно!`);

            setCommentText('');
        }
    };
    return (
        <div className='product_page'>
            <div>{product.name}</div>
            <p className='price'>Ціна: {product.price} грн</p>
            <p className='desc'>{}</p>
            <button className='addCart' type='button' onClick={() => addToCart(product.id, product.name, product.price)}>Додати в корзину <IoMdAdd /></button>

            <h3>Коментарі:</h3>
            <ul>
                {comments.map((comment, index) => (
                    <li className='commentList' key={index}>User: {comment}</li>
                ))}
            </ul>
            <form onSubmit={handleCommentSubmit}>
                <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                />
                <br />
                <div>
                    <button type="submit">Додати коментар</button>
                </div>
            </form>
        </div>
    )
}

export default ProductPage;