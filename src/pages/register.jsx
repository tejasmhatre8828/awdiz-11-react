import Navbar from "../components/navbar";
import React from "react";
import react, { useState } from "react";

// const Register = () => {
//     const [name, setName] = React.useState("");
//     const [email, setEmail] = React.useState("");
//     const [password, setPassword] = React.useState("");
//     const [confirmpassword, setConfirmPassword] = React.useState("");
//     return (
//         <div>
//             <h1>Sign Up</h1>
//             <h2>Name: {name} Email: {email} Password: {password} Confiorm Password: {confirmpassword}</h2>
//             <form>
//                 <label>Name</label><br />
//                 <input type="text" onChange={(event) => setName(event.target.value)} /><br />
//                 <label>Email</label><br />
//                 <input type="email" onChange={(event) => setEmail(event.target.value)} /><br />
//                 <label>Password</label><br />
//                 <input type="password" onChange={(event) => setPassword(event.target.value)} /><br />
//                 <label>Confirm Password</label><br />
//                 <input type="password" onChange={(event) => setConfirmPassword(event.target.value)} /><br />
//                 <input type="submit" /><br />
//             </form>
//         </div>
//     );
// };

const Register = () => {
    const [userData, setUserData] = React.useState({ name: "", email: "", password: "", confirmPassword: "", });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (event) => {
        console.log(event.target.value, event.target.name);
        setUserData({ ...userData, [event.target.name]: event.target.value });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            if (userData.name && userData.email && userData.password && userData.confirmPassword) {
                alert("Submitted Successfully!");
            } else {
                alert("Please fill all fields");
            };
        } catch (error) {
            alert(error)
        }

        // if(userData.password === userData.confirmpassword){
        //     console.log("User data submitted:" , userData);
        // } else{
        //     alert("Password do not match!");
        // };
    }
    const eyeOpen = "https://cdn-icons-png.flaticon.com/512/709/709612.png";
    const eyeClosed = "https://cdn-icons-png.flaticon.com/512/709/709586.png";
    return (
        <div>
            <h1>Sign Up</h1>
            <h2>Name: {userData.name} Email: {userData.email} Password: {userData.password} Confirm Password: {userData.confirmPassword}</h2>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br />
                <input name="name" type="text" value={userData.name} onChange={handleChange} /><br />

                <label>Email</label><br />
                <input name="email" type="email" value={userData.email} onChange={handleChange} /><br />

                <label>Password</label><br />
                <input name="password" type={showPassword ? "text" : "password"} value={userData.password} onChange={handleChange} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ background: "none", border: "none", cursor: "pointer" }}>
                    <img src={showPassword ? eyeOpen : eyeClosed} alt="toggle" style={{ width: "15px", height: "12px" }} /></button><br />

                <label>Confirm Password</label><br />
                <input name="confirmPassword" type={showConfirmPassword ? "text" : "password"} value={userData.confirmPassword} onChange={handleChange} />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{ background: "none", border: "none", cursor: "pointer" }}>
                    <img src={showConfirmPassword ? eyeOpen : eyeClosed} style={{ width: "15px", height: "12px" }} /></button><br />

                <input type="submit" /><br />
            </form>
        </div>
    );
}

export default Register;

