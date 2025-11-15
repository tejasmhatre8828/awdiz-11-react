import React, { useEffect, useState } from "react";
import api from "../../services/axiosConfig";
import { useNavigate, useParams } from "react-router-dom";

const AllProducts = () => {
    const router = useNavigate();
    const { category: routeCategory } = useParams();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Use EXACT categories from backend
    const categories = ["all", "Shoes", "shirt", "tshirt", "jeans"];

    // ⬇ FIX: Accept category argument
    const getProductsByCategory = async (cat) => {
        try {
            setLoading(true);

            const url = cat === "all"
                ? "/products/filter-products/all"
                : `/products/filter-products/${cat}`;

            const response = await api.get(url);

            if (response.data.success) {
                setProducts(response.data.products);
            }
        } catch (error) {
            console.log("Category API error :", error.response?.data || error.message || error);
        } finally {
            setLoading(false);
        }
    };

    const handleCategoryClick = (cat) => {
        setSelectedCategory(cat);
        getProductsByCategory(cat);
    };

    const handleAddToCart = async (productId) => {
        try {
            const response = await api.post("/carts/add", {
                productId,
                quantity: 1
            });

            alert(response.data.success ? "Product added to cart!" : "Failed to add product.");
        } catch (error) {
            alert("Error adding product to cart.");
        }
    };

    // Load default on mount
    useEffect(() => {
        getProductsByCategory("all");
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
                All Products
            </h2>

            {/* Category Buttons */}
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => handleCategoryClick(cat)}
                        style={{
                            margin: "5px",
                            padding: "10px 18px",
                            borderRadius: "6px",
                            border:
                                selectedCategory === cat
                                    ? "2px solid #c05132"
                                    : "1px solid #ccc",
                            backgroundColor:
                                selectedCategory === cat ? "#c05132" : "#fff",
                            color:
                                selectedCategory === cat ? "#fff" : "#333",
                            cursor: "pointer",
                        }}
                    >
                        {cat.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* Products Grid */}
            {loading ? (
                <h3 style={{ textAlign: "center" }}>Loading...</h3>
            ) : products.length === 0 ? (
                <p style={{ textAlign: "center" }}>No products found.</p>
            ) : (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fill, minmax(240px, 1fr))",
                        gap: "25px",
                    }}
                >
                    {products.map((product) => (
                        <div
                            key={product._id}
                            onClick={() => router(`/product-details/${product._id}`)}
                            style={{
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                padding: "10px",
                                textAlign: "center",
                                cursor: "pointer",
                            }}
                        >
                            <img
                                src={product.imgUrl}
                                alt={product.name}
                                style={{ width: "180px", height: "200px" }}
                            />
                            <h4>{product.name}</h4>
                            <p>
                                <b>Category:</b> {product.category}
                            </p>
                            <p>
                                <b>Price:</b> ₹{product.price}
                            </p>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation(); // prevent opening details
                                    handleAddToCart(product._id);
                                }}
                                style={{
                                    width: "100%",
                                    background: "#c05132",
                                    color: "white",
                                    border: "none",
                                    padding: "8px 12px",
                                    borderRadius: "6px",
                                    marginTop: "10px",
                                }}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllProducts;


// import React, { useEffect, useState } from "react";
// import api from "../../services/axiosConfig";
// import { useNavigate, useParams } from "react-router-dom";

// const AllProducts = () => {
//     const router = useNavigate();
//     const { category } = useParams();
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [selectedCategory, setSelectedCategory] = useState("all");

//     const categories = ["all", "shoes", "shirts", "t-shirts", "jeans"];

//     // const getProducts = async (category) => {
//     //     try {
//     //         setLoading(true);
//     //         const query = category && category !== "all" ? `?category=${category}` : "";
//     //         const response = await api.get(`/products/filter-products${category}`);

//     //         if (response.data.success) {
//     //             setProducts(response.data.products);
//     //         } else {
//     //             console.log("Failed to fetch products");
//     //         }
//     //     } catch (err) {
//     //         console.log("Error fetching products:", err);
//     //     } finally {
//     //         setLoading(false);
//     //     }
//     // };

//     const getProductsByCategory = async () => {
//         try {
//             setLoading(true);
//             const response = await api.get(`/products/filter-products/${category}`);

//             if (response.data.success) {
//                 setProducts(response.data.products);
//             }
//         } catch (error) {
//             console.log("Category API error", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleCategoryClick = (category) => {
//         setSelectedCategory(category);
//         getProductsByCategory(category);
//     };

//     const handleAddToCart = async (productId) => {
//         try {
//             const response = await api.post("/carts/add", { productId, quantity: 1 });
//             alert(response.data.success ? "Product added to cart!" : "Failed to add product.");
//         } catch (error) {
//             console.error("Add to cart error:", error);
//             alert("Error adding product to cart.");
//         }
//     };

//     useEffect(() => {
//         getProductsByCategory(selectedCategory);
//     }, []);

//     return (
//         <div style={{ padding: "20px" }}>
//             <h2
//                 style={{
//                     textAlign: "center",
//                     marginBottom: "30px",
//                     fontSize: "24px",
//                     color: "#333",
//                 }}
//             >
//                 All Products
//             </h2>

//             {/* ✅ Category Filter Buttons */}
//             <div style={{ textAlign: "center", marginBottom: "20px" }}>
//                 {categories.map((category) => (
//                     <button
//                         key={category}
//                         onClick={() => handleCategoryClick(category)}
//                         style={{
//                             margin: "5px",
//                             padding: "10px 18px",
//                             borderRadius: "6px",
//                             border: selectedCategory === category ? "2px solid #c05132" : "1px solid #ccc",
//                             backgroundColor: selectedCategory === category ? "#c05132" : "#fff",
//                             color: selectedCategory === category ? "#fff" : "#333",
//                             cursor: "pointer",
//                             fontWeight: "500",
//                             transition: "0.2s",
//                         }}
//                     >
//                         {category.toUpperCase()}
//                     </button>
//                 ))}
//             </div>

//             {/* ✅ Product Grid */}
//             {loading ? (
//                 <h3 style={{ textAlign: "center" }}>Loading...</h3>
//             ) : products.length === 0 ? (
//                 <p style={{ textAlign: "center" }}>No products found.</p>
//             ) : (
//                 <div
//                     style={{
//                         display: "grid",
//                         gridTemplateColumns:
//                             "repeat(auto-fill, minmax(clamp(220px, 30%, 300px), 1fr))",
//                         gap: "25px",
//                         justifyContent: "left",
//                     }}
//                 >
//                     {products.map((product) => (
//                         <div
//                             key={product._id}
//                             onClick={() => router(`/product-details/${product._id}`)}
//                             style={{
//                                 border: "1px solid #ddd",
//                                 borderRadius: "8px",
//                                 padding: "10px",
//                                 textAlign: "center",
//                             }}
//                         >
//                             <img
//                                 src={product.imgUrl}
//                                 alt={product.name}
//                                 style={{ width: "180px", height: "200px" }}
//                             />
//                             <h4>{product.name}</h4>
//                             <p style={{ margin: "5px 0", color: "#555" }}>
//                                 <b>Category:</b> {product.category}
//                             </p>
//                             <p>
//                                 <b>Price:</b> ₹{product.price}
//                             </p>
//                             <button
//                                 onClick={() => handleAddToCart(product._id)}
//                                 style={{
//                                     width: "100%",
//                                     background: "#c05132ff",
//                                     color: "#fff",
//                                     border: "none",
//                                     padding: "8px 12px",
//                                     borderRadius: "6px",
//                                     cursor: "pointer",
//                                     fontWeight: "500",
//                                     marginTop: "10px",
//                                 }}
//                             >
//                                 Add to Cart
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AllProducts;


