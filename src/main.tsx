import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import { LoginPage } from "./pages/LoginPage";
import { BienvenidoPage } from "./pages/BienvenidoPage";
import { NuevoRegistroPage } from "./pages/NuevoRegistroPage";
import { BusquedaClientePage } from "./pages/BusquedaClientePage";
import { MenuPage } from "./pages/MenuPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/bienvenido" element={<BienvenidoPage />} />
        <Route path="/nuevo-registro" element={<NuevoRegistroPage />} />
        <Route path="/busqueda-cliente" element={<BusquedaClientePage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
