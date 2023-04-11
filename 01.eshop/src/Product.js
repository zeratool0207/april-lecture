import React from 'react';
import './Product.css';

const Product = () => {
    return (
        <div className="product">
            <div className="product__info">
                <p>Bennet Mystic 15.6 inch Laptop Sholuder Messaenger Sling Office Bag, Water
                    Repellent Fabric
                </p>
                <p className="product__price">
                    <small>$</small>
                    <strong>30</strong>
                </p>
                <div className="product__rating">⭐⭐</div>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt="product-image" />

            <button>Add to Basket</button>
        </div>
    )
}   

export default Product