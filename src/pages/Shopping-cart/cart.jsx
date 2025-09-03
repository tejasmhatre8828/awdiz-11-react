import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    increment,
    decrement,
    removeFromCart,
    clearCart
} from './cartSlice';

function Cart() {
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div style={{textAlign:"left"}}>
            <h2>Cart</h2>
            {items.map(item => (
                <div key={item.name} style={{display:"block", alignContent:"space-around"}}><br/>
                    {item.name} - ₹{item.price} x {item.quantity}{' '}
                    <button onClick={() => dispatch(increment(item.name))}>+</button>{'    '} 
                    <button onClick={() => dispatch(decrement(item.name))}>-</button> {'   '}
                    <button onClick={() => dispatch(removeFromCart(item.name))}>Remove</button>
                </div>
            ))}
            <h3>Total: ₹{total}</h3>
            <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </div>
    );
}

export default Cart;
