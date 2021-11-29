import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
//import Acordeon from "./views/Acordeon";
import Navbar from "./views/Navbar";
import Carusel from "./views/Carusel";
import Categorias from "./views/Categorias";

function App() {
  return (
    <>
      <Navbar />
      <Carusel />
      <Categorias />
    </>
  );
}

export default App;
