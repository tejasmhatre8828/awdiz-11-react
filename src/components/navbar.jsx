import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CounterContext } from "../context/CounterContext";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/store";
import api from "../services/axiosConfig";

const Navbar = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.counter.user);
    const state = useContext(CounterContext);
    const router = useNavigate();
    function redirecttoLogin() {
        router("/login");
    }

    async function Logout() {
        try {
            const response = await api.get("/auth/logout");
            if (response.data.success) {
                dispatch(logout());
                alert(response.data.message);
                router("/");
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            {/* <button>Context Counter: {state?.count}</button> */}
            {/* <button onClick={() => dispatch({ type: "bgDark" })}>Dark</button>
            <button onClick={() => dispatch({ type: "bgLight" })}>Light</button> */}
            {/* <button onClick={() => router("/register")}>Register</button>
            <button onClick={redirecttoLogin}>Login</button> */}

            <button onClick={() => router("/")}>Home</button>
            {!user && <button onClick={() => router("/register")}>Register</button>}
            {!user && <button onClick={redirecttoLogin}>Login</button>}
            {user?.role == "seller" && (
                <>
                    <button onClick={() => router("/add-product")}>Add Product</button>
                    <button onClick={() => router("/view-products")}>View Product</button>
                    <button>View Orders</button>
                </>
            )}
            {user?.role == "user" && (
                <>
                    <button onClick={()=> router("/all-product")}>Products</button>
                    <button onClick={()=> router("/cart")}>Cart</button>
                    <button>View Orders</button>
                </>
            )}
            {user && <button onClick={Logout}>Logout</button>}
        </div>
    );
}

export default Navbar;