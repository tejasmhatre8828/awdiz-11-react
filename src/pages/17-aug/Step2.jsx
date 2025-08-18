import React from "react";

const Step2 = () => {
    // const [userData, setUserData] = ()

    return(
        <div>
        <h1>Step2</h1>
        <form>
            <label>Account Information</label><br/>
            <label>UserName</label><br/>
            <input type="text" name="username"/><br/>
            
            <label>Password</label><br/>
            <input type="password" name="password"/><br/>
            
            <label>ConfirmPassword</label><br/>
            <input type="password" name="confirm-password"/><br/>
        </form>
        </div>
    )
}

export default Step2;
