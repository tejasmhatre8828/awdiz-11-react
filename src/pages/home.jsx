import Navbar from "../components/navbar";
import React, { useState } from "react";
import { UseEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
    const user = useSelector((state) => state.counter.user);

    const [show, setShow] = useState(null);
    let nav = useNavigate();

    return (
        <div>
            <h1>HomePage</h1>
            <p>Welcome to the web application {user?.name} {user?.role}</p>
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