import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import axios from "axios";
import { login } from "../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import api from "../services/axiosConfig.js";
import { useNavigate } from "react-router-dom";

// const Login = () => {
//     const [userData, setUserData] = useState({ email: "", password: "" });
//     const [errors, setErrors] = useState({});
//     const [showPassword, setShowPassword] = useState(false);

//     const handleChange = (event) => {
//         const { email, value } = event.target;
//         setUserData((prevData) => ({
//             ...prevData,
//             [email]: value,
//         }));

//         // Clear errors when user starts typing
//         setErrors((prevErrors) => ({
//             ...prevErrors,
//             [name]: "",
//         }));
//     };

//     const handleTogglePassword = () => {
//         setShowPassword(true);
//         setTimeout(() => {
//             setShowPassword(false);
//         }, 1000);
//     };
//     const validate = () => {
//         const newErrors = {};
//         if (!userData.email.trim()) {
//             newErrors.email = "Email is required";
//         }
//         if (!userData.password.trim()) {
//             newErrors.password = "Password is required";
//         } else if (userData.password.length < 6) {
//             newErrors.password = "Password must be at least 6 characters";
//         }
//         return newErrors;
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const validationErrors = validate();
//         if (Object.keys(validationErrors).length > 0) {
//             setErrors(validationErrors);
//             return;
//         }
//         try {
//             if (userData.email && userData.password) {
//                 const response = await axios.post("http://localhost:8000/api/v1/auth/login", userData);
//                 if (response.data.success) {
//                     alert(response.data.message);
//                     setUserData({
//                         email: "",
//                         password: "",
//                     })
//                 } else {
//                     alert(response.data.message)
//                 }
//             } else {
//                 alert(response.data.message);
//             };
//         } catch (error) {
//             alert(response.data.message)
//         }
//     };

//     const eyeOpen = "https://cdn-icons-png.flaticon.com/512/709/709612.png";
//     const eyeClosed = "https://cdn-icons-png.flaticon.com/512/709/709586.png";

//     return (
//         <div style={{ textAlign: "center" }}>
//             <h1>Login</h1>
//             <form onSubmit={handleSubmit} style={{ display: "inline-block", textAlign: "left" }}>
//                 <label style={{
//                     fontFamily: "times new roman", fontWeight: "bold", color: "blue", fontSize: "25px"
//                 }}>Email</label><br />
//                 <input
//                     name="email"
//                     type="email"
//                     value={userData.email}
//                     onChange={handleChange}
//                     style={{ border: errors.name ? "1px solid red" : "1px solid black" }}
//                 />
//                 {errors.name && (<p style={{ color: "red", margin: "5px 0" }}> {errors.name}</p>)}
//                 <br />

//                 <label style={{
//                     fontFamily: "times new roman", fontWeight: "bold", color: "blue", fontSize: "25px"
//                 }}>Password</label><br />
//                 <div style={{ display: "flex", alignItems: "center" }}>
//                     <input
//                         name="password"
//                         type={showPassword ? "text" : "password"}
//                         value={userData.password}
//                         onChange={handleChange}
//                         style={{ border: errors.email ? "1px solid red" : "1px solid black" }}
//                     />
//                     <button
//                         type="button"
//                         onClick={handleTogglePassword}
//                         style={{ cursor: "pointer" }}
//                     >{showPassword ? "Hide" : "Show"}
//                     </button>
//                 </div>
//                 {errors.password && (<p style={{ color: "red", margin: "5px 0" }}>{errors.password}</p>)}

//                 <br />
//                 <button type="submit">Log In</button>
//             </form>
//         </div>
//     );
// };

// export default Login;


const Login = () => {
    const router = useNavigate();
    const user = useSelector((state) => state.counter.user);
    console.log(user, "user");

    const dispatch = useDispatch()

    const [userData, setUserData] = React.useState({ email: "tejas@gmail.com", password: "Pass@123" });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (event) => {
        // console.log(event.target.value, event.target.name);
        setUserData({ ...userData, [event.target.name]: event.target.value });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (userData.email && userData.password) {
                const response = await api.post("/auth/login", userData);
                if (response.data.success) {
                    dispatch(login(response.data.user))
                    localStorage.setItem("user", JSON.stringify(response.data.user));
                    alert(response.data.message);
                    setUserData({
                        email: "",
                        password: ""
                    })
                } else {
                    alert(response.data.message)
                }
            } else {
                alert("Please fill all fields");
            };
        } catch (error) {
            console.log(error, "error in api call")
            alert(error)
        }

        // if(userData.password === userData.confirmpassword){
        //     console.log("User data submitted:" , userData);
        // } else{
        //     alert("Password do not match!");
        // };
    }

    useEffect(() => {
        if (user?.userId) {
            router("/")
        }
    }, [user])
    const eyeOpen = "https://cdn-icons-png.flaticon.com/512/709/709612.png";
    const eyeClosed = "https://cdn-icons-png.flaticon.com/512/709/709586.png";
    return (
        <div>
            <h1>Sign In / Login - {user?.name}</h1>
            {/* <h2>Name: {userData.name} Email: {userData.email} Password: {userData.password} Confirm Password: {userData.confirmPassword}</h2> */}
            <form onSubmit={handleSubmit} style={{ width: "200px", marginInline: "20%" }}>
                <label>Email</label><br />
                <input name="email" type="email" value={userData.email} onChange={handleChange} style={{ width: "190px" }} /><br /><br />

                <label>Password</label><br />
                <input name="password" type={showPassword ? "text" : "password"} value={userData.password} onChange={handleChange} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ background: "none", border: "none", cursor: "pointer" }}>
                    <img src={showPassword ? eyeOpen : eyeClosed} alt="toggle" style={{ width: "15px", height: "12px" }} /></button><br /><br />
                <button type="submit" style={{ border: "1px solid blue", fontSize: "18px", backgroundColor: "skyBlue", width: "90px", height: "30px", borderRadius: "10px" }}>Login</button>
            </form>
        </div>
    );
}

export default Login;

