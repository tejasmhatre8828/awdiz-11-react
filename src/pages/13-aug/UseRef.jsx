// import React from "react";

// const UseRef = () => {
//     const inputRef = React.useRef(1);
//     let counter = 1
//     const Increment = () => {
//         counter = inputRef + 1
//         // inputRef.current = inputRef.current + 1;
//         console.log(inputRef.current, "inputRef.current");
//     }
//     const Decrement = () => {
//         inputRef.current = inputRef.current - 1;
//         console.log(inputRef.current, "inputRef.current");
//     }
//     const Reset = () => {
//         inputRef.current = inputRef.current;
//     }

//     console.log("Re-rendering.....")
//     return (
//         <div style={{display:"block", justifyContent:"center", alignContent: "center"}}>
//             <h1>UseRef</h1>
//             <h1>{inputRef.current}</h1>
//             <div style={{display:"flex", justifyContent: "center", alignContent:"center", gap:"20px"}}>
//                 <button style={{width:"60px", height:"30px", fontWeight:"900"}} onClick={Increment}>+</button>
//                 <button style={{width:"60px", height:"30px", fontWeight:"900"}} onClick={Decrement}>-</button>
//                 <button style={{width:"60px", height:"30px", fontWeight:"900"}} onClick={Reset}>Reset</button>
//             </div>
//         </div>
//     )
// }

// export default UseRef;



import React, { useRef, useState } from "react";

const UseRef = () => {
    const inputRef = useRef(0);
    const [counter, setCounter] = useState(0);

    const Increment = () => {
        inputRef.current = inputRef.current + 1;
        setCounter(n => n + 1);
    };

    const Decrement = () => {
        inputRef.current = inputRef.current - 1;
        setCounter(n => n + 1);
    };

    const Reset = () => {
        inputRef.current = 0;
        setCounter(n => n + 1);
    };

    console.log("Re-rendering.....");

    return (
        <div style={{ display: "block", justifyContent: "center", alignContent: "center" }}>
            <h1>Counter = {inputRef.current}</h1>
            <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: "20px" }}>
                <button style={{ width: "60px", height: "30px", fontWeight: "900" }} onClick={Increment}>+</button>
                <button style={{ width: "60px", height: "30px", fontWeight: "900" }} onClick={Decrement}>-</button>
                <button style={{ width: "60px", height: "30px", fontWeight: "900" }} onClick={Reset}>Reset</button>
            </div>
        </div>
    );
};

export default UseRef;
