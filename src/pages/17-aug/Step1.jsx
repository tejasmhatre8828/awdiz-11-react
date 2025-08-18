import React, { useState } from "react";

const Step1 = () => {
    const [userData, setUserData] = useState({fullname: "", email: "", number: ""});
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserData((prevData) => ({
            ...prevData,
            [name] : value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name] : "",
        }));
    };
    // const handleTogglePassword = () => {
    //     setShowPassword(true);
    //     setTimeout(() => {
    //         setShowPassword(false)
    //     })
    // }

    // const validation = () => {
    //     const newErrors = {};
    // }
    return(
        <div>
        <h1>Step1</h1>
        <form>
            <label>Personal Information</label><br/>
            <label>FullName</label><br/>
            <input type="text" name="fullname"/><br/>
            <label>Email Address</label><br/>
            <input type="email" name="email"/><br/>
            <lable>Phone Number</lable><br/>
            <input type="number" name="phone number"/><br/>
        </form>
        <button>Next</button>
        </div>
    )
}

export default Step1;