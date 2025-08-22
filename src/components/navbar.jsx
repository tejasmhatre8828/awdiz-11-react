import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CounterContext } from "../context/CounterContext";

const Navbar = () => {
    const { state, dispatch } = useContext(CounterContext);
    const router = useNavigate();
    function redirecttoLogin() {
        router("/login");
    }
    return (
        <div>
            {/* <button>Context Counter: {state?.count}</button> */}
            <button onClick={() => dispatch({type: "bgDark"})}>Dark</button>
            <button onClick={() => dispatch({type: "bgLight"})}>Light</button>
            <button onClick={() => router("/")}>Home</button>
            <button onClick={() => router("/register")}>Register</button>
            <button onClick={redirecttoLogin}>Login</button>
        </div>
    );
}

export default Navbar;