import React from "react";
import { Link } from "react-router-dom";

const NavButton = ({ text, onClick }) => (
  <button class="btn btn-secondary btn-sm mb-2" onClick={onClick} type="button">
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
    <div class="col-10">
      <h3 class="fw-normal text-black mb-5 text-decoration-underline text-center">
        Carrito de compras
      </h3>
      {cartProducts ? (
        <nav class="d-flex justify-content-between mb-3 nav-products flex-wrap">
          <NavButton text="Seguir comprando" onClick={() => continueBuying()} />
          <NavButton
            text="Vaciar carrito"
            onClick={() => deleteAllProducts()}
          />
          <NavButton text="Finalizar compra" onClick={() => finishBuy()} />
        </nav>
      ) : (
        <nav class="d-flex mb-3 nav-products flex-wrap">
          <h3 class="fw-normal text-black mb-2">Aún no hay productos</h3>
          <Link class="btn btn-secondary btn-sm" type="button" to={"/products"}>
            Seguir comprando
          </Link>
        </nav>
      )}
    </div>
  );
}

export default CartNav;
