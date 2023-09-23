import React from "react";
import { Link } from "react-router-dom";

const NavButton = ({ text, onClick }) => (
  <button
    className="btn btn-secondary btn-sm mb-2"
    onClick={onClick}
    type="button"
  >
    {text}
  </button>
);

function CartNav({
  cartProducts,
  continueBuying,
  deleteAllProducts,
  finishBuy,
}) {
  return (
    <div className="vh-100">
      <h3
        className="fw-normal text-black mb-5 text-decoration-underline text-center mt-3"
        style={{ fontSize: "32px" }}
      >
        Carrito de compras
      </h3>
      {cartProducts ? (
        <nav className="d-flex justify-content-between mb-3 nav-products flex-wrap">
          <NavButton text="Seguir comprando" onClick={() => continueBuying()} />
          <NavButton
            text="Vaciar carrito"
            onClick={() => deleteAllProducts()}
          />
          <NavButton text="Finalizar compra" onClick={() => finishBuy()} />
        </nav>
      ) : (
        <nav className="d-flex mb-3 nav-products flex-wrap justify-content-center gap-5">
          <h3
            className="fw-normal text-black mb-2"
            style={{ fontSize: "22px" }}
          >
            Aún no hay productos
          </h3>
          <Link
            className="btn btn-secondary btn-sm"
            type="button"
            to={"/products"}
          >
            Seguir comprando
          </Link>
        </nav>
      )}
    </div>
  );
}

export default CartNav;
