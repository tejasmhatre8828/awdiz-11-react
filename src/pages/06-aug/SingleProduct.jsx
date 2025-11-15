import React, { useEffect, useState } from "react";
import FakeStore from "./FakeStore";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"

const SingleProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => { axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError("Failed to fetch products: " + error.message);
                setLoading(false);
            })
    }, [id]);

    useEffect(() => {
        const storedProduct = JSON.parse(localStorage.getItem("product"));
        if (storedProduct) {
            console.log("Retrieved from localStorage:", storedProduct);
        }
    }, []);

    if (loading) {
        return <h1>Loading Product....</h1>;
    }
    if (error) {
        return <p style={{ color: "red" }}>{error}</p>
    }
    if (!product) {
        return <h2>No product Found.</h2>
    }

    const handleAddCart = () => {
        localStorage.setItem("product", JSON.stringify(product));
        alert("Product added to cart");
    }
    return (
        <div style={{ padding: "20px" }}>
            <Link to="/fakestore" style={{ textDecoration: "none", color: "red", border: "1px solid blue", borderRadius: "5px", }}>← Back to FakeStore</Link>
            <h1 style={{ textAlign: "center" }}>{product.title}</h1>
            <img
                src={product.image}
                alt={product.title}
                style={{ height: "280px", objectFit: "contain" }}
            />
            <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{product.title}</h3>
            <h4 style={{ margin: "5px 0" }}>${product.price}</h4>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
                <button onClick={handleAddCart}>Add to Cart</button>
                <button style={{ marginLeft: "10px" }}>Buy Now</button>
            </div>
        </div>
    )
}

export default SingleProduct