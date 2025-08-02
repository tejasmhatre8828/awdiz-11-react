import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UseParams = () => {
    const router = useNavigate();
    const [tshirt, setTshirt] = useState([
        { id: 1, name: "T-shirt 1", price: 200, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT1QNr1PTkYM6nRbIYDcyCAM-PIU1QHMYCOcCefeYnkbo62mutQY-QZq_ufeBdjrFN0aBqyFJwyOggz-BMN_iK-RC4KqeEPUYyqRcVl3-jJ&usqp=CAc" },
        { id: 2, name: "T-shirt 2", price: 400, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT1QNr1PTkYM6nRbIYDcyCAM-PIU1QHMYCOcCefeYnkbo62mutQY-QZq_ufeBdjrFN0aBqyFJwyOggz-BMN_iK-RC4KqeEPUYyqRcVl3-jJ&usqp=CAc" },
        { id: 3, name: "T-shirt 3", price: 600, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT1QNr1PTkYM6nRbIYDcyCAM-PIU1QHMYCOcCefeYnkbo62mutQY-QZq_ufeBdjrFN0aBqyFJwyOggz-BMN_iK-RC4KqeEPUYyqRcVl3-jJ&usqp=CAc" },
        { id: 4, name: "T-shirt 4", price: 800, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT1QNr1PTkYM6nRbIYDcyCAM-PIU1QHMYCOcCefeYnkbo62mutQY-QZq_ufeBdjrFN0aBqyFJwyOggz-BMN_iK-RC4KqeEPUYyqRcVl3-jJ&usqp=CAc" },
        { id: 5, name: "T-shirt 5", price: 1000, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT1QNr1PTkYM6nRbIYDcyCAM-PIU1QHMYCOcCefeYnkbo62mutQY-QZq_ufeBdjrFN0aBqyFJwyOggz-BMN_iK-RC4KqeEPUYyqRcVl3-jJ&usqp=CAc" }
    ]);
    console.log(tshirt, "tshirt");
    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            {tshirt.map((product) => (
                <div
                    key={product.id}
                    onClick={() => router(`/product/${product.id}`)}
                    style={{ border: "2px solid green", cursor: "pointer" }}>
                    <img
                        style={{ width: "220px", height: "200px" }}
                        src={product.image} />
                    <h3>Nmae: {product.name}</h3>
                    <h3>Price: {product.price}/-</h3>
                </div>
            ))}
        </div>
    );
}

export default UseParams;