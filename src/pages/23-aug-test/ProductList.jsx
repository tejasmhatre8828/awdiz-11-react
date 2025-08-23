import React, { useState } from "react";

const productsData = [
    { id: 1, name: "Laptop", price: 60000 },
    { id: 2, name: "Phone", price: 30000 },
    { id: 3, name: "Headphones", price: 2000 },
];
function ProductList() {
    const [products, setProducts] = useState(productsData);
    const sortByPrice = () => {
        const sorted = [...products].sort((a, b) => a.price - b.price);
        setProducts(sorted);
    };
    return (
        <div>
            <ul>
                <button onClick={sortByPrice}>Sort by Price</button>
                {products.map((p) => (
                    <li key={p.id}>
                        {p.name} - ■{p.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;