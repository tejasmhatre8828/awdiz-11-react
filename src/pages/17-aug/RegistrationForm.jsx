import React, { useState } from "react";
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

const RegistrationForm = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        mobile: "",
        username: "",
        password: "",
        confirmpassword: "",
    });
    const [step, setStep] = useState(0)
    const userStep = ["Personal Information", "Account Information", "Review & Submit"]
    const [formData, setFormData] = useState(userData)
    // const nextStep = () => {
    //     if (step == 0){
    //         return <Step1 />
    //     } else if (step == 1){
    //         return <Step2 />
    //     } else {
    //         return <Step3 />
    //     }
    // };

    const handleNextButton = () => {
        setStep(step + 1);
    };
    const handleBackButton = () => {
        setStep(step - 1);
    }
    // const switchSteps = () => {
    //     switch (step) {
    //         case 1:
    //             return ("Step 1 : Personal Information");
    //         case 2:
    //             return ("Step 2 : Account Information");
    //         case 3:
    //             return ("Step 3 : Review & Submit");
    //     }
    // }

    return (
        <div>
            <h1>3-step Registration Form</h1>
            <h2>{userStep[step]}</h2>
            {/* <div>{nextStep}</div> */}
            {/* <p>{Step1} {Step2} {Step3}</p> */}
            <button onClick={handleBackButton}>Back</button>
            <button onClick={handleNextButton}>Next</button>
        </div>
    )
}

export default RegistrationForm;