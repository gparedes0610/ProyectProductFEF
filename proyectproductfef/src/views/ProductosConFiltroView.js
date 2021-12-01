import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { obtenerCategorias } from "../service/categoriaService";
import {
  obtenerProductosPorPagina,
  obtenerProductos,
} from "../service/productoService";
function ProductosConFiltroView() {
  const [categorias, setCategorias] = useState([]);

  const [todosLosProductos, setTodosLosProductos] = useState([]);

  const [productos, setProductos] = useState([]);

  const [limite, setLimite] = useState(8);
  const [pagina, setPagina] = useState(1);

  const [totalpaginas, guardarTotalPaginas] = useState(1);

  const getCategorias = async () => {
    try {
      const catObtenidas = await obtenerCategorias();
      setCategorias(catObtenidas);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductos = async () => {
    try {
      const totalProductos = await obtenerProductos();
      const prodObtenidos = await obtenerProductosPorPagina(pagina, limite);
      setProductos(prodObtenidos);
      setTodosLosProductos(totalProductos);
      const totalProduct = totalProductos.length;
      const prodDelLimite = 8;
      //console.log("todos los productos", totalProduct);
      // console.log("limite de productos", prodDelLimite);
      const totalPaginasCaculadas = Math.ceil(totalProduct / prodDelLimite);
      //console.log("total paginas calculadas", totalPaginasCaculadas);
      guardarTotalPaginas(totalPaginasCaculadas);

      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductos();
    getCategorias();
  }, [pagina]);

  return (
    <div
      className="container-fluid jumbotron"
      style={{ background: "#e8e8e8" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4">
            <h3>Categorias</h3>
          </div>
          <div className="col-12 col-md-8 col-lg-8">
            <h3 className="text-center">Productos</h3>
            {productos.map((producto, i) => (
              <ProductCard producto={producto} key={i} />
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            {pagina === 1 ? null : (
              <button
                className="btn btn-primary mx-2"
                onClick={() => {
                  setPagina(pagina - 1);
                }}
              >
                Atras
              </button>
            )}
            {pagina === totalpaginas ? null : (
              <button
                className="btn btn-primary"
                onClick={() => {
                  setPagina(pagina + 1);
                }}
              >
                Siguiente
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductosConFiltroView;
