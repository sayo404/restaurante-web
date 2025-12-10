import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import { LoginPage } from "./pages/LoginPage.tsx";
import { BienvenidoPage } from "./pages/BienvenidoPage.tsx";
import { NuevoRegistroPage } from "./pages/NuevoRegistroPage.tsx";
import { BusquedaClientePage } from "./pages/BusquedaClientePage.tsx";
import { MenuPage } from "./pages/MenuPage.tsx";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

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
