import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Products() {
  const { productId } = useParams()

  useEffect(() => {
    if (productId) {
      //api call
    }
  }, [productId])
  return (
    <div>Product - {productId}</div>
  );
}

export default Products;