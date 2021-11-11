import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
      <div className="container">
        <a className="navbar-brand fw-bold " href="#">
          <span className="text-primary">Mc</span>
          Productos
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Promociones
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contactanos
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-outline-primary" type="submit">
              Entrar
            </button>
            <button className="btn btn-outline-secondary mx-3" type="submit">
              Registrate
            </button>
            <button className="boton" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <button className="boton mx-3" type="submit">
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
