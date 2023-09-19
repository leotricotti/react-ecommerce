import React from "react";
import "../css/productsCard.css";
import ProctsNav from "./ProductsNav";

function ProductCard({ products, setFilter, setIndex }) {
  return (
    <>
      <ProctsNav setFilter={setFilter} setIndex={setIndex} />
      {products.map((product) => (
        <div className="row justify-content-center mb-1" key={product._id}>
          <div className="col-md-12 col-xl-10 margin">
            <div className="card shadow-0 border rounded-3 me-3 ms-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                    {product.thumbnail.map((img) => (
                      <div
                        className="bg-image hover-zoom ripple rounded ripple-surface"
                        key={product._id}
                      >
                        <img
                          src={img.img1}
                          className="w-100"
                          alt="Producto sin imagen"
                        />
                        <div className="hover-overlay">
                          <div
                            className="mask"
                            styles="background-color: rgba(253, 253, 253, 0.15);"
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6">
                    <h5>{product.title}</h5>
                    <div className="d-flex flex-row">
                      <div className="text-danger mb-1 me-2">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <span>310</span>
                    </div>
                    <div className="mt-1 mb-0 text-muted small">
                      <span>
                        <b>Categoria: {product.category}</b>
                      </span>
                    </div>
                    <div className="d-flex gap-2 mb-2 text-muted small">
                      <span>Llega el martes</span>
                      <span className="text-primary">•</span>
                      <span>Beneficio Tienda Puntos</span>
                      <span className="text-primary">•</span>
                      <span>
                        Stock disponible
                        <br />
                      </span>
                    </div>
                    <p className="text-truncate mb-4 mb-md-0">
                      {product.description}
                    </p>
                  </div>
                  <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                    <div className="d-flex flex-row align-items-center mb-1">
                      <h4 className="mb-1 me-1">${product.price}</h4>
                      <span className="text-danger">
                        <s>{product.price}</s>
                      </span>
                    </div>
                    <h6 className="text-success">Envio gratis</h6>
                    <div className="d-flex flex-column mt-4">
                      <button className="btn btn-primary btn-sm" type="button">
                        Detalles
                      </button>
                      <button
                        className="btn btn-outline-primary btn-sm mt-2"
                        type="button"
                        // onClick="addProduct('{{this._id}}')"
                      >
                        Agregar al carrito
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductCard;
