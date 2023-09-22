import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductsCard from "../components/ProductsCard";
import Pagination from "../components/Pagination";

const Products = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user"));
  const [index, setIndex] = useState("1");
  const [filter, setFilter] = useState("page");
  const [products, setProducts] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [disablePrevNavButton, setdisablePrevNavButton] = useState(false);
  const [disableNextNavButton, setdisableNextNavButton] = useState(false);

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

  // Funcion que cierra la sesion
  const handleLogout = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/sessions/logout",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log(data);

      if (data) {
        Swal.fire({
          icon: "success",
          title: "Gracias por utilizar nuestros servicios",
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          navigate("/");
          localStorage.removeItem("user");
        });
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  // Funciones que cambian el numero de pagina
  const handlePreviousPage = () => {
    setIndex(parseInt(index) - 1);
  };

  const handleNextPage = () => {
    setIndex(parseInt(index) + 1);
  };

  return (
    <>
      <Navbar userData={userData} handleLogout={handleLogout} />
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
