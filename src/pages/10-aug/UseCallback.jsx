import React from "react";
import ChildrenComponent from "./ChildrenComponent";

const UseCallback = () => {
    const [counter, setCounter] = React.useState(0);
    const [counter2, setCounter2] = React.useState(2);
    return (
        <div>
            <h1>Parent Text : {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
            <h1>Parent Text : {counter2}</h1>
            <button onClick={() => setCounter2(counter2 + 2)}>Increment Counter</button>
            <ChildrenComponent counter={counter} />
        </div>
    )
}

export default UseCallback;