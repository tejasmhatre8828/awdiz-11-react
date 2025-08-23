import React, { useEffect } from "react";
// import {CountDownTimer} from react;

const CountDownTimer = () => {
    const [countdown, setCountDown] = React.useState("10");


    useEffect(() => {
        if (count > 0) {
            const timer = setTimeout(() => setCount(count - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [countdown]);

    return (
        <div>
            <h1>CountDown: {countdown}</h1>
        </div>
    );
};

export default CountDownTimer;