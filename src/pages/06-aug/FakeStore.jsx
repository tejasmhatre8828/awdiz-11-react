import React, { useEffect, useState } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";

const FakeStore = () => {
    const { id } = useParams()
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError("Failed to fetch products: " + error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <h1>Loading Products....</h1>;
    }
    if (error) {
        return <p style={{ color: "red" }}>{error}</p>
    }

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
                    <Link key={product.id}
                    to={`/products/${product.id}`}
                     style={{
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        padding: "15px",
                        textDecoration: "none",
                        color: "inherit",
                        textAlign: "center",
                    }}>
                        <div style={{ display: "block", justifyContent: "baseline", alignContent: "stretch", height: "85%" }}>
                            <img
                                src={product.image}
                                alt={product.title}
                                // onClick={useEffect}
                                style={{ height: "150px", width: "100%", objectFit: "contain", cursor: "pointer" }}
                            />
                            <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{product.title}</h3>
                            <h4 style={{ margin: "5px 0" }}>${product.price}</h4>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignContent: "stretch", gap: "10px", marginTop: "10px", paddingTop: "10px" }}>
                            <button>Add to Cart</button>
                            <button>Buy Now</button>
                        </div>

                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FakeStore;
