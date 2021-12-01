import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Offcanvas, Button, Badge, NavDropdown } from "react-bootstrap";
import { end } from "@popperjs/core";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function Navbar() {
  const { user, signOut } = useContext(AuthContext);

  //esto es para el carrito
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
      <div className="container">
        <Link className="navbar-brand fw-bold " to="/">
          <span className="text-primary">Mc</span>
          ProductosTech
        </Link>
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
              <Link
                className="nav-link active"
                aria-current="page"
                to="/productosfiltros"
              >
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contactanos
              </a>
            </li>
            {user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Checkout
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Ver tus compras
                  </Link>
                </li>
              </>
            ) : null}
          </ul>
          <div className="d-flex align-items-center">
            {/*     Login y logout */}
            {user ? (
              <NavDropdown
                title={
                  <div className="d-inline">
                    <img
                      src={user.photoURL}
                      className="me-2"
                      alt="avatar"
                      style={{ borderRadius: "50%", width: "30px" }}
                    />
                    <span>{user.displayName}</span>
                  </div>
                }
              >
                <NavDropdown.Item onClick={signOut}>Salir</NavDropdown.Item>
                <NavDropdown.Item>Ver tus Compras</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Link variant="btn btn-outline-secondary" to="/login">
                Inicia Sesion / Registrate
              </Link>
            )}

            <button className="boton" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <Button
              className="boton mx-3 me-2"
              variant="primary"
              onClick={handleShow}
            >
              <FontAwesomeIcon icon={faShoppingCart} className="mx-2" />
              <Badge bg="secondary"></Badge>
            </Button>
          </div>
        </div>
      </div>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={end}
        className="w-25"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </nav>
  );
}

export default Navbar;
