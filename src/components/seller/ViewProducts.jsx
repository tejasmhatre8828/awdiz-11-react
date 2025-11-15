import React, { useEffect, useState } from "react";
import api from "../../services/axiosConfig";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ViewProducts = () => {
    const router = useNavigate();
    const user = useSelector((state) => state.counter.user);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getSellerProducts() {
        try {
            setLoading(true);
            const response = await api.get("/seller/get-seller-products");
            if (response.data.success) {
                setProducts(response.data.products);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        getSellerProducts();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await api.delete(`/seller/delete-product/${id}`);
            if (response.data.success) {
                setProducts(products.filter((product) => product._id !== id));
                alert(response.data.message);
            } else {
                alert("Failed: " + response.data.message);
            }
        } catch (error) {
            console.log("Error deleting product:", error);
            alert("Failed to delete product");
        }
    };

    const handleEdit = async (id) => {
        const name = prompt("Enter new product name:");
        const price = prompt("Enter new product price:");
        const quantity = prompt("Enter new quantity:");
        const category = prompt("Enter new category:");
        const imgUrl = prompt("Enter new image URL:");

        try {
            const response = await api.put(`/seller/edit-product/${id}`, {
                name,
                price,
                quantity,
                category,
                imgUrl,
            });
            if (response.data.success) {
                // Update product in frontend state
                setProducts(products.map(p => p._id === id ? response.data.product : p));
                alert("Product updated successfully");
            } else {
                alert("Failed: " + response.data.message);
            }
        } catch (error) {
            console.log("Edit product error:", error);
            alert("Failed to update product");
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                    {products.map((product) => (
                        <div
                            key={product._id}
                            onClick={() => router(`/product-details/${product._id}`)}
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "10px",
                                padding: "10px",
                                width: "250px",
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
                                onClick={() => handleEdit(product._id)}
                                style={{
                                    backgroundColor: "red",
                                    color: "white",
                                    border: "none",
                                    padding: "8px 12px",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    marginInline:"20px"
                                }}
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(product._id)}
                                style={{
                                    backgroundColor: "red",
                                    color: "white",
                                    border: "none",
                                    padding: "8px 12px",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    marginInline:"20px"
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ViewProducts;
