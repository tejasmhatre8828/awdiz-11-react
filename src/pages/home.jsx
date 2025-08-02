import Navbar from "../components/navbar";
import React, { useState } from "react";
import { UseEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [show, setShow] = useState(null);
    let nav = useNavigate();

    return (
        <div>
            <h1>HomePage</h1>
            <p>Welcome to the web application</p>
            {/* <div className="sel-btn">
                <button onClick={() => setShow("effect")}>useEffect</button>
                <button onClick={() => setShow("state")}>useState</button>
                <button onClick={() => setShow("clear")}>Clear</button>
                <button onClick={() => nav("/useEffect")}>useEffect</button>
                <button onClick={() => nav("/useState")}>useState</button>
                <button onClick={() => nav("/useParams")}>useParams</button>
            </div>
            {show === "effect" && <UseEffect />}
            {show === "state" && <UseState />}
            {show === "clear" && null} */}
        </div>
    );
}

export default Home;