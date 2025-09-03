import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existing = state.items.find(item => item.name === product.name);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ ...product, quantity: 1 });
            }
        },
        increment: (state, action) => {
            const item = state.items.find(i => i.name === action.payload);
            if (item) item.quantity += 1;
        },
        decrement: (state, action) => {
            const item = state.items.find(i => i.name === action.payload);
            if (item && item.quantity > 1) item.quantity -= 1;
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(i => i.name !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const {
    addToCart,
    increment,
    decrement,
    removeFromCart,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
