import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { user: null },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            console.log(action.payload, "payload")
        },
        logout: (state) => {
            state.user = null;
        },
        increment: (state) => {
            state.counter += 1;
        },
        decrement: (state) => {
            state.counter -= 1;
        },
        reset: (state) => {
            state.counter = 0;
        },
    },
});

export const { increment, decrement, reset, login, logout } = counterSlice.actions;

export const store = configureStore({
    reducer: { counter: counterSlice.reducer },
})
