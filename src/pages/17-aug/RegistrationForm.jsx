import React, { useEffect, useState } from "react";
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import { toast, ToastContainer } from "react-toastify";

const RegistrationForm = () => {
    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        mobile: "",
        username: "",
        password: "",
        confirmpassword: "",
    });
    const handleChange = (e) => {
        const updatedData = { ...userData, [e.target.name]: e.target.value };
        setUserData(updatedData);
        localStorage.setItem("userData", JSON.stringify(updatedData));
    }

    useEffect(() => {
        const savedData = localStorage.getItem("userData");
        const savedStep = localStorage.getItem("step");
        if (savedData) {
            setUserData(JSON.parse(savedData));
        }
        if (savedStep) {
            setStep(parseInt(savedStep, 10));
        }
    }, []);
    const handleSubmit = () => {
        if (userData.name && userData.email && userData.mobile && userData.username && userData.password && userData.confirmpassword) {
            const confirmation = window.confirm("Do you want to submit the form?");
            if (confirmation) {
                setUserData({
                    name: "",
                    email: "",
                    mobile: "",
                    username: "",
                    password: "",
                    confirmpassword: "",
                });
                toast.success("Form Submitted successfully!");
                setStep(1);
                localStorage.removeItem("userData");
                localStorage.removeItem("step");
            } else {
                toast.error("Something went wrong.")
            }
        }
    }

    const nextStep = () => {
        if (step == 1 && (!userData.name || !userData.email || !userData.mobile)) {
            toast.error("Please fill all fields");
        } else if (step == 1 && userData.name && userData.email && userData.mobile) {
            setStep(step + 1);
            localStorage.setItem("step", step + 1);
        } else if (step == 2 && (!userData.username || !userData.password || !userData.confirmpassword)) {
            toast.error("All fields are required");
        } else if (step == 2 && userData.username && userData.password && userData.confirmpassword) {
            if (userData.password !== userData.confirmpassword) {
                toast.error("Password & ConfirmPassword should be same");
            } else if (userData.password === userData.confirmpassword) {
                setStep(step + 1);
                localStorage.setItem("step", step + 1);
            }
        }
    }

    const backButton = () => {
        setStep(step - 1);
        localStorage.setItem("step", step - 1);
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignSelf: "center", fontFamily: "times new roman" }}>
            <div style={{ borderRadius: "10px", backgroundColor: "ButtonShadow", width: "30%", boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)" }}>
                <ToastContainer
                    autoClose={3000} />
                <h1>3-step Registration Form</h1>
                <div>
                    <h3>Step {step} of 3</h3>
                    {step == 1 && <h2>Step 1: Personal Information</h2>}
                    {step == 2 && <h2>Step 2: Account Information</h2>}
                    {step == 3 && <h2>Step 3: Review & Submit</h2>}
                    {step == 1 && <Step1 userData={userData} handleChange={handleChange} />}
                    {step == 2 && <Step2 userData={userData} handleChange={handleChange} />}
                    {step == 3 && <Step3 userData={userData} />}
                </div><br />
                <div style={{ margin: "auto", width: "40%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {step > 1 ? <button style={{ fontFamily: "times new roman", margin: "auto", border: "none", fontSize: "15px", fontWeight: "bold", width: "60px", height: "30px", borderRadius: "5px", backgroundColor: "#2091fa", color: "white" }} onClick={backButton}>Back</button> : <></>}
                    {step > 2 ? (<button style={{ fontFamily: "times new roman", margin: "auto", border: "none", fontSize: "15px", fontWeight: "bold", width: "60px", height: "30px", borderRadius: "5px", backgroundColor: "#2091fa", color: "white" }} onClick={handleSubmit}>Submit</button>) :
                        (<button style={{ fontFamily: "times new roman", margin: "auto", border: "none", fontSize: "15px", fontWeight: "bold", width: "60px", height: "30px", borderRadius: "5px", backgroundColor: "#2091fa", color: "white" }} onClick={nextStep}>Next</button>)}
                </div><br />
            </div>
        </div>
    )
}

export default RegistrationForm;