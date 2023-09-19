import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProductsCard from "../components/ProductsCard";
import Pagination from "../components/Pagination";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("page");
  const [index, setIndex] = useState("1");

  useEffect(() => {
    document.title = "E-Store | Productos";
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          `http://localhost:8080/api/products?${filter}=${index}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, [index, filter]);

  const userData = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar userData={userData} />
      <ProductsCard
        products={products}
        setFilter={setFilter}
        setIndex={setIndex}
      />
      <Pagination />
    </>
  );
};

export default Products;
