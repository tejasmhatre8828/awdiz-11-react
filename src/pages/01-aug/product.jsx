import React, { useEffect } from "react";
// import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Product = (props) => {
  console.log(props.cricketers)
  const { productId } = useParams()

  useEffect(() => {
    if (productId) {
      //api call
    }
  }, [productId])
  return (
    <div>Product - {productId}
    <div>{false ? <h1>Logged In</h1> : <h1>Please login.</h1>}</div>
    </div>
  );
}

export default Product;