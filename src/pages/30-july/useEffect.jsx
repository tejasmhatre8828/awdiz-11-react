import React, { use } from "react";
import { useEffect, useState } from "react";

const UseEffect = () => {
    const [counter, setCounter] = useState(1);
    const [counter2, setCounter2] = useState(2);

    // useEffect(() => {
    //     console.log("Inside useEffect");
    // });   //no dependency


    // useEffect(() => {
    //     console.log("Inside useEffect");
    // }, []);   //empty dependency

    // useEffect(() => {
    //     console.log("Inside useEffect");
    // }, [counter]);  //single dependency

    useEffect(() => {
        console.log("Inside useEffect");
    }, [counter, counter2]);  //multiple dependencies
    
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <h1>{counter2}</h1>
            <button onClick={() => setCounter2(counter2 + 1)}>+</button>
        </div>
    );
}
export default UseEffect;