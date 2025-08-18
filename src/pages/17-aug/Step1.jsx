import React, { useState } from "react";

const Step1 = ({ userData, handleChange }) => {

    return (
        <div style={{padding:"20px", marginInline:"20%", borderRadius: "10px", boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)", boxSizing: "border-box", width:"60%", backgroundColor:"lightgreen"}}>
            <label>FullName</label><br />
            <input style={{fontFamily:"times new roman", border:"none", borderRadius:"5px", height:"20px"}} value={userData.name} type="text" name="name" onChange={handleChange} /><br /><br />
            <label>Email Address</label><br />
            <input style={{fontFamily:"times new roman", border:"none", borderRadius:"5px", height:"20px"}} value={userData.email} type="email" name="email" onChange={handleChange} /><br /><br />
            <label>Phone Number</label><br />
            <input style={{fontFamily:"times new roman", border:"none", borderRadius:"5px", height:"20px"}} value={userData.mobile} type="number" name="mobile" onChange={handleChange} /><br />
        </div>
    )
}

export default Step1;