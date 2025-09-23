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


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  inputDigit,
  chooseOperator,
  calculate,
  clear,
  percent,
} from './CalculatorSlice';
import Button from './Button';


const Calculator = () => {
  const dispatch = useDispatch();
  const current = useSelector(state => state.calculator.current);

  return (
    <div className="calculator">
      <div className="display">{current}</div>
      <div className="buttons">
        <Button onClick={() => dispatch(clear())}>AC</Button>
        <Button onClick={() => dispatch(clear())}>C</Button>
        <Button onClick={() => dispatch(percent())}>%</Button>
        <Button onClick={() => dispatch(chooseOperator('/'))}>÷</Button>
        <Button onClick={() => dispatch(chooseOperator('*'))}>×</Button>
        <Button onClick={() => dispatch(inputDigit('7'))}>7</Button>
        <Button onClick={() => dispatch(inputDigit('8'))}>8</Button>
        <Button onClick={() => dispatch(inputDigit('9'))}>9</Button>
        <Button onClick={() => dispatch(chooseOperator('-'))}>−</Button>
        <Button onClick={() => dispatch(inputDigit('4'))}>4</Button>
        <Button onClick={() => dispatch(inputDigit('5'))}>5</Button>
        <Button onClick={() => dispatch(inputDigit('6'))}>6</Button>
        <Button onClick={() => dispatch(chooseOperator('+'))}>+</Button>
        <Button onClick={() => dispatch(inputDigit('1'))}>1</Button>
        <Button onClick={() => dispatch(inputDigit('2'))}>2</Button>
        <Button onClick={() => dispatch(inputDigit('3'))}>3</Button>
        <Button className='equal' onClick={() => dispatch(calculate())}>=</Button>
        <Button onClick={() => dispatch(inputDigit('0'))} className="zero">0</Button>
        <Button onClick={() => dispatch(inputDigit('.'))}>.</Button>
      </div>
    </div>
  );
};

export default Calculator;

