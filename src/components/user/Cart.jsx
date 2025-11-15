import React, { useEffect, useState } from "react";
import api from "../../services/axiosConfig";

const Cart = () => {
    const [cart, setCart] = useState({ items: [] });
    const [totalPrice, setTotalPrice] = useState(0);

    const currentUser = JSON.parse(localStorage.getItem("user"));
    // console.log(currentUser)

    // Load cart from backend
    useEffect(() => {
        const fetchCart = async () => {
            try {
                const res = await api.get("/carts/get-cart", { userId: currentUser._id });
                if (res.data.success) {
                    setCart(res.data.cart.items);
                    const total = res.data.cart.items.reduce(
                        (sum, item) => sum + item.productId.price * item.quantity,
                        0
                    );
                    setTotalPrice(total);
                }
            } catch (err) {
                console.error("Fetch Cart Error:", err);
            }
        };
        fetchCart();
    }, []);

    // Remove item from cart
    const handleRemove = async (productId) => {
        if (!currentUser) return;

        try {
            const res = await api.post("/carts/remove", {
                userId: currentUser._id,
                productId,
            });

            if (res.data.success) {
                setCart(res.data.cart.items);
                const total = res.data.cart.items.reduce(
                    (sum, item) => sum + item.productId.price * item.quantity,
                    0
                );
                setTotalPrice(total);
            } else {
                alert(res.data.message);
            }
        } catch (err) {
            console.error("Remove Cart Error:", err);
        }
    };

    if (!currentUser) {
        return <h2>Please log in to view your cart.</h2>;
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}> My Cart</h1>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "20px",
                    marginTop: "20px",
                }}
            >
                {cart.length > 0 ? (
                    cart.map((item) => (
                        <div
                            key={item.productId._id}
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "10px",
                                padding: "15px",
                                width: "250px",
                                textAlign: "center",
                            }}
                        >
                            <img
                                src={item.productId.imgUrl}
                                alt={item.productId.name}
                                style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }}
                            />
                            <h3>Name: <b>{item.productId.name}</b></h3>
                            <h4>Price: ₹{item.productId.price}</h4>
                            <button
                                onClick={() => handleRemove(item.productId._id)}
                                style={{ marginTop: "10px", backgroundColor: "red", color: "white", padding: "8px 12px", borderRadius: "5px", cursor: "pointer" }}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                ) : (
                    <h2>My Cart is Empty</h2>
                )}
            </div>

            {cart.length > 0 && (
                <div style={{ textAlign: "center", marginTop: "40px", fontSize: "20px", fontWeight: "bold" }}>
                    <hr style={{ width: "50%", margin: "20px auto" }} />
                    <p>Total Items: {cart.length}</p>
                    <p>Total Price: ₹{totalPrice}</p>
                    <button
                        onClick={() => alert("🛍️ Proceeding to checkout... (coming soon)")}
                        style={{ marginTop: "20px", backgroundColor: "#007bff", color: "white", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", fontSize: "16px" }}
                    >
                        Proceed to Checkout →
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;


// const Cart = () => {
//     const router = useNavigate();
//     const [cart, setCart] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [products, setProducts] = useState({});


//     async function getUserCartProducts() {
//         try {
//             setLoading(true);
//             const response = await api.get("/cart/get-cart");
//             if (response.data.success) {
//                 setProduct(response.data.cart.items);
//             }
//         } catch (error) {
//             console.log(error);
//         } finally {
//             setLoading(false);
//         }
//     }

//     const handleRemove = async (productId) => {
//         try {
//             const res = await api.post("/cart/remove", { productId }, { withCredentials: true });
//             if (res.data.success) {
//                 setCart(res.data.cart.items);
//                 setMessage(res.data.message);

//                 alert(res.data.message || "Product removed from cart!");

//                 setTimeout(() => setMessage(""), 2000);
//             }
//         } catch (err) {
//             console.error(err);
//             alert("Error removing product from cart.");
//         }
//     };

//     useEffect(() => {
//         getUserCartProducts();
//     }, []);
//     return (
//         <div>
//             {loading ? (
//                 <h1>Loading...</h1>
//             ) : (
//                 <div>
//                     <h1>Cart :</h1>
//                     {products.length === 0 ? (
//                         <p>Your cart is empty.</p>
//                     ) : (
//                         <div style={{ display: "flex", justifyContent: "space-around" }}>
//                             <div
//                                 style={{
//                                     width: "70%",
//                                     display: "flex",
//                                     flexWrap: "wrap",
//                                     justifyContent: "space-around",
//                                     border: "1px solid black",
//                                 }}
//                             >
//                                 {cart.map((item) => {
//                                     const product = item.productId;
//                                     return (
//                                         <div
//                                             style={{
//                                                 cursor: "pointer",
//                                                 width: "18%",
//                                                 height: "400px",
//                                                 borderRadius: "10px",
//                                                 border: "1px solid black",
//                                             }}
//                                             key={product._id}
//                                         >
//                                             <img
//                                                 style={{ height: "200px", width: "180px" }}
//                                                 src={product.imgUrl}
//                                             />
//                                             <h2>Name: {product.name}</h2>
//                                             <h3>Price: {product.price}</h3>
//                                             <h3>Quantity: {product.quantity}</h3>
//                                             <button onClick={() => handleRemove(product._id)}
//                                                 style={{
//                                                     backgroundColor: "red",
//                                                     color: "white",
//                                                     border: "none",
//                                                     padding: "8px 12px",
//                                                     borderRadius: "5px",
//                                                     cursor: "pointer",
//                                                     marginInline: "20px"
//                                                 }}>Remove</button>
//                                             <button>Go to Bag</button>
//                                         </div>
//                                     )
//                                 })}
//                             </div>
//                             {/* <div style={{ border: "1px solid black", width: "25%" }}></div> */}
//                         </div>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

