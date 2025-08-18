import React from "react";

const Step3 = ({ userData }) => {

    return (
        <div style={{borderRadius: "10px", boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)", boxSizing: "border-box", backgroundColor:"#c0fc8b", margin: "5%", padding:"15px", fontFamily: "times new roman", display: "block", justifyContent: "left", fontSize: "12px", textAlign: "left" }}>
            <div style={{ fontSize: "15px" }}><strong>Full Name :</strong> {userData.name}</div><br />
            <div style={{ fontSize: "15px" }}><strong>Email Address :</strong> {userData.email}</div><br />
            <div style={{ fontSize: "15px" }}><strong>Phone Number :</strong> {userData.mobile}</div><br />
            <div style={{ fontSize: "15px" }}><strong>Username :</strong> {userData.username}</div><br />
            <div style={{ fontSize: "15px" }}><strong>Password :</strong> {userData.password}</div>
        </div>
    )
}

export default Step3;