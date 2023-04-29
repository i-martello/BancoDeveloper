import { Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Registrarse from "./pages/Registrarse";
import Login from "./pages/Login";
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from "./pages/Home";
import Crypto from "./pages/Crypto";
import Perfil from "./pages/Perfil";

function App() {
  const [count, setCount] = useState(0);
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/registrarse" element={<Registrarse />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/perfil" element={<Perfil />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/coin/:id" element={<Crypto />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
