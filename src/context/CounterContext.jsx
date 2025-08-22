import React, { createContext, useEffect, useReducer } from "react";

export const CounterContext = createContext();
const CounterContextComponent = ({ children }) => {

    function reducer(state, action) {
        switch (action.type) {
            // case "increment":
            //     return { count: state.count + 1 };
            // case "decrement":
            //     return { count: state.count - 1 };
            // default:
            //     return state;

            case "bgDark":
                localStorage.setItem("background", "black");
                return { backgroundColor: "black", textcolor: "white" };
            case "bgLight":
                localStorage.setItem("background", "white");
                return { backgroundColor: "white", textcolor: "black" };
            case "fromStorage":
                const storedBgColor = action.value === "black" ? "black" : "white";
                return {
                    backgroundColor: storedBgColor,
                    textcolor: storedBgColor === "black" ? "white" : "black"
                };
            default:
                return state;
        }
    }
    const initialState = {
        // count: 0
        backgroundColor: "white",
        textcolor: "black",
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        const savedBackgroundColor = localStorage.getItem("background");
        if (savedBackgroundColor) {
            dispatch({ type: "fromStorage", value: savedBackgroundColor });
        }
    }, []);
    return (
        <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>
    );
};

export default CounterContextComponent;