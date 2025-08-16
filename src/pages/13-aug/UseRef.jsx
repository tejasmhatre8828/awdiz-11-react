import React from "react";

const UseRef = () => {
    const inputRef = React.useRef(1);
    const Increment = () => {
        inputRef.current = inputRef.current + 1;
        console.log(inputRef.current, "inputRef.current");
    }

    console.log("Re-rendering.....")
    return (
        <div>
            <h1>UseRef</h1>
            <h1>{inputRef.current}</h1>
            <button onClick={Increment}>+</button>
        </div>
    )
}

export default UseRef;