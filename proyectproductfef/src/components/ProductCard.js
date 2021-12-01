import React from "react";
import { Button, Card } from "react-bootstrap";
function ProductCard({ producto }) {
  return (
    <div className="mb-3">
      <Card>
        <Card.Body className="d-flex align-items-center justify-content-between">
          <Card.Img variant="top w-25" src={producto.imagen} />
          <div>
            <Card.Title>{producto.nombre}</Card.Title>
            <Card.Text>{producto.descripcion}</Card.Text>
          </div>
          <div className="d-flex flex-column">
            <Button variant="success mb-2">Comprar Ahora</Button>
            <Button variant="outline-info">Agregar al carrito</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
