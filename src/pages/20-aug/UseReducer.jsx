import React, { useState } from "react";
import { useReducer } from "react";

const UseReducer = () => {
    function reducer(state, action) {
        console.log("Inside Reducer", state, "state", action, "action");
        // if (action.type === "increment") {
        //     return { count: state.count + 1 };
        // } else if (action.type === "decrement") {
        //     return { count: state.count - 1 };
        // }
        switch (action.type) {
            case "increment":
                return { ...state, count: state.count + 1 };
            case "decrement":
                return { ...state, count: state.count - 1 };
            case "reset":
                return { ...state, count: 0 };
            default:
                return state;
        }
    }
    const initialState = { count: 1 };
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state, "state");
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: "increment" })}>+</button><> </>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button><> </>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    );
};

export default UseReducer;