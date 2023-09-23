import React from "react";

function Pagination({
  setIndex,
  activePage,
  handleNextPage,
  handlePreviousPage,
  disablePrevNavButton,
  disableNextNavButton,
}) {
  return (
    <nav className="nav-center mb-5 mt-4">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button
            className={`page-link ${disablePrevNavButton ? "disabled" : ""}`}
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
          onClick={() => setIndex(1)}
        >
          <button className="page-link">1</button>
        </li>
        <li
          className={`page-item ${activePage === 2 ? "active" : ""}`}
          id="item-page"
          data-page="2"
          onClick={() => setIndex(2)}
        >
          <button className="page-link">2</button>
        </li>
        <li
          className={`page-item ${activePage === 3 ? "active" : ""}`}
          id="item-page"
          data-page="3"
          onClick={() => setIndex(3)}
        >
          <button className="page-link">3</button>
        </li>
        <li
          className={`page-item ${activePage === 4 ? "active" : ""}`}
          id="item-page"
          data-page="4"
          onClick={() => setIndex(4)}
        >
          <button className="page-link">4</button>
        </li>
        <li className="page-item">
          <button
            className={`page-link ${disableNextNavButton ? "disabled" : ""}`}
            onClick={handleNextPage}
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
