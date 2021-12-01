import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
//import Acordeon from "./views/Acordeon";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./views/Navbar";
import LoginView from "./views/LoginView";
import HomeView from "./views/HomeView";
import CrearCuentaView from "./views/CrearCuentaView";
import ProductosConFiltroView from "./views/ProductosConFiltroView";
import { AuthContextProvider } from "./context/authContext";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/crearcuenta" element={<CrearCuentaView />} />
          <Route
            path="/productosfiltros"
            element={<ProductosConFiltroView />}
          />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
