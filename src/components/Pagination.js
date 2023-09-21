import React from "react";

function Pagination({
  page,
  setPage,
  activePage,
  disableNavButton,
  handlePreviousPage,
}) {
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button
            className={`page-link ${disableNavButton ? "disabled" : ""}`}
            onClick={handlePreviousPage}
            type="button"
            id="previous-page"
          >
            Anterior
          </button>
        </li>
        <li
          className={`page-item ${activePage === 1 ? "active" : ""}`}
          id="item-page"
          data-page="1"
          onClick={() => setPage(1)}
        >
          <button className="page-link">1</button>
        </li>
        <li
          className="page-item"
          id="item-page"
          data-page="2"
          onClick={() => setPage(2)}
        >
          <button className="page-link">2</button>
        </li>
        <li
          className="page-item"
          id="item-page"
          data-page="3"
          onClick={() => setPage(3)}
        >
          <button className="page-link">3</button>
        </li>
        <li
          className="page-item"
          id="item-page"
          data-page="4"
          onClick={() => setPage(4)}
        >
          <button className="page-link">4</button>
        </li>
        <li className="page-item">
          <button
            className={`page-link ${!disableNavButton ? "disabled" : ""}`}
            onClick={() => setPage(page + 1)}
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
