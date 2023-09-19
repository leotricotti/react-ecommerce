import React from "react";

function Pagination() {
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button
            className="page-link"
            // onclick="previousPage('products?page')"
            type="button"
            id="previous-page"
          >
            Anterior
          </button>
        </li>
        <li
          className="page-item"
          id="item-page"
          data-page="1"
          // onclick="pagination(1, 'products?page')"
        >
          <button className="page-link">1</button>
        </li>
        <li
          className="page-item"
          id="item-page"
          data-page="2"
          // onclick="pagination(2, 'products?page')"
        >
          <button className="page-link">2</button>
        </li>
        <li
          className="page-item"
          id="item-page"
          data-page="3"
          // onclick="pagination(3, 'products?page')"
        >
          <button className="page-link">3</button>
        </li>
        <li
          className="page-item"
          id="item-page"
          data-page="4"
          // onclick="pagination(4, 'products?page')"
        >
          <button className="page-link">4</button>
        </li>
        <li className="page-item">
          <button
            className="page-link"
            // onclick="nextPage('products?page')"
            type="button"
            id="next-page"
          >
            Siguiente
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
