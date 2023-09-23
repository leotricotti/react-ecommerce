import React from "react";
import CartNav from "./CartNav";

function CartProduct({ products }) {
  return products === undefined ? (
    <CartNav products={products} />
  ) : (
    <>
      <CartNav />
      <div class="card rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="product-cart">
            <div class="row d-flex justify-content-between align-items-center mb-3 mt-3">
              {products.thumbnail.map((img1) => (
                <div class="col-md-2 col-lg-2 col-xl-2">
                  <img
                    src={{ img1 }}
                    class="img-fluid rounded-3"
                    alt="Cotton T-shirt"
                  />
                </div>
              ))}
              <div class="col-md-3 col-lg-3 col-xl-3 mt-2">
                <p class="lead fw-normal mb-2">
                  Producto:
                  <span class="text-muted">{products.title}</span>
                </p>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button
                  class="btn btn-link px-2"
                  onclick="decreaseQuantity('{{product._id}}')"
                >
                  <i class="fas fa-minus"></i>
                </button>
                <input
                  name="quantity"
                  value={products.quantity}
                  type="text"
                  class="form-control form-control-sm text-center"
                />
                <button
                  class="btn btn-link px-2"
                  onclick="increaseQuantity('{{product._id}}')"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1 mb-4 mt-4">
                <h5 class="mb-0">$ {products.price}</h5>
              </div>
              <div
                class="col-md-1 col-lg-1 col-xl-1 text-danger trash-icon"
                onclick="deleteProduct('{{product._id}}')"
              >
                <i class="fas fa-trash fa-lg"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartProduct;
