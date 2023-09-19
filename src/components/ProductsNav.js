import React from "react";
import Title from "./Title";

function ProductsNav({ setFilter, setIndex }) {
  function handleClick(filter, index) {
    setIndex(index);
    setFilter(filter);
  }

  return (
    <div className="container mt-5 mb-3">
      <Title title="Listado de productos" />
      <nav className="d-flex justify-content-end  nav-products">
        <div className="dropdown">
          <button
            className="btn dropdown-toggle  me-3"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filtrar
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleClick("category", "Audio")}
              >
                Audio
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleClick("category", "Hogar")}
              >
                Hogar
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleClick("category", "Electronics")}
              >
                Electronica
              </button>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn dropdown-toggle "
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Ordenar
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <button
                className="dropdown-item"
                // onClick="sortProductsByPrice (1)"
              >
                Menor a mayor
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                // onClick="sortProductsByPrice (-1)"
              >
                Mayor a menor
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default ProductsNav;
