// import React, { useMemo, useState } from "react";

// const UseMemoComponent = () => {
//     const [counter, setCounter] = React.useState(1);
//     const [counter2, setCounter2] = useState(2);
//     console.log("Rerendering useMemoComponent");
//     // const result = heavyCalc(counter);
//     const result = useMemo(() => heavyCalc(counter), [counter]);

//     return (
//         <div>
//             <h1>Result : {result}</h1>
//             <h1>Counter : {counter}</h1>
//             <button onClick={() => setCounter(counter + 1)}>Increment</button>
//             <h1>counter2 : {counter2}</h1>
//             <button onClick={() => setCounter2(counter2 + 1)}>Increment counter2</button>
//         </div>
//     );

// };

// const heavyCalc = (num) => {
//     console.log("Calculating heavy calculation");
//     let output = 0;
//     for (var i = 0; i < 100000000; i++) {
//         output += i;
//     }
//     return output + num;
// }
// export default UseMemoComponent;



// import React, {useState, useMemo} from "react";

// const UseMemoCalc = () => {
    
//     return(
//         <div>
//             <h1>UseMemo Example</h1>

//         </div>
//     )
// }


import React, { useState, useMemo } from "react";

const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const slowFunction = (num) => {
    console.log("Running slow function...");
    let result = 0;
    for (let i = 0; i < 10000; i++) {
      result += i;
    }
    return result + num;
  };

  // useMemo to memoize the result of slowFunction
  const computedValue = useMemo(() => slowFunction(count), [count]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Computed Value: {computedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br />
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something..." 
      />
    </div>
  );
};

export default UseMemoExample;