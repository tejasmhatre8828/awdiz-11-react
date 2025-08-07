// import React from "react";
// import react, { useState } from "react";
// import react, { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import './PageNotFoud.css';

const PageNotFound = () => {
    const navigate = useNavigate();
    const [secondsLeft, setSecondsLeft] = useState(5);

    useEffect(() => {
        let counter = 5;
        const countTime = setInterval(() => {
            setSecondsLeft(counter = counter - 1);
        }, 1000);
        const timedelay = setTimeout(() => {
            navigate('/')
        }, 5000);
    }, [navigate]);

    return (
        <div className="body">
            <h1 className="title">404 Error! Page not found</h1>
            <p className="sub-title">Redirecting to <strong>Home</strong> in <strong className="sec">{secondsLeft}</strong> seconds....</p>
        </div>
    )
}

export default PageNotFound;

