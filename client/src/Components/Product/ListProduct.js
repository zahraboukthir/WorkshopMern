import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ProductCard from "./ProductCard";

const ListProduct = () => {
  const currentuser = useSelector((state) => state.authreducer.currentuser);
  const products = useSelector((state) => state.productReducer.products);
  return (
    <div>
      {currentuser && currentuser.role == "admin" ? (
        <Link to="/add">Add New Product</Link>
      ) : null}
      {products.map((prod) => (
        <ProductCard prod={prod} key={prod._id} />
      ))}
    </div>
  );
};

export default ListProduct;
