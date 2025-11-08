
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../../services/axiosConfig";


const AddProduct = () => {
    const user = useSelector((state) => state.counter.user);
    const router = useNavigate();
    const [productData, setProductData] = useState({
        name: "",
        price: "",
        category: "",
        quantity: "",
        imgUrl: "",
    });

    const handleChange = (event) => {
        console.log(event.target.value, event.target.name);
        setProductData({ ...productData, [event.target.name]: event.target.value });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (
                productData.name &&
                productData.price &&
                productData.category &&
                productData.quantity &&
                productData.imgUrl
            ) {

                const response = await api.post("/seller/add-product", productData);

                if (response.data.success) {
                    alert(response.data.message);
                    setProductData({
                        name: "",
                        price: "",
                        category: "",
                        quantity: "",
                        imgUrl: "",
                    });
                } else {
                    alert(response.data.message);
                }
            } else {
                alert("Please fill all fields");
            }
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <label>Product Name</label>
                <br />
                <input
                    name="name"
                    type="text"
                    value={productData.name}
                    onChange={handleChange}
                />
                <br />
                <label>Product Price</label>
                <br />
                <input
                    name="price"
                    type="number"
                    value={productData.price}
                    onChange={handleChange}
                />
                <br />
                <label>Product Category</label>
                <br />
                <input
                    name="category"
                    type="text"
                    value={productData.category}
                    onChange={handleChange}
                />
                <br />
                <label>Product Quantity</label>
                <br />
                <input
                    name="quantity"
                    type="number"
                    value={productData.quantity}
                    onChange={handleChange}
                />
                <br />
                <label>Product Image Url</label>
                <br />
                <input
                    name="imgUrl"
                    type="url"
                    value={productData.imgUrl}
                    onChange={handleChange}
                />
                <br />
                <input type="submit" value="Submit Product" />
            </form>
        </div>
    );
};

export default AddProduct;