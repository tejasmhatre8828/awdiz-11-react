import React from "react";

const Step2 = ({userData, handleChange}) => {

    return(
        <div style={{padding:"20px", marginInline:"20%", borderRadius: "10px", boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)", boxSizing: "border-box", width:"60%", backgroundColor:"lightgreen"}}>
            <label>UserName</label><br/>
            <input style={{fontFamily:"times new roman", border:"none", borderRadius:"5px", height:"20px"}} value={userData.username} type="text" name="username" onChange={handleChange}/><br/><br/>
            
            <label>Password</label><br/>
            <input style={{fontFamily:"times new roman", border:"none", borderRadius:"5px", height:"20px"}} value={userData.password} type="password" name="password" onChange={handleChange}/><br/><br/>
            
            <label>ConfirmPassword</label><br/>
            <input style={{fontFamily:"times new roman", border:"none", borderRadius:"5px", height:"20px"}} value={userData.confirmpassword} type="password" name="confirmpassword" onChange={handleChange}/><br/>
        </div>
    )
}

export default Step2;
