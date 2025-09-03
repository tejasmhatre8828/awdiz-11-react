import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';

const products = [
    { name: 'Laptop', price: 50000 },
    { name: 'Phone', price: 20000 },
    { name: 'Headphones', price: 3000 },
    { name: 'Keyboard', price: 1500 },
];

function ProductList() {
    const dispatch = useDispatch();

    return (
        <div style={{textAlign:"left"}}>
            <h2>Products</h2>
            {products.map(p => (
                <div key={p.name}><br/>
                    {p.name} - ₹{p.price}{' '}
                    <button onClick={() => dispatch(addToCart(p))}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
