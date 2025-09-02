// import React from "react";
// import "./calculator.css";

// function Calculator () {

//     return (
//         <div style={{border: "1px solid black", marginInline:"35%", display: "block", justifyContent: "space-between", alignContent: "center"}}>
//             <h1>Calculator</h1>
//             <input style={{width:"80%", height:"40px"}} />
//             <div style={{ border: "1px solid red",padding:"10px", display: "block", justifyContent: "space-around", alignContent: "center", alignItems: "center", flexWrap: "wrap" }}>
//                 <div style={{ display: "flex", justifyContent: "space-around", padding:"10px" }}><button style={{ width: "50px", height: "50px" }}>%</button> <button style={{ width: "50px", height: "50px" }}>CE</button> <button style={{ width: "50px", height: "50px" }}>C</button> <button style={{ width: "50px", height: "50px" }}>-</button></div>
//                 <div style={{ display: "flex", justifyContent: "space-around", padding:"10px" }}><button style={{ width: "50px", height: "50px" }}>1/x</button> <button style={{ width: "50px", height: "50px" }}>x<sup>2</sup></button> <button style={{ width: "50px", height: "50px" }}>2/x</button> <button style={{ width: "50px", height: "50px" }}>/</button></div>
//                 <div style={{ display: "flex", justifyContent: "space-around", padding:"10px" }}><button style={{ width: "50px", height: "50px" }}>7</button> <button style={{ width: "50px", height: "50px" }}>8</button> <button style={{ width: "50px", height: "50px" }}>9</button> <button style={{ width: "50px", height: "50px" }}>X</button></div>
//                 <div style={{ display: "flex", justifyContent: "space-around", padding:"10px" }}><button style={{ width: "50px", height: "50px" }}>4</button> <button style={{ width: "50px", height: "50px" }}>5</button> <button style={{ width: "50px", height: "50px" }}>6</button> <button style={{ width: "50px", height: "50px" }}>-</button></div>
//                 <div style={{ display: "flex", justifyContent: "space-around", padding:"10px" }}><button style={{ width: "50px", height: "50px" }}>1</button> <button style={{ width: "50px", height: "50px" }}>2</button> <button style={{ width: "50px", height: "50px" }}>3</button> <button style={{ width: "50px", height: "50px" }}>+</button></div>
//                 <div style={{ display: "flex", justifyContent: "space-around", padding:"10px" }}><button style={{ width: "50px", height: "50px" }}>+/-</button> <button style={{ width: "50px", height: "50px" }}>0</button> <button style={{ width: "50px", height: "50px" }}>.</button> <button style={{ width: "50px", height: "50px" }}>=</button></div>
//             </div>
//         </div>
//     )
// }

// export default Calculator;



// src/components/Calculator.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  appendToExpression,
  calculateResult,
  clear,
} from "../features/calculator/calculatorSlice";

function Calculator() {
  const dispatch = useDispatch();
  const { expression, result } = useSelector((state) => state.calculator);

  const handleClick = (value) => {
    if (value === "C") return dispatch(clear());
    if (value === "=") return dispatch(calculateResult());
    dispatch(appendToExpression(value));
  };

  const buttons = [
    "%", "CE", "C", "/", 
    "1/x", "x²", "√", "*",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "=",
    "+/-", "0", ".", 
  ];

  return (
    <div style={{ border: "1px solid black", marginInline: "35%", padding: "20px" }}>
      <h1>Calculator</h1>
      <input
        style={{ width: "90%", height: "40px", marginBottom: "10px" }}
        value={result || expression}
        readOnly
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {buttons.map((btn, index) => (
          <button
            key={index}
            style={{ width: "60px", height: "60px" }}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
