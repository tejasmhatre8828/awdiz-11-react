import Navbar from "../components/navbar";
import React from "react";
import react, { useState } from "react";

const Login = () => {

    const eyeOpen = "https://cdn-icons-png.flaticon.com/512/709/709612.png";
    const eyeClosed = "https://cdn-icons-png.flaticon.com/512/709/709586.png";
    return (
        <div>
            <h1>Login</h1>
            <form>
                <lable>Username</lable><br />
                <input /><br />

                <label>Password</label><br />
                <input />
                <button><img /></button><br />

                <button type="submit">Log In</button>
            </form>
        </div>
    );
}

export default Login;