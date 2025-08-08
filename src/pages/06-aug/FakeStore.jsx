import React, { useEffect, useState } from "react";
import axios from "axios";

const FakeStore = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => setProducts(response.data))
            .catch((error) => {
                setError("Failed to fetch products: " + error.message);
            });
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ textAlign: "center" }}>FakeStore</h1>

            {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "20px",
                marginTop: "20px"
            }}>
                {products.map((product) => (
                    <div key={product.id} style={{
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        padding: "15px",
                        textAlign: "center"
                    }}>
                        <img
                            src={product.image}
                            alt={product.title}
                            style={{ height: "120px", objectFit: "contain" }}
                        />
                        <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{product.title}</h3>
                        <h4 style={{ margin: "5px 0" }}>${product.price}</h4>
                        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
                            <button>Add to Cart</button>
                            <button>Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FakeStore;
