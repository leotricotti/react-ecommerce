import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProductsCard from "../components/ProductsCard";
import Pagination from "../components/Pagination";

const Products = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [index, setIndex] = useState("1");
  const [filter, setFilter] = useState("page");
  const [products, setProducts] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [disablePrevNavButton, setdisablePrevNavButton] = useState(false);
  const [disableNextNavButton, setdisableNextNavButton] = useState(false);

  console.log(typeof index, filter);

  // Efecto que establece el titulo de la pagina
  useEffect(() => {
    document.title = "E-Store | Productos";
  }, []);

  // Efecto que obtiene los productos de la API
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

  // Efecto que deshabilita los botones de navegacion
  useEffect(() => {
    if (
      (index === 1 && filter === "page") ||
      (index === "1" && filter === "page")
    ) {
      setdisablePrevNavButton(true);
      setdisableNextNavButton(false);
    } else if (index > 5 && filter === "page") {
      setdisablePrevNavButton(false);
      setdisableNextNavButton(true);
    } else {
      setdisablePrevNavButton(false);
      setdisableNextNavButton(false);
    }
  }, [index, filter]);

  // Efecto que establece el numero de pagina activa
  useEffect(() => {
    setActivePage(parseInt(index));
  }, [index]);

  // Funciones que cambian el numero de pagina
  const handlePreviousPage = () => {
    setIndex(parseInt(index) - 1);
  };

  const handleNextPage = () => {
    setIndex(parseInt(index) + 1);
  };

  return (
    <>
      <Navbar userData={userData} />
      <ProductsCard
        products={products}
        setIndex={setIndex}
        setFilter={setFilter}
      />
      <Pagination
        setIndex={setIndex}
        setFilter={setFilter}
        activePage={activePage}
        setActivePage={setActivePage}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        disablePrevNavButton={disablePrevNavButton}
        disableNextNavButton={disableNextNavButton}
      />
    </>
  );
};

export default Products;
