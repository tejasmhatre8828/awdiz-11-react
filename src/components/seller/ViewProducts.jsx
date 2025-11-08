import React, { useEffect, useState } from "react";
import api from "../../services/axiosConfig";
import { useSelector } from "react-redux";

const ViewProducts = () => {
  const user = useSelector((state) => state.counter.user);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/seller/products");
        if (response.data.success) {
          setProducts(response.data.products);
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        alert("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        await api.delete(`/seller/products/${id}`);
        setProducts(products.filter((prod) => prod._id !== id));
      } catch (err) {
        alert("Failed to delete product");
      }
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Products</h1>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {products.map((p) => (
            <div
              key={p._id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "10px",
                width: "250px",
                background: "#f9f9f9",
              }}
            >
              <img
                src={p.imgUrl}
                alt={p.name}
                width="100%"
                style={{ borderRadius: "10px" }}
              />
              <h3>{p.name}</h3>
              <p>Category: {p.category}</p>
              <p>Price: ${p.price}</p>
              <p>Quantity: {p.quantity}</p>
              <button
                onClick={() => handleDelete(p._id)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "5px",
                  cursor: "pointer",
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
