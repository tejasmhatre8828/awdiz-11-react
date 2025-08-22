import React, { useContext } from 'react';
import { CounterContext } from '../../context/CounterContext';

const ContextCounter = () => {
    const { state, dispatch } = useContext(CounterContext);
    console.log(state, "state");
    return (
        <div
            style={{
                backgroundColor: state.backgroundColor,
                color: state.textcolor,
                minHeight: "100vh",
                // width:"100%",
                border: "1px solid black"

            }}>
            {/* <h1>Context Counter: {state?.count}</h1>
            <button onClick={()=> dispatch({type : "increment"})}>+</button>
            <button onClick={()=> dispatch({type : "decrement"})}>-</button> */}
            <h2>Background: {state.backgroundColor}</h2>
            <h3>Text: {state.textcolor}</h3>
            <button>Theme: {state?.backgroundColor}</button>
            <button>Text: {state?.textcolor}</button>
        </div>
    )
}

export default ContextCounter;