import React, { useContext, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Offcanvas, Button, Badge, NavDropdown } from "react-bootstrap";
import { end } from "@popperjs/core";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/authContext";
import { CarritoContext } from "../context/carritoContext";
import Swal from "sweetalert2";

function Navbar() {
  const { user, signOut } = useContext(AuthContext);
  const { carrito } = useContext(CarritoContext);
  //console.log(carrito);

  const totalCarrito = carrito.reduce((total, prod) => {
    return total + prod.cantidad;
  }, 0);
  //console.log("total de productos del carrito localstorage", totalCarrito);
  //esto es para el carrito

  let total = 0;

  total = carrito.reduce((acum, prod) => {
    return acum + prod.cantidad * prod.precio;
  }, 0);

  const navigate = useNavigate();

  const validarUsuario = () => {
    if (user) {
      navigate("/chekout");
    } else {
      try {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Necesita ingresar/registrarse para comprar!",
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const refBuscar = useRef();

  const manejarBusqueda = () => {
    console.log("entraste a manejar busqueda");
    navigate(`/productosfiltros/${refBuscar.current.value}`);
    //navigate(`/productosfiltros/?search=${refBuscar.current.value}`);
  };
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
            {user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/chekout">
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

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item d-flex align-items-center">
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
                <Link className="text-success" to="/login">
                  Inicia Sesion / Registrate
                </Link>
              )}
            </li>
            <li className="nav-item">
              <div className="d-flex">
                <input
                  type="text"
                  placeholder="Buscar producto..."
                  className="form-control"
                  ref={refBuscar}
                />
                <Button
                  className="boton mx-1 px-1"
                  onClick={() => manejarBusqueda()}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </div>
            </li>
            <li className="nav-item">
              <Button
                className="boton mx-1 px-1"
                variant="primary"
                onClick={handleShow}
              >
                <FontAwesomeIcon icon={faShoppingCart} className="mx-1" />
                {totalCarrito ? (
                  <Badge bg="secondary">{totalCarrito}</Badge>
                ) : (
                  <Badge bg="secondary"></Badge>
                )}
              </Button>
            </li>
          </ul>
        </div>
      </div>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={end}
        className="w-25"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <table className="table">
            <thead>
              <th>Producto</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>P.Total</th>
            </thead>
            <tbody>
              {carrito.map((prod, i) => (
                <tr key={i}>
                  <td>
                    <img src={prod.imagen} alt={prod.nombre} className="w-75" />
                  </td>
                  <td>{prod.nombre}</td>
                  <td>{prod.cantidad}</td>
                  <td>S/.{prod.precio}</td>
                  <td>S/.{prod.precio * prod.cantidad}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="h3 text-uppercase">
            Subtotal: <span>S/.{total}</span>
          </p>
          <button className="btn btn-primary w-100" onClick={validarUsuario}>
            Iniciar Compra
          </button>
        </Offcanvas.Body>
      </Offcanvas>
    </nav>
  );
}

export default Navbar;
