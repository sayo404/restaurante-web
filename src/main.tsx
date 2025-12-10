import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import { LoginPage } from "./pages/LoginPage";
import { BienvenidoPage } from "./pages/BienvenidoPage";
import { NuevoRegistroPage } from "./pages/NuevoRegistroPage";
import { BusquedaClientePage } from "./pages/BusquedaClientePage";
import { MenuPage } from "./pages/MenuPage";
import { AuthProvider } from "./auth/AuthContext";
import { ProtectedRoute } from "./auth/ProtectedRoute";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/bienvenido"
            element={
              <ProtectedRoute>
                <BienvenidoPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/nuevo-registro"
            element={
              <ProtectedRoute>
                <NuevoRegistroPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/busqueda-cliente"
            element={
              <ProtectedRoute>
                <BusquedaClientePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/menu"
            element={
              <ProtectedRoute>
                <MenuPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
