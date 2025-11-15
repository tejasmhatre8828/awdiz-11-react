import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/axiosConfig";

const ProductDetails = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const { productId } = useParams();
    const router = useNavigate();


    const getSingleProductData = async () => {
        try {
            setLoading(true);
            const response = await api.get(`/products/get-products/${productId}`);
            if (response.data.success) {
                setProduct(response.data.product);
            }
        } catch (error) {
            console.log("Axios Error:", error);
        } finally {
            setLoading(false);
        }
    };

    const addProductCart = async () => {
        const currentUser = JSON.parse(localStorage.getItem("user"));
        if (!currentUser) {
            alert("Please log in first!");
            return;
        }
        // console.log("Adding to cart", {
        //     userId: currentUser?._id,
        //     productId: product?._id,
        //     quantity: 1,
        // });

        console.log(currentUser);
        try {
            const response = await api.post("/carts/add", {
                userId: currentUser.userId,
                productId: product._id,
                quantity: 1,
            });

            if (response.data.success) {
                alert(response.data.message);
                router("/cart");
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (productId) getSingleProductData();
    }, [productId]);

    if (loading) return <h1>Loading...</h1>;
    if (!product) return <h1>Product not found</h1>;

    return (
        <div style={{ margin: "20px" }}>
            <div
                style={{
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    padding: "10px",
                    width: "260px",
                    background: "#f9f9f9",
                }}
            >
                <img
                    src={product.imgUrl}
                    alt={product.name}
                    width="180px"
                    height="200px"
                    style={{ borderRadius: "10px" }}
                />
                <h3>{product.name}</h3>
                <p>Category: {product.category}</p>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>

                <button
                    onClick={addProductCart}
                    style={{
                        backgroundColor: "red",
                        color: "white",
                        border: "none",
                        padding: "8px 12px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        marginTop: "10px",
                    }}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;




// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import api from "../../services/axiosConfig";

// const ProductDetails = () => {
//     const [loading, setLoading] = useState(true);
//     const [product, setProduct] = useState({});
//     const { productId } = useParams();
//     console.log(productId, "productId");

//     const getSingleProductData = async () => {
//         try {
//             console.log("inside function")
//             setLoading(true);
//             const response = await api.get(`/products/get-products/${productId}`);
//             if (response.data.success) {
//                 //   console.log(response, "response");
//                 setProduct(response.data.product);
//             }
//         } catch (error) {
//             console.log(error);
//         } finally {
//             setLoading(false);
//         }
//     };
//     const addProductCart = async () => {
//         try {
//             const response = await api.post("/users/add-cart", {
//                 productId: productId,
//             });
//             if (response.data.success) {
//                 alert(response.data.message);
//                 router("/cart");
//             } else {
//                 alert(response.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         if (productId) {
//             getSingleProductData();
//         }
//     }, [productId]);
//     return (
//         <div>
//             {loading ? (
//                 <h1>Loading...</h1>
//             ) : (
//                 <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//                     {products.map((product) => (
//                         <div
//                             key={product._id}
//                             onClick={() => router(`/product-details/${product._id}`)}
//                             style={{
//                                 border: "1px solid #ccc",
//                                 borderRadius: "10px",
//                                 padding: "10px",
//                                 width: "250px",
//                                 background: "#f9f9f9",
//                             }}
//                         >
//                             <img
//                                 src={product.imgUrl}
//                                 alt={product.name}
//                                 width="180px"
//                                 height="200px"
//                                 style={{ borderRadius: "10px" }}
//                             />
//                             <h3>{product.name}</h3>
//                             <p>Category: {product.category}</p>
//                             <p>Price: ${product.price}</p>
//                             <p>Quantity: {product.quantity}</p>
//                             <div>
//                                 <button onClick={addProductCart}
//                                     style={{
//                                         backgroundColor: "red",
//                                         color: "white",
//                                         border: "none",
//                                         padding: "8px 12px",
//                                         borderRadius: "5px",
//                                         cursor: "pointer",
//                                         marginInline: "20px"
//                                     }}> Add to Cart</button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     )
// };

// export default ProductDetails;



