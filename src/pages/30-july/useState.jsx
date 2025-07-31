import React, { useState } from 'react';

const UseState = () => {
    // const counter = 1;
    const [counter, setCounter] = useState(10);
    const [greeting, setGreeting] = useState("Hello, World!");
    console.log("Counter:", counter);
    const increment = () => {
        if (counter < 10) {
            setCounter(counter + 1);
        }
    };
    const decrement = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };
    const reset = () => {
        setCounter(0);
    };
    return (
        <div>
            <h2>{greeting}</h2>
            <button onClick={() => setGreeting("Welcome to React-JS!")}>Change Greeting</button>
            <h1>Counter : {counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default UseState;