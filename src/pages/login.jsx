import React, { useState } from "react";
import Navbar from "../components/navbar";

const Login = () => {
    const [userData, setUserData] = useState({ name: "", password: "" });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Clear errors when user starts typing
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    };

    const handleTogglePassword = () => {
        setShowPassword(true);
        setTimeout(() => {
            setShowPassword(false);
        }, 1000);
    };
    const validate = () => {
        const newErrors = {};
        if (!userData.name.trim()) {
            newErrors.name = "Username is required";
        }
        if (!userData.password.trim()) {
            newErrors.password = "Password is required";
        } else if (userData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        return newErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        alert("Login Successfully");
    };

    const eyeOpen = "https://cdn-icons-png.flaticon.com/512/709/709612.png";
    const eyeClosed = "https://cdn-icons-png.flaticon.com/512/709/709586.png";

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} style={{ display: "inline-block", textAlign: "left" }}>
                <label style={{
                    fontFamily: "times new roman", fontWeight: "bold", color: "blue", fontSize: "25px"
                }}>Username</label><br />
                <input
                    name="name"
                    type="text"
                    value={userData.name}
                    onChange={handleChange}
                    style={{ border: errors.name ? "1px solid red" : "1px solid black" }}
                />
                {errors.name && (<p style={{ color: "red", margin: "5px 0" }}> {errors.name}</p>)}
                <br />

                <label style={{
                    fontFamily: "times new roman", fontWeight: "bold", color: "blue", fontSize: "25px"
                }}>Password</label><br />
                <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={userData.password}
                        onChange={handleChange}
                        style={{ border: errors.name ? "1px solid red" : "1px solid black" }}
                    />
                        <button
                            type="button"
                            onClick={handleTogglePassword}
                            style={{ cursor: "pointer" }}
                        >{showPassword ? "Hide" : "Show"}
                        </button>
                </div>
                {errors.password && (<p style={{ color: "red", margin: "5px 0" }}>{errors.password}</p>)}

                <br />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default Login;
