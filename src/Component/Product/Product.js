import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'


const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product;
    return (
        <div className='product'>
            <div className='info'>
                <img src={img} alt=""></img>
                <h3>{name}</h3>
                <b>Price:${price}</b>
                <p>Menufacturing:{seller}</p>
                <p>Rating:{ratings}</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn'>
                <p>
                    Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>

    );
};

export default Product;