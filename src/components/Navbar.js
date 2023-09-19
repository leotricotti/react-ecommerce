import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

function Navbar({ userData }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/products" className="navbar-brand">
          E-Store
        </Link>
        <div
          className="collapse navbar-collapse d-flex align-items-center mb-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 profile-menu d-flex align-items-center">
            {userData.role === "admin" ? (
              <div className="d-flex justify-content-center position-relative admin-panel">
                <button
                  className="btn btn-link text-decoration-none admin-btn"
                  type="button"
                  // onClick="goToAdminPanel()"
                >
                  Admin Panel
                </button>
              </div>
            ) : (
              <p className="text-white-50">Bienvenido {userData.name}</p>
            )}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="text-light me-3" id="'user-name"></span>
                <i className="fas fa-user"></i>
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="#">
                    <i className="fas fa-sliders-h fa-fw"></i>
                    Cuenta
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    <i className="fas fa-cog fa-fw"></i>
                    Configuración
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button
                    className="btn dropdown-item"
                    // onClick="logout()"
                  >
                    <i className="fas fa-sign-out-alt fa-fw"></i>
                    Cerrar sesión
                  </button>
                </li>
              </ul>
            </li>
            <button
              className="btn position-relative"
              // onClick="setCartRoute()"
            >
              <Link to="" id="cart-route">
                <i className="fa-solid fa-cart-shopping"></i>
                <span
                  id="cart-badge"
                  className="cart-basket d-flex align-items-center justify-content-center"
                ></span>
              </Link>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
